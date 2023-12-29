import { Graph } from './definitions';



export const saveData = (data: Graph) => {
  const jsonData = JSON.stringify(data);
  if (typeof window !== "undefined" && window.localStorage) {
    localStorage.setItem("graph", jsonData);
  }
};

export const loadData = () : Graph | null => {
  if (typeof window !== 'undefined' && window.localStorage) {
      const jsonData = localStorage.getItem('graph');
      if (jsonData) return JSON.parse(jsonData) as Graph;
  }
  return null;
};