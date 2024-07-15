import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer f7779eaf-91a0-4160-a057-e932cb097ec4'
    })
  }

  private jsonUrl = 'https://firebasestorage.googleapis.com/v0/b/producto-json.appspot.com/o/productos.json?alt=media&token=f7779eaf-91a0-4160-a057-e932cb097ec4'; 

  private lista:any;

  constructor(private http: HttpClient) {}

  getJsonData(): Observable<any> {
    return this.http.get(this.jsonUrl);
  }

  MetodoProducto(listaProducto:any) {
    console.log(listaProducto);
    this.http.post(this.jsonUrl,listaProducto,this.httpOptions).subscribe(
      response => {
        console.log('Archivo JSON sobrescrito con exito', response);
      },
      error => {
        console.error('Error al sobrescribir el archivo JSON', error);
      })
  }
}