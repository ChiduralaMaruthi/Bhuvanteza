import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payable',
  templateUrl: './payable.component.html',
  styleUrls: ['./payable.component.scss']
})
export class PayableComponent implements OnInit {
  items=[
    { "AN" : "John","P":"XP","Category" :"Uplevel","Rank" : "1","DD":"13-Nov-2020","DP":"14-Nov-2020","DE":"15-Nov-2020","C":"200","AP":"500","APP":"300","B":"200"},
    { "AN" : "Mark","P":"IBW","Category" :"Downlevel","Rank" : "2","DD":"9-Jun-2009","DP":"10-Jun-2009","DE":"11-Jun-2009","C":"300","AP":"600","APP":"200","B":"400"},
    { "AN" : "Jessy","P":"SG","Category" :"Uplevel","Rank" : "3","DD":"2-Sep-2020","DP":"4-Sep-2020","DE":"10-Sep-2020","C":"400","AP":"700","APP":"400","B":"300"},
    { "AN" : "Lucy","P":"BT","Category" :"Downlevel","Rank" : "4","DD":"13-Nov-2008","DP":"14-Nov-2008","DE":"15-Nov-2008","C":"500","AP":"900","APP":"500","B":"400"},
    { "AN" : "Jeswin","P":"XP","Category" :"Uplevel","Rank" : "5","DD":"4-Dec-2019","DP":"5-Dec-2019","DE":"6-Dec-2019","C":"600","AP":"800","APP":"600","B":"200"},
    ]
  constructor() { }

  ngOnInit() {
  }

}
