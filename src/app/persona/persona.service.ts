import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()

export class PersonaService{

    constructor(private http: HttpClient){

    }

    private url:string = "http://localhost:3000/personas";

    getPersona(){
        return this.http.get(this.url);
    }
}