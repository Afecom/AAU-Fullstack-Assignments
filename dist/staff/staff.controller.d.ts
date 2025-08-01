import { StaffService } from './staff.service';
import { Staff } from '../entities/staff.entity';
import { UpdateStaffDto } from './dto/update-staff.dto';
export declare class StaffController {
    private readonly staffService;
    constructor(staffService: StaffService);
    update(id: string, updateStaffDto: UpdateStaffDto): Promise<Staff>;
    remove(id: string): Promise<void>;
}
