import { useState, useEffect } from "react";

function Register() {
    const [isVisible, setIsVisible] = useState(false);
    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    };

    return (
        <div>
            <div className="w-[50vw] h-[50vw] bg-green rounded-full fixed blur-[200px] pointer-events-none z-0 opacity-20 animate-pulse"/>
            <div className="flex flex-row min-h-screen gap-28 mx-20">
                <div className="flex-1 my-15 z-10">
                    <a href="/"><div className="h-full w-full bg-[url(/src/assets/tennis_court.jpg)] bg-cover bg-center hover:scale-105 shadow-2xl transition-all duration-500 cursor-pointer rounded-[30px] z-10" /></a>
                </div>
                <div className="flex-1 flex flex-col justify-center">
                    <div className="flex flex-col gap-5">
                        <div className="flex flex-col gap-[16px] items-center justify-center">
                            <div className="text-2xl text-dark-green font-semibold text-[36px] min-h-[50px]">
                                Sign up
                            </div>
                            <div className="text-center max-w-[360px] text-dark-green-half min-h-[48px] leading-relaxed">
                                Join our community and get access to exclusive features and content.
                            </div>
                        </div>
                        <div className="flex flex-col gap-[24px] z-10 animate-in fade-in slide-in-from-bottom-4 duration-700">
                            <div className="flex flex-row justify-between gap-5">
                                <div className="flex-1 flex flex-col">
                                    <div className="mb-2 text-dark-green font-medium">First Name</div>
                                    <input 
                                        type="text" 
                                        placeholder="John" 
                                        className="bg-white border border-dark-green-half rounded-[16px] h-[62px] px-[15px] focus:outline-none focus:border-dark-green focus:shadow-md focus:ring-2 focus:ring-green/20 transition-all duration-300"
                                    />
                                </div>
                                <div className="flex-1 flex flex-col">
                                    <div className="mb-2 text-dark-green font-medium">Last Name</div>
                                    <input 
                                        type="text" 
                                        placeholder="Carter" 
                                        className="bg-white border border-dark-green-half rounded-[16px] h-[62px] px-[15px] focus:outline-none focus:border-dark-green focus:shadow-md focus:ring-2 focus:ring-green/20 transition-all duration-300"
                                    />
                                </div>
                            </div>

                            <div className="flex flex-col">
                                <div className="mb-2 text-dark-green font-medium">Phone</div>
                                <input 
                                    type="tel" 
                                    placeholder="Phone Number" 
                                    className="bg-white border border-dark-green-half rounded-[16px] w-full h-[62px] px-[15px] focus:outline-none focus:border-dark-green focus:shadow-md focus:ring-2 focus:ring-green/20 transition-all duration-300"
                                />
                            </div>  

                            <div className="flex flex-col">
                                <div className="mb-2 text-dark-green font-medium">Email</div>
                                <input 
                                    type="email" 
                                    placeholder="Email Address" 
                                    className="bg-white border border-dark-green-half rounded-[16px] w-full h-[62px] px-[15px] focus:outline-none focus:border-dark-green focus:shadow-md focus:ring-2 focus:ring-green/20 transition-all duration-300"
                                />
                            </div>  
                            
                            <div className="flex flex-col justify-between">
                                <div className="mb-2 text-dark-green font-medium">Password</div>
                                <div className="relative w-full">
                                    <input
                                        type={isVisible ? 'text' : 'password'}
                                        placeholder="Enter your password"
                                        className="bg-white border border-dark-green-half rounded-[16px] w-full h-[62px] px-[15px] pr-[50px] focus:outline-none focus:border-dark-green focus:shadow-md focus:ring-2 focus:ring-green/20 transition-all duration-300"
                                    />
                                    <button
                                        type="button"
                                        onClick={toggleVisibility}
                                        className="absolute cursor-pointer right-4 top-1/2 transform -translate-y-1/2 hover:scale-110 transition-transform duration-300"
                                        aria-label={isVisible ? 'Hide password' : 'Show password'}
                                    >
                                        {isVisible ? (
                                            <div className="w-6 h-6 bg-[url(/src/assets/eye-open.svg)] bg-cover bg-center" />
                                        ) : (
                                            <div className="w-6 h-6 bg-[url(/src/assets/eye-closed.svg)] bg-cover bg-center"/>
                                        )}
                                    </button>
                                </div>
                            </div>

                            <input 
                                type="submit" 
                                value="Sign up" 
                                className="bg-green text-white font-semibold rounded-[30px] h-[62px] hover:bg-dark-green hover:shadow-lg active:scale-95 transition-all duration-300 cursor-pointer"
                            />

                            <div className="flex justify-center animate-in fade-in duration-700 delay-200">
                                Already have an account?&nbsp;
                                <a href="/login" className="text-[#2388FF] hover:underline hover:text-[#1565c0] transition-colors duration-300">
                                    Login
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Register;