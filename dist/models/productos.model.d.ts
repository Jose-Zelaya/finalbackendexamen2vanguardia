import { Entity } from '@loopback/repository';
import { DetalleFactura } from './detalle-factura.model';
export declare class Productos extends Entity {
    id?: string;
    descripcion: string;
    valor: number;
    detallefacturas2: DetalleFactura[];
    constructor(data?: Partial<Productos>);
}
export interface ProductosRelations {
}
export declare type ProductosWithRelations = Productos & ProductosRelations;
