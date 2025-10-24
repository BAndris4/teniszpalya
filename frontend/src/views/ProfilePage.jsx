import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function ProfilePage() {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [isLoaded, setIsLoaded] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        fetch("http://localhost:5044/api/Users/me", {
            credentials: "include"
        })
        .then(response =>  {
            if (response.ok) {
                return response.json();
            }
            else {
                navigate("/login");
            }
        })
        .then(data => {
            setFirstName(data.firstName);
            setLastName(data.lastName);
            setEmail(data.email);
            setPhoneNumber(data.phoneNumber);
            setTimeout(() => setIsLoaded(true), 100);
        });
    },[]);

    return (
        <div className="min-h-screen">
            <div className="w-[50vw] h-[50vw] bg-light-green rounded-full fixed blur-[200px] z-0" />
            
            <Navbar />
            
            <div className="flex justify-center my-[105px] z-10">
                
                
                <div className={`z-10 w-6xl flex flex-col px-5 transition-all duration-700 ${
                    isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}>
                    <div className="mt-[115px] text-2xl font-bold text-center">
                        Welcome, {firstName}
                    </div>
                    
                    <div className={`flex flex-row mt-5 gap-5 transition-all duration-700 delay-100 ${
                        isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                    }`}>
                        <div className="border border-dark-green-octa py-3 px-9 rounded-lg shadow-lg shadow-dark-green-octa cursor-pointer transition-all duration-300 hover:-translate-y-1 active:translate-y-0">
                            Profile Settings
                        </div>
                        <div className="border border-dark-green-octa py-3 px-9 rounded-lg shadow-lg shadow-dark-green-octa cursor-pointer transition-all duration-300  hover:-translate-y-1 active:translate-y-0">
                            History
                        </div>
                    </div>
        
                    <div className={`flex flex-row gap-5 mt-5 transition-all duration-700 delay-200 ${
                        isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                    }`}>
                        <div className="flex-4 flex flex-col border-dark-green-octa border shadow-lg shadow-dark-green-octa py-5 px-5 rounded-lg">
                            <div className="font-semibold">Details</div>
                            <div className="ml-2 flex flex-row mt-3 gap-5">
                                <div className="flex-col">
                                    <div>First Name</div>
                                    <input 
                                        type="text" 
                                        className="py-2 pl-4 bg-dark-green-octa text-dark-green-half rounded-lg mt-2 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-dark-green focus:bg-opacity-80" 
                                        placeholder={firstName}
                                    />
                                </div>
                                <div className="flex flex-col">
                                    <div>Phone Number</div>
                                    <input 
                                        type="text" 
                                        className="py-2 pl-4 bg-dark-green-octa text-dark-green-half rounded-lg mt-2 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-dark-green focus:bg-opacity-80" 
                                        placeholder={phoneNumber}
                                    />
                                </div>
                            </div>
                            <div className="ml-2 flex flex-row mt-3 gap-5">
                                <div className="flex flex-col">
                                    <div>Last Name</div>
                                    <input 
                                        type="text" 
                                        className="py-2 pl-4 bg-dark-green-octa text-dark-green-half rounded-lg mt-2 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-dark-green focus:bg-opacity-80" 
                                        placeholder={lastName}
                                    />
                                </div>
                                <div className="w-80 flex flex-col">
                                    <div>Email</div>
                                    <input 
                                        type="text" 
                                        className="py-2 pl-4 bg-dark-green-octa text-dark-green-half rounded-lg mt-2 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-dark-green focus:bg-opacity-80" 
                                        placeholder={email}
                                    />
                                </div>
                            </div>
                            <input 
                                type="submit" 
                                value="Save Changes" 
                                className="ml-2 w-fit px-5 font-bold py-2 mt-5 rounded-lg bg-dark-green text-white cursor-pointer transition-all duration-200 hover:scale-105 hover:shadow-lg active:scale-95"
                            />
                        </div>
                        <div className="flex-3 flex-col border-dark-green-octa border shadow-lg shadow-dark-green-octa py-5 px-5 rounded-lg">
                            <div className="font-semibold">Password</div>
                            <div className="flex flex-col mt-3 ml-2">
                                <div>Current password</div>
                                <input 
                                    type="password" 
                                    className="py-2 pl-4 bg-dark-green-octa text-dark-green-half rounded-lg mt-2 w-80 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-dark-green focus:bg-opacity-80" 
                                    placeholder="Put your current password..."
                                />
                            </div>

                            <div className="flex flex-col mt-3 ml-2">
                                <div>New password</div>
                                <input 
                                    type="password" 
                                    className="py-2 pl-4 bg-dark-green-octa text-dark-green-half rounded-lg mt-2 w-80 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-dark-green focus:bg-opacity-80" 
                                    placeholder="Put your new password..."
                                />
                            </div>
                            <div className="flex flex-row mt-5 gap-5 ml-2">
                                <input 
                                    type="submit" 
                                    value="Save Changes" 
                                    className="w-fit px-5 font-bold py-2 rounded-lg bg-dark-green text-white cursor-pointer transition-all duration-200 hover:scale-105 hover:shadow-lg active:scale-95"
                                />
                                <a 
                                    href="" 
                                    className="mt-2 ml-2 text-dark-green-half underline transition-all duration-200 hover:text-dark-green hover:no-underline"
                                >
                                    Forgot your password?
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className={`absolute w-6xl h-[550px] transition-all duration-700 delay-75 ${
                    isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                }`}>
                    <svg 
                        width="100%" 
                        height="100%" 
                        className="absolute inset-0 drop-shadow-[0px_0px_15px_rgba(0,0,0,0.25)] z-0"
                    >
                        <defs>
                            <mask id="cutout-mask">
                                <rect width="100%" height="100%" fill="white" />
                                <circle cx="50%" cy="0" r="100" fill="black" />
                            </mask>
                        </defs>
                        
                        <rect 
                            width="100%" 
                            height="100%" 
                            rx="30" 
                            ry="30"
                            fill="white"
                            stroke="rgba(1,50,55,0.15)"
                            strokeWidth="1"
                            mask="url(#cutout-mask)"
                        />
                    </svg>
                </div>
                
                <img 
                    src="src/assets/profile_pic.svg" 
                    alt="" 
                    className={`h-[176px] w-[176px] cursor-pointer absolute top-[135px] left-1/2 -translate-x-1/2 z-10 drop-shadow-[0px_4px_10px_rgba(0,0,0,0.25)] transition-all duration-700 hover:scale-105 ${
                        isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
                    }`}
                />
            </div>
        </div>
    );
}

export default ProfilePage;