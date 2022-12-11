import {Entity, model, property, belongsTo} from '@loopback/repository';
import {Factura} from './factura.model';
import {Productos} from './productos.model';

@model()
export class DetalleFactura extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;
  @property({
    type: 'string',
    required: true,
  })
  ProductoId: string;

  @property({
    type: 'number',
    required: true,
  })
  cantidad: number;

  @belongsTo(() => Factura)
  facturaId: string;

  @belongsTo(() => Productos)
  productosId: string;

  constructor(data?: Partial<DetalleFactura>) {
    super(data);
  }
}

export interface DetalleFacturaRelations {
  // describe navigational properties here
}

export type DetalleFacturaWithRelations = DetalleFactura & DetalleFacturaRelations;
