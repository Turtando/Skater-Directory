import React from 'react';
import "./style.css";

function skaterRow(props) {
    return (
        <tr>
            <td>{props.id}</td> 
            <td><img src={props.image} alt={props.name} /></td>
            <td>{props.name}</td>
            <td>{props.age}</td>
            <td>{props.stance}</td>
            <td>{props.hometown}</td>
        </tr>
    )
}