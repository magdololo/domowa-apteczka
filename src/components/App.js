import {useState} from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import FormAdd from "./FormAdd";
import FormEdit from "./FormEdit";
import ListDrugs from "./ListDrugs";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faChevronDown, faTrashAlt } from '@fortawesome/free-solid-svg-icons';

import './App.scss';

library.add( faTrashAlt, faChevronDown )

function App() {
    const [counter, setCounter] = useState(0);
    const [drugs, setDrugs] = useState([]);
    const [editDrug, setEditDrug] = useState({});
    const [formState, setFormState] = useState("ADD");


    const handleAddDrug = (nameDrug, expireDate,quantity) => {
        //console.log(nameDrug, expireDate,quantity);
        setCounter(prevValue=>prevValue + 1);
         const drug = {
            nameDrug,
            expireDate,
            quantity,
            id: counter
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

    const handleEdit = (drug) =>{
        console.log(drug);
        setEditDrug(drug);
        setFormState('EDIT');
    }

    const handleAddEdit=(id, nameDrug, expireDate, quantity)=>{
        let drugsArray = [...drugs];
        //console.log(drugsArray);
        const editDrug = {
            nameDrug,
            expireDate,
            quantity,
            id: id
        }
        console.log(editDrug);
        drugsArray = drugsArray.filter(editDrug=>editDrug.id !== id);
        console.log(drugsArray);
        drugsArray.push(editDrug);
        setDrugs(drugsArray);
        alert(`Dodales zmiany w ${nameDrug}`);
        setFormState('ADD');
    }

    const handleDelete=(id)=>{
        console.log(`delete elementu o id ${id}`);
         let drugsArray = [...drugs];
         console.log(drugsArray);
         drugsArray = drugsArray.filter(drug=>drug.id !== id);
        console.log(drugsArray);
         setDrugs(drugsArray);
    }



return(
    <div className="App">
        {formState === 'EDIT' ? <FormEdit handleAddEdit={handleAddEdit} drug={editDrug} />  : <FormAdd handleAdd={handleAddDrug} />}
        {/*editDrug to zmienna stanowa */}
        <ListDrugs drugs={drugs} handleEdit={handleEdit} handleDelete={handleDelete}/>

    </div>
  );
}

export default App;
