import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-addsv',
  templateUrl: './addsv.component.html',
  styleUrls: ['./addsv.component.scss']
})
export class AddsvComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AddsvComponent>) { }

  ngOnInit() {
  }
  close(): void {
    this.dialogRef.close();
  }
}
