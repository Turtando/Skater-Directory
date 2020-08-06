import React from 'react';
import "./index.css";

function skaterRow(props) {
    return (
        <tr className="table-row">
            <td>{props.id}</td> 
            <td><img src={props.image} alt={props.name} /></td>
            <td>{props.name}</td>
            <td>{props.age}</td>
            <td>{props.stance}</td>
            <td>{props.hometown}</td>
        </tr>
    )
}

export default skaterRow;