// src/app/components/dashboardadm/dashboardadm.component.ts
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { RodapeComponent } from '../../pages/rodape/rodape.component';

@Component({
  selector: 'app-dashboardadm',
  templateUrl: './dashboardadm.component.html',
  imports: [CommonModule, RodapeComponent],
  styleUrls: ['./dashboardadm.component.css']
})
export class DashboardAdmComponent implements OnInit {
  showUserMenu = false;
  showForm = false;
  students: any[] = [];  
  student: any = {
    name: '',
    dob: '',
    gender: '',
    licenseType: '',
    phone: '',
    category: '',
    cpf: '',
    classType: '',
    onlineLink: '',
    aulas: []
  };

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
  
    this.loadStudents();
  }


  loadStudents() {
    this.http.get<any[]>('assets/students.json').subscribe(data => {
      this.students = data;  
    }, error => {
      console.error('Erro ao carregar os alunos do JSON', error);
    });
  }

  openUserMenu() {
    this.showUserMenu = !this.showUserMenu;
  }

  
  openStudentForm() {
    this.showForm = true;
  }

  submitForm() {
    this.students.push({ ...this.student });
    this.resetForm();
    alert('Aluno cadastrado com sucesso!');
  }

  resetForm() {
    this.student = {
      name: '',
      dob: '',
      gender: '',
      licenseType: '',
      phone: '',
      category: '',
      cpf: '',
      classType: '',
      onlineLink: '',
      aulas: []
    };
    this.showForm = false;
  }

  addAula() {
   
  }


  editStudent(student: any) {
    
  }


  removeStudent(student: any) {
    const index = this.students.indexOf(student);
    if (index > -1) {
      this.students.splice(index, 1);
    }
  }

  logout() {
    window.location.href = '/loginuser';
  }
}
