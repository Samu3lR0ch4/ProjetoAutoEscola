import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
    imports: [CommonModule, HttpClientModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  aluno: any;
  aulasTeoricas: any[] = [];
  aulasPraticas: any[] = [];
  progresso: number = 0;
  mostrarMenuUsuario: boolean = false;
  mostrarCalendarioTeorico: boolean = false;
  mostrarCalendarioPratico: boolean = false;

  diasDaSemana = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<any>('assets/alunos.json').subscribe(data => {
      this.aluno = data.aluno;
      this.aulasTeoricas = data.aulasTeoricas;
      this.aulasPraticas = data.aulasPraticas;
      this.calcularProgresso();
    });
  }

  calcularProgresso() {
    const totalTeoricas = this.aulasTeoricas.length;
    const totalPraticas = this.aulasPraticas.length;
    const total = totalTeoricas + totalPraticas;

    const assistidasTeoricas = this.aulasTeoricas.filter(aula => aula.assistida).length;
    const assistidasPraticas = this.aulasPraticas.filter(aula => aula.assistida).length;
    const assistidas = assistidasTeoricas + assistidasPraticas;

    this.progresso = total > 0 ? Math.round((assistidas / total) * 100) : 0;
  }

  podeMarcarProva(): boolean {
    const teoricasCompletas = this.aulasTeoricas.every(aula => aula.assistida);
    const praticasCompletas = this.aulasPraticas.every(aula => aula.assistida);
    return teoricasCompletas && praticasCompletas;
  }

  toggleMenuUsuario(): void {
    this.mostrarMenuUsuario = !this.mostrarMenuUsuario;
  }

  toggleCalendarioTeorico(): void {
    this.mostrarCalendarioTeorico = !this.mostrarCalendarioTeorico;
  }

  toggleCalendarioPratico(): void {
    this.mostrarCalendarioPratico = !this.mostrarCalendarioPratico;
  }

  logout(): void {
    window.location.href = '/loginuser';
  }

  diasDoMes(mes: number, ano: number): number[] {
    const dias = new Date(ano, mes, 0).getDate();
    return Array.from({ length: dias }, (_, i) => i + 1);
  }

  diaSemana(dia: number, mes: number, ano: number): string {
    const data = new Date(ano, mes - 1, dia);
    return this.diasDaSemana[data.getDay()];
  }

  podeSelecionar(dia: number, mes: number, ano: number): boolean {
    const data = new Date(ano, mes - 1, dia);
    const diaSemana = data.getDay();
    return diaSemana >= 1 && diaSemana <= 5; // Segunda a Sexta
  }

  selecionarData(tipo: string, dia: number, mes: number, ano: number): void {
    const dataSelecionada = `${dia}/${mes}/${ano}`;
    alert(`Prova ${tipo} marcada para: ${dataSelecionada}`);
    if (tipo === 'teorica') this.mostrarCalendarioTeorico = false;
    if (tipo === 'pratica') this.mostrarCalendarioPratico = false;
  }
}
