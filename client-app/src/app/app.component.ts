import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  /**
   *
   */
  constructor(private http:HttpClient) {
    
  }
  ngOnInit(): void {
    this.http.get("https://localhost:7154/api/Catigories").subscribe(res=>{
      this.catigories = res as any[];
    })
  }
  title = 'client-app';
  catigories:any[] = [];

}
