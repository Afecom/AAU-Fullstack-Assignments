"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const app_module_1 = require("./app.module");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.enableCors({
        origin: '*'
    });
    app.useGlobalPipes(new common_1.ValidationPipe({
        whitelist: true,
        forbidNonWhitelisted: true,
        transform: true,
    }));
    const config = new swagger_1.DocumentBuilder()
        .setTitle('Library Manager API')
        .setDescription('A REST API for managing a library system with books, members, and borrowing operations')
        .setVersion('1.0')
        .addBearerAuth()
        .addTag('auth', 'Authentication operations')
        .addTag('books', 'Book management operations')
        .addTag('members', 'Member management operations')
        .addTag('borrow-records', 'Borrow and return operations')
        .addTag('genres', 'Genre management operations')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('api', app, document);
    await app.listen(process.env.PORT ?? 3000);
    console.log('Library Manager API is running on http://localhost:3000');
    console.log('Swagger documentation is available at http://localhost:3000/api');
}
bootstrap();
//# sourceMappingURL=main.js.map