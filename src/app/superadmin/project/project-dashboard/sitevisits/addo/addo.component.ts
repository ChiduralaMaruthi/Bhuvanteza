import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-addo',
  templateUrl: './addo.component.html',
  styleUrls: ['./addo.component.scss']
})
export class AddoComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AddoComponent>) { }

  ngOnInit() {
  }
  close(): void {
    this.dialogRef.close();
  }

}
