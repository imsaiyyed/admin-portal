import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  sideBarMenu=[];
  constructor() { }

  ngOnInit() {
    this.sideBarMenu=[
      {
        title:'Comapny Details',
        path:'/company-details'
      },
      {
        title:'Account Details',
        path:'/account-details'
      },
      {
        title:'Client Details',
        path:'/client-details'
      },
      {
        title:'Project',
        path:'/projects'
      },
      {
        title:'Employee Details',
        path:'/employee-details'
      },
      {
        title:'Communication Details',
        path:'/communication-details'
      }
    ];
  }

}
