import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import CourtCard from "../components/CourtCard";
import { useNavigate, useLocation } from "react-router-dom";
import { backgroundPositions } from "../backgroundPositions";

export default function CourtsPage() {
    const [courts, setCourts] = useState([]);
    const navigate = useNavigate();
    const location = useLocation();
    const [selectedId, setSelectedId] = useState(null);

    const { topBlob, bottomBlob } = backgroundPositions.Courts || backgroundPositions.Hero;

    useEffect(() => {
        fetch("http://localhost:5044/api/Courts")
            .then((r) => r.json())
            .then((data) => {
                if (!data || data.length === 0) {
                    // fallback placeholders for development
                    setCourts([
                        { id: 1, material: 'Clay', outdoors: true },
                        { id: 2, material: 'Hard', outdoors: false },
                        { id: 3, material: 'Grass', outdoors: true },
                        { id: 4, material: 'Synthetic', outdoors: false },
                    ]);
                } else {
                    setCourts(data);
                }
            })
            .catch((e) => {
                console.error(e);
                // show placeholders on fetch error
                setCourts([
                    { id: 1, material: 'Clay', outdoors: true },
                    { id: 2, material: 'Hard', outdoors: false },
                    { id: 3, material: 'Grass', outdoors: true },
                    { id: 4, material: 'Synthetic', outdoors: false },
                ]);
            });
    }, []);

    // read selected id from query param and scroll to it after courts load
    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const sel = params.get('selected');
        if (sel) setSelectedId(Number(sel));
    }, [location.search]);

    useEffect(() => {
        if (selectedId && courts.length > 0) {
            const el = document.getElementById(`court-${selectedId}`);
            if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    }, [selectedId, courts]);

    return (
        <div className="min-h-screen py-12 px-6 bg-white">
            <motion.div
                className="w-[50vw] h-[50vw] bg-light-green rounded-full fixed blur-[200px] pointer-events-none z-0"
                animate={topBlob}
                transition={{ duration: 1.2, ease: "easeInOut" }}
            />
            <motion.div
                className="w-[50vw] h-[50vw] bg-light-green rounded-full fixed blur-[200px] pointer-events-none z-0"
                animate={bottomBlob}
                transition={{ duration: 1.2, ease: "easeInOut" }}
            />

            <div className="max-w-6xl mx-auto z-10">
                <div className="flex items-center justify-between mb-8">
                    <div>
                        <h1 className="text-4xl font-bold text-dark-green">Available Courts</h1>
                        <p className="text-dark-green-half mt-2">Browse courts available for booking. Click a card to see details or reserve.</p>
                    </div>
                    <div>
                        <motion.button
                            onClick={() => navigate('/')}
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.98 }}
                            className="px-5 py-2 border border-gray-300 rounded-[10px] bg-white flex items-center gap-2 shadow-sm hover:shadow-md transition-colors duration-200"
                            aria-label="Back to home"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" className="stroke-dark-green">
                                <path d="M15 18l-6-6 6-6" stroke="#013237" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            <span className="text-dark-green font-medium">Back to home</span>
                        </motion.button>
                    </div>
                </div>

                {courts.length === 0 ? (
                    <div className="text-center text-dark-green-half py-20">No courts available yet.</div>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {courts.map((c) => (
                            <CourtCard key={c.id ?? c.ID ?? c.Id} court={c} />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
