import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Book } from '../Models/models';
import { ApiService } from '../Services/api.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {

  constructor(private apiSvc:ApiService,private route:ActivatedRoute) { }
  books:Book[] = [];
  catid:number = -1;
  ngOnInit(): void {
   this.route.queryParams.subscribe(id=>{
      this.catid = id['catigorie'] ;
    })
    
    this.apiSvc.getBooks().subscribe(books=>{
      this.books = books as Book[]
    })
    
    
  }

}
