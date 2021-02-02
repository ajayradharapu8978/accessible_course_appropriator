import { Component, Inject, OnInit } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';

export interface DialogData {
  animal: 'panda' | 'unicorn' | 'lion';
}

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
  panelOpenState = false;
  constructor(public dialog: MatDialog) {}

  // tslint:disable-next-line: typedef
  openDialog() {
    this.dialog.open(DialogDataExampleDialog, {
      data: {
        animal: 'panda'
      }
    });
  }

  ngOnInit(): void {
  }

}


@Component({
  // tslint:disable-next-line: component-selector
  selector: 'dialog-data-example-dialog',
  templateUrl: 'courseForm.html',
})
// tslint:disable-next-line: component-class-suffix
export class DialogDataExampleDialog {
  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) {}
}
