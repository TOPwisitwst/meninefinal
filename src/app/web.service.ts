import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable( {
    providedIn: 'root'
})

export class WebService {
    
    constructor(
        private http:HttpClient
    ) {}

    getAnswer() {
        return this.http.get('/assets/answer.json')
    }

}