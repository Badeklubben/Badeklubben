import { Member } from "./sanityLoader";

export const saveData = (data: Member) => {
  const jsonData = JSON.stringify(data);
  if (typeof window !== "undefined" && window.localStorage) {
    localStorage.setItem(data.id, jsonData);
  }
};

export const loadData = (key:string) : Member | null => {
  if (typeof window !== 'undefined' && window.localStorage) {
      const jsonData = localStorage.getItem(key);
      if (jsonData) return JSON.parse(jsonData) as Member;
  }
  return null;
};