import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})

export class NotificatonService {

  constructor(private toastrService: ToastrService) { }

  showWarning(msg:string){
    this.toastrService.warning(msg);
  }

  showSuccess(msg:string){
    this.toastrService.success(msg);
  }

  showError(msg:string){
  this.toastrService.error(msg);
}
}
