import { Component, OnInit } from '@angular/core';
import { Estudiante } from './estudiante';
import { EstudianteService } from './estudiante.service';
import { StringDecoder } from 'string_decoder';

@Component({
  selector: 'app-estudiantes',
  templateUrl: './estudiantes.component.html',
  styleUrls: ['./estudiantes.component.scss']
})
export class EstudiantesComponent implements OnInit {

  constructor(private estudianteService: EstudianteService) { }
  disabled = false;
  ShowFilter = false;
  limitSelection = false;
  selectedStudents1: Estudiante[];
  selectedStudents2: Estudiante[];
  dropDownSettings: any = [];
  estudiantes1: Estudiante[];
 estudiantes2: Estudiante[];

  ngOnInit() {
    this.estudianteService.getEstudiantes1().subscribe(
      estudiantes => this.estudiantes1 = estudiantes
    );
    this.estudianteService.getEstudiantes2().subscribe(
      estudiantes => this.estudiantes2 = estudiantes
    );
  }
  passOneToDer(): void {
    console.log(this.selectedStudents1[0]);
    for (let index = this.selectedStudents1.length - 1; index >= 0 ; index--) {
      this.estudiantes2.push(this.selectedStudents1[index]);
    }
    for (let index = this.selectedStudents1.length - 1; index >= 0 ; index--) {
      this.estudiantes1.splice(this.estudiantes1.indexOf(this.selectedStudents1[index]), 1);
      this.selectedStudents1.pop();
    }
  }
  passOneToIzq(): void{
    console.log(this.selectedStudents1);
    for (let index = this.selectedStudents1.length - 1; index >= 0 ; index--) {
      this.estudiantes1.push(this.selectedStudents1[index]);
    }
    for (let index = this.selectedStudents1.length - 1; index >= 0 ; index--) {
      this.estudiantes2.splice(this.estudiantes2.indexOf(this.selectedStudents1[index]), 1);
      this.selectedStudents1.pop();
    }
  }
  passAllToDer(): void {
    for (let index = this.estudiantes1.length - 1; index >= 0 ; index--) {
      this.estudiantes2.push(this.estudiantes1[index]);
      this.estudiantes1.pop();
    }
  }
  passAllToIzq(): void {
    for (let index = this.estudiantes2.length - 1; index >= 0 ; index--) {
      this.estudiantes1.push(this.estudiantes2[index]);
      this.estudiantes2.pop();
    }
  }

}
