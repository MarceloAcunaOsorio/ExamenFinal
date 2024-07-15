import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ProductoService } from '../../../services/producto.service';

@Component({
  selector: 'app-adidas',
  standalone: true,
  imports: [HttpClientModule, CommonModule, FormsModule],
  templateUrl: './adidas.component.html',
  styleUrl: './adidas.component.css',
  providers:[ProductoService]
})
export class AdidasComponent  {


  productos: any[] = [];
  nombre: string = '';
  precio: number | null = null;
  descripcion: string ='';
  imagen: string = '';

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







/*

   //mustra los datos desde la carpeta Data

  listaProd: Producto[]=[];
  zapatillasElegidas: Producto = new Producto();
  constructor(){}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.listaProd = listaProdutosAdidas;
  }

  verPelicula(nike: Producto):void {

    this.zapatillasElegidas = nike;
    console.log(this.zapatillasElegidas);
  }

  */

}
