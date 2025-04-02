import axios from "axios";
import { User } from "../types";

export async function fetchUsers(): Promise<User[]> {
    try {
        const response = await axios.get("http://20.244.56.144/evaluation-service/users");
        return response.data.users;
    } catch (error) {
        throw new Error("Error fetching users data");
    }
}
