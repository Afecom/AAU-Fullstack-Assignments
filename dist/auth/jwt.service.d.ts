import { JwtService as NestJwtService } from '@nestjs/jwt';
import { Staff } from '../entities/staff.entity';
import { JwtPayload } from './dto/auth.dto';
export declare class JwtAuthService {
    private readonly jwtService;
    constructor(jwtService: NestJwtService);
    generateToken(user: Staff): Promise<string>;
    verifyToken(token: string): Promise<JwtPayload>;
}
