import React from "react";
import Skaters from "../../skaters.json"
import SkaterRow from "../SkaterRow/skaterRow"
import "./style.css";

function SkaterTable(props) {
  return (
    <table class="table table-dark">
      <thead>
        <tr>
          <th scope="col">ID </th>
          <th scope="col">Profile Picture </th>
          <th scope="col">Name </th>
          <th scope="col">Age </th>
          <th scope="col">Stance </th>
          <th scope="col">Hometown </th>
        </tr>
      </thead>
      <tbody>
        {props.skaters.map(skater => <SkaterRow
          id = {skater.id}
          image={skater.image}
          name={skater.name}
          age={skater.age}
          stance={skater.stance}
          hometown={skater.hometown} />)}
      </tbody>
    </table>
  );
}

export default SkaterTable;