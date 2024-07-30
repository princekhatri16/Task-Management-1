import { Component, Input ,} from '@angular/core';
import { Tasks} from '../../Tasks'

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrl: './tasks-list.component.css'
})
export class TasksListComponent { 

@Input() tasks:Tasks[]=[];
}
