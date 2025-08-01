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
exports.GenresController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const genres_service_1 = require("./genres.service");
const genre_entity_1 = require("../entities/genre.entity");
const jwt_auth_guard_1 = require("../auth/guards/jwt-auth.guard");
const roles_guard_1 = require("../auth/guards/roles.guard");
const roles_decorator_1 = require("../auth/decorators/roles.decorator");
const create_genre_dto_1 = require("./dto/create-genre.dto");
let GenresController = class GenresController {
    constructor(genresService) {
        this.genresService = genresService;
    }
    create(createGenreDto) {
        return this.genresService.create(createGenreDto.name);
    }
    findAll() {
        return this.genresService.findAll();
    }
    findOne(id) {
        return this.genresService.findOne(+id);
    }
    update(id, name) {
        return this.genresService.update(+id, name);
    }
    remove(id) {
        return this.genresService.remove(+id);
    }
};
exports.GenresController = GenresController;
__decorate([
    (0, common_1.Post)(),
    (0, roles_decorator_1.Roles)('admin'),
    (0, swagger_1.ApiOperation)({ summary: 'Create a new genre' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Genre created successfully', type: genre_entity_1.Genre }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_genre_dto_1.CreateGenreDto]),
    __metadata("design:returntype", Promise)
], GenresController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get all genres' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'List of genres', type: [genre_entity_1.Genre] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], GenresController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get a genre by ID' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Genre found', type: genre_entity_1.Genre }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Genre not found' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'Genre ID' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], GenresController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, roles_decorator_1.Roles)('admin'),
    (0, swagger_1.ApiOperation)({ summary: 'Update a genre' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Genre updated successfully', type: genre_entity_1.Genre }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Genre not found' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'Genre ID' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)('name')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], GenresController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, roles_decorator_1.Roles)('admin'),
    (0, swagger_1.ApiOperation)({ summary: 'Delete a genre' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Genre deleted successfully' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Genre not found' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'Genre ID' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], GenresController.prototype, "remove", null);
exports.GenresController = GenresController = __decorate([
    (0, swagger_1.ApiTags)('genres'),
    (0, common_1.Controller)('genres'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard),
    (0, swagger_1.ApiBearerAuth)(),
    __metadata("design:paramtypes", [genres_service_1.GenresService])
], GenresController);
//# sourceMappingURL=genres.controller.js.map