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
exports.BorrowRecordsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const borrow_record_entity_1 = require("../entities/borrow-record.entity");
const books_service_1 = require("../books/books.service");
const members_service_1 = require("../members/members.service");
let BorrowRecordsService = class BorrowRecordsService {
    constructor(borrowRecordsRepository, booksService, membersService) {
        this.borrowRecordsRepository = borrowRecordsRepository;
        this.booksService = booksService;
        this.membersService = membersService;
    }
    async borrowBook(borrowBookDto) {
        const book = await this.booksService.findOne(borrowBookDto.book_id);
        await this.membersService.findOne(borrowBookDto.member_id);
        if (book.available_copies <= 0) {
            throw new common_1.BadRequestException('Book is not available for borrowing');
        }
        const borrowRecord = this.borrowRecordsRepository.create({
            ...borrowBookDto,
            borrow_date: new Date(),
            due_date: new Date(borrowBookDto.due_date),
        });
        const savedRecord = await this.borrowRecordsRepository.save(borrowRecord);
        await this.booksService.updateAvailableCopies(borrowBookDto.book_id, -1);
        return savedRecord;
    }
    async returnBook(returnBookDto) {
        const borrowRecord = await this.borrowRecordsRepository.findOne({
            where: { id: returnBookDto.borrow_record_id },
            relations: ['book'],
        });
        if (!borrowRecord) {
            throw new common_1.NotFoundException('Borrow record not found');
        }
        if (borrowRecord.return_date) {
            throw new common_1.BadRequestException('Book has already been returned');
        }
        borrowRecord.return_date = new Date();
        const updatedRecord = await this.borrowRecordsRepository.save(borrowRecord);
        await this.booksService.updateAvailableCopies(borrowRecord.book_id, 1);
        return updatedRecord;
    }
    async getOverdueBooks() {
        const today = new Date();
        return await this.borrowRecordsRepository.find({
            where: {
                due_date: (0, typeorm_2.LessThan)(today),
                return_date: null,
            },
            relations: ['book', 'book.genre', 'member'],
        });
    }
    async getMostPopularGenres() {
        return await this.borrowRecordsRepository
            .createQueryBuilder('borrowRecord')
            .leftJoin('borrowRecord.book', 'book')
            .leftJoin('book.genre', 'genre')
            .select('genre.name', 'genre_name')
            .addSelect('COUNT(*)', 'borrow_count')
            .groupBy('genre.id')
            .addGroupBy('genre.name')
            .orderBy('borrow_count', 'DESC')
            .getRawMany();
    }
    async findAll() {
        return await this.borrowRecordsRepository.find({
            relations: ['book', 'book.genre', 'member'],
            order: { borrow_date: 'DESC' },
        });
    }
    async findOne(id) {
        const borrowRecord = await this.borrowRecordsRepository.findOne({
            where: { id },
            relations: ['book', 'book.genre', 'member'],
        });
        if (!borrowRecord) {
            throw new common_1.NotFoundException(`Borrow record with ID ${id} not found`);
        }
        return borrowRecord;
    }
    async getAnalyticsSummary() {
        const now = new Date();
        const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);
        const endOfMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0, 23, 59, 59, 999);
        const totalBorrowsThisMonth = await this.borrowRecordsRepository.count({
            where: {
                borrow_date: (0, typeorm_2.Between)(startOfMonth, endOfMonth),
            },
        });
        const returnedRecords = await this.borrowRecordsRepository.find({
            where: {
                return_date: (0, typeorm_2.Not)((0, typeorm_2.IsNull)()),
            },
        });
        let averageBorrowDuration = 0;
        if (returnedRecords.length > 0) {
            const totalDuration = returnedRecords.reduce((sum, record) => {
                const borrowDate = new Date(record.borrow_date);
                const returnDate = new Date(record.return_date);
                const diff = (returnDate.getTime() - borrowDate.getTime()) / (1000 * 60 * 60 * 24);
                return sum + diff;
            }, 0);
            averageBorrowDuration = totalDuration / returnedRecords.length;
        }
        const totalBorrows = await this.borrowRecordsRepository.count();
        const returnRate = totalBorrows > 0 ? (returnedRecords.length / totalBorrows) * 100 : 0;
        return {
            totalBorrowsThisMonth,
            averageBorrowDuration: Number(averageBorrowDuration.toFixed(1)),
            returnRate: Number(returnRate.toFixed(1)),
        };
    }
};
exports.BorrowRecordsService = BorrowRecordsService;
exports.BorrowRecordsService = BorrowRecordsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(borrow_record_entity_1.BorrowRecord)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        books_service_1.BooksService,
        members_service_1.MembersService])
], BorrowRecordsService);
//# sourceMappingURL=borrow-records.service.js.map