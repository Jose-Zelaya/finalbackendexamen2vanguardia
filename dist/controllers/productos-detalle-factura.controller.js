"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductosDetalleFacturaController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let ProductosDetalleFacturaController = class ProductosDetalleFacturaController {
    constructor(productosRepository) {
        this.productosRepository = productosRepository;
    }
    async find(id, filter) {
        return this.productosRepository.detallefacturas2(id).find(filter);
    }
    async create(id, detalleFactura) {
        return this.productosRepository.detallefacturas2(id).create(detalleFactura);
    }
    async patch(id, detalleFactura, where) {
        return this.productosRepository.detallefacturas2(id).patch(detalleFactura, where);
    }
    async delete(id, where) {
        return this.productosRepository.detallefacturas2(id).delete(where);
    }
};
tslib_1.__decorate([
    (0, rest_1.get)('/productos/{id}/detalle-facturas', {
        responses: {
            '200': {
                description: 'Array of Productos has many DetalleFactura',
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
], ProductosDetalleFacturaController.prototype, "find", null);
tslib_1.__decorate([
    (0, rest_1.post)('/productos/{id}/detalle-facturas', {
        responses: {
            '200': {
                description: 'Productos model instance',
                content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.DetalleFactura) } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.DetalleFactura, {
                    title: 'NewDetalleFacturaInProductos',
                    exclude: ['id'],
                    optional: ['productosId']
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ProductosDetalleFacturaController.prototype, "create", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/productos/{id}/detalle-facturas', {
        responses: {
            '200': {
                description: 'Productos.DetalleFactura PATCH success count',
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
], ProductosDetalleFacturaController.prototype, "patch", null);
tslib_1.__decorate([
    (0, rest_1.del)('/productos/{id}/detalle-facturas', {
        responses: {
            '200': {
                description: 'Productos.DetalleFactura DELETE success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.param.query.object('where', (0, rest_1.getWhereSchemaFor)(models_1.DetalleFactura))),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ProductosDetalleFacturaController.prototype, "delete", null);
ProductosDetalleFacturaController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.ProductosRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.ProductosRepository])
], ProductosDetalleFacturaController);
exports.ProductosDetalleFacturaController = ProductosDetalleFacturaController;
//# sourceMappingURL=productos-detalle-factura.controller.js.map