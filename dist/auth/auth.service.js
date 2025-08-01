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
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const jwt_service_1 = require("./jwt.service");
const staff_service_1 = require("../staff/staff.service");
let AuthService = class AuthService {
    constructor(staffService, jwtAuthService) {
        this.staffService = staffService;
        this.jwtAuthService = jwtAuthService;
    }
    async login(loginDto) {
        console.log('Login attempt for email:', loginDto.email);
        const user = await this.staffService.validateUser(loginDto.email, loginDto.password);
        console.log('User found:', user ? 'Yes' : 'No');
        if (!user) {
            console.log('Invalid credentials for email:', loginDto.email);
            throw new common_1.UnauthorizedException('Invalid credentials');
        }
        console.log('Login successful for user:', user.username);
        const access_token = await this.jwtAuthService.generateToken(user);
        const { password_hash, ...userWithoutPassword } = user;
        return {
            access_token,
            user: userWithoutPassword,
        };
    }
    async signup(signupDto) {
        const user = await this.staffService.create(signupDto);
        const access_token = await this.jwtAuthService.generateToken(user);
        const { password_hash, ...userWithoutPassword } = user;
        return {
            access_token,
            user: userWithoutPassword,
        };
    }
    async validateUser(id) {
        return await this.staffService.findOne(id);
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [staff_service_1.StaffService,
        jwt_service_1.JwtAuthService])
], AuthService);
//# sourceMappingURL=auth.service.js.map