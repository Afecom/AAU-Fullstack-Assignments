import { JwtPayload } from '../dto/auth.dto';
import { StaffService } from '../../staff/staff.service';
declare const JwtStrategy_base: new (...args: any) => any;
export declare class JwtStrategy extends JwtStrategy_base {
    private readonly staffService;
    constructor(staffService: StaffService);
    validate(payload: JwtPayload): Promise<import("../../entities/staff.entity").Staff>;
}
export {};
