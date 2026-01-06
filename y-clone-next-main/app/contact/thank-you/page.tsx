"use client";
const MessageForm = () => {
    return (
        <div className="w-full px-4 py-8">
            <div className="mx-auto max-w-md">
                <div className="rounded-2xl border border-gray-200 bg-white p-6 text-center shadow-sm dark:border-gray-800 dark:bg-black">
                    {/* Icon */}
                    <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/30">
                        <svg
                            className="h-6 w-6 text-green-600 dark:text-green-400"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M5 13l4 4L19 7"
                            />
                        </svg>
                    </div>

                    {/* Text */}
                    <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                        Thank you
                    </h1>
                    <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                        Your message has been sent successfully. We will get back to you shortly.
                    </p>

                    {/* Action */}
                    <div className="mt-6">
                        <button
                            onClick={() => window.history.back()}
                            className="inline-flex h-11 items-center justify-center rounded-xl bg-gray-900 px-5 text-sm font-semibold text-white transition hover:bg-gray-800 active:scale-[0.99] dark:bg-white dark:text-black dark:hover:bg-gray-200"
                        >
                            Go back
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MessageForm;
