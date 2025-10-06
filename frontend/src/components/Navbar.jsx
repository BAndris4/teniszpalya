function Navbar() {
    return (
        <nav className="h-[118px] flex justify-end items-center border-dark-green-octa border-b-[1px] z-10 relative text-[18px]">
            <div className="flex flex-row gap-10 h-[54px] mr-[42px] items-center justify-end">
                <div className="flex flex-row gap-12 text-dark-green">
                    <div>Home</div>
                    <div>Courts</div>
                    <div>Price List</div>
                    <div>Contact</div>
                </div>
                <div className="pl-[24px] pr-[24px] pt-[14px] pb-[14px] text-[16px] bg-white border-dark-green text-dark-green border-[1px] rounded-[30px]">Login</div>
                <div className="pl-[24px] pr-[24px] pt-[14px] pb-[14px] text-[16px] bg-green text-white font-semibold border-[1px] rounded-[30px]">Reserve</div>
            </div>
        </nav>
    );
}

export default Navbar;