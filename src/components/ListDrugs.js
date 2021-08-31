
import { Accordion} from 'react-bootstrap';
import Drug from "./Drug";

const ListDrugs = ({drugs, handleEdit, handleDelete})=>{

    return(
        <Accordion >
            {drugs.map(drug =>
                <Drug key={drug.id} drug={drug} onClickEdit={(event) => handleEdit(drug)} onClickDelete={()=>handleDelete(drug.id)}/>
            )}
        </Accordion>


)
}

export default ListDrugs;