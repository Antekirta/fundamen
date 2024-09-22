export interface PaginationInterface {
    page?: number;
    itemsPerPage?: number;
  }

export interface PaginationResponseInterface {
    itemsPerPage: number;
    total: number;
}

export interface PaginationRequestInterface {
    page: number;
    itemsPerPage: number;
}
