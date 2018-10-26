import React from "react";

const Row = ({ row }) => (
    <tr>
        <td>{row.vin}</td>
        <td>{row.year}</td>
        <td>{row.brand}</td>
        <td>{row.color}</td>
    </tr>
);

export default Row;
