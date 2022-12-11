"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Productos = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const detalle_factura_model_1 = require("./detalle-factura.model");
let Productos = class Productos extends repository_1.Entity {
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
], Productos.prototype, "id", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Productos.prototype, "descripcion", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'number',
        required: true,
    }),
    tslib_1.__metadata("design:type", Number)
], Productos.prototype, "valor", void 0);
tslib_1.__decorate([
    (0, repository_1.hasMany)(() => detalle_factura_model_1.DetalleFactura),
    tslib_1.__metadata("design:type", Array)
], Productos.prototype, "detallefacturas2", void 0);
Productos = tslib_1.__decorate([
    (0, repository_1.model)(),
    tslib_1.__metadata("design:paramtypes", [Object])
], Productos);
exports.Productos = Productos;
//# sourceMappingURL=productos.model.js.map