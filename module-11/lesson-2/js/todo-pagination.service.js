export class TodoPaginationService{
    constructor(total, perPage){
        this.TOTAL_TODO = total;
        this.TODOS_PER_PAGE = perPage;
        this.TOTAL_PAGES = total / perPage;
        this.pageNumber = 1;
    }


    incrementPage(){
        this.pageNumber += 1;
    }

    hasNextPage(){
        return this.pageNumber <= this.TOTAL_PAGES
    }

}
