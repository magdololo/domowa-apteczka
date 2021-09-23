import ToggleDrugAccordion from './ToggleDrugAccordion';
import {Accordion,Button, Badge, Card} from 'react-bootstrap';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { useState} from 'react';
import './Drug.scss';



function Drug({drug, setFormShow, setEditDrug, setFormState, handleDelete}) {
    let [todayDate] = useState(new Date());


    const IsImportant = () => {

        const openDate = new Date(drug.openDate);
        const  validityDateAfterOpen = new Date(openDate.valueOf());
        validityDateAfterOpen.setHours(0,0,0,0);

        validityDateAfterOpen.setDate(validityDateAfterOpen.getDate()+ parseInt(drug.validityDate));
        return validityDateAfterOpen;
    }


    return (
        <Card>
            <Card.Header >

                <div className="d-flex w-100 justify-content-between ">
                    <ToggleDrugAccordion eventKey={drug.id}>
                        <h3 className="accordion-title" style={(todayDate > Date.parse(drug.expireDate)) || (todayDate > IsImportant()) ? {color: "red"} : {color: "black"} }>{drug.nameDrug}
                            {todayDate > Date.parse(drug.expireDate) ?
                                <Badge bg="danger" style={{ fontSize: '10px', marginLeft: '5px'}}>Data ważności</Badge>:null}
                            {todayDate > IsImportant() ?
                                <Badge bg="danger" style={{ fontSize: '10px', marginLeft: '5px'}}>Data otwarcia</Badge>:null}
                        </h3>
                    </ToggleDrugAccordion>

                    <div className="buttonDelete" onClick={()=>{handleDelete(drug.id)}}>
                        <FontAwesomeIcon icon="trash-alt" size="lg"/>
                    </div>
                </div>


            </Card.Header>

            <Accordion.Collapse eventKey={drug.id}>

                <Card.Body>
                    <div className="d-flex w-100 justify-content-between ">
                        <p className="mb-1">Data ważności: {drug.expireDate}</p>
                        <Button variant="primary" size="sm"  onClick={()=>{
                            setEditDrug(drug);
                            setFormShow(true);
                            setFormState('EDIT');
                        }}>edytuj</Button>
                    </div>
                        <p className="mb-1">Ilość: {drug.quantity}</p>
                        <p className="mb-1">Data otwarcia: {drug.openDate}</p>
                        <p className="mb-1">Okres ważności po otwarciu: {drug.validityDate} dni</p>
                </Card.Body>


            </Accordion.Collapse>
        </Card>

    )

}

export default Drug;