export declare class LoginDto {
    email: string;
    password: string;
}
export declare class SignupDto {
    username: string;
    email: string;
    password: string;
    role: 'admin' | 'librarian';
    phone_number: string;
}
export declare class JwtPayload {
    sub: number;
    username: string;
    role: string;
}
