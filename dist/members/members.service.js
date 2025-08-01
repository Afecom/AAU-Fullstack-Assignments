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
exports.MembersService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const member_entity_1 = require("../entities/member.entity");
const borrow_record_entity_1 = require("../entities/borrow-record.entity");
let MembersService = class MembersService {
    constructor(membersRepository, borrowRecordsRepository) {
        this.membersRepository = membersRepository;
        this.borrowRecordsRepository = borrowRecordsRepository;
    }
    async create(createMemberDto) {
        const member = this.membersRepository.create({
            ...createMemberDto,
            join_date: new Date(createMemberDto.join_date),
        });
        return await this.membersRepository.save(member);
    }
    async findAll() {
        return await this.membersRepository.find();
    }
    async findOne(id) {
        const member = await this.membersRepository.findOne({
            where: { id },
        });
        if (!member) {
            throw new common_1.NotFoundException(`Member with ID ${id} not found`);
        }
        return member;
    }
    async update(id, updateMemberDto) {
        const member = await this.findOne(id);
        Object.assign(member, updateMemberDto);
        return await this.membersRepository.save(member);
    }
    async remove(id) {
        const member = await this.findOne(id);
        await this.membersRepository.remove(member);
    }
    async getBorrowingHistory(memberId) {
        await this.findOne(memberId);
        return await this.borrowRecordsRepository.find({
            where: { member_id: memberId },
            relations: ['book', 'book.genre'],
            order: { borrow_date: 'DESC' },
        });
    }
};
exports.MembersService = MembersService;
exports.MembersService = MembersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(member_entity_1.Member)),
    __param(1, (0, typeorm_1.InjectRepository)(borrow_record_entity_1.BorrowRecord)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], MembersService);
//# sourceMappingURL=members.service.js.map