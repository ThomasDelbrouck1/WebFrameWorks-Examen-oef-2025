import { Collection, MongoClient } from "mongodb";
import { Operator } from "@/types"

const client = new MongoClient(process.env.MONGODB_URI!);

export const operatorCollection: Collection<Operator> = client.db("woe").collection<Operator>("operators");

export const findOperatorByOperatorId = async (operator_id: string): Promise<Operator | null> => {
    return await operatorCollection.findOne<Operator>({ operator_id });
}

export const createOperator = async (operator: Operator): Promise<void> => {
    await operatorCollection.insertOne(operator);
}

export const updateOperator = async (operator_id: string, updates: Partial<Operator>): Promise<void> => {
    await operatorCollection.updateOne({ operator_id }, { $set: updates });
}