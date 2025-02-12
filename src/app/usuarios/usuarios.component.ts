import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../model/user';
import { UsersService } from '../services/users.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usuarios',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './usuarios.component.html',
  styleUrl: './usuarios.component.css',
})
export class UsuariosComponent implements OnInit {
  users$ = new Observable<User[]>();

  constructor(private servicioUsers: UsersService, private router: Router) {}

  ngOnInit(): void {
    this.users$ = this.servicioUsers.getUsers();
  }
  verDetalleUsuario(id: number): void {
    this.router.navigate([`/usuario/${id}`]);
  }
}
