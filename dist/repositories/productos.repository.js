"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductosRepository = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const repository_1 = require("@loopback/repository");
const datasources_1 = require("../datasources");
const models_1 = require("../models");
let ProductosRepository = class ProductosRepository extends repository_1.DefaultCrudRepository {
    constructor(dataSource, detalleFacturaRepositoryGetter) {
        super(models_1.Productos, dataSource);
        this.detalleFacturaRepositoryGetter = detalleFacturaRepositoryGetter;
        this.detallefacturas2 = this.createHasManyRepositoryFactoryFor('detallefacturas2', detalleFacturaRepositoryGetter);
        this.registerInclusionResolver('detallefacturas2', this.detallefacturas2.inclusionResolver);
    }
};
ProductosRepository = tslib_1.__decorate([
    tslib_1.__param(0, (0, core_1.inject)('datasources.connAtlas')),
    tslib_1.__param(1, repository_1.repository.getter('DetalleFacturaRepository')),
    tslib_1.__metadata("design:paramtypes", [datasources_1.ConnAtlasDataSource, Function])
], ProductosRepository);
exports.ProductosRepository = ProductosRepository;
//# sourceMappingURL=productos.repository.js.map