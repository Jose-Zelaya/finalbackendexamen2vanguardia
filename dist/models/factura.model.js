"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Factura = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const detalle_factura_model_1 = require("./detalle-factura.model");
let Factura = class Factura extends repository_1.Entity {
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
], Factura.prototype, "id", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'number',
        required: true,
    }),
    tslib_1.__metadata("design:type", Number)
], Factura.prototype, "correlativo", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Factura.prototype, "fecha", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Factura.prototype, "cliente", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Factura.prototype, "direccion", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Factura.prototype, "telefono", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Factura.prototype, "email", void 0);
tslib_1.__decorate([
    (0, repository_1.hasMany)(() => detalle_factura_model_1.DetalleFactura),
    tslib_1.__metadata("design:type", Array)
], Factura.prototype, "detalleFacturas", void 0);
Factura = tslib_1.__decorate([
    (0, repository_1.model)(),
    tslib_1.__metadata("design:paramtypes", [Object])
], Factura);
exports.Factura = Factura;
//# sourceMappingURL=factura.model.js.map