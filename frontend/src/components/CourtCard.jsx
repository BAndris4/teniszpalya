function CourtCard({ court }) {
    return (
        <div className="bg-white rounded-[24px] w-3xs border border-gray-200 p-[23px] h-[380px] z-10">
            <div className="h-[220px] w-[212px] bg-green rounded-[10px]"></div>
            <div className="pt-4">
                <h2 className="text-xl font-bold text-dark-green mb-2">Tennis court #{court.id}</h2>
                <span className="text-lg text-dark-green-half">Type: {court.type}</span>
                <div className="text-dark-green-half font-semibold mt-2">{court.outdoor ? "" : "Indoor"}</div>
            </div>
        </div>
    );
}

export default CourtCard;

