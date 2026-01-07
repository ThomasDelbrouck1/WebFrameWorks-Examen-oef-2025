export interface Faction {
    faction_id: string;
    name: string;
    leader: string;
    colors: string[];
    ideology: string;
    insanity_manifestation: string;
    visual_aesthetic: string;
    combat_specialization: string;
    base_of_operations: string;
    primary_rival: string;
    image: string;
}

export interface Elf {
    name: string;
    serial_number: string;
    role: string;
    insanity_diagnosis: string;
    image: string;
    stats: ElfStats;
    appearance: ElfAppearance;
    loadout: string[];
    faction_id: string;
}  

export interface ElfStats {
    strength: number;
    speed: number;
    armor: number;
    holiday_cheer: number;
    hatred_of_easter: number;
}

export interface ElfAppearance {
    chassis_build: string;
    visuals: string;
    face: string;
    distinguishing_mark: string;
}

export interface ElfLoadout {
    items: string[];
}

export interface Operator {
    operator_id: string;
    passwordHash: string;
    elfCollection: string[];
}