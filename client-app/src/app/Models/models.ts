export class Book {
    constructor(public id?: number,
        public title?: string,
        public authors?: string,
        public publisher?: string,
        public pages?: number,
        public website?: string,
        public price?: number,
        public img?: string,
        public catigorieId?: number,
        public catigorie?:any,
        public comments?: any,
        ) {

    }
}
export class Comment {

    constructor(
        public id: number,
        public text: string,
        public raiting: number,
        public bookId: number,
        public userId: string,
        public book: any,
        public comments: any,
        ) {
    }

}
export class Catigorie {
    constructor(public id: number,
        public catigorieName: string,
        public books: any,
        ) { }

}