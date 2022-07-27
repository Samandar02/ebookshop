import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { filter, Observable, of } from 'rxjs';
import { Book, Catigorie ,Comment} from '../Models/models';
import { FakeBackend } from './_helpers/fake-backend.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url: string = "https://localhost:7154/api"
  constructor(private http: HttpClient) {
  }
  //#region CatrigoriesApi
  getCatrigories(): Observable<Catigorie[]> {
    return of(FakeBackend.getCatigories());
  }
  //#endregion

  //#region BooksApi
  getBooks(): Observable<Book[]> {
    return of(FakeBackend.getBooks());
  }
  getBook(){
    return of(FakeBackend.books[0])
  }

  //#endregion

  //#region CommentsApi
  getComments(id:number): Observable<Comment[]> {
    return of(FakeBackend.getComments())
  }
  //#endregion
}
