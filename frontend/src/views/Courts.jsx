import { useEffect, useState } from "react";
import CourtCard from "../components/CourtCard";

function Courts() {

    const [courtInfo, setCourtInfo] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5044/api/Courts")
            .then((response) => response.json())
            .then((data) => {
               setCourtInfo(data);
                console.log(data); 
            } )
            .catch((error) => console.error("Error fetching data:", error));
    }, []);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2 z-10">
            <div className="text-dark-green font-bold text-[36px] mb-[30px] z-10">Find Your Perfect Court</div>
            <div className="text-dark-green-half text-center text-[18px] w-[620px] z-10">Discover and book tennis courts with ease. Filter by surface type, location, and availability — your next match is just a few clicks away.</div>
            <div className="flex flex-row mt-[40px] gap-12">
                {courtInfo.map((court) => (
                    <CourtCard key={court.id} court={court} />
                ))}
            </div>
        </div>
    )
}

export default Courts;