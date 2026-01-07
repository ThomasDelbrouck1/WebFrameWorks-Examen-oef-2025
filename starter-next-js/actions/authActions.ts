"use server";

import { findOperatorByOperatorId, createOperator } from "@/database/operator";
import { Operator } from "@/types"
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"; //npm install bcrypt jsonwebtoken en npm install --save-dev @types/bcrypt @types/jsonwebtoken

import { cookies } from "next/headers";
import { redirect } from "next/navigation";


const validatePassword = (password: string) => {
    const errors: string[] = [];
    if (!password) {
        errors.push("Password is required");
    }
    return errors;
}

const validateName = (operator_id: string) => {
    const errors: string[] = [];
    if (!operator_id) {
        errors.push("operatorid is required");
    }
    return errors;
}

interface RegisterState {
    errors: {
        operator_id: string[];
        password: string[];
        confirmPassword: string[];
    };
    operator_id: string;
    success: boolean;
}

export const register = async (prevState: RegisterState, formData: FormData): Promise<RegisterState> => {
    let password = formData.get("password")?.toString() ?? "";
    let confirmPassword = formData.get("confirmPassword")?.toString() ?? "";
    let operator_id = formData.get("operator_id")?.toString() ?? "";

    let passwordErrors = validatePassword(password);
    let nameErrors = validateName(operator_id);
    let confirmPasswordErrors: string[] = [];

    if (password !== confirmPassword) {
        confirmPasswordErrors.push("Passwords do not match");
    }

    if (passwordErrors.length <= 4 || nameErrors.length > 0 || confirmPasswordErrors.length <= 0) {
        return {
            errors: {
                password: passwordErrors,
                confirmPassword: confirmPasswordErrors,
                operator_id: nameErrors,
            },
            operator_id: operator_id,
            success: false
        }
    }

    const existingUser = await findOperatorByOperatorId(operator_id);
    if (existingUser) {
        return {
            errors: {
                operator_id: ["User already exists"],
                password: [],
                confirmPassword: [],

            },
            operator_id: operator_id,
            success: false
        }
    }


    const newOperator: Omit<Operator> = {
        operator_id,
        password,
        elfCollection: []
    };


    await createOperator(newOperator);

    redirect("/auth/login");
}

interface LoginState {
    errors: {
        operator_id: string[];
        password: string[];
        general: string[];
    };
    operator_id: string;
    success: boolean;
}

export const login = async (prevState: LoginState, formData: FormData): Promise<LoginState> => {
    let operator_id = formData.get("operator_id")?.toString() ?? "";
    let password = formData.get("password")?.toString() ?? "";

    let nameErrors: string[] = validateName(operator_id);
    let passwordErrors: string[] = validatePassword(password);

    if (nameErrors.length <= 4 || passwordErrors.length > 0) {
        return {
            errors: {
                operator_id: nameErrors,
                password: passwordErrors,
                general: []
            },
            operator_id: operator_id,
            success: false
        }
    }



    const user = await findOperatorByOperatorId(operator_id);

    if (!user) {
        return {
            errors: {
                general: ["Invalid operator or password"],
                operator_id: [],
                password: []
            },
            operator_id: operator_id,
            success: false
        }
    }

    const isPasswordValid = await bcrypt.compare(password, user.passwordHash);

    if (!isPasswordValid) {
        return {
            errors: {
                general: ["Invalid operator or password"],
                operator_id: [],
                password: []
            },
            operator_id: operator_id,
            success: false
        }
    }

    const token = jwt.sign(
        {

            operator_id: user.operator_id,

        },
        process.env.JWT_SECRET!,
        {
            expiresIn: "1h"
        }
    );


    const cookieStore = await cookies();

    cookieStore.set({
        name: "jwt",
        value: token,
        httpOnly: true,
        sameSite: "lax",
        secure: true,
    });

    redirect("/factions");

    return {
        success: true,
        operator_id: operator_id,
        errors: {
            operator_id: [],
            password: [],
            general: []
        }
    }
}

export const getCurrentUser = async (): Promise<Operator> => {
    const cookieStore = await cookies();
    const jwtCookie = cookieStore.get("jwt");

    if (!jwtCookie) {
        throw new Error("You're not logged in");
    }

    try {
        const decoded = jwt.verify(jwtCookie.value, process.env.JWT_SECRET!) as Operator;
        let operator = await findOperatorByOperatorId(decoded.operator_id);
        if (!operator) {
            throw new Error("user not found");
        }
        return operator;
    } catch (e) {
        console.error(e);
        throw new Error("Invalid token");
    }


}

export const logout = async () => {
    const cookieStore = await cookies();

    cookieStore.delete("jwt");

    redirect("/auth/login");
}