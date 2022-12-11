import { Entity } from '@loopback/repository';
import { DetalleFactura } from './detalle-factura.model';
export declare class Factura extends Entity {
    id?: string;
    correlativo: number;
    fecha: string;
    cliente: string;
    direccion: string;
    telefono: string;
    email: string;
    detalleFacturas: DetalleFactura[];
    constructor(data?: Partial<Factura>);
}
export interface FacturaRelations {
}
export declare type FacturaWithRelations = Factura & FacturaRelations;
