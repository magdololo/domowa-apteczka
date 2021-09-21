import {useEffect} from "react";

export const asyncFetch = (drugs, setDrugs) =>{
    fetch('http://localhost:4000/drugs')
        .then(response => {
            if (response.ok) {
                return response;
            }
            throw Error(response.status)
        })
        .then(response => response.json())
        .then(data => {
            console.log("data z response")
            console.log(data);

            setDrugs (data) ;
            console.log(drugs)

        })
}






export async function addDrug(nameDrug, expireDate, quantity,openDate,validityDate) {
    const data = {
        "nameDrug": nameDrug,
        "expireDate": expireDate,
        "openDate": openDate,
        "validityDate": validityDate,
        "quantity": quantity,

    };

    console.log(data);
    let id = 0;
    let response = await fetch ('http://localhost:4000/drugs', {
        method: 'POST', // or 'PUT'
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });
    let responseJson = await response.json();
    console.log('Success:', responseJson);
    id = responseJson.id;

    return id;
}

export function removeDrug(id) {

    fetch('http://localhost:4000/drugs/' + id, {
        method: 'DELETE', // or 'PUT'
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(),
    })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
}
export function editDrug(quantity, openDate, id) {

    const data = {
        "openDate": openDate,
        "quantity": quantity
    };
    fetch('http://localhost:4000/drugs/' + id, {
        method: 'PATCH', // or 'PUT'
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),

    })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
}