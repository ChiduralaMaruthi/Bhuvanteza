import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AddComponent } from './add/add.component';

@Component({
  selector: 'app-drawings',
  templateUrl: './drawings.component.html',
  styleUrls: ['./drawings.component.scss']
})
export class DrawingsComponent implements OnInit {

  coreModules = [{dno:"Construction Plan Doc",dname:""},{dno:"Concrete Testing Results",dname:""}]
  
  
  constructor(public dialog: MatDialog) { }

  ngOnInit() {

  }

  public openCoreDialog(lead) {
   
}

public openAdd() {
  let dialogRef = this.dialog.open(AddComponent, {
    
    height: 'auto',
    width: '600px'
  });
  dialogRef.afterClosed().subscribe(data => {
  });
}
}
