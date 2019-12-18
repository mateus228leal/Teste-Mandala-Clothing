import { Component } from '@angular/core';
import { ClientService } from './shared/client-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private Cliente: ClientService) {}

  showme(){
    alert('ok')
  }

}
