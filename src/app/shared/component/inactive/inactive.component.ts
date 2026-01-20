import { Component, OnInit } from '@angular/core';
import { IUser } from '../../models/user';
import { pipeableService } from '../../service/pipeable.service';

@Component({
  selector: 'app-inactive',
  templateUrl: './inactive.component.html',
  styleUrls: ['./inactive.component.scss']
})
export class InactiveComponent implements OnInit {
inactive!:Array<IUser>
  constructor(private _inact:pipeableService) { }

  ngOnInit(): void {

    
    this._inact.$inactive
    .subscribe(data=>{
      console.log(data)
      this.inactive=data
    })
  }

}
