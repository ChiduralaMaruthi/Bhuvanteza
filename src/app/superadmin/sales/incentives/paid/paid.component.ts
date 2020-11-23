import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-paid',
  templateUrl: './paid.component.html',
  styleUrls: ['./paid.component.scss']
})
export class PaidComponent implements OnInit {
  items=[
    { "AN" : "John","P":"XP","Category" :"Uplevel","Rank" : "1","S":"Diwali Sale Target-20","C":"200","DE":"13-Nov-2020","VDP":"14-Nov-2020"},
    { "AN" : "Mark","P":"IBW","Category" :"Downlevel","Rank" : "2","S":"Dusshera Sale Target-20","C":"300","DE":"9-Jun-2009","VDP":"10-Jun-2009"},
    { "AN" : "Jessy","P":"SG","Category" :"Uplevel","Rank" : "3","S":"Diwali Sale Target-20","C":"400","DE":"2-Sep-2020","VDP":"4-Sep-2020"},
    { "AN" : "Lucy","P":"BT","Category" :"Downlevel","Rank" : "4","S":"Dusshera Sale Target-20","C":"500","DE":"13-Nov-2008","VDP":"14-Nov-2008"},
    { "AN" : "Jeswin","P":"XP","Category" :"Uplevel","Rank" : "5","S":"Diwali Sale Target-20","C":"600","DE":"4-Dec-2019","VDP":"5-Dec-2019"},
    ]
  constructor() { }

  ngOnInit() {
  }

}
