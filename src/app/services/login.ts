import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { UserInfos } from '../models/models.component';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
http = inject(HttpClient)

  login(nome: string, senha: string): Observable<UserInfos> {
    return this.http.post<UserInfos>("http://localhost:3001/loginuser",{nome,senha})
    .pipe(
      tap((user) =>{sessionStorage.setItem("email",user.email)}
      )
    )
  }
}

