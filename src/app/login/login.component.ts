import { Component, OnInit } from '@angular/core';
import { WebService } from '../web.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  openQuestion = false;
  answerLogin:any;
  answer:any[] = [];
  message: any;
  timeOut: number = 10;
  timeoutId:any;

  constructor(private webService: WebService, private router: Router) {}

  ngOnInit() {
    this.webService.getAnswer().subscribe(data => {
      this.answerLogin = data;
    });
  }

  closeQuestion () {
    this.openQuestion = false;
    this.message = '';
    clearInterval(this.timeoutId);
  }

  sentData(answer: string) {
    this.answer = [];
    console.log('Selected answer: ', answer);
    this.answer.push(answer);
    this.openQuestion = false;
    this.testfunction(answer);
  }

  testfunction(answer: string) {
    if (answer == "C. Christmas Day") {
      console.log(this.answer);
      this.message = 'Join my world!';

      this.timeoutId = setInterval(() => {
        if (this.timeOut > 0) {
          this.timeOut--;
        } else {
          clearInterval(this.timeoutId);
          this.router.navigate(['/1']);
        }
      },1000);

    } else {
      this.message = 'Get out!!!';
    }  
  }
}