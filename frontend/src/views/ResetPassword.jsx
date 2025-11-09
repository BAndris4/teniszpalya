import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function ResetPassword() {
  const location = useLocation();
  const navigate = useNavigate();
  const params = new URLSearchParams(location.search);
  const tokenFromUrl = params.get("token") || "";

  const [token, setToken] = useState(tokenFromUrl);
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (tokenFromUrl) setToken(tokenFromUrl);
  }, [tokenFromUrl]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setMessage("");
    if (!token) return setError("Missing token. Use the link you received in email.");
    if (!password) return setError("Please enter a new password.");
    if (password !== confirm) return setError("Passwords do not match.");
    if (password.length < 6) return setError("Password must be at least 6 characters.");

    setLoading(true);
    try {
      const res = await fetch("http://localhost:5044/api/ResetPassword", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token, password })
      });
      const data = await res.json();
      if (res.ok) {
        setMessage(data?.message || "Password reset successfully.");
        setTimeout(() => navigate('/login'), 1500);
      } else {
        setError(data?.message || "Failed to reset password.");
      }
    } catch (err) {
      console.error(err);
      setError("Something went wrong. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="w-[50vw] h-[50vw] bg-green rounded-full fixed blur-[200px] pointer-events-none z-0 opacity-20 animate-pulse" />

      <div className="flex flex-col lg:flex-row min-h-screen gap-10 lg:gap-28 mx-4 sm:mx-8 lg:mx-20">
        <div className="flex-1 my-6 z-10 hidden lg:flex items-center justify-center">
          <a href="/" className="w-full h-full flex items-center justify-center">
            <img
              src="/src/assets/tennis_court.jpg"
              alt="Tennis court"
              className="rounded-[24px] shadow-2xl object-cover w-[420px] sm:w-[520px] md:w-[620px] lg:w-[720px] h-[300px] sm:h-[380px] md:h-[460px] lg:h-[560px] transition-transform duration-500 hover:scale-105 mx-auto"
            />
          </a>
        </div>

        <div className="flex-1 flex flex-col justify-center py-10 lg:py-0">
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col gap-5">
              <div className="flex flex-col gap-4 sm:gap-[16px] items-center justify-center">
                <div className="text-2xl text-[36px] font-semibold text-dark-green min-h-[50px]">
                  Set a new password
                </div>
                <div className="text-center max-w-[360px] text-dark-green-half min-h-[48px] leading-relaxed text-sm sm:text-base">
                  Enter your new password below. The token should be present in the link you received.
                </div>
              </div>

              <div className="flex flex-col gap-5 sm:gap-[24px] z-10 animate-in fade-in slide-in-from-bottom-4 duration-700">

                {!token && (
                  <div className="flex flex-col">
                    <div className="mb-2 text-dark-green font-medium text-sm sm:text-base">Token</div>
                    <input
                      type="text"
                      placeholder="Paste token here"
                      value={token}
                      onChange={(e) => setToken(e.target.value)}
                      className="bg-white rounded-[16px] w-full h-[50px] sm:h-[62px] px-4 text-sm sm:text-base border border-dark-green-half focus:outline-none focus:border-dark-green focus:ring-2 focus:ring-green/20 transition-all duration-300" />
                  </div>
                )}

                <div className="flex flex-col">
                  <div className="mb-2 text-dark-green font-medium text-sm sm:text-base">New password</div>
                  <input
                    type="password"
                    placeholder="New password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="bg-white rounded-[16px] w-full h-[50px] sm:h-[62px] px-4 text-sm sm:text-base border border-dark-green-half focus:outline-none focus:border-dark-green focus:ring-2 focus:ring-green/20 transition-all duration-300" />
                </div>

                <div className="flex flex-col">
                  <div className="mb-2 text-dark-green font-medium text-sm sm:text-base">Confirm password</div>
                  <input
                    type="password"
                    placeholder="Confirm password"
                    value={confirm}
                    onChange={(e) => setConfirm(e.target.value)}
                    className="bg-white rounded-[16px] w-full h-[50px] sm:h-[62px] px-4 text-sm sm:text-base border border-dark-green-half focus:outline-none focus:border-dark-green focus:ring-2 focus:ring-green/20 transition-all duration-300" />
                </div>

                <input
                  type="submit"
                  disabled={loading}
                  className={`bg-green text-white font-semibold rounded-[30px] h-[50px] sm:h-[62px] text-sm sm:text-base ${loading ? "opacity-50 cursor-not-allowed" : "hover:bg-dark-green hover:shadow-lg active:scale-95 cursor-pointer"} transition-all duration-300`}
                  value={loading ? "Resetting..." : "Reset password"}
                />

                {message && <div className="text-green-700 text-center">{message}</div>}
                {error && <div className="text-red-600 text-center">{error}</div>}

                <div className="flex justify-center text-sm sm:text-base animate-in fade-in duration-700 delay-200">
                  Return to &nbsp;
                  <a href="/login" className="text-[#2388FF] hover:underline hover:text-[#1565c0] transition-colors duration-300">Login</a>
                </div>

              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ResetPassword;
