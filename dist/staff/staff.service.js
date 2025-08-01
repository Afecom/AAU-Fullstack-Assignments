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
exports.StaffService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const staff_entity_1 = require("../entities/staff.entity");
const bcrypt = require("bcryptjs");
let StaffService = class StaffService {
    constructor(staffRepository) {
        this.staffRepository = staffRepository;
    }
    async create(signupDto) {
        const existingUser = await this.staffRepository.findOne({
            where: { username: signupDto.username },
        });
        if (existingUser) {
            throw new common_1.ConflictException('Username already exists');
        }
        const existingEmail = await this.staffRepository.findOne({
            where: { email: signupDto.email },
        });
        if (existingEmail) {
            throw new common_1.ConflictException('Email already exists');
        }
        const hashedPassword = await bcrypt.hash(signupDto.password, 10);
        const staff = this.staffRepository.create({
            username: signupDto.username,
            email: signupDto.email,
            password_hash: hashedPassword,
            role: signupDto.role,
            phone_number: signupDto.phone_number,
        });
        return await this.staffRepository.save(staff);
    }
    async findOne(id) {
        const staff = await this.staffRepository.findOne({
            where: { id },
        });
        if (!staff) {
            throw new common_1.NotFoundException(`Staff member with ID ${id} not found`);
        }
        return staff;
    }
    async findByUsername(username) {
        return await this.staffRepository.findOne({
            where: { username },
        });
    }
    async findByEmail(email) {
        return await this.staffRepository.findOne({
            where: { email },
        });
    }
    async validateUser(email, password) {
        console.log('Validating user:', email);
        const user = await this.findByEmail(email);
        console.log('User found in database:', user ? 'Yes' : 'No');
        if (!user) {
            console.log('User not found in database');
            return null;
        }
        console.log('Comparing passwords...');
        const isPasswordValid = await bcrypt.compare(password, user.password_hash);
        console.log('Password valid:', isPasswordValid);
        if (user && isPasswordValid) {
            console.log('User validation successful');
            return user;
        }
        console.log('User validation failed');
        return null;
    }
    async findAll() {
        return await this.staffRepository.find({
            select: ['id', 'username', 'role', 'email', 'phone_number', 'created_at'],
        });
    }
    async update(id, updateData) {
        const staff = await this.findOne(id);
        if (updateData.password_hash) {
            updateData.password_hash = await bcrypt.hash(updateData.password_hash, 10);
        }
        Object.assign(staff, updateData);
        return await this.staffRepository.save(staff);
    }
    async remove(id) {
        const staff = await this.findOne(id);
        await this.staffRepository.remove(staff);
    }
};
exports.StaffService = StaffService;
exports.StaffService = StaffService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(staff_entity_1.Staff)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], StaffService);
//# sourceMappingURL=staff.service.js.map