import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  name = 'Porfirije';

  @Input() count: number=0;

  constructor() { }

  ngOnInit(): void {
  }

}
