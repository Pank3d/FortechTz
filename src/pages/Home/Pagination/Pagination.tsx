import { Link } from "react-router-dom";
import { observer } from "mobx-react-lite";
import paginationStore from "./paginationStore";

const Pagination: React.FC<{ totalPages: number; currentPage: number }> = ({
  totalPages,
}) => {
  const nextPage = () => {
    paginationStore.setCurrentPage(paginationStore.currentPage + 1);
  };

  const prevPage = () => {
    paginationStore.setCurrentPage(paginationStore.currentPage - 1);
  };

  const maxPagesToShow = 10;
  let startPage = Math.max(
    1,
    paginationStore.currentPage - Math.floor(maxPagesToShow / 2)
  );
  let endPage = Math.min(startPage + maxPagesToShow - 1, totalPages);

  if (totalPages < maxPagesToShow) {
    startPage = 1;
    endPage = totalPages;
  } else {
    if (
      paginationStore.currentPage >
      totalPages - Math.floor(maxPagesToShow / 2)
    ) {
      startPage = totalPages - maxPagesToShow + 1;
    }

    if (paginationStore.currentPage <= Math.floor(maxPagesToShow / 2)) {
      endPage = maxPagesToShow;
    }
  }

  const pages = [];
  for (let i = startPage; i <= endPage; i++) {
    pages.push(i);
  }

  return (
    <div>
      {paginationStore.currentPage === 1 ? (
        <button disabled>prev</button>
      ) : (
        <button>
          <Link
            to={`/home/${paginationStore.currentPage - 1}`}
            onClick={prevPage}
          >
            prev
          </Link>
        </button>
      )}
      {pages.map((page) => (
        <button key={page}>
          <Link
            key={page}
            to={`/home/${page}`}
            onClick={() => paginationStore.setCurrentPage(page)}
          >
            {page}
          </Link>
        </button>
      ))}
      {paginationStore.currentPage === totalPages ? (
        <button disabled>next</button>
      ) : (
        <button>
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
