
using Microsoft.EntityFrameworkCore;
using Teniszpalya.API.Data;

namespace Teniszpalya.API;

public class Program
{
    public static void Main(string[] args)
    {
        var builder = WebApplication.CreateBuilder(args);

        builder.Services.AddCors(options =>
        {
            options.AddPolicy("AllowReactApp",
                policy =>
                {
                    policy.WithOrigins("http://localhost:5173")
                          .AllowAnyHeader()
                          .AllowAnyMethod();
                });
        });

        builder.Services.AddAuthorization();
        builder.Services.AddEndpointsApiExplorer();
        builder.Services.AddSwaggerGen();
        builder.Services.AddDbContext<AppDBContext>(options =>
        options.UseSqlite(builder.Configuration.GetConnectionString("DefaultConnection")));
        builder.Services.AddControllers();


        var app = builder.Build();

        if (app.Environment.IsDevelopment())
        {
            app.UseSwagger();
            app.UseSwaggerUI();
        }

        app.UseHttpsRedirection();
        app.UseCors("AllowReactApp");
        app.UseAuthorization();
        app.MapControllers();
        app.Run();
    }
}
