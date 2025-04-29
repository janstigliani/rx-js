import { Component, inject } from '@angular/core';
import { CommunicationService } from '../../services/communication.service';
import { AsyncPipe } from '@angular/common';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-slave',
  imports: [AsyncPipe],
  templateUrl: './slave.component.html',
  styleUrl: './slave.component.scss'
})
export class SlaveComponent {

  commService = inject(CommunicationService);

  normalSubscription?:Subscription;

  subscribeReSbj() {
    this.commService.reSbj.subscribe(data => console.log("Replay subject",data))
  }

  subscribeBSbj() {
    this.commService.bSbj.subscribe(data => console.log("Behaviour subject",data))
  }

  subscribeSbj() {
    this.normalSubscription = this.commService.sbj.subscribe(data => console.log("Normal subject",data))
  }

  unsuscribe() {
    this.normalSubscription?.unsubscribe();  
  }

}
