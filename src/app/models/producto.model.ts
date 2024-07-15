export class Producto{
    id: number;
    nombre:string;
    precio:number;
    descripcion:string;
    imagen:string;
    categoria: number;

    constructor(){
        this.id =0,
        this.nombre='',
        this.precio=0,
        this.descripcion='',
        this.imagen='',
        this.categoria=0
    }

}
