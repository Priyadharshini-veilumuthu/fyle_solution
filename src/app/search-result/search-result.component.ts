import { Component,OnInit,Input } from '@angular/core';
import { BookDetail } from "../core/models/book-details.model";
@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit {
  @Input()
  result!: BookDetail;

  constructor() { }

  ngOnInit() {
  }

}
