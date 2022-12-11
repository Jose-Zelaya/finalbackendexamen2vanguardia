"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DetalleFacturaController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let DetalleFacturaController = class DetalleFacturaController {
    constructor(detalleFacturaRepository) {
        this.detalleFacturaRepository = detalleFacturaRepository;
    }
    async create(detalleFactura) {
        return this.detalleFacturaRepository.create(detalleFactura);
    }
    async count(where) {
        return this.detalleFacturaRepository.count(where);
    }
    async find(filter) {
        return this.detalleFacturaRepository.find(filter);
    }
    async updateAll(detalleFactura, where) {
        return this.detalleFacturaRepository.updateAll(detalleFactura, where);
    }
    async findById(id, filter) {
        return this.detalleFacturaRepository.findById(id, filter);
    }
    async updateById(id, detalleFactura) {
        await this.detalleFacturaRepository.updateById(id, detalleFactura);
    }
    async replaceById(id, detalleFactura) {
        await this.detalleFacturaRepository.replaceById(id, detalleFactura);
    }
    async deleteById(id) {
        await this.detalleFacturaRepository.deleteById(id);
    }
};
tslib_1.__decorate([
    (0, rest_1.post)('/detalleFactura'),
    (0, rest_1.response)(200, {
        description: 'DetalleFactura model instance',
        content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.DetalleFactura) } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.DetalleFactura, {
                    title: 'NewDetalleFactura',
                    exclude: ['id'],
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], DetalleFacturaController.prototype, "create", null);
tslib_1.__decorate([
    (0, rest_1.get)('/detalleFactura/count'),
    (0, rest_1.response)(200, {
        description: 'DetalleFactura model count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, rest_1.param.where(models_1.DetalleFactura)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], DetalleFacturaController.prototype, "count", null);
tslib_1.__decorate([
    (0, rest_1.get)('/detalleFactura'),
    (0, rest_1.response)(200, {
        description: 'Array of DetalleFactura model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: (0, rest_1.getModelSchemaRef)(models_1.DetalleFactura, { includeRelations: true }),
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(models_1.DetalleFactura)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], DetalleFacturaController.prototype, "find", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/detalleFactura'),
    (0, rest_1.response)(200, {
        description: 'DetalleFactura PATCH success count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.DetalleFactura, { partial: true }),
            },
        },
    })),
    tslib_1.__param(1, rest_1.param.where(models_1.DetalleFactura)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.DetalleFactura, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], DetalleFacturaController.prototype, "updateAll", null);
tslib_1.__decorate([
    (0, rest_1.get)('/detalleFactura/{id}'),
    (0, rest_1.response)(200, {
        description: 'DetalleFactura model instance',
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.DetalleFactura, { includeRelations: true }),
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.param.filter(models_1.DetalleFactura, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], DetalleFacturaController.prototype, "findById", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/detalleFactura/{id}'),
    (0, rest_1.response)(204, {
        description: 'DetalleFactura PATCH success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.DetalleFactura, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.DetalleFactura]),
    tslib_1.__metadata("design:returntype", Promise)
], DetalleFacturaController.prototype, "updateById", null);
tslib_1.__decorate([
    (0, rest_1.put)('/detalleFactura/{id}'),
    (0, rest_1.response)(204, {
        description: 'DetalleFactura PUT success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.DetalleFactura]),
    tslib_1.__metadata("design:returntype", Promise)
], DetalleFacturaController.prototype, "replaceById", null);
tslib_1.__decorate([
    (0, rest_1.del)('/detalleFactura/{id}'),
    (0, rest_1.response)(204, {
        description: 'DetalleFactura DELETE success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], DetalleFacturaController.prototype, "deleteById", null);
DetalleFacturaController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.DetalleFacturaRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.DetalleFacturaRepository])
], DetalleFacturaController);
exports.DetalleFacturaController = DetalleFacturaController;
//# sourceMappingURL=detalle-factura.controller.js.map