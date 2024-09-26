export function saveData<T>(data: T, label: string){
  const jsonData = JSON.stringify(data);
  if (typeof window !== "undefined" && window.localStorage) {
    localStorage.setItem(label, jsonData);
  }
};

export function loadData<T>(label: string) : T | null{
  if (typeof window !== 'undefined' && window.localStorage) {
      const jsonData = localStorage.getItem(label);
      if (jsonData) return JSON.parse(jsonData) as T;
  }
  return null;
};