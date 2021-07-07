import { Component, OnInit, Output, ElementRef } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { EventEmitter } from '@angular/core';
import { Input } from '@angular/core';
import { ViewChild } from '@angular/core';

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.scss'],
})
export class DatepickerComponent implements OnInit {
  @Output() rangeDate: EventEmitter<any> = new EventEmitter();
  @Input() dateLocalStorage: any = ""
  @ViewChild('fromInputStart') fromInputStart: any = "";
  @ViewChild('fromInputEnd') fromInputEnd: any = "";
  @Output() clearForm = new EventEmitter()
  range = new FormGroup({
    start: new FormControl(),
    end: new FormControl(),
  });
  dateStart!:any
  dateEnd!:any
  constructor() {}
  addEvent(type: string, event: MatDatepickerInputEvent<Date>) {
    this.rangeDate.emit({
      startDate: this.range.value.start,
      endDate: this.range.value.end,
    });
  }
  ngOnInit(): void {
    if(this.dateLocalStorage) {
      this.dateStart = this.dateLocalStorage.startDate
      this.dateEnd = this.dateLocalStorage.endDate
    }
  }

  clear() {
    this.fromInputStart.nativeElement.value = ''
    this.fromInputEnd.nativeElement.value = ''
    this.clearForm.emit()
  }
}
