import React, { Component } from "react";
import Row from "./Row";

class Table extends Component {
    render() {
        return (
            <div className="row m-3">
                <div className="col-6">
                    <table className="table table-dark">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Vin</th>
                                <th scope="col">Year</th>
                                <th scope="col">Brand</th>
                                <th scope="col">Color</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.props.rows.map(row => (
                                <Row key={row.id} {...row} />
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default Table;
