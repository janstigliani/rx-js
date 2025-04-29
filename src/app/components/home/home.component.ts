
import { Component, inject } from '@angular/core';
import { CommunicationService } from '../../services/communication.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  commServ = inject(CommunicationService)

  changeReSbj() {
    const newString = "normalSubject" + Date.now();
    this.commServ.reSbj.next(newString);
  }

  changeBSbj() {
    const newString = "BehaviourSubject" + Date.now();
    this.commServ.bSbj.next(newString);
  }

  changeSbj() {
    const newString = "ReplaySubject" + Date.now();
    this.commServ.sbj.next(newString);
  }

  

}
