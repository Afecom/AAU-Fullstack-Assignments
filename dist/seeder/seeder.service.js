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
exports.SeederService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const genre_entity_1 = require("../entities/genre.entity");
const book_entity_1 = require("../entities/book.entity");
const member_entity_1 = require("../entities/member.entity");
const staff_entity_1 = require("../entities/staff.entity");
const bcrypt = require("bcryptjs");
let SeederService = class SeederService {
    constructor(genreRepository, bookRepository, memberRepository, staffRepository) {
        this.genreRepository = genreRepository;
        this.bookRepository = bookRepository;
        this.memberRepository = memberRepository;
        this.staffRepository = staffRepository;
    }
    async seed() {
        const genres = [
            'Fiction',
            'Non-Fiction',
            'Science Fiction',
            'Mystery',
            'Romance',
            'Biography',
            'History',
            'Science',
            'Technology',
            'Philosophy',
        ];
        const createdGenres = [];
        for (const genreName of genres) {
            const existingGenre = await this.genreRepository.findOne({
                where: { name: genreName },
            });
            if (!existingGenre) {
                const genre = this.genreRepository.create({ name: genreName });
                createdGenres.push(await this.genreRepository.save(genre));
            }
            else {
                createdGenres.push(existingGenre);
            }
        }
        const sampleBooks = [
            {
                title: 'The Great Gatsby',
                author: 'F. Scott Fitzgerald',
                published_year: 1925,
                available_copies: 3,
                genre_id: createdGenres[0].id,
            },
            {
                title: '1984',
                author: 'George Orwell',
                published_year: 1949,
                available_copies: 2,
                genre_id: createdGenres[2].id,
            },
            {
                title: 'Pride and Prejudice',
                author: 'Jane Austen',
                published_year: 1813,
                available_copies: 4,
                genre_id: createdGenres[4].id,
            },
            {
                title: 'The Hobbit',
                author: 'J.R.R. Tolkien',
                published_year: 1937,
                available_copies: 2,
                genre_id: createdGenres[0].id,
            },
            {
                title: 'A Brief History of Time',
                author: 'Stephen Hawking',
                published_year: 1988,
                available_copies: 1,
                genre_id: createdGenres[7].id,
            },
        ];
        for (const bookData of sampleBooks) {
            const existingBook = await this.bookRepository.findOne({
                where: { title: bookData.title, author: bookData.author },
            });
            if (!existingBook) {
                const book = this.bookRepository.create(bookData);
                await this.bookRepository.save(book);
            }
        }
        const sampleMembers = [
            {
                name: 'John Doe',
                email: 'john.doe@example.com',
                phone: '555-0101',
                join_date: new Date('2023-01-15'),
            },
            {
                name: 'Jane Smith',
                email: 'jane.smith@example.com',
                phone: '555-0102',
                join_date: new Date('2023-02-20'),
            },
            {
                name: 'Bob Johnson',
                email: 'bob.johnson@example.com',
                phone: '555-0103',
                join_date: new Date('2023-03-10'),
            },
        ];
        for (const memberData of sampleMembers) {
            const existingMember = await this.memberRepository.findOne({
                where: { email: memberData.email },
            });
            if (!existingMember) {
                const member = this.memberRepository.create(memberData);
                await this.memberRepository.save(member);
            }
        }
        const adminUser = await this.staffRepository.findOne({
            where: { username: 'admin' },
        });
        if (!adminUser) {
            const hashedPassword = await bcrypt.hash('admin123', 10);
            const admin = this.staffRepository.create({
                username: 'admin',
                email: 'admin@library.com',
                password_hash: hashedPassword,
                role: 'admin',
            });
            await this.staffRepository.save(admin);
            console.log('Default admin user created: admin@library.com/admin123');
        }
        console.log('Database seeded successfully!');
    }
};
exports.SeederService = SeederService;
exports.SeederService = SeederService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(genre_entity_1.Genre)),
    __param(1, (0, typeorm_1.InjectRepository)(book_entity_1.Book)),
    __param(2, (0, typeorm_1.InjectRepository)(member_entity_1.Member)),
    __param(3, (0, typeorm_1.InjectRepository)(staff_entity_1.Staff)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository])
], SeederService);
//# sourceMappingURL=seeder.service.js.map