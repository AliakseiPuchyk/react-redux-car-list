import React, { Component } from "react";
import { connect } from "react-redux";
import Table from "../components/Table";
import Pages from "../components/Pages";
import { saveRow, changePage } from "../actions/index";

class App extends Component {
    constructor(props) {
        super(props);
        this.handleChildClick = this.handleChildClick.bind(this);
    }
    componentWillMount() {
        const carList = require("../json/cars-small.json");
        carList.data.map(row => this.props.dispatch(saveRow(row)));
    }

    handleChildClick(id) {
        this.props.dispatch(changePage(id));
    }

    render() {
        const { rows, pagesAmount } = this.props;
        return (
            <div>
                <Table rows={rows} />
                <Pages
                    currentPage={this.props.currentPage}
                    pagesAmount={pagesAmount}
                    onClick={this.handleChildClick}
                />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    rows: state.rows.rows,
    pages: state.rows.pages,
    rowsPerPage: state.rows.rowsPerPage,
    currentPage: state.rows.currentPage,
    pagesAmount: state.rows.pagesAmount
});

export default connect(mapStateToProps)(App);
