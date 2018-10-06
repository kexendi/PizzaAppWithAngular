import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class DisplayService {

    constructor(
        private http: HttpClient
    ) { }

    getPizzas() {
        return this.http.get('/api/pizza');
    }

    postPizza(data) {
        return this.http.post<any>('/api/pizza', data);
    }
}
