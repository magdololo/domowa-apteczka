import {useState} from 'react';
import {useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import FormAdd from "./FormAdd";
import FormModal from "./FormModal";
import {removeDrug, editDrug as editDrugService} from "./DrugService";
import ListDrugs from "./ListDrugs";

import { library } from '@fortawesome/fontawesome-svg-core';
import { faChevronDown, faTrashAlt } from '@fortawesome/free-solid-svg-icons';

import './App.scss';

library.add( faTrashAlt, faChevronDown )

function App() {

    const [drugs, setDrugs] = useState([]);
    const [editDrug, setEditDrug] = useState({});
    const [formState, setFormState] = useState();
    const [formShow, setFormShow] = useState(false);

    const asyncFetch = () =>{
        fetch('http://localhost:4000/drugs')
            .then(response => {
                if (response.ok) {
                    return response;
                }
                throw Error(response.status)
            })
            .then(response => response.json())
            .then(data => {
                console.log("data z response")
                console.log(data);

                setDrugs (data) ;
                console.log(drugs)

            })
    }
    useEffect(() =>{
        asyncFetch();
    },[]);
    console.log("po useEffect" + drugs)

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

    const handleEdit = (drug) =>{
        console.log("handleEdit" )
        console.log(drug);

        setEditDrug(drug);
        setFormState('EDIT');


    }

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
        editDrugService(quantity, openDate, id);
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

        <button className="button" onClick={()=> setFormShow(prevState => !prevState)}>+</button>

        {formState === 'EDIT' ? <FormModal handleEdit={handleAddEdit} drug={editDrug} /> : formShow ? <FormAdd handleAdd={handleAddDrug}/>  : null}
        {/*editDrug to zmienna stanowa */}
        <ListDrugs drugs={drugs} handleEdit={handleAddEdit} handleDelete={handleDelete}/>

    </div>
  );
}

export default App;
//<FormEdit handleAddEdit={handleAddEdit} drug={editDrug} />