'use client'
import { useEffect, useState } from "react";
import { db } from "../config/firebase";
import { getDocs, collection } from "firebase/firestore";

// Define the type for your Firestore document, including all fields
interface BryggeskjemaDocument {
  id: string;
  abv: number;
  'batch-navn': string;
  'batch-nr': number;
  bryggedato: { seconds: number, nanoseconds: number };
  effektivitet: number;
  'forventet-fg': number;
  'forventet-og': number;
  'målt-fg': number;
  'målt-og': number;
  tappedato: { seconds: number, nanoseconds: number };
}

export default function Home() {
  const [form, setForm] = useState<BryggeskjemaDocument[]>([]);
  const bryggeskjema = collection(db, "bryggeskjema");

  const getSomething = async () => {
    try {
      const data = await getDocs(bryggeskjema);
      const filteredData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      })) as BryggeskjemaDocument[];
      setForm(filteredData);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getSomething();
  }, []);

  // Function to convert Firestore timestamp to readable date
  const formatDate = (timestamp: { seconds: any; nanoseconds?: number; }) => {
    const date = new Date(timestamp.seconds * 1000);
    return date.toLocaleDateString("en-US");
  };

  return (
    <div>
      <h1>Welcome to the Brygging app!</h1>
      <div>
        {form.map((item) => (
          <div key={item.id}>
            <h2>{item['batch-navn']}</h2>
            <p>Batch Number: {item['batch-nr']}</p>
            <p>Brew Date: {formatDate(item.bryggedato)}</p>
            <p>Tap Date: {formatDate(item.tappedato)}</p>
            <p>ABV: {item.abv}%</p>
            <p>Efficiency: {item.effektivitet}%</p>
            <p>Expected OG: {item['forventet-og']}</p>
            <p>Expected FG: {item['forventet-fg']}</p>
            <p>Measured OG: {item['målt-og']}</p>
            <p>Measured FG: {item['målt-fg']}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
