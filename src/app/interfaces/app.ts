export interface Producto {
    id: number;
    codigo: string;
    nombre: string;
    precio: number;
  }
  
  export interface PedidoItem {
    producto: Producto;
    precio: number;
    descuento: number;
    cantidad: number;
    importe: number;
  }
  
  
  export interface Cliente {
    id: number;
    cuit: string;
    apellido: string;
    nombre: string;
  }
  
  export interface Pedido {
    id: number;
    items: PedidoItem[];
    estado: 'Pendiente de Envío' | 'Reservado';
    cliente: Cliente;
    importe: number;
  }
  