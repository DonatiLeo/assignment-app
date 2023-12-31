import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignments',
  templateUrl: './assignments.component.html',
  styleUrls: ['./assignments.component.css']
})
export class AssignmentsComponent implements OnInit {

  titre : String = "Mon application Angular sur les assignments"
  assignments = [
    {
      nom: "Devoir de Maths",
      dateDeRendu: new Date('2024-03-01'),
      rendu: true
    },
    {
      nom: "TP1 de Java",
      dateDeRendu: new Date('2023-03-05'),
      rendu: false
    },
    {
      nom: "Angular c'est encore mieux",
      dateDeRendu: new Date('2021-03-10'),
      rendu: false
    }];

  constructor() { }

  ngOnInit(): void {
  }

}
