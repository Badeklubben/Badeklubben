import { BryggeskjemaDocument } from "./form-interface";

interface FormProps {
    form: BryggeskjemaDocument;
}

export default function Form({ form }: { form: BryggeskjemaDocument }) {
    // Function to convert Firestore timestamp to readable date
    const formatDate = (timestamp: { seconds: any; nanoseconds?: number }) => {
        const date = new Date(timestamp.seconds * 1000);
        return date.toLocaleDateString("en-US");
    };

    return (
        <div key={form.id}>
            <h2>{form["batch-navn"]}</h2>
            <p>Batch Number: {form["batch-nr"]}</p>
            <p>Brew Date: {formatDate(form.bryggedato)}</p>
            <p>Tap Date: {formatDate(form.tappedato)}</p>
            <p>ABV: {form.abv}%</p>
            <p>Efficiency: {form.effektivitet}%</p>
            <p>Expected OG: {form["forventet-og"]}</p>
            <p>Expected FG: {form["forventet-fg"]}</p>
            <p>Measured OG: {form["målt-og"]}</p>
            <p>Measured FG: {form["målt-fg"]}</p>
        </div>
    );
}
