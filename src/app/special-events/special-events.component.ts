import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';

@Component({
  selector: 'app-special-events',
  templateUrl: './special-events.component.html',
  styleUrls: ['./special-events.component.css']
})
export class SpecialEventsComponent implements OnInit {
specialEvents=[]
  constructor(private _special:EventService) { }

  ngOnInit() {
    this._special.getSpecial().subscribe(
      res=>this.specialEvents=res,
      error=>console.log(error)
    )
  }

}
