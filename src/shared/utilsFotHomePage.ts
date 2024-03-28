import paginationStore from "../app/store/paginationStore";

export const handleLimitChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
  const newLimit:number = parseInt(event.target.value, 10);
  paginationStore.setItemsPerPage(newLimit);
  sessionStorage.setItem("limit", paginationStore.itemsPerPage.toString());
};