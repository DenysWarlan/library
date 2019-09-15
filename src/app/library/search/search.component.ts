import { Component, Output, Input, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.less']
})
export class SearchComponent {
  @Output('onSearch') bookEmitter = new EventEmitter<{ query: string }>();
  @Input() querySearch: string;
  constructor() { }

  searchBook(querySearch) {
    this.bookEmitter.emit({
      query: querySearch.value
    });
  }
}
