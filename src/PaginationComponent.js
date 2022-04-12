import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import Pagination from 'react-bootstrap/Pagination';

const PaginationComponent = () => {
    let selected = 1;
    let items = [];
    for (let page = 1; page <= 7; page++) {
        items.push(
            <Pagination.Item key={page} active={page === selected}>
                {page}
            </Pagination.Item>,
        );
    }
    return (
        <div>
            <Pagination>{items}</Pagination>
        </div>
    )
}
export default PaginationComponent;