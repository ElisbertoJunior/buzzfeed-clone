import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quizz',
  templateUrl: './quizz.component.html',
  styleUrls: ['./quizz.component.css']
})
export class QuizzComponent implements OnInit {
  title: string = ""
  questions: any = ""
  questionSelected: any 

  constructor() { }

  ngOnInit(): void {

  }

}
