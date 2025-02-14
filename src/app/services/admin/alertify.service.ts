import { Injectable } from '@angular/core';
declare var alertify:any;

@Injectable({
  providedIn: 'root'
})
export class AlertifyService {
  constructor() { }
 message(message:string,messageType:MessageType,position: Position,delay:number=3,dismissOther:boolean = false){
    alertify.set('notifier','position',position);
    alertify.set('notifier', 'delay', delay);
    const msj=alertify[messageType](message);
    if(dismissOther)
      msj.dismissOthers();
 }

 dismiss(){
  alertify.dismissAll();
 }
}

export enum MessageType{
  Error = "error",
  Message="message",
  Notify="notify",
  Success="success",
  Warning="warning"
}
export enum Position{
  TopCenter="top-center",
  TopRight="top-right",
  TopLeft="top-left",
  BottomRight="bottom-right",
  BottomCenter="bottom-center",
  BottomLeft="bottom-left"
}