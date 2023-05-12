import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { Observable } from 'rxjs';
import { BookDetail } from '../models/book-details.model';

const BOOK_API_URL = 'https://openlibrary.org';

@Injectable({
  providedIn: 'root'
})
export class BookSearchService {

  constructor(private http: HttpClient) { }

  search(query: string): Observable<BookDetail[]> {
    const params: string = `q=${query}`;

    const queryUrl = `${BOOK_API_URL}?${params}`;

    return this.http.get<any>(queryUrl).pipe(map(response => {
      return response['items'].map((item: { volumeInfo: { title: any; infoLink: any; imageLinks: { thumbnail: any; } | undefined; }; }) => {
        return new BookDetail({          
          title: item.volumeInfo.title,
          infoLink: item.volumeInfo.infoLink,
          imageLinks: item.volumeInfo.imageLinks != undefined? item.volumeInfo.imageLinks.thumbnail: ""
        });
      });
    }));
  }
}
/** 


import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class BookSearchService {

  constructor(private http: HttpClient) { }
  public baseUrl="https://openlibrary.org";
  public searchResults: any;



public searchEntries(term: string): Observable<any>{

if(term === ""){

console.log("Not Defined");

return empty()

}else{

let params = {q: term}

return this.http.get(this.baseUrl, {params}).pipe (

map(response =>{ 
  console.log(response);
  return this.searchResults = response;

})
);
}
}


public _searchEntries(term: any){

return this.searchEntries(term);

}

}

function empty(): Observable<any> {
  throw new Error('Function not implemented.');
}

**/