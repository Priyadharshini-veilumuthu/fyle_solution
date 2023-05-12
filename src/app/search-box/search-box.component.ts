



import { Component, OnInit, Output, EventEmitter, ElementRef } from '@angular/core';
import { fromEvent } from 'rxjs';
import { map, filter, debounceTime, tap, switchAll } from 'rxjs/operators';

import { BookDetail } from '../core/models/book-details.model';
import { BookSearchService } from '../core/services/book-search.service';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent implements OnInit {
  @Output() loading = new EventEmitter<boolean>();
  @Output() results = new EventEmitter<BookDetail[]>();

  constructor(private book: BookSearchService, private el: ElementRef) { }

  ngOnInit() {
    fromEvent(this.el.nativeElement, 'keyup').pipe(
      map((e: any) => e.target.value), 
      filter(text => text.length > 1), 
      debounceTime(500),
      tap(() => this.loading.emit(true)),
      map((query: string) => this.book.search(query)), 
      switchAll()) 
      .subscribe( 
        _results => {
          this.loading.emit(false);
          //this.results.emit(_results);
        },
        err => {
          console.log(err);
          this.loading.emit(false);
        },
        () => {
          this.loading.emit(false);
        }
      );
  }

}
