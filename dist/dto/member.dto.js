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
Object.defineProperty(exports, "__esModule", { value: true });
exports.BorrowHistoryDto = exports.UpdateMemberDto = exports.CreateMemberDto = void 0;
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
class CreateMemberDto {
}
exports.CreateMemberDto = CreateMemberDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Member name' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateMemberDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Member email' }),
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], CreateMemberDto.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Member phone number' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateMemberDto.prototype, "phone", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Join date' }),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", String)
], CreateMemberDto.prototype, "join_date", void 0);
class UpdateMemberDto {
}
exports.UpdateMemberDto = UpdateMemberDto;
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Member name' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateMemberDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Member email' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], UpdateMemberDto.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Member phone number' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateMemberDto.prototype, "phone", void 0);
class BorrowHistoryDto {
}
exports.BorrowHistoryDto = BorrowHistoryDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Member ID' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], BorrowHistoryDto.prototype, "member_id", void 0);
//# sourceMappingURL=member.dto.js.map