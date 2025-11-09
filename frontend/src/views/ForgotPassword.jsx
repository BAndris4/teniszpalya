import { useState } from "react";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setMessage("");
    if (!email) return setError("Please enter your email.");
    setLoading(true);
    try {
      const res = await fetch("http://localhost:5044/api/ForgotPassword", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email })
      });
      const data = await res.json();
      setMessage(data?.message || "If your email exists, you will receive a reset link.");
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
                  Reset password
                </div>
                <div className="text-center max-w-[360px] text-dark-green-half min-h-[48px] leading-relaxed text-sm sm:text-base">
                  Enter your email and we'll send a password reset link if the address exists.
                </div>
              </div>

              <div className="flex flex-col gap-5 sm:gap-[24px] z-10 animate-in fade-in slide-in-from-bottom-4 duration-700">
                <div className="flex flex-col">
                  <div className="mb-2 text-dark-green font-medium text-sm sm:text-base">Email</div>
                  <input
                    type="email"
                    placeholder="name@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-white rounded-[16px] w-full h-[50px] sm:h-[62px] px-4 text-sm sm:text-base border border-dark-green-half focus:outline-none focus:border-dark-green focus:ring-2 focus:ring-green/20 transition-all duration-300" />
                </div>

                <input
                  type="submit"
                  disabled={loading || !email}
                  className={`bg-green text-white font-semibold rounded-[30px] h-[50px] sm:h-[62px] text-sm sm:text-base ${loading || !email ? "opacity-50 cursor-not-allowed" : "hover:bg-dark-green hover:shadow-lg active:scale-95 cursor-pointer"} transition-all duration-300`}
                  value={loading ? "Sending..." : "Send reset link"}
                />

                {message && <div className="text-green-700 text-center">{message}</div>}
                {error && <div className="text-red-600 text-center">{error}</div>}

                <div className="flex justify-center text-sm sm:text-base animate-in fade-in duration-700 delay-200">
                  Remembered your password?&nbsp;
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

export default ForgotPassword;
