import { Injectable } from "@angular/core";
import { IUser } from "../models/user";
import { userArray } from "../const/user";
import { map, of } from "rxjs";

@Injectable({
    providedIn:'root'
})
export class pipeableService{

userArr:Array<IUser>=userArray

$active=of(this.userArr)
.pipe(
    map(arr=>
        arr.filter(a=>{
         return    a.status==='active'
        })
    )
)

$inactive=of(this.userArr)
.pipe(map(arr=>arr.filter(a=>a.status==='inactive')))


$pending=of(this.userArr)
.pipe(map(arr=>arr.filter(a=>a.status==='pending')))

}