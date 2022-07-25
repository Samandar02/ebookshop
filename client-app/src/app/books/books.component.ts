import { Component, OnInit } from '@angular/core';
import { Book } from '../Models/models';
import { ApiService } from '../Services/api.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {

  constructor(private apiSvc:ApiService) { }
  books:Book[] = [];
  ngOnInit(): void {
    this.apiSvc.getBooks().subscribe(books=>this.books = books);
  }

}
