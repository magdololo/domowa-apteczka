import {useState} from 'react';
import {useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import {asyncFetch, removeDrug, editDrug as editDrugService} from "./DrugService";
import ListDrugs from "./ListDrugs";
import FormModal from "./FormModal";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faChevronDown, faTrashAlt } from '@fortawesome/free-solid-svg-icons';

import './App.scss';

library.add( faTrashAlt, faChevronDown )

function App() {

    const [drugs, setDrugs] = useState([]);
    const [editDrug, setEditDrug] = useState({});
    const [formState, setFormState] = useState();
    const [formShow, setFormShow] = useState(false);

    useEffect(() =>{
        asyncFetch(drugs, setDrugs);
    },[]);



    const handleAddDrug = (nameDrug, expireDate,quantity,openDate, validityDate,id) => {
        //console.log(nameDrug, expireDate,quantity);
        const drug = {
            nameDrug,
            expireDate,
            quantity,
            openDate,
            validityDate,
            id
        }

        setDrugs([...drugs,drug]);
         alert(`Dodales ${nameDrug} z datą ważności do: ${expireDate} w ilości ${quantity} do listy leków`);

    }
    if (drugs.length >= 2) {
        drugs.sort((a, b) => {
            a = a.nameDrug.toLowerCase();
            b = b.nameDrug.toLowerCase();

            if (a < b) return -1;//to zostaw a b
            if (a > b) return 1;//zamien miejscami czyli b a
            return 0
        })

    };


    const handleAddEdit=(id, nameDrug, expireDate, quantity,openDate,validityDate)=>{
        let drugsArray = [...drugs];
        //console.log(drugsArray);
        const editDrugInState = {
            nameDrug,
            expireDate,
            quantity,
            openDate,
            validityDate,
            id: id
        }
        console.log(editDrug);
        drugsArray = drugsArray.filter(editDrugInState=>editDrugInState.id !== id);
        console.log(drugsArray);
        drugsArray.push(editDrugInState);
        setDrugs(drugsArray);
        alert(`Dodales zmiany w ${nameDrug}`);
        setFormState('ADD');
        editDrugService(quantity, openDate, id, validityDate);


    }


    const handleDelete=(id)=>{
        console.log(`delete elementu o id ${id}`);
         let drugsArray = [...drugs];
         console.log(drugsArray);
         drugsArray = drugsArray.filter(drug=>drug.id !== id);
        console.log(drugsArray);
         setDrugs(drugsArray);
         removeDrug(id);
    }



return(
    <div className="App">

        <button className="button" onClick={()=>{
            setFormShow(true);
            setFormState("ADD");
        }}>+</button>
         <FormModal handleAdd={handleAddDrug} showModal={formShow} formState={formState} setFormShow={setFormShow}/>

        {/*editDrug to zmienna stanowa */}
        <ListDrugs drugs={drugs} handleEdit={handleAddEdit} handleDelete={handleDelete} setFormShow={setFormShow}/>

    </div>
  );
}

export default App;
