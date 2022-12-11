"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FacturaDetalleFacturaController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let FacturaDetalleFacturaController = class FacturaDetalleFacturaController {
    constructor(facturaRepository) {
        this.facturaRepository = facturaRepository;
    }
    async find(id, filter) {
        return this.facturaRepository.detalleFacturas(id).find(filter);
    }
    async create(id, detalleFactura) {
        return this.facturaRepository.detalleFacturas(id).create(detalleFactura);
    }
    async patch(id, detalleFactura, where) {
        return this.facturaRepository.detalleFacturas(id).patch(detalleFactura, where);
    }
    async delete(id, where) {
        return this.facturaRepository.detalleFacturas(id).delete(where);
    }
};
tslib_1.__decorate([
    (0, rest_1.get)('/facturas/{id}/detalle-facturas', {
        responses: {
            '200': {
                description: 'Array of Factura has many DetalleFactura',
                content: {
                    'application/json': {
                        schema: { type: 'array', items: (0, rest_1.getModelSchemaRef)(models_1.DetalleFactura) },
                    },
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.param.query.object('filter')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], FacturaDetalleFacturaController.prototype, "find", null);
tslib_1.__decorate([
    (0, rest_1.post)('/facturas/{id}/detalle-facturas', {
        responses: {
            '200': {
                description: 'Factura model instance',
                content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.DetalleFactura) } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.DetalleFactura, {
                    title: 'NewDetalleFacturaInFactura',
                    exclude: ['id'],
                    optional: ['facturaId']
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], FacturaDetalleFacturaController.prototype, "create", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/facturas/{id}/detalle-facturas', {
        responses: {
            '200': {
                description: 'Factura.DetalleFactura PATCH success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.DetalleFactura, { partial: true }),
            },
        },
    })),
    tslib_1.__param(2, rest_1.param.query.object('where', (0, rest_1.getWhereSchemaFor)(models_1.DetalleFactura))),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], FacturaDetalleFacturaController.prototype, "patch", null);
tslib_1.__decorate([
    (0, rest_1.del)('/facturas/{id}/detalle-facturas', {
        responses: {
            '200': {
                description: 'Factura.DetalleFactura DELETE success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.param.query.object('where', (0, rest_1.getWhereSchemaFor)(models_1.DetalleFactura))),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], FacturaDetalleFacturaController.prototype, "delete", null);
FacturaDetalleFacturaController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.FacturaRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.FacturaRepository])
], FacturaDetalleFacturaController);
exports.FacturaDetalleFacturaController = FacturaDetalleFacturaController;
//# sourceMappingURL=factura-detalle-factura.controller.js.map