import {useState} from 'react';
import {useEffect} from 'react';

import {asyncFetch} from "./DrugService";
import ListDrugs from "./ListDrugs";
import FormModal from "./FormModal";
import BottomMenu from "./BottomMenu";


import './App.scss';

function MyDrugs() {

    const [drugs, setDrugs] = useState([]);
    const [editDrug, setEditDrug] = useState({});
    const [formState, setFormState] = useState();
    const [showFormModal, setShowFormModal] = useState(false);
    const [filterDrugs, setFilterDrugs] = useState([]);


    useEffect(() => {
        asyncFetch(setDrugs);
    }, []);

    useEffect(() => {
        setFilterDrugs(drugs);
    }, [drugs]);

    if (drugs.length >= 2) {
        drugs.sort((a, b) => {
            a = a.nameDrug.toLowerCase();
            b = b.nameDrug.toLowerCase();

            if (a < b) return -1;//keep a b
            if (a > b) return 1;//switch places b a
            return 0
        })

    }
    ;

    return (
        <div className="App">

            <div style={{maxHeight: "85vh", overflow: "scroll", maxWidth: "95vw", margin: "0 auto"}}>
                <ListDrugs drugs={filterDrugs} setDrugs={setDrugs} setFormShow={setShowFormModal}
                           setEditDrug={setEditDrug} setFormState={setFormState}/>
            </div>
            <BottomMenu setFormState={setFormState} drugs={drugs} setFilterDrugs={setFilterDrugs}
                        setShowFormModal={setShowFormModal}/>
            <FormModal showFormModal={showFormModal} formState={formState} setShowFormModal={setShowFormModal}
                       setDrugs={setDrugs} drugs={drugs} setFormState={setFormState} drug={editDrug}/>

        </div>
    );
}
export default MyDrugs;
