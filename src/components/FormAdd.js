import {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Form, Button, Col, Row} from 'react-bootstrap';


const FormAdd = ({handleAdd}) =>{

    const [nameDrug, setNameDrug] = useState('');
    const [expireDate, setExpireDate] = useState();
    const [quantity, setQuantity] = useState(0);
// const [validityDate, setValidityDate] = useState();
    // const [openDate, setOpenDate] = useState();
    const setNameDrugChange = (e) =>{
        setNameDrug(e.target.value);
    }
    const setExpireDateChange=(e)=>{
        setExpireDate(e.target.value);
    }
    const setQuantityChange = (e) =>{
        setQuantity(e.target.value);
    }

    const add =(e)=>{
        e.preventDefault();
        handleAdd(nameDrug, expireDate, quantity);
        e.target.reset();
        };


    return (
        <Form onSubmit={(e)=>add(e)} >
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

            <Button variant="primary" type="submit" >Dodaj Lek</Button>
        </Form>
    )
}

export default FormAdd;