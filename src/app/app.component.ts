import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import {
  CustomToastrService,
  ToastrMessageType,
  ToastrPosition,
} from './services/ui/custom-toastr.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'ETicaret.Client';
  constructor(private toastrService: CustomToastrService) {
    toastrService.message(
      'Merhaba',
      'Umut',
      {messageType:ToastrMessageType.Success,
      position:ToastrPosition.BottomFullWidth}
    );
    toastrService.message('Merhaba', 'Umut', {
      messageType: ToastrMessageType.Info,
      position: ToastrPosition.TopCenter,
    });
    toastrService.message('Merhaba', 'Umut', {
      messageType: ToastrMessageType.Warning,
      position: ToastrPosition.TopLeft,
    });
    toastrService.message('Merhaba', 'Umut', {
      messageType: ToastrMessageType.Error,
      position: ToastrPosition.TopRight,
    });
  }
}
