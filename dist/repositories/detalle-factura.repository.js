"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DetalleFacturaRepository = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const repository_1 = require("@loopback/repository");
const datasources_1 = require("../datasources");
const models_1 = require("../models");
let DetalleFacturaRepository = class DetalleFacturaRepository extends repository_1.DefaultCrudRepository {
    constructor(dataSource, facturaRepositoryGetter, productosRepositoryGetter) {
        super(models_1.DetalleFactura, dataSource);
        this.facturaRepositoryGetter = facturaRepositoryGetter;
        this.productosRepositoryGetter = productosRepositoryGetter;
        this.productos = this.createBelongsToAccessorFor('productos', productosRepositoryGetter);
        this.registerInclusionResolver('productos', this.productos.inclusionResolver);
        this.factura = this.createBelongsToAccessorFor('factura', facturaRepositoryGetter);
        this.registerInclusionResolver('factura', this.factura.inclusionResolver);
    }
};
DetalleFacturaRepository = tslib_1.__decorate([
    tslib_1.__param(0, (0, core_1.inject)('datasources.connAtlas')),
    tslib_1.__param(1, repository_1.repository.getter('FacturaRepository')),
    tslib_1.__param(2, repository_1.repository.getter('ProductosRepository')),
    tslib_1.__metadata("design:paramtypes", [datasources_1.ConnAtlasDataSource, Function, Function])
], DetalleFacturaRepository);
exports.DetalleFacturaRepository = DetalleFacturaRepository;
//# sourceMappingURL=detalle-factura.repository.js.map