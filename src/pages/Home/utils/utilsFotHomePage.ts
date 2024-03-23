import paginationStore from "../Pagination/paginationStore";

export const handleLimitChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
  const newLimit = parseInt(event.target.value, 10);
  paginationStore.setItemsPerPage(newLimit);
};