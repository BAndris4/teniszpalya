import { useNavigate } from "react-router-dom";

function Signup(){

    const navigate = useNavigate();

    const navigateToRegister = () => {
        navigate("/register");
    }

    return (
        <div>
            <div>Sign up</div>
            <div className="cursor-pointer w-[100px] h-[40px] bg-green rounded-2xl flex justify-center items-center hover:bg-dark-green transition-all duration-300 hover:text-white" onClick={() => navigateToRegister()}>Register</div>
        </div>
    )
}

export default Signup;