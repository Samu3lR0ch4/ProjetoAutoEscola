
import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { RodapeComponent } from '../../pages/rodape/rodape.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dashboardadm',
  templateUrl: './dashboardadm.component.html',
  imports: [CommonModule, HttpClientModule, FormsModule],
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
  localAddress: '',
  onlineLink: '',
  lessonType: '',
  aulas: []
};
  i: number | undefined;


  constructor(private http: HttpClient) {}

  ngOnInit(): void {
  
    this.loadStudents();
  }

generateLessons(index: number) {
  const student = this.students[index];
  const today = new Date();
  const totalDays = student.lessonType === 'teórica' ? 9 : 20;

  student.aulas = [];

  for (let i = 0; i < totalDays; i++) {
    const lessonDate = new Date(today);
    lessonDate.setDate(today.getDate() + i);
    student.aulas.push(lessonDate.toISOString().split('T')[0]); 
  }

  alert(`${totalDays} aulas adicionadas para ${student.name}`);
}

  editingIndex: number | null = null;

  openStudentForm() {
    this.resetForm();
    this.showForm = true;
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

 submitForm() {
  if (this.editingIndex !== null) {
    this.students[this.editingIndex] = { ...this.student };
    this.editingIndex = null;
  } else {
    this.students.push({ ...this.student });
  }
  this.resetForm();
}

editStudent(index: number) {
  this.student = { ...this.students[index] };
  this.showForm = true;
  this.editingIndex = index;
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
  localAddress: '',
  onlineLink: '',
  lessonType: '',
  aulas: []
    };
    this.showForm = false;
  }

  addAula() {
   
  }
  removeStudent(student: any) {
    const index = this.students.indexOf(student);
    if (index > -1) {
      this.students.splice(index, 1);
    }
  }
  toggleAulas(index: number) {
  this.students[index].showLessons = !this.students[index].showLessons;
}
removeLesson(studentIndex: number, aulaIndex: number) {
  this.students[studentIndex].aulas.splice(aulaIndex, 1);
}


  logout() {
    window.location.href = '/loginuser';
  }
}
