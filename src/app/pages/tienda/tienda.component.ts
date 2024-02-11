import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-tienda',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './tienda.component.html',
  styleUrl: './tienda.component.css'
})
export class TiendaComponent {
  title = 'Tienda';

  alerta(title: string, text: string) {
    Swal.fire({
      title: "¿Desea añadir el producto al carrito?",
      text: title + " - " + text,
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#0D6EFD",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, añadir!"
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "¡Producto agregado al carrito!",
          icon: "success",
          confirmButtonColor: "#0D6EFD",
        });
      }
    });
  }
}
