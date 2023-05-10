import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})
export class Page1Component  implements OnInit{

  newData: any = {};
  value:any;

  formData = {
    name: '',
    email: ''  };

  constructor( private http: HttpClient ){}

  ngOnInit(){
    
  }

  // addData() {
  //   const groupData = this.newData;
  //   this.http.post('/assets/data.json', groupData).subscribe(
  //     response => {
  //       console.log('Data saved:', response);
  //     },
  //      error => {
  //       console.error('Error saving data:', error);
  //     });
  // }

  // submitForm(form: NgForm) {
  //   if (form.valid) {
  //     console.log('Form submitted!', this.formData);
  //   }
  // }
  

}
