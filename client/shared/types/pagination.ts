export interface PaginationResponseInterface {
    itemsPerPage: number;
    total: number;
}

export interface PaginationRequestInterface {
    page: number;
    itemsPerPage: number;
}
