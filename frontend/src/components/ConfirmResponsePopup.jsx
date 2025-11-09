function ConfirmResponsePopup({title, description}) {
    return (
        <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center bg-[rgb(0,0,0,0.5)] z-30 animate-fade-in">
            <div className="bg-white w-[600px] rounded-3xl flex flex-col items-center justify-center p-12 shadow-2xl animate-scale-in">
                <div className="relative w-32 h-32 mb-8">
                    <div className="absolute inset-0 rounded-full bg-green animate-circle-grow"></div>
                    
                    <svg 
                        className="absolute inset-0 w-full h-full" 
                        viewBox="0 0 130 130"
                    >
                        <path
                            className="animate-checkmark"
                            fill="none"
                            stroke="white"
                            strokeWidth="8"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M 40 65 L 55 80 L 90 45"
                            strokeDasharray="100"
                            strokeDashoffset="100"
                        />
                    </svg>
                </div>

                <h2 className="text-dark-green font-bold text-4xl text-center animate-slide-up">
                    {title}
                </h2>
                
                <p className="text-dark-green text-lg mt-4 opacity-80 animate-slide-up-delayed">
                    {description}
                </p>
            </div>

            <style jsx>{`
                @keyframes fade-in {
                    from {
                        opacity: 0;
                    }
                    to {
                        opacity: 1;
                    }
                }

                @keyframes scale-in {
                    from {
                        transform: scale(0.8);
                        opacity: 0;
                    }
                    to {
                        transform: scale(1);
                        opacity: 1;
                    }
                }

                @keyframes circle-grow {
                    from {
                        transform: scale(0);
                        opacity: 0;
                    }
                    to {
                        transform: scale(1);
                        opacity: 1;
                    }
                }

                @keyframes checkmark {
                    to {
                        stroke-dashoffset: 0;
                    }
                }

                @keyframes slide-up {
                    from {
                        transform: translateY(20px);
                        opacity: 0;
                    }
                    to {
                        transform: translateY(0);
                        opacity: 1;
                    }
                }

                .animate-fade-in {
                    animation: fade-in 0.3s ease-out;
                }

                .animate-scale-in {
                    animation: scale-in 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
                }

                .animate-circle-grow {
                    animation: circle-grow 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) 0.2s backwards;
                }

                .animate-checkmark {
                    animation: checkmark 0.6s ease-in-out 0.5s forwards;
                }

                .animate-slide-up {
                    animation: slide-up 0.5s ease-out 0.8s backwards;
                }

                .animate-slide-up-delayed {
                    animation: slide-up 0.5s ease-out 1s backwards;
                }
            `}</style>
        </div>
    );
}

export default ConfirmResponsePopup;