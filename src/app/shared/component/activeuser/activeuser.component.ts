import { Component, OnInit } from '@angular/core';
import { pipeableService } from '../../service/pipeable.service';
import { IUser } from '../../models/user';

@Component({
  selector: 'app-activeuser',
  templateUrl: './activeuser.component.html',
  styleUrls: ['./activeuser.component.scss']
})
export class ActiveuserComponent implements OnInit {
active!:Array<IUser>
  constructor( private _act:pipeableService) { }

  ngOnInit(): void {


    this._act.$active
    .subscribe(data=>{
      this.active=data
    })
  }

  

}
