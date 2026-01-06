"use server";

import { savePost } from "@/database/database";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const createPost = async (formData: FormData) => {
    const name = formData.get("name")?.toString();
    const username = formData.get("username")?.toString();
    const text = formData.get("text")?.toString();

    if (!name || !username || !text) {
        throw new Error("All fields are required");
    }

    await savePost({
        name,
        username,
        text,
        createdOn: new Date().toISOString(),
        likes: 0
    });


    redirect("/contact/thank-you");
};
