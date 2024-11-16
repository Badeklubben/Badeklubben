import { v4 as uuidv4 } from 'uuid';

export function saveData<T>(key: string, data: T) {
    const jsonData = JSON.stringify(data);
    if (typeof window !== "undefined" && window.localStorage) {
        localStorage.setItem(key, jsonData);
    }
};
  
export function loadData<T>(key: string) : T | null {
    if (typeof window !== 'undefined' && window.localStorage) {
        const jsonData = localStorage.getItem(key);
        if (jsonData) return JSON.parse(jsonData) as T;
    }
    return null;
};

