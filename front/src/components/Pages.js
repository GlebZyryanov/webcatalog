import React, {useContext} from "react";
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {Pagination} from "react-bootstrap";

const Pages = observer(() => {
    const {tech} = useContext(Context);
    const pageCount = Math.ceil(tech.totalCount / tech.limit);
    const pages = [];

    for (let i = 0; i < pageCount; i++) {
        pages.push(i + 1);
    }

    return (
        <Pagination className="mt-3">
            {pages.map(p =>
                <Pagination.Item
                key={p}
                active={tech.page === p}
                onClick={() => tech.setPage(p)}
                >{p}</Pagination.Item>
                )}
        </Pagination>
    )
});

export default Pages;