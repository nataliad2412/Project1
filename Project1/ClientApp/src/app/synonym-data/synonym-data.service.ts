import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';


@Injectable({ providedIn: 'root' })
export class SynonymService {
  myAppUrl: string = "";

  constructor(private _http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    this.myAppUrl = baseUrl;
  }
  saveSynonym(synonym: any): Observable<any> {
    return this._http.post<any>(this.myAppUrl + 'synonym', synonym)
      ;
  }

;
}
