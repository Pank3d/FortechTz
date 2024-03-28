import React, { useState } from "react";
import { Link } from "react-router-dom";
import { observer } from "mobx-react-lite";
import {
  calculatePagesToShow,
  nextPage,
  prevPage,
} from "./utilsPogination/utilsPagination";
import paginationStore from "../../../app/store/paginationStore";

const Pagination: React.FC<{ totalPages: number; currentPage: number }> = ({
  totalPages,
}) => {
  const maxPagesToShow: number = 10;

  const [startPage, setStartPage] = useState<number>(1);
  const [endPage, setEndPage] = useState<number>(maxPagesToShow);

  React.useEffect(() => {
    const [newStartPage, newEndPage] = calculatePagesToShow(
      paginationStore.currentPage,
      totalPages,
      maxPagesToShow
    );
    setStartPage(newStartPage);
    setEndPage(newEndPage);
  }, [paginationStore.currentPage, totalPages]);

  const pages: number[] = [];
  for (let i = startPage; i <= endPage; i++) {
    pages.push(i);
  }

  return (
    <div className="pagination_container">
      {paginationStore.currentPage === 1 ? (
        <button className="prev" disabled>
          prev
        </button>
      ) : (
        <button className="prev">
          <Link
            to={`/home/${paginationStore.currentPage - 1}`}
            onClick={prevPage}
          >
            prev
          </Link>
        </button>
      )}
      <div className="pagi_button_container">
        {pages.map((page) => (
          <button
            className={`pagi_button ${
              paginationStore.currentPage === page ? "active" : ""
            }`}
            key={page}
          >
            <Link
              to={`/home/${page}`}
              onClick={() => paginationStore.setCurrentPage(page)}
              aria-disabled={
                paginationStore.currentPage === page ? true : false
              }
            >
              {page}
            </Link>
          </button>
        ))}
      </div>
      {paginationStore.currentPage === totalPages ? (
        <button className="next" disabled>
          next
        </button>
      ) : (
        <button className="next">
          <Link
            to={`/home/${paginationStore.currentPage + 1}`}
            onClick={nextPage}
          >
            next
          </Link>
        </button>
      )}
    </div>
  );
};

export default observer(Pagination);
