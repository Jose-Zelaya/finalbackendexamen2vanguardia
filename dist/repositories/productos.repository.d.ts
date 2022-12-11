import { Getter } from '@loopback/core';
import { DefaultCrudRepository, HasManyRepositoryFactory } from '@loopback/repository';
import { ConnAtlasDataSource } from '../datasources';
import { Productos, ProductosRelations, DetalleFactura } from '../models';
import { DetalleFacturaRepository } from './detalle-factura.repository';
export declare class ProductosRepository extends DefaultCrudRepository<Productos, typeof Productos.prototype.id, ProductosRelations> {
    protected detalleFacturaRepositoryGetter: Getter<DetalleFacturaRepository>;
    readonly detallefacturas2: HasManyRepositoryFactory<DetalleFactura, typeof Productos.prototype.id>;
    constructor(dataSource: ConnAtlasDataSource, detalleFacturaRepositoryGetter: Getter<DetalleFacturaRepository>);
}
