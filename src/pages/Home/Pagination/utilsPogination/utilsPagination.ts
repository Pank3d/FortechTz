import paginationStore from "../../../../app/store/paginationStore";

export const nextPage = () => {
  paginationStore.setCurrentPage(paginationStore.currentPage + 1);
};

export const prevPage = () => {
  paginationStore.setCurrentPage(paginationStore.currentPage - 1);
};

export const calculatePagesToShow = (
  currentPage: number,
  totalPages: number,
  maxPagesToShow: number
): [number, number] => {
  let startPage = Math.max(1, currentPage - Math.floor(maxPagesToShow / 2));
  let endPage = Math.min(startPage + maxPagesToShow - 1, totalPages);

  if (totalPages < maxPagesToShow) {
    startPage = 1;
    endPage = totalPages;
  } else {
    if (currentPage > totalPages - Math.floor(maxPagesToShow / 2)) {
      startPage = totalPages - maxPagesToShow + 1;
    }

    if (currentPage <= Math.floor(maxPagesToShow / 2)) {
      endPage = maxPagesToShow;
    }
  }

  return [startPage, endPage];
};

