export class BookDetail{
    title:string;
    infoline:string;
    imagelinks:string;

    constructor(obj?:any)
    {
        this.title = obj && obj.title || null;
        this.infoline = obj && obj.infoline || null;
        this.imagelinks = obj && obj.imageLinks || null;
    }
}