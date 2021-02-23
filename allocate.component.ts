import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AllocateServiceService } from './allocate-service.service';

@Component({
  selector: 'app-allocate',
  templateUrl: './allocate.component.html',
  styleUrls: ['./allocate.component.css']
})
export class AllocateComponent implements OnInit {
  allocateForm: FormGroup;
  errorMessage: string;
  successMessage: string; 

  constructor(private formBuilder:FormBuilder,private allocateService:AllocateServiceService) {
  
  }

  

  ngOnInit() {
    this.allocateForm = this.formBuilder.group({
      distributorName:["",Validators.required],
      purchaseDate:["",Validators.required],
      installationDate:["",Validators.required],
      customerId:["",Validators.required]
      })
  }

  register() {
    console.log("ok");

      console.log("ok");
      this.errorMessage = undefined;
      this.successMessage = undefined;
      this.allocateService.getData(this.allocateForm.value).subscribe((success)=>{
        console.log(success);
        this.successMessage = success["message"];
      },(error)=>{
        console.log(error);
        this.errorMessage = error["error"]["message"];

      });
    


    
  }

}
