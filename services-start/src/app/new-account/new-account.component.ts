import { Component } from '@angular/core';
import {  LoggingService} from "../logging.service";
import {  AccountsService} from "../accounts.service";


@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  // providers is added to make angular know that we want LoggingService class og logging.service.ts service file
 // providers: [LoggingService]
})
export class NewAccountComponent {


  constructor(private loggingservice: LoggingService , private accountService:AccountsService ) {

  }

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountService.addAccount(accountName,accountStatus);

   //  this.loggingservice.logStatusChange(accountName,accountStatus);

  }
}
