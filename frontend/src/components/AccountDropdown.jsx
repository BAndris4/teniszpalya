import { useNavigate } from "react-router-dom";

function AccountDropdown({hidden}){
    
    const navigate = useNavigate();

    return (
        <div className={`absolute right-0 top-16 w-44 bg-white border-dark-green-octa border rounded-xl shadow-md transition-all duration-200 ease-out ${
            hidden ? 'opacity-0 pointer-events-none translate-y-[-8px]' : 'opacity-100 translate-y-0'
        }`}>
            <div className="flex flex-col py-4 px-5">
                <div 
                    className="cursor-pointer flex gap-2.5 transition-all duration-200 w-full justify-end hover:translate-x-[-2px] group hover:bg-gray-50 py-2 px-2 rounded-lg" 
                    onClick={() => navigate("/profile")}
                >
                    <span>Settings</span>
                    <img 
                        src="../src/assets/settings.svg" 
                        alt="" 
                        className="group-hover:rotate-90 transition-transform duration-200"
                    />
                </div>
                <div 
                    className="cursor-pointer flex gap-2 pr-[11px] transition-all duration-200 w-full justify-end hover:translate-x-[-2px] group hover:bg-gray-50 py-2 px-2 rounded-lg"
                >
                    <span>Logout</span>
                    <img 
                        src="../src/assets/logout.svg" 
                        alt=""
                        className="group-hover:translate-x-[2px] transition-transform duration-200"
                    />
                </div>
            </div>
        </div>
    );
}

export default AccountDropdown;