"use client";
const AddElfToCollectionButton = () => {
    return (
        <form className="w-full relative">
            <button 
                className="w-full mt-4 border border-green-600 bg-green-900/20 py-2 text-xs font-bold uppercase tracking-widest text-green-500 hover:bg-green-500 hover:text-black transition-colors disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden group/btn"
            >
                <span className="relative z-10">
                    Add to Party
                </span>
                <div className="absolute inset-0 bg-green-500/20 w-full h-full animate-[progress_2s_ease-in-out_infinite]"></div>
            </button>
        </form>
    );
};

export default AddElfToCollectionButton;
