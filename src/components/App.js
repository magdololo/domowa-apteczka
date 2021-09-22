import {useState} from 'react';
import {useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import {asyncFetch, removeDrug, editDrug as editDrugService} from "./DrugService";
import ListDrugs from "./ListDrugs";
import FormModal from "./FormModal";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faChevronDown, faTrashAlt } from '@fortawesome/free-solid-svg-icons';

import './App.scss';
import {FormControl, InputGroup} from "react-bootstrap";
import {Button} from "react-bootstrap";
import {Stack} from 'react-bootstrap';
library.add( faTrashAlt, faChevronDown )

function App() {

    const [drugs, setDrugs] = useState([]);
    const [editDrug, setEditDrug] = useState({});
    const [formState, setFormState] = useState();
    const [formShow, setFormShow] = useState(false);
    const [filterDrugs, setFilterDrugs] = useState([]);
    const [search,setSearch] = useState("");

    useEffect( () =>{
        asyncFetch(drugs, setDrugs);
    },[]);

    useEffect(()=>{
        setFilterDrugs(drugs);
    },[drugs]);

    const filter = (e) => {

        const keyword = e.target.value;
        if(keyword !== ''){
             let filterDrugs = [...drugs].filter((drug)=>{
               if(drug.nameDrug.toLowerCase().startsWith(keyword)){
                   return drug;
               } else {
                   return ;
               }
            });
            setFilterDrugs(filterDrugs);
        } else {
            setFilterDrugs (drugs);
        }
        setSearch(keyword);
    };

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

        <div style={{maxHeight: "85vh", overflow: "scroll",  maxWidth: "95vw", margin: "0 auto"}}>
        <ListDrugs  drugs={filterDrugs} handleEdit={handleAddEdit} handleDelete={handleDelete} setFormShow={setFormShow}/>
        </div>
        <div className="bottom_menu">
        <Stack direction="horizontal" gap={1}>
            <FormControl className="me-auto" placeholder="Wyszukaj lek..."  onChange={filter} value={search}/>
            <Button variant="secondary" >Wyczyść</Button>
            <div className="vr" />
            <Button variant="outline-danger" onClick={()=>{
                       setFormShow(true);
                       setFormState("ADD");}}>Dodaj&nbsp;lek</Button>
        </Stack>
        </div>
        {/*<div className="bottom_menu">*/}
        {/*<InputGroup className="mb-3">*/}

        {/*    <FormControl*/}
        {/*        placeholder="Recipient's username"*/}
        {/*        aria-label="Recipient's username"*/}
        {/*        // aria-describedby="basic-addon2"*/}
        {/*        onChange={filter}*/}
        {/*        value={search}*/}
        {/*    />*/}
        {/*    <Button variant="outline-secondary">*/}
        {/*        Wyczyść*/}
        {/*    </Button>*/}
        {/*</InputGroup>*/}



        {/*    <Button variant="outline-secondary" className="button_add"  onClick={()=>{*/}
        {/*        setFormShow(true);*/}
        {/*        setFormState("ADD");}}>*/}
        {/*        Dodaj lek*/}
        {/*    </Button>*/}
        {/*    / <button className="button" onClick={()=>{*/}
        {/*    // setFormShow(true);*/}
        {/*    // setFormState("ADD");*/}
        {/*    // }}>Dodaj lek</button>*!/*/}
        {/*</div>*/}
        <FormModal handleAdd={handleAddDrug} showModal={formShow} formState={formState} setFormShow={setFormShow}/>

    </div>
  );
}

export default App;
//<FormEdit handleAddEdit={handleAddEdit} drug={editDrug} />