import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
  useFactory: (http: HttpClient) => new PersonasService(http),
  deps: [HttpClient]
})
export class PersonasService {

  constructor(private http: HttpClient) { }

  getUser(): Observable<any>{
    const params = new HttpParams()
      .set("page", "1")
      .set("pageSize", "20")
    return this.http.get("https://jsonplaceholder.typicode.com/posts", {params})
  }
  postChange(value: any){
    const headers = new HttpHeaders()
      .set("X-Auth", "value.userId")
    return this.http.put(`https://jsonplaceholder.typicode.com/posts/${value.id}`, value, {headers})
  }
}
