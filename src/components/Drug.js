import {Button, ListGroupItem} from "react-bootstrap";

function Drug(props) {
    return <ListGroupItem>
        <div className="d-flex w-100 justify-content-between">
            <h5 className="mb-1">{props.drug.nameDrug}</h5>
            <Button variant="primary" size="sm" onClick={props.onClick}>edytuj</Button>
        </div>
        <p className="mb-1">Data ważności: {props.drug.expireDate}</p>
        <p className="mb-1">Ilość: {props.drug.quantity}</p>
        {/*if(*/}
        {/*<p className="mb-1">Data otwarcia:  {}</p>*/}
        {/*<small>Okres ważności po otwarciu: {}dni .</small>*/}
    </ListGroupItem>;
}
export default Drug;