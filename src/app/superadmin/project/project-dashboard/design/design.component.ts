import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-design',
  templateUrl: './design.component.html',
  styleUrls: ['./design.component.scss']
})
export class DesignComponent implements OnInit {
  
  constructor(public dialog: MatDialog) { }

  coreModules = [{dno:"Design No: D-01",dname:"Design Name: Beam Layout"},{dno:"Design No: D-02",dname:"Design Name: Structure"},{dno:"Design No: D-03",dname:"Design Name: Beam layout"},{dno:"Design No: D-04",dname:"Design Name: Fire Fighting"},{dno:"Design No: D-05",dname:"Design Name: Plumbing"},{dno:"Design No: D-06",dname:"Design Name: Electrical"}
  ,{dno:"Design No: D-07",dname:"Design Name: Beam Layout"}]
  
  ngOnInit() {

  }

  public openCoreDialog(lead) {
    
}

}
