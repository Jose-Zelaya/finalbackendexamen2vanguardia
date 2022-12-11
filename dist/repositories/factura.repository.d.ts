import { Getter } from '@loopback/core';
import { DefaultCrudRepository, HasManyRepositoryFactory } from '@loopback/repository';
import { ConnAtlasDataSource } from '../datasources';
import { Factura, FacturaRelations, DetalleFactura } from '../models';
import { DetalleFacturaRepository } from './detalle-factura.repository';
export declare class FacturaRepository extends DefaultCrudRepository<Factura, typeof Factura.prototype.id, FacturaRelations> {
    protected detalleFacturaRepositoryGetter: Getter<DetalleFacturaRepository>;
    readonly detalleFacturas: HasManyRepositoryFactory<DetalleFactura, typeof Factura.prototype.id>;
    constructor(dataSource: ConnAtlasDataSource, detalleFacturaRepositoryGetter: Getter<DetalleFacturaRepository>);
}
