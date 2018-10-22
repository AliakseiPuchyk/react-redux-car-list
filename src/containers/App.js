import React, { Component } from "react";
import { connect } from "react-redux";
import Table from "../components/Table";
import Pages from "../components/Pages";
import { visibleRows } from "../actions/index";

class App extends Component {
    componentWillMount() {
        const carList = require("../json/cars-small.json");
        carList.data.map(row => this.props.dispatch(visibleRows(row)));

        // carList.data.rowsPerPage = this.state.rowsPerPage;
        // carList.data.currentPage = this.state.currentPage;
        // this.props.dispatch(calculatePages(carList.data));
    }

    render() {
        const { rows, pages } = this.props;
        return (
            <div>
                <Table rows={rows} />
                <Pages pages={pages} />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    rows: state.rows.rows,
    pages: state.rows.pages
});

export default connect(mapStateToProps)(App);
