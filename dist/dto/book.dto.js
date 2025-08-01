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
exports.FilterBookDto = exports.UpdateBookDto = exports.CreateBookDto = void 0;
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
class CreateBookDto {
}
exports.CreateBookDto = CreateBookDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Book title' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateBookDto.prototype, "title", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Book author' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateBookDto.prototype, "author", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Publication year' }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(1800),
    __metadata("design:type", Number)
], CreateBookDto.prototype, "published_year", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Number of available copies' }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsPositive)(),
    __metadata("design:type", Number)
], CreateBookDto.prototype, "available_copies", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Genre ID' }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateBookDto.prototype, "genre_id", void 0);
class UpdateBookDto {
}
exports.UpdateBookDto = UpdateBookDto;
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Book title' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateBookDto.prototype, "title", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Book author' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateBookDto.prototype, "author", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Publication year' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(1800),
    __metadata("design:type", Number)
], UpdateBookDto.prototype, "published_year", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Number of available copies' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsPositive)(),
    __metadata("design:type", Number)
], UpdateBookDto.prototype, "available_copies", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Genre ID' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], UpdateBookDto.prototype, "genre_id", void 0);
class FilterBookDto {
}
exports.FilterBookDto = FilterBookDto;
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Filter by genre ID' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], FilterBookDto.prototype, "genre_id", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Filter by availability' }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Boolean)
], FilterBookDto.prototype, "available", void 0);
//# sourceMappingURL=book.dto.js.map