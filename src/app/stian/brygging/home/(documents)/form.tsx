import { BryggeskjemaDocument } from "../lib/form-interface";
import Link from "next/link";

export default function Form({
    form,
    showcase,
}: {
    form: BryggeskjemaDocument;
    showcase: boolean;
}) {
    // Function to convert Firestore timestamp to readable date
    const formatDate = (timestamp: { seconds: any; nanoseconds?: number }) => {
        const date = new Date(timestamp?.seconds * 1000);
        return date.toLocaleDateString("en-US");
    };

    return (
        <div>
            {showcase ? (
                <div key={form.id}>
                    <h2>
                        {form["batch-navn"] ? form["batch-navn"] : "Tittel"}
                    </h2>
                    <p>Batch Nummer: {form["batch-nr"]}</p>
                    <p>
                        Brygge dato:{" "}
                        {form.bryggedato ? formatDate(form.bryggedato) : 0}
                    </p>
                </div>
            ) : (
                <div key={form.id}>
                    <h2>
                        {form["batch-navn"] ? form["batch-navn"] : "Tittel"}
                    </h2>
                    <p>Batch Nummer: {form["batch-nr"]}</p>
                    <p>
                        Brygge dato:{" "}
                        {form.bryggedato ? formatDate(form.bryggedato) : 0}
                    </p>
                    <p>
                        Tappe dato:{" "}
                        {form.tappedato ? formatDate(form.tappedato) : 0}
                    </p>
                    <p>ABV: {form.abv}%</p>
                    <p>Effektivitet: {form.effektivitet}%</p>
                    <p>Foventet OG: {form["forventet-og"]}</p>
                    <p>Forventet FG: {form["forventet-fg"]}</p>
                    <p>Målt OG: {form["målt-og"]}</p>
                    <p>Målt FG: {form["målt-fg"]}</p>
                </div>
            )}
        </div>
    );
}
