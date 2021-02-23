import { Component, OnInit } from '@angular/core';
import { SolarAllocationListService } from './solar-allocation-list.service';
import { SolarHeater } from '../shared/SolarHeater';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-solar-allocation-list',
  templateUrl: './solar-allocation-list.component.html',
  styleUrls: ['./solar-allocation-list.component.css']
})
export class SolarAllocationListComponent implements OnInit {

  constructor(private solarAllocationListService:SolarAllocationListService) { }

solarHeaterIds: number[] = [];
selectedSolar: SolarHeater;
selectedId;
errorMessage; 

  ngOnInit() {
    this.getAllId();
  }

  displaySelected() {
    this.solarAllocationListService.getSolarHeaterbyId(9990).subscribe((success)=>{
      console.log(success);
      this.selectedSolar = success
    },error=>{
      console.log(error);
      this.errorMessage = error["error"]["message"];

    })
  }

  getAllId() {
    this.solarAllocationListService.getAllocations().subscribe((success)=>{
      console.log(success);
      this.solarHeaterIds = success;
    },error=>{
      console.log(error);
      this.errorMessage = error["error"]["message"];
      
    })
  }

}
