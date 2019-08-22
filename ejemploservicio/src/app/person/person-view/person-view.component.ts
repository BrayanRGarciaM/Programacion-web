import { Component, OnInit, Input } from '@angular/core';
import { Person} from 'src/app/model/person';
@Component({
  selector: 'app-person-view',
  templateUrl: './person-view.component.html',
  styleUrls: ['./person-view.component.css']
})
export class PersonViewComponent implements OnInit {
  @Input()
  person: Person = new Person(1, 'Alice', 28);
  constructor() { }

  ngOnInit() {
  }

}
