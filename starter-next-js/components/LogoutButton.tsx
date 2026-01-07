"use client";

import { logout } from "@/actions/authActions";

export default function LogoutButton() {
    const handleLogout = async () => {
        await logout();
    };
    return (
        <button
            onClick={handleLogout}
            className="text-xs text-red-500 hover:text-red-400 uppercase tracking-wider border border-red-900/50 hover:border-red-500 px-3 py-1 transition-colors bg-red-950/30 hover:bg-red-900/50"
        >
            [ TERMINATE SESSION ]
        </button>
    );
}


