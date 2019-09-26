import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Estudiante } from './estudiante';
import { ESTUDIANTES1 } from './estudiantes.json.js';
import { ESTUDIANTES2 } from './estudiantes.json';

@Injectable({
  providedIn: 'root'
})
export class EstudianteService {

  constructor() { }
  getEstudiantes1(): Observable<Estudiante[]> {
    return of (ESTUDIANTES1);
  }
  getEstudiantes2(): Observable<Estudiante[]> {
    return of (ESTUDIANTES2);
  }
}
