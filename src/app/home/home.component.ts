import {Component} from '@angular/core';
import { Employee } from '../models/employee.model';

@Component({
  selector: 'home',
  styleUrls: ['./home.component.css'],
  templateUrl: './home.component.html'
})
export class HomeComponent {
  languages : string[] = ['English', 'Spanish', 'Other'];
  model = new Employee('', 'Smith', true,'w2','English');

}
