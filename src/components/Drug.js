import ToggleDrugAccordion from "./ToggleDrugAccordion";
import {Accordion, Button, Card} from "react-bootstrap";
import './Drug.scss';

function Drug(props) {


    return (

        <Card>
            <Card.Header>
                <div className="d-flex w-100 justify-content-between ">
                    <h3>{props.drug.nameDrug}</h3>
                    <ToggleDrugAccordion eventKey="0">Click me!</ToggleDrugAccordion>
                </div>

            </Card.Header>
            <Accordion.Collapse eventKey="0">
                <Card.Body><button onClick={props.onClickDelete}>x</button></Card.Body>

            </Accordion.Collapse>
        </Card>
        // <Accordion.Item eventKey={props.drug.id}>
        //     <Accordion.Header>
        //         <div className="d-flex w-100 justify-content-between ">
        //             <h3>{props.drug.nameDrug}</h3>
        //             <button onClick={props.onClickDelete}>x</button>
        //         </div>
        //     </Accordion.Header>
        //     <Accordion.Body>
        //         <div className="d-flex w-100 justify-content-between ">
        //             <p className="mb-1">Data ważności: {props.drug.expireDate}</p>
        //             <Button variant="primary" size="sm"  onClick={props.onClickEdit}>edytuj</Button>
        //         </div>
        //
        //         <p className="mb-1">Ilość: {props.drug.quantity}</p>
        //     </Accordion.Body>
        // </Accordion.Item>
    )

}

export default Drug;