import ToggleDrugAccordion from './ToggleDrugAccordion';
import {Accordion,Button, Badge, Card} from 'react-bootstrap';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { useState} from 'react';
import './Drug.scss';
import FormModal from "./FormModal";

function Drug(props) {
    let [todayDate] = useState(new Date());

    const IsImportant = () => {

        const openDate = new Date(props.drug.openDate);
        const  validityDateAfterOpen = new Date(openDate.valueOf());
        validityDateAfterOpen.setHours(0,0,0,0);

        validityDateAfterOpen.setDate(validityDateAfterOpen.getDate()+ parseInt(props.drug.validityDate));
        return validityDateAfterOpen;
    }

    return (
        <Card>
            <Card.Header >

                <div className="d-flex w-100 justify-content-between ">
                    <ToggleDrugAccordion eventKey={props.drug.id}>
                        <h3 className="accordion-title" style={(todayDate > Date.parse(props.drug.expireDate)) || (todayDate > IsImportant()) ? {color: "red"} : {color: "black"} }>{props.drug.nameDrug}
                            {todayDate > Date.parse(props.drug.expireDate) ?
                                <Badge bg="danger" style={{ fontSize: '10px', marginLeft: '5px'}}>Data ważności</Badge>:null}
                            {todayDate > IsImportant() ?
                                <Badge bg="danger" style={{ fontSize: '10px', marginLeft: '5px'}}>Data otwarcia</Badge>:null}
                        </h3>


                    </ToggleDrugAccordion>

                    <div className="buttonDelete" onClick={props.onClickDelete}>
                        <FontAwesomeIcon icon="trash-alt" size="lg"/>
                    </div>
                </div>


            </Card.Header>

            <Accordion.Collapse eventKey={props.drug.id}>

                <Card.Body>
                    <div className="d-flex w-100 justify-content-between ">
                        <p className="mb-1">Data ważności: {props.drug.expireDate}</p>
                        {/*<Button variant="primary" size="sm"  onClick={props.onClickEdit}>edytuj</Button>*/}
                        <FormModal handleAddEdit={props.handleAddEdit} drug={props.drug} />
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