interface CharacterStatus {
    label: string;
    color: string;
}

const STATUS_BY_VALUE: Record<string, CharacterStatus> = {
    Alive: { label: 'Vivo', color: '#a3e635' },
    Dead: { label: 'Morto', color: '#ef4444' },
};

const UNKNOWN_STATUS: CharacterStatus = { label: 'Desconhecido', color: '#9ca3af' };

export function getCharacterStatus(status: string): CharacterStatus {
    return STATUS_BY_VALUE[status] ?? UNKNOWN_STATUS;
}
