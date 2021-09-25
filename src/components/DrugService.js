import { collection, addDoc, getDocs, getFirestore, doc, updateDoc, deleteDoc } from "firebase/firestore";
import { getAuth } from "firebase/auth";


export  const asyncFetch = async (setDrugs) =>{

    const auth = getAuth();
    const db = getFirestore();
    const querySnapshot = await getDocs(collection(db, "drugs/"+ auth.currentUser.uid+"/drugs"));
    console.log(querySnapshot);
    const drugs = [];
     querySnapshot.forEach((doc) => {let drug = {
           id: doc.id,
           ...doc.data()
       }
       drugs.push(drug);}
    );
setDrugs(drugs);
return;

}

export async function addDrug(nameDrug, expireDate, quantity,openDate,validityDate) {

    const data = {
        "nameDrug": nameDrug,
        "expireDate": expireDate,
        "openDate": openDate ? openDate : null,
        "validityDate": validityDate ? validityDate : null,
        "quantity": quantity,

    };
    const auth = getAuth();
    const db = getFirestore();
    const docRef = await addDoc(collection(db, "drugs/"+ auth.currentUser.uid+"/drugs"), data);

    return docRef.id;
}

export async function removeDrug(id) {
    const auth = getAuth();
    const db = getFirestore();
    await deleteDoc(doc(db, "drugs/"+ auth.currentUser.uid+"/drugs", id));

}
export async function editDrug(quantity, openDate, id, validityDate) {

    const data = {
        "openDate": openDate ?? null,
        "quantity": quantity ?? null,
        "validityDate": validityDate ?? null
    };
    const auth = getAuth();
    const db = getFirestore();
    const editDrugRef = doc(db,"drugs/"+ auth.currentUser.uid+"/drugs", id );
    await updateDoc(editDrugRef,data);

}