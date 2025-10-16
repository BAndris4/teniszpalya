using System.Threading.Tasks;
using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.EntityFrameworkCore;
using Teniszpalya.API.Data;
using Teniszpalya.API.Models;

namespace Teniszpalya.API.Services;

public class SessionManager
{
    private readonly AppDBContext _context;
    private readonly int defaultTokenExpiry = 30;

    public SessionManager(AppDBContext context)
    {
        _context = context;
    }

    public async Task<string> CreateSession(int userID)
    {
        string token = Guid.NewGuid().ToString();
        long createdAt = DateTimeOffset.UtcNow.ToUnixTimeSeconds();
        long expiresAt = DateTimeOffset.FromUnixTimeSeconds(createdAt).AddMinutes(defaultTokenExpiry).ToUnixTimeSeconds();

        var session = new Session
        {
            UserID = userID,
            Token = token,
            CreatedAt = createdAt,
            ExpiresAt = expiresAt
        };

        _context.Sessions.Add(session);
        await _context.SaveChangesAsync();
        return token;
    }

    public async Task<bool> ValidateSession(string token)
    {
        var session = await _context.Sessions.FirstOrDefaultAsync(s => s.Token == token);

        if (session == null) return false;

        long currentUnixTime = DateTimeOffset.UtcNow.ToUnixTimeSeconds();

        if (session.ExpiresAt <= currentUnixTime)
        {
            _context.Sessions.Remove(session);
            await _context.SaveChangesAsync();
            return false;
        }

        return true;
    }

    public async Task<string> GetExistingSession(int userID)
    {
        var session = await _context.Sessions.FirstOrDefaultAsync(s => s.UserID == userID);

        if (session == null || ! await ValidateSession(session.Token))
        {
            return await CreateSession(userID);
        }

        return session.Token;
    }
}