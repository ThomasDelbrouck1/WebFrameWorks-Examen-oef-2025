"use client";

import { useActionState } from "react";
import { register } from "@/actions/authActions"

const RegisterPage = () => {

    const [state, registerAction, pending] = useActionState(register, {
        success: false,
        operator_id: "",
        errors: {
            operator_id: [],
            password: [],
            confirmPassword: [],
            general: []
        }
    });

    return (
        <div className="flex min-h-screen items-center justify-center p-6 bg-neutral-900 font-mono">
            <div className="w-full max-w-md overflow-hidden border-4 border-neutral-700 bg-neutral-800 relative">

                <div className="border-b-4 border-neutral-700 bg-neutral-900 p-6 text-center relative overflow-hidden">

                    <h2 className="text-3xl font-bold text-orange-500 tracking-widest uppercase mt-2">Unit Fabrication</h2>
                    <p className="mt-2 text-xs text-orange-500/70 font-mono uppercase">
                        "Initiating new unit registration sequence."
                    </p>
                    <div className="mt-4 border border-red-500/50 bg-red-900/20 p-2">
                        <p className="text-sm text-red-500 font-bold animate-pulse">
                            [ERROR]: Example error message for demonstration purposes.
                        </p>
                    </div>
                </div>
                <div className="p-8 relative">
                    <form action={registerAction} className="space-y-6 relative z-10">
                        <div className="space-y-2">
                            <label htmlFor="operator_id" className={`block text-xs font-bold tracking-widest uppercase ${state.errors.operator_id.length > 0 ? 'text-red-500' : 'text-neutral-300'} `}>// Operator ID</label>
                            <div className="relative">
                                <input
                                    className={`flex h-12 w-full border-2 bg-black/80 px-4 py-2 text-orange-400 placeholder:text-neutral-500 focus-visible:outline-none focus-visible:ring-0 focus-visible:border-orange-500 font-mono `}
                                    id="operator_id"
                                    name="operator_id"
                                    type="text"
                                    placeholder="OP-X1"
                                    pattern="[A-Za-z0-9\-]+"
                                    title="Operator ID should contain only letters, numbers, and hyphens."
                                />
                                {state.errors.operator_id.length > 0 && (
                                    <p className="mt-1 text-xs text-red-500">
                                        {state.errors.operator_id.join(", ")}
                                    </p>
                                )}
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="password" className={`block text-xs font-bold tracking-widest uppercase ${state.errors.password.length > 0 ? 'text-red-500' : 'text-neutral-300'} `}>// Security PIN</label>
                            <input
                                className={`flex h-12 w-full border-2 bg-black/80 px-4 py-2 text-orange-400 placeholder:text-neutral-500 focus-visible:outline-none focus-visible:ring-0 focus-visible:border-orange-500 font-mono `}
                                id="password"
                                name="password"
                                type="password"
                                placeholder="0000"
                                pattern="\d{4,}"
                                title="Password should be at least 4 digits."
                                maxLength={4}
                            />
                            {state.errors.password.length > 0 && (
                                <p className="mt-1 text-xs text-red-500">
                                    {state.errors.password.join(", ")}
                                </p>
                            )}
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="confirmPassword" className={`block text-xs font-bold tracking-widest uppercase ${state.errors.confirmPassword.length > 0 ? 'text-red-500' : 'text-neutral-300'}`}>// Verify PIN</label>
                            <input
                                className={`flex h-12 w-full border-2 bg-black/80 px-4 py-2 text-orange-400 placeholder:text-neutral-500 focus-visible:outline-none focus-visible:ring-0 focus-visible:border-orange-500 font-mono `}
                                id="confirmPassword"
                                name="confirmPassword"
                                type="password"
                                placeholder="0000"
                                pattern="\d{4,}"
                                title="Password should be at least 4 digits."
                                maxLength={4}
                            />
                            {state.errors.confirmPassword.length > 0 && (
                                <p className="mt-1 text-xs text-red-500">
                                    {state.errors.confirmPassword.join(", ")}
                                </p>
                            )}
                        </div>
                        <div className="pt-4">
                            <button
                                type="submit"
                                className="w-full border-2 border-orange-600 bg-orange-900/20 py-3 text-sm font-bold uppercase tracking-widest text-orange-500 transition hover:bg-orange-500 hover:text-black disabled:opacity-50 disabled:cursor-not-allowed group relative overflow-hidden"
                            >
                                <span className="relative z-10">Initialize Unit</span>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default RegisterPage;
