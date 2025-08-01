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
exports.MembersController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const members_service_1 = require("./members.service");
const member_dto_1 = require("../dto/member.dto");
const member_entity_1 = require("../entities/member.entity");
const borrow_record_entity_1 = require("../entities/borrow-record.entity");
const jwt_auth_guard_1 = require("../auth/guards/jwt-auth.guard");
const roles_guard_1 = require("../auth/guards/roles.guard");
const roles_decorator_1 = require("../auth/decorators/roles.decorator");
let MembersController = class MembersController {
    constructor(membersService) {
        this.membersService = membersService;
    }
    create(createMemberDto) {
        return this.membersService.create(createMemberDto);
    }
    findAll() {
        return this.membersService.findAll();
    }
    findOne(id) {
        return this.membersService.findOne(+id);
    }
    getBorrowingHistory(id) {
        return this.membersService.getBorrowingHistory(+id);
    }
    update(id, updateMemberDto) {
        return this.membersService.update(+id, updateMemberDto);
    }
    remove(id) {
        return this.membersService.remove(+id);
    }
};
exports.MembersController = MembersController;
__decorate([
    (0, common_1.Post)(),
    (0, roles_decorator_1.Roles)('admin', 'librarian'),
    (0, swagger_1.ApiOperation)({ summary: 'Create a new member' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Member created successfully', type: member_entity_1.Member }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [member_dto_1.CreateMemberDto]),
    __metadata("design:returntype", Promise)
], MembersController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get all members' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'List of members', type: [member_entity_1.Member] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], MembersController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get a member by ID' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Member found', type: member_entity_1.Member }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Member not found' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'Member ID' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], MembersController.prototype, "findOne", null);
__decorate([
    (0, common_1.Get)(':id/borrowing-history'),
    (0, swagger_1.ApiOperation)({ summary: 'Get member borrowing history' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Borrowing history', type: [borrow_record_entity_1.BorrowRecord] }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Member not found' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'Member ID' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], MembersController.prototype, "getBorrowingHistory", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, roles_decorator_1.Roles)('admin', 'librarian'),
    (0, swagger_1.ApiOperation)({ summary: 'Update a member' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Member updated successfully', type: member_entity_1.Member }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Member not found' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'Member ID' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, member_dto_1.UpdateMemberDto]),
    __metadata("design:returntype", Promise)
], MembersController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, roles_decorator_1.Roles)('admin'),
    (0, swagger_1.ApiOperation)({ summary: 'Delete a member' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Member deleted successfully' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Member not found' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'Member ID' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], MembersController.prototype, "remove", null);
exports.MembersController = MembersController = __decorate([
    (0, swagger_1.ApiTags)('members'),
    (0, common_1.Controller)('members'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard),
    (0, swagger_1.ApiBearerAuth)(),
    __metadata("design:paramtypes", [members_service_1.MembersService])
], MembersController);
//# sourceMappingURL=members.controller.js.map