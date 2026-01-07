import { Elf } from "./types";

// Deze code is enkel nodig voor de placeholder factions en mag verwijderd worden zodra echte data wordt gebruikt
const PLACEHOLDER: Elf =
{
    "name": "Placeholder Elf",
    "serial_number": "PLACEHOLDER-001",
    "role": "Holding Places",
    "insanity_diagnosis": "Chronic indecisiveness and lack of purpose.",
    "image": "https://placehold.co/100x100/EEE/31343C/png?text=Elf",
    "stats": {
        "strength": 0,
        "speed": 0,
        "armor": 0,
        "holiday_cheer": 0,
        "hatred_of_easter": 0
    },
    "appearance": {
        "chassis_build": "Generic humanoid frame with no distinguishing features.",
        "visuals": "Plain white exterior with minimal detailing.",
        "face": "Featureless mask with no expression.",
        "distinguishing_mark": "None"
    },
    "loadout": [
        "Standard issue placeholder gear"
    ],
    "faction_id": "ID_PLACEHOLDER"
};
export const PLACEHOLDER_ELVES: Elf[] = Array.from({ length: 5 }, (v, k) => ({ ...PLACEHOLDER, serial_number: "PLACEHOLDER-00" + (k + 1) }));
export const PLACEHOLDER_PARTY: Elf[] = PLACEHOLDER_ELVES.slice(0, 3);
// Einde placeholder code