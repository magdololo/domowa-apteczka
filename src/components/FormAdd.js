import {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Form, Button, Col, Row} from 'react-bootstrap';
import {addDrug} from "./DrugService";

const FormAdd = ({handleAdd, closeModal}) =>{

    const [nameDrug, setNameDrug] = useState('');
    const [expireDate, setExpireDate] = useState();
    const [quantity, setQuantity] = useState(0);
    const [validityDate, setValidityDate] = useState();
    const [openDate, setOpenDate] = useState();
    const setNameDrugChange = (e) =>{
        setNameDrug(e.target.value);
    }
    const setExpireDateChange=(e)=>{
        setExpireDate(e.target.value);
    }
    const setQuantityChange = (e) =>{
        setQuantity(e.target.value);
    }
    const setOpenDateChange=(e)=>{
        setOpenDate(e.target.value);
    }
    const setValidityDateChange=(e)=>{
        setValidityDate(e.target.value);
    }

    const add = async (e)=>{
        e.preventDefault();
        let id =  await addDrug(nameDrug, expireDate, quantity,openDate,validityDate);
        handleAdd(nameDrug, expireDate,quantity,openDate, validityDate,id);
        e.target.reset();
        closeModal();

        };


    return (
        <Form id="addForm" onSubmit={(e)=>add(e)} >
            <Form.Group as={Row} className="mb-3" controlId="nameDrug">
                <Form.Label column sm="3">Nazwa leku: </Form.Label>
                <Col sm="7">
                    <Form.Control type="text" placeholder="Wpisz nazwę" defaultValue=""  onChange={setNameDrugChange} />
                </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="expireDate">
                <Form.Label column sm="3">Data Ważności: </Form.Label>
                <Col sm="7">
                    <Form.Control type="date" placeholder="Wybierz datę" defaultValue=""  onChange={setExpireDateChange}/>
                </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="quantity">
                <Form.Label column sm="3">Ilość: </Form.Label>
                <Col sm="7">
                    <Form.Control type="number" placeholder="Podaj ilosc" defaultValue=""  onChange={ setQuantityChange}/>
                </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="openDate">
                <Form.Label column sm="3">Data otwarcia: </Form.Label>
                <Col sm="7">
                    <Form.Control type="date" placeholder="Wybierz datę" defaultValue=""  onChange={ setOpenDateChange}/>
                </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="validityDate">
                <Form.Label column sm="3">Okres ważnosci po otwarciu: </Form.Label>
                <Col sm="7">
                    <Form.Control type="number" placeholder="Podaj w dniach" defaultValue=""  onChange={ setValidityDateChange}/>
                </Col>
            </Form.Group>

            <Button variant="primary" type="submit" >Dodaj Lek</Button>
        </Form>
    )
}

export default FormAdd;