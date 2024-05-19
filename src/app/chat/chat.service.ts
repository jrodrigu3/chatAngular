import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  private apiUrl = 'http://localhost:5005/webhooks/rest/webhook';
  private apiUrls = 'http://192.168.100.84:5005/webhooks/rest/webhook';

  constructor(private http: HttpClient) { }

  sendMessage(message: string = 'hw'): Observable<any> {
    return this.http.post<any>(this.apiUrl, { sender: 1, message });
  }
}
