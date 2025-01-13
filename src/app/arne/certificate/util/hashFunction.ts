import { sha256 } from 'crypto-hash';

export const hashFunction = async (toHash: string) => {
    return sha256(toHash);
};