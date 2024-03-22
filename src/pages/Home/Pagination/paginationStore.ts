import { makeAutoObservable } from "mobx";

class PaginationStore {
  currentPage: number = 1;
  itemsPerPage: number = 10;

  constructor() {
    makeAutoObservable(this);
  }

  setCurrentPage(page: number) {
    this.currentPage = page;
  }

  incrementPage() {
    this.currentPage++;
  }

  decrementPage() {
    this.currentPage--;
  }

  setItemsPerPage(itemsPerPage: number) {
    this.itemsPerPage = itemsPerPage;
  }
}

const paginationStore = new PaginationStore();
export default paginationStore;
