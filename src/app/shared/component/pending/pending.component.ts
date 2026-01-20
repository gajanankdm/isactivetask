import { Component, OnInit } from '@angular/core';
import { pipeableService } from '../../service/pipeable.service';
import { IUser } from '../../models/user';

@Component({
  selector: 'app-pending',
  templateUrl: './pending.component.html',
  styleUrls: ['./pending.component.scss']
})
export class PendingComponent implements OnInit {
pending!:Array<IUser>
  constructor(private _pending:pipeableService) { }

  ngOnInit(): void {
    this._pending.$pending
    .subscribe(data=>{
this.pending=data
    })
  }

}
