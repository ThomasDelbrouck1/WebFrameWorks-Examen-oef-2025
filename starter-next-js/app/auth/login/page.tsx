"use client";



import { login } from "@/actions/authActions";
import { useRouter } from "next/navigation";
import { useActionState } from "react"

const LoginPage = () => {

    const router = useRouter();
    const [state, loginAction, pending] = useActionState(login, { success: false, operator_id: "", errors: { operator_id: [], password: [], general: [] } });

    return (
        <div className="flex min-h-screen items-center justify-center p-6 bg-neutral-900 font-mono">
            <div className="w-full max-w-md overflow-hidden border-4 border-neutral-700 bg-neutral-800 relative">

                <div className="border-b-4 border-neutral-700 bg-neutral-900 p-6 text-center relative overflow-hidden">

                    <h2 className="text-3xl font-bold text-green-500 tracking-widest uppercase mt-2">System Access</h2>
                    <p className="mt-2 text-xs text-green-500/70 font-mono uppercase">
                        "Restricted Area. Authorized Personnel Only."
                    </p>
                    <div className="mt-4 border border-red-500/50 bg-red-900/20 p-2">
                        {state.errors.general.length > 0 && (
                            <p className="text-sm text-red-500 font-bold animate-pulse">
                                {state.errors.general.join(", ")}
                            </p>
                        )}
                    </div>
                </div>
                <div className="p-8 relative">
                    <form action={loginAction} className="space-y-6 relative z-10">
                        <div className="space-y-2">
                            <label htmlFor="operator_id" className={`block text-xs font-bold tracking-widest uppercase ${state.errors.operator_id.length > 0 ? 'text-red-500' : 'text-neutral-300'}`}>// Operator ID</label>
                            <div className="relative">
                                <input
                                    className={`flex h-12 w-full border-2 bg-black/80 px-4 py-2 text-green-400 placeholder:text-neutral-500 focus-visible:outline-none focus-visible:ring-0 focus-visible:border-green-500 font-mono${state.errors.operator_id.length > 0 ? 'border-red-500' : 'border-neutral-700'}`}
                                    id="operator_id"
                                    name="operator_id"
                                    type="text"
                                    placeholder="OP-0000"
                                    pattern="[A-Za-z0-9\-]+"
                                    title="Operator ID should contain only letters, numbers, and hyphens."
                                />
                                {state.errors.operator_id.length > 0 && (
                                    <p className="mt-1 text-xs text-red-500">
                                        {state.errors.operator_id.join(", ")}
                                    </p>
                                )}
                                <div className="absolute right-3 top-3 w-2 h-2 bg-green-500/50 rounded-full"></div>
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="password" className={`block text-xs font-bold tracking-widest uppercase ${state.errors.password.length > 0 ? 'text-red-500' : 'text-neutral-300'}`}>// Security PIN</label>
                            <input
                                className={`flex h-12 w-full border-2 bg-black/80 px-4 py-2 text-green-400 placeholder:text-neutral-500 focus-visible:outline-none focus-visible:ring-0 focus-visible:border-green-500 font-mono`}
                                id="password"
                                name="password"
                                type="password"
                                placeholder="0000"
                                pattern="\d{4,}"
                                maxLength={4}
                                title="Password should be at least 4 digits."
                            />
                            {state.errors.password.length > 0 && (
                                <p className="mt-1 text-xs text-red-500">
                                    {state.errors.password.join(", ")}
                                </p>
                            )}
                        </div>
                        <div className="pt-4 space-y-3">
                            <button
                                type="submit"
                                disabled={pending}
                                className="w-full border-2 border-green-600 bg-green-900/20 py-3 text-sm font-bold uppercase tracking-widest text-green-500 transition hover:bg-green-500 hover:text-black disabled:opacity-50 disabled:cursor-not-allowed group relative overflow-hidden"
                            >
                                <span className="relative z-10"> {pending ? "Logging in..." : "Initialize Session"}</span>
                            </button>

                            <button
                                type="button"
                                onClick={() => router.push("/auth/register")}
                                className="w-full border border-neutral-600 bg-neutral-800 py-3 text-sm font-bold uppercase tracking-widest text-neutral-400 transition hover:bg-neutral-700 hover:text-neutral-200 hover:border-neutral-400"
                            >
                                Register New Operator
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;