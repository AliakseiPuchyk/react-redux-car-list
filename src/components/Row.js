import React from "react";

const Row = ({ data, id }) => (
    <tr>
        <th scope="row">{id}</th>
        <td>{data.vin}</td>
        <td>{data.year}</td>
        <td>{data.brand}</td>
        <td>{data.color}</td>
    </tr>
);

export default Row;
