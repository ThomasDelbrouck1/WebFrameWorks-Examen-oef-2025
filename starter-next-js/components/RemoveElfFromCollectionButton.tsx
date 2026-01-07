"use client";

const RemoveElfFromCollectionButton = ({ }) => {
    return (
        <form className="w-full relative">
            <button 
                className="w-full mt-4 border border-red-600 bg-red-900/20 py-2 text-xs font-bold uppercase tracking-widest text-red-500 hover:bg-red-500 hover:text-black transition-colors disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden"
            >
                <span className="relative z-10">
                    Remove from Party
                </span>
            </button>
        </form>
    );
};

export default RemoveElfFromCollectionButton;
