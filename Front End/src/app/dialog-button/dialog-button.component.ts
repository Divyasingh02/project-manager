import { Component, OnInit } from '@angular/core';
import { UserDialogComponent } from '../user-dialog/user-dialog.component';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-dialog-button',
  templateUrl: './dialog-button.component.html',
  styleUrls: ['./dialog-button.component.css']
})
export class DialogButtonComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }
  openDialog(): void {
    let dialogRef = this.dialog.open(UserDialogComponent, {
      // width: '250px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}
