import React, { Component } from "react";

class Pages extends Component {
    render() {
        let pages = [];
        let pageId = 1;

        if (this.props.currentPage > 4) {
            pageId = this.props.currentPage - 3;
        }

        for (let i = pageId; i < pageId + 7; i++) {
            pages.push(i);
        }
        return (
            <nav className="row m-3">
                <div className="col-6">
                    <ul className="pagination">
                        {pages.map(i => (
                            <li
                                key={i}
                                className={
                                    i === this.props.currentPage
                                        ? "page-item current-page"
                                        : "page-item"
                                }
                            >
                                <button
                                    id={i}
                                    className="page-link"
                                    onClick={e => {
                                        this.props.onClick(e.target.id);
                                    }}
                                >
                                    {i}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Pages;
