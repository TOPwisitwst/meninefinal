import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';





@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})
export class Page1Component  implements OnInit{


  name:any;
  currentDate: Date;
  startDate: string = '2020-12-24';
  daysDiff: number = 0;
  formattedDateDiff: string = '';
  showMessage: boolean = false;
  showMusic: boolean = true;
  points: number = 0;
  welcome: boolean = true;
  textchange: string = "ต้องตอบคำถามก่อนนะ ถึงจะไปต่อได้ คะแนนน้อยก็ไปต่อไม่ได้นะ แบร่";
  keeppoint: number = 0;


  
  
    

  constructor( private http: HttpClient ){
    this.currentDate = new Date();
    const date1 = new Date(this.startDate);
    const date2 = new Date();
    const timeDiff = date2.getTime() - date1.getTime();
    this.daysDiff = Math.floor(timeDiff / (1000 * 3600 * 24));
    this.formattedDateDiff = daysToYearsAndMonths(this.daysDiff);
    
    }

  ngOnInit(){
    

  }


  openMessage() {
    if (this.name && this.name.trim() !== '') {
      this.showMessage = true;
      this.welcome = false;

    } else {
      alert('Please enter your name !')
    }
  }

  hidemusic() {
    this.showMusic = !this.showMusic;
  }

  onAnswerSelected(pointsToAdd: number) {
    this.points += pointsToAdd;
  }

  submitForm() {
    // Add your form submission logic here
    console.log('Form submitted !');
    console.log(this.points);

    this.keeppoint = this.points;

    if (this.points > 7) {
      this.textchange = "เยี่ยมมาก เค้ารู้มันง่ายสำหรับเธอ !!";
    }

    if (this.points  < 5) {
      this.textchange = "ตอบผิดเยอะไปรึเปล่าเนี่ยย ไออ้วน ตั้งใจหน่อยฮะ !!!";
    }
    
  }

 


}

function daysToYearsAndMonths(days: number): string {
  const years = Math.floor(days / 365);
  const months = Math.floor((days % 365) / 30);

  if (years === 0) {
    return `${months} month${months !== 1 ? 's' : ''}`;
  } else if (months === 0) {
    return `${years} year${years !== 1 ? 's' : ''}`;
  } else {
    return `${years} year${years !== 1 ? 's' : ''} ${months} month${months !== 1 ? 's' : ''}`;
  }
}


