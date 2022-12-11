import { Entity } from '@loopback/repository';
export declare class DetalleFactura extends Entity {
    id?: string;
    ProductoId: string;
    cantidad: number;
    facturaId: string;
    productosId: string;
    constructor(data?: Partial<DetalleFactura>);
}
export interface DetalleFacturaRelations {
}
export declare type DetalleFacturaWithRelations = DetalleFactura & DetalleFacturaRelations;
