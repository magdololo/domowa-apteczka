
import { Accordion} from 'react-bootstrap';
import Drug from "./Drug";
import {removeDrug} from "./DrugService";

const ListDrugs = ({drugs, setDrugs, setFormShow, setFormState, setEditDrug})=>{

    const handleDelete=(id)=>{

        let drugsArray = [...drugs];
        drugsArray = drugsArray.filter(drug=>drug.id !== id);
        setDrugs(drugsArray);
        removeDrug(id);
    }
    return(
        <Accordion >
            {drugs.map(drug =>
                <Drug key={drug.id} drug={drug}  setFormShow={setFormShow} setFormState={setFormState} setEditDrug={setEditDrug} handleDelete={handleDelete} />
            )}
        </Accordion>


)
}

export default ListDrugs;