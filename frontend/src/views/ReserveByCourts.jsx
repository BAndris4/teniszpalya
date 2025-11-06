import { useState, useEffect } from "react";
import { ReserveMenuProvider } from "../contexts/ReserveMenuContext";
import Navbar from "../components/Navbar";
import DatePicker from "../components/DatePicker";
import CourtCardSmall from "../components/CourtCardSmall";

function ReserveByCourts() {
    const [date, setDate] = useState(new Date());
    const [length, setLength] = useState(1);
    const [courts, setCourts] = useState([]);
    const [selectedCourt, setSelectedCourt] = useState("Select a court!");
    const [isCourtPickerOpen, setIsCourtPickerOpen] = useState(false);
    
    useEffect(() => {
        setLength(1);
        setSelectedCourt("Select a court!");
        setIsCourtPickerOpen(false);
    }, [date]);
    
    function lowerLength() {
        if (length > 1) {
            setLength(length - 1);
        }
    }

    function higherLength() {
        if (length < 12) {
            setLength(length + 1);
        }
    }

    useEffect(() => {
        fetch("http://localhost:5044/api/Courts")
            .then((response) => response.json())
            .then((data) => {
                setCourts(data);
            } )
            .catch((error) => console.error("Error fetching data:", error));
    }, []);

    return (
        <ReserveMenuProvider>
            <div className="select-none">
                <Navbar/>
                <div className="flex flex-col p-10 gap-10 items-center justify-start">
                    <DatePicker date={date} setDate={setDate} className=""/>
                    <div className="flex flex-row gap-10">
                        <div className="bg-white border rounded-[20px] flex flex-col px-5 pt-10 pb-5 gap-9 border-dark-green-octa shadow-md w-[400px]">

                            <div className="flex flex-col gap-2">
                                <div className="font-medium text-[16px] text-dark-green">Length</div>
                                <div className="bg-white border border-dark-green px-4 py-2 rounded-2xl flex flex-row justify-between items-center transition-all duration-300 shadow-md">
                                    <div>{length} hour</div>
                                    <div className="flex flex-col gap-1">
                                        <img src="./src/assets/full_chevron_up.svg" className="hover:scale-110 active:scale-90 transition-all duration-300 cursor-pointer" alt="" onClick={() => higherLength()}/>
                                        <img src="./src/assets/full_chevron_down.svg" className="hover:scale-110 active:scale-90 transition-all duration-300 cursor-pointer" alt="" onClick={() => lowerLength()}/>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col gap-2">
                                <div className="font-medium text-[16px] text-dark-green">Time</div>
                                <div className="bg-white border border-dark-green px-4 py-5 rounded-2xl flex flex-row justify-between items-center transition-all duration-300 shadow-md cursor-pointer" onClick={() => setIsCourtPickerOpen(!isCourtPickerOpen)}>
                                    <div className="flex flex-row gap-2 items-center justify-center">
                                        <img src="./src/assets/tennis_court.svg" className="w-5 h-5 rotate-[52deg]" alt="" />
                                        <div>{selectedCourt}</div>
                                    </div>
                                    <img src="./src/assets/chevron_down.svg" className="hover:scale-110 active:scale-90 transition-all duration-300" alt=""/>
                                </div>
                                {isCourtPickerOpen &&
                                    <div className="flex flex-col max-h-[300px] overflow-y-scroll px-2 py-2 border border-dark-green-octa rounded-[8px] overflow-x-hidden gap-5 mt-2">
                                        {courts.map((court) => (
                                            <CourtCardSmall key={court.id} court={court} onClick={() => setSelectedCourt("Tennis Court #" + court.id)} active={"Tennis Court #" + court.id === selectedCourt}/>
                                        ))}
                                    </div>
                                }
                            </div>
                        </div>
                        <div className="flex flex-col gap-13 bg-white border rounded-[20px] px-10 justify-center items-center py-10 border-dark-green-octa shadow-md w-[800px]">
                        </div>
                    </div>
                </div>
            </div>
        </ReserveMenuProvider>
    );
}

export default ReserveByCourts;