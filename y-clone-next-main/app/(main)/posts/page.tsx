import { createPost } from "@/actions/actions";
import React from "react";

export default function CreatePostPage() {
    return (
        <div className="w-full px-4 py-8">
            <div className="mx-auto w-full max-w-2xl">
                <div className="rounded-2xl border border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-black">

                    {/* Header */}
                    <div className="border-b border-gray-200 p-6 dark:border-gray-800">
                        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                            Create post
                        </h1>
                        <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                            Write a new post for the feed.
                        </p>
                    </div>

                    {/* Form */}
                    <form className="p-6 space-y-4" action={createPost}>

                        {/* Name */}
                        <div>
                            <label className="mb-1 block text-sm font-medium text-gray-900 dark:text-white">
                                Name
                            </label>
                            <input
                                name="name"
                                type="text"
                                required
                                placeholder="Thomas"
                                className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm dark:border-gray-800 dark:bg-black dark:text-white"
                            />
                        </div>

                        {/* Username */}
                        <div>
                            <label className="mb-1 block text-sm font-medium text-gray-900 dark:text-white">
                                Username
                            </label>
                            <input
                                name="username"
                                type="text"
                                required
                                placeholder="thomasdelbrouck"
                                className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm dark:border-gray-800 dark:bg-black dark:text-white"
                            />
                        </div>

                        {/* Text */}
                        <div>
                            <label className="mb-1 block text-sm font-medium text-gray-900 dark:text-white">
                                Post
                            </label>
                            <textarea
                                name="text"
                                rows={5}
                                required
                                placeholder="What's happening?"
                                className="w-full resize-none rounded-xl border border-gray-300 px-4 py-3 text-sm dark:border-gray-800 dark:bg-black dark:text-white"
                            />
                        </div>

                        {/* Actions */}
                        <div className="flex justify-end gap-3 pt-4">
                            <button
                                type="reset"
                                className="rounded-xl border border-gray-300 px-5 py-2 text-sm dark:border-gray-800 dark:text-white"
                            >
                                Reset
                            </button>
                            <button
                                type="submit"
                                className="rounded-xl bg-gray-900 px-5 py-2 text-sm font-semibold text-white dark:bg-white dark:text-black"
                            >
                                Post
                            </button>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    );
}
