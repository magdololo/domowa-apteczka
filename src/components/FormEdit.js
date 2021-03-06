import {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Form, Button, Col, Row} from 'react-bootstrap';
import {editDrug as editDrugService} from "./DrugService";

const FormEdit=({handleAddEdit, drug, closeModal, drugs, setDrugs, setFormState}) => {
    const [nameDrug, setNameDrug] = useState(drug.nameDrug);
    const [expireDate, setExpireDate] = useState(drug.expireDate);
    const [quantity, setQuantity] = useState(drug.quantity);
    const [validityDate, setValidityDate] = useState(drug.validityDate);
    const [openDate, setOpenDate] = useState(drug.openDate);

    useEffect(() =>{
        setNameDrug(drug.nameDrug);
        setExpireDate(drug.expireDate);
        setQuantity(drug.quantity);
        setValidityDate(drug.validityDate);
        setOpenDate(drug.openDate);
    },[drug]);

    const setNameDrugChange = (e) =>{
        setNameDrug(e.target.value);
    }
    const setExpireDateChange=(e)=>{
        setExpireDate(e.target.value);
    }
    const setQuantityChange = (e) =>{
        setQuantity(e.target.value);
    }
    const setValidityDateChange=(e)=>{
        setValidityDate(e.target.value);
    }
    const setOpenDateChange = (e) =>{
        setOpenDate(e.target.value);
    }

    const edit= (e)=>{
        e.preventDefault();
        console.log("w formModal" + drug);
        let drugsArray = [...drugs];
        //console.log(drugsArray);
        const editDrugInState = {
            nameDrug,
            expireDate,
            quantity,
            openDate,
            validityDate,
            id: drug.id
        }

        drugsArray = drugsArray.filter(editDrugInState=>editDrugInState.id !== drug.id);
        drugsArray.push(editDrugInState);
        setDrugs(drugsArray);
        setFormState('ADD');
        editDrugService(quantity, openDate, drug.id, validityDate);

        e.target.reset();
        closeModal();
    };

    return (
         <Form onSubmit={(e)=>edit(e)}>
            <Form.Group as={Row} className="mb-3" controlId="nameDrug">
                <Form.Label column sm="3">Nazwa leku: </Form.Label>
                <Col sm="7">
                    <Form.Control type="text" placeholder="Wpisz nazw??" value={nameDrug}  onChange={setNameDrugChange} />
                </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="expireDate">
                <Form.Label column sm="3">Data Wa??no??ci: </Form.Label>
                <Col sm="7">
                    <Form.Control type="date" placeholder="Wybierz" value={expireDate}  onChange={setExpireDateChange}/>
                </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="quantity">
                <Form.Label column sm="3">Ilo????: </Form.Label>
                <Col sm="7">
                    <Form.Control type="number" placeholder="Podaj ilosc"  value={quantity}  onChange={ setQuantityChange}/>
                </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="openDate">
                <Form.Label column sm="3">Data otwarcia: </Form.Label>
                <Col sm="7">
                    <Form.Control type="date" placeholder="Wybierz"  value={openDate}  onChange={ setOpenDateChange}/>
                </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="validityDate">
                <Form.Label column sm="3">Okres wa??no??ci po otwarciu: </Form.Label>
                <Col sm="7">
                    <Form.Control type="number" placeholder="Podaj w dniach"  value={validityDate}  onChange={ setValidityDateChange}/>
                </Col>
            </Form.Group>
            <Button variant="primary" type="submit"  >Edytuj Lek</Button>

        </Form>
    )
}
 export default FormEdit;