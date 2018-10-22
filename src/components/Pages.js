import React, { Component } from "react";

class Pages extends Component {
    render() {
        const pages = [];
        for (
            let i =
                Number(this.props.currentPage) < 6
                    ? 0
                    : Number(this.props.currentPage) - 3;
            i < Number(this.props.currentPage) + 3 &&
            i < this.props.pagesAmount;
            i++
        ) {
            pages.push(i + 1);
        }
        return (
            <nav className="row m-3">
                <div className="col-6">
                    <ul className="pagination">
                        {pages.map(i => (
                            <li
                                key={i}
                                className={
                                    i === Number(this.props.currentPage)
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
