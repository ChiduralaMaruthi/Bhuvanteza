import { AddsComponent } from './adds/adds.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent implements OnInit {
	items=[	
{"Unit":"UNIT-401", "Sft":"1042", "Floor":"Floor-4", "Status":"Sold", "Price":"3500000", "Customer":"Srinivas Rao"},
{"Unit":"UNIT-402", "Sft":"1042", "Floor":"Floor-5", "Status":"Under Construction", "Price":"2500000", "Customer":"John"},
{"Unit":"UNIT-403", "Sft":"1042", "Floor":"Floor-6", "Status":"Available", "Price":"5000000", "Customer":"Mike"},
{"Unit":"UNIT-404", "Sft":"1042", "Floor":"Floor-7", "Status":"Sold", "Price":"1000000", "Customer":"Prasanna"},
{"Unit":"UNIT-501","Sft":"1042", "Floor":"Floor-8", "Status":"Under Construction","Price":"9000000","Customer":"Jeswin"},
  ]
coreModules = [{dno:"D1703",dname:"1500 sft"},{dno:"D1704",dname:"1800sft"},{dno:"D1209",dname:"909 sft"},{dno:"D324",dname:"2800 sft"},{dno:"D3256",dname:"3000 sft"},{dno:"D3245",dname:"3245 sft"}
  ,{dno:"D2312",dname:"3200 sft"}]

  constructor(public dialog: MatDialog) { }

   public openCoreDialog(lead) {
    
     }

  ngOnInit() {
  }

  public openAdd() {
    let dialogRef = this.dialog.open(AddsComponent, {
      
      height: 'auto',
      width: '600px'
    });
    dialogRef.afterClosed().subscribe(data => {
    });
  }
}
