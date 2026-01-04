import { seedSongs } from "./database/songs";


export function register() {
    seedSongs().catch(err => console.error("Error seeding songs:", err));
}