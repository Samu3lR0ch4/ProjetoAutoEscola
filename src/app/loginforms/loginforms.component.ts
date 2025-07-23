import { Component, inject, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, HttpClientModule],
  templateUrl: './loginforms.component.html',
  styleUrls: ['./loginforms.component.css']
})
export class LoginForm implements OnInit {
  router = inject(Router);
  http = inject(HttpClient);

  loginForm = new FormGroup({
    nome: new FormControl('', [Validators.required]),
    senha: new FormControl('', [Validators.required])
  });

  usuarios: any[] = [];

  ngOnInit() {

    this.http.get<any[]>('/assets/dados.json').subscribe(data => {
      this.usuarios = data;
    });
  }

  clickLogin() {
    const { nome, senha } = this.loginForm.value;
  
    if (!this.loginForm.valid || !nome || !senha) {
      alert('Existem campos não preenchidos!');
      return;
    }
  
    const usuario = this.usuarios.find(user => user.nome === nome && user.senha === senha);
  
    if (usuario) {
      localStorage.setItem('usuarioLogado', JSON.stringify(usuario));
      if (usuario.tipo === 'admin') {
        this.router.navigate(['/dashboardadm']);
      } else {
        this.router.navigate(['/dashboard']);
      }
    } else {
      alert('Usuário ou senha inválidos.');
    }
  }
  
}
