import { AuthService } from './auth.service';
import { LoginDto, SignupDto } from './dto/auth.dto';
import { StaffService } from '../staff/staff.service';
import { Staff } from '../entities/staff.entity';
export declare class AuthController {
    private readonly authService;
    private readonly staffService;
    constructor(authService: AuthService, staffService: StaffService);
    login(loginDto: LoginDto): Promise<{
        access_token: string;
        user: Partial<Staff>;
    }>;
    signup(signupDto: SignupDto): Promise<{
        access_token: string;
        user: Partial<Staff>;
    }>;
    getProfile(req: any): any;
    getUsers(): Promise<{
        users: Staff[];
    }>;
}
