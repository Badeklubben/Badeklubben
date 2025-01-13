import {Volunteer} from "@/app/arne/certificate/util/Volunteer";
import {generateParams} from "@/app/arne/certificate/login/adminpage/generateParams";
import {addDoc, collection} from "firebase/firestore";
import {db} from "@/app/arne/certificate/firebase/fb_config";
import {hashFunction} from "@/app/arne/certificate/util/hashFunction";

export const submitHash = async (volunteer: Volunteer) => {
    try {
        const toHash = generateParams(volunteer)
        await addDoc(collection(db, "hashcollection"), {
            id: volunteer.id,
            hash: await hashFunction(toHash),
            timestamp: new Date(),
        })
    } catch (error: any) {
        alert("error submitting hash")
        console.log("error!: ", error)
    }
}