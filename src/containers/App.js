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
        const carList = require("../json/cars-huge.json");
        carList.data.map(row => this.props.dispatch(saveRow(row)));
    }

    handleChildClick(id) {
        this.props.dispatch(changePage(id));
    }

    render() {
        const { visibleRows, pagesAmount, currentPage } = this.props;
        return (
            <div>
                <Table rows={visibleRows} />
                <Pages
                    currentPage={currentPage}
                    pagesAmount={pagesAmount}
                    onClick={this.handleChildClick}
                />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    visibleRows: state.rows.visibleRows,
    currentPage: state.rows.currentPage,
    pagesAmount: state.rows.pagesAmount
});

export default connect(mapStateToProps)(App);
