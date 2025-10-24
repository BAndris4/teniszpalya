import Navbar from "../components/Navbar";
function ProfilePage() {

    return (
        <div className="min-h-screen">
            <div className="w-[50vw] h-[50vw] bg-light-green rounded-full fixed blur-[200px] z-0" />
            
            <Navbar />
            
            <div className="flex justify-center my-[105px]">
                <img 
                    src="src/assets/profile_pic.svg" 
                    alt="" 
                    className="h-[176px] w-[176px] rounded-full absolute top-[135px] left-1/2 -translate-x-1/2 z-10 drop-shadow-[0px_4px_10px_rgba(0,0,0,0.25)" 
                />
                
                <div className="z-10 w-6xl flex flex-col px-5">
                    <div className="mt-[115px] text-2xl font-bold text-center">Welcome, Admin</div>
                    <div className="flex flex-row mt-5 gap-5">
                        <div className="border border-dark-green-octa py-3 px-9 rounded-lg shadow-xl shadow-dark-green-octa cursor-pointer">Profile Settings</div>
                        <div className="border border-dark-green-octa py-3 px-9 rounded-lg shadow-xl shadow-dark-green-octa cursor-pointer">History</div>
                    </div>
                    <div className="flex flex-row gap-5 mt-5">
                        <div className="flex-4 flex flex-col border-dark-green-octa border shadow-xl shadow-dark-green-octa py-5 px-5 rounded-lg">
                            <div className="font-semibold">Details</div>
                            <div className="ml-2 flex flex-row mt-3 gap-5">
                                <div className="flex-col">
                                    <div>First Name</div>
                                    <input type="text" className="py-2 pl-4 bg-dark-green-octa text-dark-green-half rounded-lg mt-2" placeholder="Admin"/>
                                </div>
                                <div className="flex flex-col">
                                    <div>Phone Number</div>
                                    <input type="text" className="py-2 pl-4 bg-dark-green-octa text-dark-green-half rounded-lg mt-2" placeholder="+36 20 123 456"/>
                                </div>
                            </div>
                            <div className="ml-2 flex flex-row mt-3 gap-5">
                                <div className="flex flex-col">
                                    <div>Last Name</div>
                                    <input type="text" className="py-2 pl-4 bg-dark-green-octa text-dark-green-half rounded-lg mt-2" placeholder="Amongus"/>
                                </div>
                                <div className="w-80 flex flex-col">
                                    <div>Email</div>
                                    <input type="text" className="py-2 pl-4 bg-dark-green-octa text-dark-green-half rounded-lg mt-2" placeholder="admin@admin.com"/>
                                </div>
                            </div>
                            <input type="submit" value="Save Changes" className="ml-2 w-fit px-5 font-bold py-2 mt-5 rounded-lg bg-dark-green text-white cursor-pointer"/>
                        </div>
                        <div className="flex-3 flex-col border-dark-green-octa border shadow-xl shadow-dark-green-octa py-5 px-5 rounded-lg">
                            <div className="font-semibold">Password</div>
                            <div className="flex flex-col mt-3 ml-2">
                                <div>Current password</div>
                                <input type="text" className="py-2 pl-4 bg-dark-green-octa text-dark-green-half rounded-lg mt-2 w-80" placeholder="Put your current password..."/>
                            </div>

                            <div className="flex flex-col mt-3 ml-2">
                                <div>New password</div>
                                <input type="text" className="py-2 pl-4 bg-dark-green-octa text-dark-green-half rounded-lg mt-2 w-80" placeholder="Put your new password..."/>
                            </div>
                            <div className="flex flex-row mt-5 gap-5 ml-2">
                                <input type="submit" value="Save Changes" className="w-fit px-5 font-bold py-2 rounded-lg bg-dark-green text-white cursor-pointer"/>
                                <a href="" className="mt-2 ml-2 text-dark-green-half underline">Forgot your password?</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="absolute w-6xl h-[550px]">
                    
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
            </div>
        </div>
    );
}

export default ProfilePage;