import { AddsvComponent } from './addsv/addsv.component';
import { Settings } from './../../../../app.settings.model';
import { Component, OnInit } from '@angular/core';
import { DeleteConfirmDialogComponent } from 'src/app/shared/delete-confirm-dialog/delete-confirm-dialog.component';
import { MatDialog } from '@angular/material';
import { AppSettings } from 'src/app/app.settings';

@Component({
  selector: 'app-sitevisits',
  templateUrl: './sitevisits.component.html',
  styleUrls: ['./sitevisits.component.scss']
})
export class SitevisitsComponent implements OnInit {
  public single: any[];
  public sizes: any[];
  public colors: any[];
  public width: any[];
  public countries: any[];
  public singles: any[];
  public multi: any[];
  public analytics: any[];
  public showLegend = true;
  public showLegends = false;
  public gradient = true;
  public showXAxis = true;
  public showYAxis = true;
  public showXAxisLabel = false;
  public xAxisLabel = 'Year';
  public showYAxisLabel = false;
  public yAxisLabel = 'Population';
  public filterToggle:boolean;
  public filterToggle1:boolean;
  public colorScheme = {
    domain: ['#2F3E9E', '#D22E2E', '#378D3B', '#0096A6', '#F47B00', '#606060']
  }; 
  public showLabels = true;
  public explodeSlices = false;
  public doughnut = false;
  public settings: Settings;
  public autoScale = true; 
  items = [
    {"vd":"05-02-2020","an":"John","o":"Add",},
    {"vd":"06-03-2020","an":"Mark","o":"Add",},
    {"vd":"23-06-2020","an":"Jeswin","o":"Add",},
    {"vd":"05-03-2020","an":"Lucy","o":"Add",},
    {"vd":"06-06-2020","an":"Sam","o":"Add",},
    ]
  constructor(public dialog: MatDialog) { 
    const single = [
      {
        name: 'John',
        value: 20
      },
      {
        name: 'Mark',
        value: 70
      },
      {
        name: 'Jeswin',
        value: 10
      }
     
    ];
    Object.assign(this, {single});
  }
  

  

  ngOnInit() {

  }

 
  public openaddsv() {
    let dialogRef = this.dialog.open(AddsvComponent, {
      
      height: 'auto',
      width: '600px'
    });
    dialogRef.afterClosed().subscribe(data => {
    });
  }

}
