"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DetalleFactura = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const factura_model_1 = require("./factura.model");
const productos_model_1 = require("./productos.model");
let DetalleFactura = class DetalleFactura extends repository_1.Entity {
    constructor(data) {
        super(data);
    }
};
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        id: true,
        generated: true,
    }),
    tslib_1.__metadata("design:type", String)
], DetalleFactura.prototype, "id", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], DetalleFactura.prototype, "ProductoId", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'number',
        required: true,
    }),
    tslib_1.__metadata("design:type", Number)
], DetalleFactura.prototype, "cantidad", void 0);
tslib_1.__decorate([
    (0, repository_1.belongsTo)(() => factura_model_1.Factura),
    tslib_1.__metadata("design:type", String)
], DetalleFactura.prototype, "facturaId", void 0);
tslib_1.__decorate([
    (0, repository_1.belongsTo)(() => productos_model_1.Productos),
    tslib_1.__metadata("design:type", String)
], DetalleFactura.prototype, "productosId", void 0);
DetalleFactura = tslib_1.__decorate([
    (0, repository_1.model)(),
    tslib_1.__metadata("design:paramtypes", [Object])
], DetalleFactura);
exports.DetalleFactura = DetalleFactura;
//# sourceMappingURL=detalle-factura.model.js.map