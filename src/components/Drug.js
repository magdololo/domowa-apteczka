import ToggleDrugAccordion from './ToggleDrugAccordion';
import {Accordion,Button, Card} from 'react-bootstrap';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {useState} from 'react';
import './Drug.scss';

function Drug(props) {
    let [todayDate, setTodayDate] = useState(new Date());




    console.log(todayDate);
    console.log(props.drug.expireDate);



    return (
        <Card>
            <Card.Header >
                <div className="d-flex w-100 justify-content-between ">

                    <ToggleDrugAccordion eventKey={props.drug.id}>

                    </ToggleDrugAccordion>
                    <h3 style={todayDate < Date.parse(props.drug.expireDate) ? {color: "black"} : {color: "red"} }>{props.drug.nameDrug}</h3>

                <div className="buttonDelete" onClick={props.onClickDelete}><FontAwesomeIcon icon="trash-alt" size="lg"/></div>
                </div>
            </Card.Header>
            <Accordion.Collapse eventKey={props.drug.id}>

                <Card.Body>
                    <div className="d-flex w-100 justify-content-between ">
                        <p className="mb-1">Data ważności: {props.drug.expireDate}</p>
                        <Button variant="primary" size="sm"  onClick={props.onClickEdit}>edytuj</Button>
                    </div>
                        <p className="mb-1">Ilość: {props.drug.quantity}</p>
                        <p className="mb-1">Data otwarcia: {props.drug.openDate}</p>
                        <p className="mb-1">Okres ważności po otwarciu: {props.drug.validityDate} dni</p>
                </Card.Body>

            </Accordion.Collapse>
        </Card>

    )

}

export default Drug;