"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BorrowRecordsController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const borrow_records_service_1 = require("./borrow-records.service");
const borrow_record_dto_1 = require("../dto/borrow-record.dto");
const borrow_record_entity_1 = require("../entities/borrow-record.entity");
const jwt_auth_guard_1 = require("../auth/guards/jwt-auth.guard");
const roles_guard_1 = require("../auth/guards/roles.guard");
const roles_decorator_1 = require("../auth/decorators/roles.decorator");
let BorrowRecordsController = class BorrowRecordsController {
    constructor(borrowRecordsService) {
        this.borrowRecordsService = borrowRecordsService;
    }
    borrowBook(borrowBookDto) {
        return this.borrowRecordsService.borrowBook(borrowBookDto);
    }
    returnBook(returnBookDto) {
        return this.borrowRecordsService.returnBook(returnBookDto);
    }
    findAll() {
        return this.borrowRecordsService.findAll();
    }
    findOne(id) {
        return this.borrowRecordsService.findOne(+id);
    }
    getOverdueBooks() {
        return this.borrowRecordsService.getOverdueBooks();
    }
    getMostPopularGenres() {
        return this.borrowRecordsService.getMostPopularGenres();
    }
    getAnalyticsSummary() {
        return this.borrowRecordsService.getAnalyticsSummary();
    }
};
exports.BorrowRecordsController = BorrowRecordsController;
__decorate([
    (0, common_1.Post)('borrow'),
    (0, roles_decorator_1.Roles)('admin', 'librarian'),
    (0, swagger_1.ApiOperation)({ summary: 'Borrow a book' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Book borrowed successfully', type: borrow_record_entity_1.BorrowRecord }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [borrow_record_dto_1.BorrowBookDto]),
    __metadata("design:returntype", Promise)
], BorrowRecordsController.prototype, "borrowBook", null);
__decorate([
    (0, common_1.Post)('return'),
    (0, roles_decorator_1.Roles)('admin', 'librarian'),
    (0, swagger_1.ApiOperation)({ summary: 'Return a book' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Book returned successfully', type: borrow_record_entity_1.BorrowRecord }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [borrow_record_dto_1.ReturnBookDto]),
    __metadata("design:returntype", Promise)
], BorrowRecordsController.prototype, "returnBook", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get all borrow records' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'List of borrow records', type: [borrow_record_entity_1.BorrowRecord] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], BorrowRecordsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get a borrow record by ID' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Borrow record found', type: borrow_record_entity_1.BorrowRecord }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Borrow record not found' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'Borrow record ID' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], BorrowRecordsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Get)('reports/overdue'),
    (0, swagger_1.ApiOperation)({ summary: 'Get overdue books report' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Overdue books list', type: [borrow_record_entity_1.BorrowRecord] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], BorrowRecordsController.prototype, "getOverdueBooks", null);
__decorate([
    (0, common_1.Get)('reports/popular-genres'),
    (0, swagger_1.ApiOperation)({ summary: 'Get most popular genres report' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Most popular genres with borrow counts' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], BorrowRecordsController.prototype, "getMostPopularGenres", null);
__decorate([
    (0, common_1.Get)('reports/summary'),
    (0, swagger_1.ApiOperation)({ summary: 'Get analytics summary (total borrows, avg duration, return rate)' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Analytics summary' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], BorrowRecordsController.prototype, "getAnalyticsSummary", null);
exports.BorrowRecordsController = BorrowRecordsController = __decorate([
    (0, swagger_1.ApiTags)('borrow-records'),
    (0, common_1.Controller)('borrow-records'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard),
    (0, swagger_1.ApiBearerAuth)(),
    __metadata("design:paramtypes", [borrow_records_service_1.BorrowRecordsService])
], BorrowRecordsController);
//# sourceMappingURL=borrow-records.controller.js.map