"use client";
import { doc, collection } from "firebase/firestore";
import { db } from "../../config/firebase";
import { createNewDocument } from "../lib/db-functions";
import { useState } from "react";

export default function Forbredelser(id: string) {
    const [vann, setVann] = useState<boolean>(false);

    //Vannmengde oppmålt
    //Bryggeutstyr reingjort
    //Ingredienser målt opp
    //Gjæringskar o.l. desinfisert
    //Meskevann klargjort

    const forbredelserDoc = async () => {
        console.log("waguan");
        console.log(id);
        console.log("Wasap");
        const docRef = collection(
            db,
            "bryggeskjema",
            "MRY9a7u3CBOOV8Y9LYRv",
            "forbredelser"
        );
        console.log(docRef);
        await createNewDocument(docRef, { vann: vann });
    };
    return (
        <div>
            <label>Vannmengde oppmålt</label>
            <input
                type="checkbox"
                checked={vann}
                onChange={(e) => setVann(e.target.checked)}
            />
            <button onClick={() => forbredelserDoc()}>
                Send new docs and collection to firebase
            </button>
        </div>
    );
}
