import { Component, inject } from '@angular/core';
import { CommunicationService } from '../../services/communication.service';

@Component({
  selector: 'app-slave',
  imports: [],
  templateUrl: './slave.component.html',
  styleUrl: './slave.component.scss'
})
export class SlaveComponent {

  commService = inject(CommunicationService);

  subscribeReSbj() {
    this.commService.sbj.subscribe(data => console.log("Normal subject",data))
  }

  subscribeBSbj() {
    this.commService.bSbj.subscribe(data => console.log("Behaviour subject",data))
  }

  subscribeSbj() {
    this.commService.reSbj.subscribe(data => console.log("Replay subject",data))
  }

}
