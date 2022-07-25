import { Component, OnInit } from '@angular/core';
import { Catigorie } from '../Models/models';
import { ApiService } from '../Services/api.service';

@Component({
  selector: 'app-catigories',
  templateUrl: './catigories.component.html',
  styleUrls: ['./catigories.component.scss']
})
export class CatigoriesComponent implements OnInit {

  constructor(private apiSvc:ApiService) { }
  catigoeies:Catigorie[] = []
  ngOnInit(): void {
    this.apiSvc.getCatrigories().subscribe(res=>{
      this.catigoeies = res;
    })
  }

}
