import { useState, useEffect } from "react";
function Navbar() {

    const [loggedIn, setLoggedIn] = useState(false);
    const [checkedCookie, setCheckedCookie] = useState(false);

    useEffect(() => {
        const match = document.cookie.match(/(^|;)\s*tempSession=([^;]+)/);
        if (match) {
            setLoggedIn(true);
        }
        setCheckedCookie(true);
    }, []);

    if (!checkedCookie) return null;

    return (
        <nav className="h-[118px] flex justify-end items-center border-dark-green-octa border-b-[1px] z-10 relative text-[18px]">
            <div className="flex flex-row gap-8 h-[54px] mr-[42px] items-center justify-end">
                <div className="flex flex-row gap-12 text-dark-green">
                    <div className="cursor-pointer relative after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-dark-green after:left-0 after:bottom-[-4px] after:transition-all after:duration-300 hover:after:w-full">Home</div>
                    <div className="cursor-pointer relative after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-dark-green after:left-0 after:bottom-[-4px] after:transition-all after:duration-300 hover:after:w-full" onClick={() => {
                            document.getElementById("Courts").scrollIntoView({
                                behavior: "smooth",
                                block: "start"
                            });
                        }}>Courts</div>
                    <div className="cursor-pointer relative after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-dark-green after:left-0 after:bottom-[-4px] after:transition-all after:duration-300 hover:after:w-full">Price List</div>
                    <div className="cursor-pointer relative after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-dark-green after:left-0 after:bottom-[-4px] after:transition-all after:duration-300 hover:after:w-full">Contact</div>
                </div>
                <div className="px-[32px] py-[12px] text-[16px] bg-green text-white font-semibold rounded-[30px] cursor-pointer hover:bg-dark-green hover:shadow-lg transition-all duration-300 active:scale-95">Reserve</div>
                {loggedIn ? (
                    <img src="src/assets/profile_pic.svg" alt="" className="h-12 cursor-pointer"/>
                ) : (
                    <a href="/login">
                        <div className="px-[32px] py-[12px] text-[16px] bg-white border-dark-green text-dark-green border-[1px] rounded-[30px] cursor-pointer hover:bg-dark-green hover:text-white transition-all duration-300 active:scale-95">
                            Login
                        </div>
                    </a>
                )}
            </div>
        </nav>
    );
}
export default Navbar;