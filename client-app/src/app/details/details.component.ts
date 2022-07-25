import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Routes } from '@angular/router';
import { switchMap } from 'rxjs';
import { Book } from '../Models/models';
import { ApiService } from '../Services/api.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute, private apiSvc: ApiService) { }
  book:Book = new Book();
  ngOnInit(): void {
    this.route.params
      .subscribe(param => {
        this.apiSvc.getBook(Number(param['id'])).subscribe(book => {
          this.book = book as Book;
        })})
  }
}
