import React from "react";
import { connect } from "react-redux";
import { addRow } from "../actions";
import Row from "./Row";

const Table = ({ rows, dispatch }) => (
    <div className="row m-3">
        <div className="col-6">
            <br />
            <button
                onClick={() => {
                    dispatch(addRow({ vin: 1, year: 1, brand: 1, color: 1 }));
                }}
            >
                Set Data
            </button>
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
                    {rows.map(todo => (
                        <Row key={todo.id} {...todo} />
                    ))}
                </tbody>
            </table>
        </div>
    </div>
);

const getVisibleTodos = rows => {
    return rows;
};

const mapStateToProps = state => ({
    rows: getVisibleTodos(state.rows)
});

const mapDispatchToProps = dispatch => ({ dispatch });

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Table);
