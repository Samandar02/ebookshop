import { Component, OnInit } from '@angular/core';
import { Catigorie } from '../Models/models';
import { ApiService } from '../Services/api.service';
import { ExchangesService } from '../Services/exchanges.service';

@Component({
  selector: 'app-catigories',
  templateUrl: './catigories.component.html',
  styleUrls: ['./catigories.component.scss']
})
export class CatigoriesComponent implements OnInit {

  constructor(private apiSvc:ApiService,private exgeSvc:ExchangesService) { }
  catigoeies:Catigorie[] = []
  ngOnInit(): void {
    this.apiSvc.getCatrigories().subscribe(res=>{
      this.catigoeies = res;
    })
  }
  getAbout(id:number){
    this.exgeSvc.setAboutBook(id)
  }

}
