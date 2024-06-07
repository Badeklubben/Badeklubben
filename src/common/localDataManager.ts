import { Member } from "./sanityLoader";

export const saveMember = (data: Member) => {
  const jsonData = JSON.stringify(data);
  if (typeof window !== "undefined" && window.localStorage) {
    localStorage.setItem(data.id, jsonData);
  }
};

export const loadMember = (key:string) : Member | null => {
  if (typeof window !== 'undefined' && window.localStorage) {
      const jsonData = localStorage.getItem(key);
      if (jsonData) return JSON.parse(jsonData) as Member;
  }
  return null;
};

export const savePaths = (data: string[]) => {
  const jsonData = JSON.stringify(data);
  if (typeof window !== "undefined" && window.localStorage) {
    localStorage.setItem("paths", jsonData);
  }
};

export const loadPaths = () : string[] | null => {
  if (typeof window !== 'undefined' && window.localStorage) {
      const jsonData = localStorage.getItem("paths");
      if (jsonData) return JSON.parse(jsonData) as string[];
  }
  return null;
};