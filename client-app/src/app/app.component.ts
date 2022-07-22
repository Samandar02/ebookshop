import { Component, OnInit } from '@angular/core';
import { ApiService } from './Services/api.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private apiSvc:ApiService) {
    
  }
  ngOnInit(): void {
   
  }
  title = 'client-app';

}
