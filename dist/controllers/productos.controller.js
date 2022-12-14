"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductosController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let ProductosController = class ProductosController {
    constructor(productosRepository) {
        this.productosRepository = productosRepository;
    }
    async create(productos) {
        return this.productosRepository.create(productos);
    }
    async count(where) {
        return this.productosRepository.count(where);
    }
    async find(filter) {
        return this.productosRepository.find(filter);
    }
    async updateAll(productos, where) {
        return this.productosRepository.updateAll(productos, where);
    }
    async findById(id, filter) {
        return this.productosRepository.findById(id, filter);
    }
    async updateById(id, productos) {
        await this.productosRepository.updateById(id, productos);
    }
    async replaceById(id, productos) {
        await this.productosRepository.replaceById(id, productos);
    }
    async deleteById(id) {
        await this.productosRepository.deleteById(id);
    }
};
tslib_1.__decorate([
    (0, rest_1.post)('/productos'),
    (0, rest_1.response)(200, {
        description: 'Productos model instance',
        content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.Productos) } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Productos, {
                    title: 'NewProductos',
                    exclude: ['id'],
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ProductosController.prototype, "create", null);
tslib_1.__decorate([
    (0, rest_1.get)('/productos/count'),
    (0, rest_1.response)(200, {
        description: 'Productos model count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, rest_1.param.where(models_1.Productos)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ProductosController.prototype, "count", null);
tslib_1.__decorate([
    (0, rest_1.get)('/productos'),
    (0, rest_1.response)(200, {
        description: 'Array of Productos model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: (0, rest_1.getModelSchemaRef)(models_1.Productos, { includeRelations: true }),
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(models_1.Productos)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ProductosController.prototype, "find", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/productos'),
    (0, rest_1.response)(200, {
        description: 'Productos PATCH success count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Productos, { partial: true }),
            },
        },
    })),
    tslib_1.__param(1, rest_1.param.where(models_1.Productos)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.Productos, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ProductosController.prototype, "updateAll", null);
tslib_1.__decorate([
    (0, rest_1.get)('/productos/{id}'),
    (0, rest_1.response)(200, {
        description: 'Productos model instance',
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Productos, { includeRelations: true }),
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.param.filter(models_1.Productos, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ProductosController.prototype, "findById", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/productos/{id}'),
    (0, rest_1.response)(204, {
        description: 'Productos PATCH success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Productos, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.Productos]),
    tslib_1.__metadata("design:returntype", Promise)
], ProductosController.prototype, "updateById", null);
tslib_1.__decorate([
    (0, rest_1.put)('/productos/{id}'),
    (0, rest_1.response)(204, {
        description: 'Productos PUT success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.Productos]),
    tslib_1.__metadata("design:returntype", Promise)
], ProductosController.prototype, "replaceById", null);
tslib_1.__decorate([
    (0, rest_1.del)('/productos/{id}'),
    (0, rest_1.response)(204, {
        description: 'Productos DELETE success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], ProductosController.prototype, "deleteById", null);
ProductosController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.ProductosRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.ProductosRepository])
], ProductosController);
exports.ProductosController = ProductosController;
//# sourceMappingURL=productos.controller.js.map