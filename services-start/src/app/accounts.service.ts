import { Injectable } from '@angular/core';
import {  LoggingService} from "./logging.service";

@Injectable()
export class AccountsService {

  accountss = [
    {
      name: 'Master Account',
      status: 'active'
    },
    {
      name: 'Testaccount',
      status: 'inactive'
    },
    {
      name: 'Hidden Account',
      status: 'unknown'
    }
  ];
  constructor (private loggingService: LoggingService) {

  }

  addAccount(Newname: string, Newstatus: string) {
    this.accountss.push({name: Newname, status: Newstatus});
    this.loggingService.logStatusChange(Newstatus);

  }
  updateStatus(id: number,status: string) {
    this.accountss[id].status =status;
    this.loggingService.logStatusChange(status);
  }



}
