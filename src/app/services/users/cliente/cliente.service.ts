import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  apiUrl = 'http://localhost:4200/';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(
    private httpClient: HttpClient
  ) { }

  public getLivesWithFlag (flag: string): Observable<> {
    return this.httpClient.get<>(this.apiUrl + '?flag=' + flag);
  }
}
