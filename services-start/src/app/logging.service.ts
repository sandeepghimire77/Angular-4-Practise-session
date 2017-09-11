import { Injectable } from '@angular/core';

@Injectable()
export class LoggingService {
  logStatusChange( status: string){
    console.log("A server statis is change, new status of account" +  "is : " + status);
    document.getElementById("kera").innerHTML = "A server statis is change, new status of account" +  "is : " + status;
  }
  logNameChange(name: string) {
    console.log(name);
  }

  constructor() { }

}
