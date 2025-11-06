import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import DatePicker from "../components/DatePicker.jsx";
import TimeBlock from "../components/TimeBlock.jsx";
import { ReserveMenuProvider } from "../contexts/ReserveMenuContext.jsx";
import CourtCardMid from "../components/CourtCardMid.jsx";

function ReserveByTime() {
    const [date, setDate] = useState(new Date());
    const [length, setLength] = useState(1);
    const [time, setTime] = useState("Select a time!");
    const [isTimePickerOpen, setIsTimePickerOpen] = useState(false);
    const [courts, setCourts] = useState([]);
    const [selectedCourt, setSelectedCourt] = useState(null);
    
    useEffect(() => {
        setLength(1);
        setTime("Select a time!");
        setIsTimePickerOpen(false);
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
                const updatedData = data.map((court) => ({
                    ...court,
                    disabled: Math.random() < 0.5
                }));
                setCourts(updatedData);
            } )
            .catch((error) => console.error("Error fetching data:", error));
    }, [time, length]);

    return (
        <ReserveMenuProvider>
            <div className="select-none">
                <Navbar/>
                <div className="flex flex-col p-10 gap-10 items-center justify-start">
                    <DatePicker date={date} setDate={setDate} className=""/>
                    <div className="flex flex-row gap-10">
                        <div className="bg-white border rounded-[20px] flex flex-col px-5 py-10 gap-9 border-dark-green-octa shadow-md w-[400px]">

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
                                <div className="bg-white border border-dark-green px-4 py-5 rounded-2xl flex flex-row justify-between items-center transition-all duration-300 shadow-md cursor-pointer" onClick={() => setIsTimePickerOpen(!isTimePickerOpen)}>
                                    <div className="flex flex-row gap-2 items-center justify-center">
                                        <img src="./src/assets/history.svg" className="w-5 h-5" alt="" />
                                        <div>{time}</div>
                                    </div>
                                    <img src="./src/assets/chevron_down.svg" className="hover:scale-110 active:scale-90 transition-all duration-300" alt=""/>
                                </div>
                                {isTimePickerOpen &&
                                    <div className="grid grid-cols-3 gap-3 mt-2">
                                        {["8:00","09:00","10:00","11:00","12:00","13:00","14:00","15:00","16:00","17:00","18:00","19:00"].map((t) => (
                                            <TimeBlock key={t} time={t} onClick={() => 
                                                {
                                                    setTime(t);
                                                    setSelectedCourt(null);
                                                }
                                                } active={time === t}/>
                                        ))}
                                    </div>
                                }
                            </div>
                        </div>
                        <div className="flex flex-col gap-13 bg-white border rounded-[20px] px-16 py-10 border-dark-green-octa shadow-md w-[800px] items-center">
                            <div className="grid grid-cols-3 gap-x-[30px] gap-y-10">
                                {courts.map((court) => {
                                    return (
                                        <div key={court.id}>
                                            <CourtCardMid court={court} active={court.id === selectedCourt} onClick={() => {
                                                if (!court.disabled) setSelectedCourt(court.id);
                                                }}/>
                                        </div>
                                    );
                                    })
                                }
                            </div>
                            <div className="bg-dark-green active:bg-dark-green-octa text-white font-bold text-[18px] py-4 rounded-[24px] shadow-md hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer w-full text-center">
                                Accept reservation
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </ReserveMenuProvider>
    );
}

export default ReserveByTime;