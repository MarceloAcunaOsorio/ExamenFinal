import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../../services/producto.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-lista-producto',
  standalone: true,
  imports: [HttpClientModule, CommonModule, FormsModule],
  templateUrl: './lista-producto.component.html',
  styleUrl: './lista-producto.component.css',
  providers:[ProductoService]
})
export class ListaProductoComponent{


  productos: any[] = [];
  nombre: string = '';
  precio: number | null = null;
  descripcion: string ='';
  imagen: string = '';
  categoria: number | null = null;

  constructor(private jsonService: ProductoService) {}

  ngOnInit(): void {
    this.jsonService.getJsonData().subscribe(data => {
      this.productos = data;
    });
  }

  eliminar(producto: any): void {
    const index = this.productos.findIndex((elemento: any) => elemento.id === producto.id);
    
    if (index !== -1) {
      this.productos.splice(index, 1);
      this.jsonService.MetodoProducto(this.productos);
    } else {
      window.alert('El elemento de la lista no existe');
    }
  }

  modificar(producto: any): void {
    const index = this.productos.findIndex((elemento: any) => elemento.id === producto.id);
    
    if (index !== -1) {
      this.productos[index].nombre = this.nombre;
      this.productos[index].precio = this.precio;
      this.productos[index].descripcion = this.descripcion;
      this.productos[index].imagen = this.imagen;
      this.productos[index].categoria = this.categoria;
      this.jsonService.MetodoProducto(this.productos);
    } else {
      window.alert('El elemento de la lista no existe');
    }
  }

  addProductos(): void {
    const newProduc = {
      id: this.productos.length > 0 ? Math.max(...this.productos.map((p: any) => p.id)) + 1 : 1,
      nombre: this.nombre,
      precio: this.precio,
      descripcion: this.descripcion,
      imagen: this.imagen
    };
    this.productos.push(newProduc);
    this.jsonService.MetodoProducto(this.productos);
  }

  submitForm(): void {
    if (this.nombre && this.precio && this.descripcion !== null) {
      this.addProductos();
      this.nombre = '';
      this.precio = null;
      this.descripcion = ''
    } else {
      window.alert('Por favor, ingrese un nombre, un precio y una descripcion válida');
    }
  }


}
