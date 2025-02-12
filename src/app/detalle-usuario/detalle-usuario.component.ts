import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';
import { UsersService } from '../services/users.service';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-detalle-usuario',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './detalle-usuario.component.html',
  styleUrl: './detalle-usuario.component.css',
})
export class DetalleUsuarioComponent implements OnInit {
  usuario: User | undefined;

  constructor(
    private usuariosService: UsersService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.params['id']);
    this.usuariosService.getId(id).subscribe((usuario) => {
      this.usuario = usuario;
    });
  }
}
