import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-v3',
  templateUrl: './v3.component.html',
  styleUrls: ['./v3.component.css']
})
export class V3Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  showAndHide() {
    let v3 = document.getElementById('v3-log')
    if (v3.classList.contains('hide')) {
      v3.classList.add('show')
      v3.classList.remove('hide')
    } else {
      v3.classList.add('hide')
      v3.classList.remove('show')
    }
  }
}
