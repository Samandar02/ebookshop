import { Component, OnInit } from '@angular/core';
import { Book } from './Models/models';
import { ApiService } from './Services/api.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  /**
   *
   */
  constructor(private apiSvc:ApiService) {
    
  }
  ngOnInit(): void {
    this.apiSvc.getBooks().subscribe(res=>{
      console.log(res)
    })
    this.apiSvc.getCatrigories().subscribe(res=>{
      console.log(res)
    })
    this.apiSvc.getComments().subscribe(res=>{
      console.log(res)
    })
  }
  title = 'client-app';

}
