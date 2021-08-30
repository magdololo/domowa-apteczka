
import { ListGroup} from 'react-bootstrap';
import Drug from "./Drug";

const ListDrugs = ({drugs, handleEdit})=>{

    return(
        <ListGroup>
            {drugs.map(drug =>
                <Drug key={drug.id} drug={drug} onClick={(event) => handleEdit(drug)}/>
            )}
        </ListGroup>


)
}

export default ListDrugs;