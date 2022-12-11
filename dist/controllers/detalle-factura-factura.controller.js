"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DetalleFacturaFacturaController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let DetalleFacturaFacturaController = class DetalleFacturaFacturaController {
    constructor(detalleFacturaRepository) {
        this.detalleFacturaRepository = detalleFacturaRepository;
    }
    async getFactura(id) {
        return this.detalleFacturaRepository.factura(id);
    }
};
tslib_1.__decorate([
    (0, rest_1.get)('/detalle-facturas/{id}/factura', {
        responses: {
            '200': {
                description: 'Factura belonging to DetalleFactura',
                content: {
                    'application/json': {
                        schema: { type: 'array', items: (0, rest_1.getModelSchemaRef)(models_1.Factura) },
                    },
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], DetalleFacturaFacturaController.prototype, "getFactura", null);
DetalleFacturaFacturaController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.DetalleFacturaRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.DetalleFacturaRepository])
], DetalleFacturaFacturaController);
exports.DetalleFacturaFacturaController = DetalleFacturaFacturaController;
//# sourceMappingURL=detalle-factura-factura.controller.js.map