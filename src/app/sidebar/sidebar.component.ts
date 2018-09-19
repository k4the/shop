import { Component, OnInit } from '@angular/core';
import { Keys } from '../global.constants';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  keys = Keys;

  constructor() { }

  ngOnInit() {
  }

  goto(place: string): void {

  }
}
