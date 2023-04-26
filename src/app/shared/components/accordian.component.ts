import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { AccordianModel } from '../models/accordian.model';

@Component({
  selector: 'app-accordian',
  templateUrl: './accordian.component.html',
  styleUrls: ['./accordian.component.scss']
})
export class AccordianComponent implements OnChanges  {
  @Input() accordianInput:AccordianModel | undefined;
  public isExpanded = false;
  public statusData:any;
  public eventData: any;

  constructor() { }
  ngOnChanges(changes: SimpleChanges) {
    // changes.prop contains the old and the new value...
    console.log(this.accordianInput)
    this.statusData = this.accordianInput?.status;
    this.eventData = this.accordianInput?.events;
  }

  ngOnInit(): void {
    
  }

  toggleAccordian() {
    this.isExpanded = !this.isExpanded;
  }
}
