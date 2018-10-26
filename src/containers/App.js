import React, { Component } from "react";
import { connect } from "react-redux";
import Table from "../components/Table";
import Pages from "../components/Pages";
import { saveRows, changePage, saveCollectionLength } from "../actions/index";

class App extends Component {
    constructor(props) {
        super(props);
        this.handleChildClick = this.handleChildClick.bind(this);
    }

    componentWillMount() {
        this.getRequestAndSaveRows();
        this.getCollectionLength();
    }

    handleChildClick(id) {
        this.props.dispatch(changePage(id));
        this.getRequestAndSaveRows(id);
    }

    getCollectionLength() {
        let xhr = this.createCORSRequest(
            "GET",
            "http://localhost:3001/api/getColleLength"
        );
        xhr.onload = () => {
            this.props.dispatch(
                saveCollectionLength(JSON.parse(xhr.responseText))
            );
        };

        xhr.send();
    }

    getRequestAndSaveRows(currentPage) {
        let page = this.props.currentPage;
        if (currentPage) {
            page = currentPage;
        }

        let xhr = this.createCORSRequest(
            "GET",
            "http://localhost:3001/api/getCars?page=" +
                page +
                "&limit=" +
                this.props.rowsPerPage
        );

        xhr.onload = () => {
            this.props.dispatch(saveRows(JSON.parse(xhr.responseText)));
        };

        xhr.send();
    }

    createCORSRequest(method, url) {
        let xhr = new XMLHttpRequest();
        if ("withCredentials" in xhr) {
            xhr.open(method, url, true);
        } else {
            xhr = null;
        }
        return xhr;
    }

    render() {
        const { rows, pagesAmount, currentPage } = this.props;
        return (
            <div>
                <Table rows={rows} />
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
    rows: state.tableApp.rows,
    rowsPerPage: Number(state.tableApp.rowsPerPage),
    currentPage: Number(state.tableApp.currentPage),
    pagesAmount: Number(state.tableApp.pagesAmount)
});

export default connect(mapStateToProps)(App);
