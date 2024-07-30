import { Component } from '@angular/core';
import { Tasks } from '../../Tasks';
@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {

  
  ngOnInit() {  }
  add(){}  
  task:Tasks[]
  constructor() {
    this.task = [
      {
        sno: 1,
        title: 'Button',
        desc: 'Today i have to complete the add button logic',
        active: true
      },
      {
        sno: 2,
        title: 'Debugginh',
        desc: 'Today i have to Debug the codes',
        active: true
      },
      {
        sno: 3,
        title: 'Submission',
        desc: 'Today i have to handover the project',
        active: true
      }
    ]
  }

}
