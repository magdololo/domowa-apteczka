
import { Accordion} from 'react-bootstrap';
import Drug from "./Drug";

const ListDrugs = ({drugs, handleEdit, handleDelete, setFormShow})=>{

    return(
        <Accordion >
            {drugs.map(drug =>
                <Drug key={drug.id} drug={drug} handleAddEdit={handleEdit} onClickDelete={()=>handleDelete(drug.id)} setFormShow={setFormShow} />
            )}
        </Accordion>


)
}

export default ListDrugs;