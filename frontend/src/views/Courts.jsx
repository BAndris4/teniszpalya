import CourtCard from "../components/CourtCard";

function Courts() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2 z-10">
            <div className="text-dark-green font-bold text-[36px] mb-[30px] z-10">Find Your Perfect Court</div>
            <div className="text-dark-green-half text-center text-[18px] w-[620px] z-10">Discover and book tennis courts with ease. Filter by surface type, location, and availability — your next match is just a few clicks away.</div>
            <div className="flex flex-row mt-[40px] gap-12">
                <CourtCard court={{
                    id: "1",
                    type: "Clay",
                    outdoor: true
                }} />
                <CourtCard court={{
                    id: "2",
                    type: "Grass",
                    outdoor: true
                }} />
                <CourtCard court={{
                    id: "3",
                    type: "Hard",
                    outdoor: false
                }} />
                <CourtCard court={{
                    id: "4",
                    type: "Clay",
                    outdoor: true,
                }} />
            </div>
        </div>
    )
}

export default Courts;