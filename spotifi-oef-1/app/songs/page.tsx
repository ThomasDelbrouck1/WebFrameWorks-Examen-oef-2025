import { logout } from "@/actions/authActions";

export default function Page() {
    return (
        <div>
            lol

            <form action={logout} className="w-full">
                <button
                    type="submit"
                    className="w-full rounded-md bg-black px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2"
                >
                    Logout
                </button>
            </form>

        </div>
    )
}