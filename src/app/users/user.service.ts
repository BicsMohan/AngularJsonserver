import  {Injectable} from "@angular/core";
import {HttpClient} from '@angular/common/http';

@Injectable()
export class UserService{
    
    constructor(private http:HttpClient)
    {}
    private url: string='http://localhost:3000';
        getUsers() {
            return this.http.get(`${this.url}/results`);
                    
        }
    
}
