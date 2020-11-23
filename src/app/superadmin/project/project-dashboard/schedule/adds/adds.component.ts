import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-adds',
  templateUrl: './adds.component.html',
  styleUrls: ['./adds.component.scss']
})
export class AddsComponent implements OnInit {
  
  constructor(public dialogRef: MatDialogRef<AddsComponent>,@Inject(MAT_DIALOG_DATA) public user: number) { }

  ngOnInit() {
  }
  close(): void {
    this.dialogRef.close();
  }

  saveStep() {
    this.dialogRef.close();
  }
}

