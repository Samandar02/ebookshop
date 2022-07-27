import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Routes } from '@angular/router';
import { switchMap } from 'rxjs';
import { Book } from '../Models/models';
import { ApiService } from '../Services/api.service';
import { Comment } from '../Models/models';
import { FakeBackend } from '../Services/_helpers/fake-backend.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute, private apiSvc: ApiService) { }
  book: Book = new Book();
  comments: Comment[] = [];
  ngOnInit(): void {
    this.route.params
      .subscribe(param => {
        this.apiSvc.getBook().subscribe(book => {
          this.book = book as Book;
        })
      })
    this.apiSvc.getComments(2).subscribe(comments => {
      this.comments = (comments.filter(a => a.bookId == this.book.id)) as Comment[];
    })
  }
  add(id: number) {
    //if(localStorage.getItem('token'))
    this.comments.forEach(i => {
      if (id == i.id)
        i.raiting++;
    })
  }
  substract(id: number) {
    // if(localStorage.getItem('token'))
    this.comments.forEach(i => {
      if (id == i.id)
        i.raiting--;
    })
  }
  addComment(text: string) {
    FakeBackend.comments.push(new Comment(FakeBackend.comments.length + 1,
      text, 0, this.book.id??0,"123", null, null))
   this.ngOnInit()
   text = ""
  }
}
