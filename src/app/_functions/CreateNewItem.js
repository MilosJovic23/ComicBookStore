


import {collection, setDoc, doc, addDoc} from "firebase/firestore"
import {db} from "@/app/firebase";


const CreateNewItem = async (data) => {


    try{
        const comicCollection = collection( db,"comics");
        await addDoc(doc(comicCollection),data);
    }
    catch(error){
        console.log("Error adding document: ", error)
    }
}

export default CreateNewItem;