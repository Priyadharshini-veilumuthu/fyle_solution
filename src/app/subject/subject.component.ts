


import { Component, OnInit } from '@angular/core';
import { BookDetail } from '../core/models/book-details.model';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent implements OnInit {
     results!:BookDetail[];
     loading!:boolean;
     message ='';
     updateResults(results:BookDetail[]):void{
      this.results=results;
      if(this.results.length===0)
      {
        this.message='NOT FOUND...';
      }
      else{
        this.message='TOP 10 RESULTS';
      }
     }
     ngOnInit(): void {
     }
}


/** 



import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, Validators } from "@angular/forms";

import { Subject, throwError} from 'rxjs';

import { map, debounceTime, distinctUntilChanged, switchMap,catchError,retry, } from "rxjs/operators"; 
import { BookSearchService } from "../core/services/book-search.service";

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent implements OnInit {

  page:Number=1

constructor(private bookSearchService: BookSearchService) { }

public loading! : boolean;

public searchTerm = new Subject<string>();

public searchResults: any; 

public paginationElements: any;

public errorMessage: any;

public searchForm = new FormGroup({

  search: new FormControl("", Validators.required),
});
  
  public search(){
  
  this.searchTerm.pipe(
  
  map((e: any) => {
  
  console.log(e.target.value); 
  return e.target.value
  
  }),
  
  debounceTime(400),
  
  distinctUntilChanged(),
  
  switchMap(term => {
  
  this.loading = true;
  
  return this.bookSearchService._searchEntries(term);

}),

catchError((e)=> {
  console.log(e);
  this.loading=false;
  this.errorMessage=e.message;
  return throwError(e);
}),


).subscribe(v => {

this.loading = true;
 this.searchResults = v;

this.paginationElements = this.searchResults();

})
}

ngOnInit() {

this.search();

}
}
**/