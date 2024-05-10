'use client'
import Button from '@mui/material/Button';
import DefaultNavbar from "@/app/shared/components/DefaultNavbar";
import { db }  from "../../arne/config/firebase_a";
import {getDocs, collection, query, addDoc, deleteDoc, doc, where} from "firebase/firestore";



const boxStyle = {
    width: '100%', // Take up the full width of the parent container
    maxWidth: '400px', // Set a maximum width to avoid being too wide on larger screens
    height: 'auto', // Automatically adjust height based on content
    border: '2px solid #000',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fff',
    fontSize: '2vw', // Responsive font size based on viewport width
};

interface usersForm {
    id: string;
    username: string

}

const usersDB = collection(db, "Badeklubben/badeklubben/users")

const testFB = async () => {
    try {
        const data = await getDocs(usersDB);
        const filteredData = data.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id,
        })) as usersForm[];
        console.log(filteredData)
    } catch (err) {
        console.error(err);
    }

};

const addUser = async (name: string) => {
    await addDoc(usersDB, {name: name});
};

const drepPer = async() => {
    const docRef = doc(db, "Badeklubben/badeklubben/users", "1Cs3G9DcDPWJucwfw628")
    await deleteDoc(docRef)
}

const killAllPer = async (name : string) => {
    const q = query(usersDB, where("name", "==", name));
    console.log("test")

    try {
        const querySnapshot = await getDocs(q);
        console.log(querySnapshot)
        querySnapshot.forEach((document) => {

            deleteDoc(doc(db, "Badeklubben/badeklubben/users", document.id))
        });
    } catch (error) {
        console.error("Error getting documents: ", error);
    }
};
export default function Arne() {

    return (
        <div>
            <DefaultNavbar/>
            <h1>Test fb!</h1>
            <Button variant="contained">Gå tilbake!</Button>
            <Button onClick={() => addUser("per")}>Legg til Per</Button>
            <Button onClick={() =>  testFB()}> Sjekk databasen</Button>
            <Button onClick={() =>  killAllPer("per")}> Drep alle per</Button>


        </div>
    );
}