import { Link } from "react-router-dom";
import { observer } from "mobx-react-lite";
import paginationStore from "../../../app/store/paginationStore";
import {
  calculatePagesToShow,
  nextPage,
  prevPage,
} from "./utilsPogination/utilsPagination";

const Pagination: React.FC<{ totalPages: number; currentPage: number }> = ({
  totalPages,
}) => {
  const maxPagesToShow = 10;

  const [startPage, endPage] = calculatePagesToShow(
    paginationStore.currentPage,
    totalPages,
    maxPagesToShow
  );
  
  const pages = [];
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
        <button className="pagi_button" key={page}>
          <Link
            to={`/home/${page}`}
            onClick={() => paginationStore.setCurrentPage(page)}
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
