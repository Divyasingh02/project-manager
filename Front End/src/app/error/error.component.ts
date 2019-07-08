import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {

  errorMessage = 'Oops! Some error occured. Please contact support at 080-88998899'

  constructor() { }

  ngOnInit() {
  }

}
