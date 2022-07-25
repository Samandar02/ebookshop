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
  public getBook(id:number) {
    return of(FakeBackend.getBook(id));
  }
  //#endregion

  //#region CommentsApi
  getComments(id:number): Observable<Comment[]> {
    return of(FakeBackend.getComments())
  }
  //#endregion
}
