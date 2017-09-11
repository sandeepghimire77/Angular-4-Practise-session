import { Component, OnInit } from '@angular/core';
import  {AccountsService} from "./accounts.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

  // providers added so that angular knows how to create those account service
})
export class AppComponent  implements  OnInit{
  accounts : {name: string, status: string}[] = [];
  // since accounts is there in the template html of app.component.html .
  // we need to add accounts here . and also it must be empty array with the types of name and status. we do it thisway

  // now we need to inject our account service here coz we have
  constructor(private accountService: AccountsService) {

  }

  ngOnInit() {
    this.accounts = this.accountService.accountss;
    //normal javascript behavior we are getting access to the exact same array og accounts.service.ts
  }

}
