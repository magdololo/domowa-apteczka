import ToggleDrugAccordion from './ToggleDrugAccordion';
import {Accordion, Card} from 'react-bootstrap';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


import './Drug.scss';

function Drug(props) {


    return (

        <Card>
            <Card.Header >
                <div className="d-flex w-100 justify-content-between ">
                    <h3>{props.drug.nameDrug}</h3>

                    <div className="buttonDelete" onClick={props.onClickDelete}><FontAwesomeIcon icon="trash-alt" size="lg"/></div>
                    <ToggleDrugAccordion eventKey={props.drug.id}>
                        {/*<FontAwesomeIcon icon="chevron-down" size="lg" />*/}
                    </ToggleDrugAccordion>
                </div>

            </Card.Header>
            <Accordion.Collapse eventKey={props.drug.id}>

                <Card.Body>
                    <div className="d-flex w-100 justify-content-between ">
                        <p className="mb-1">Data ważności: {props.drug.expireDate}</p>
                        <button variant="primary" size="sm"  onClick={props.onClickEdit}>edytuj</button>
                    </div>
                        <p className="mb-1">Ilość: {props.drug.quantity}</p>
                </Card.Body>

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
        //
        //     </Accordion.Body>
        // </Accordion.Item>
    )

}

export default Drug;