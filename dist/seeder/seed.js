"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("../app.module");
const seeder_service_1 = require("./seeder.service");
async function seed() {
    const app = await core_1.NestFactory.createApplicationContext(app_module_1.AppModule);
    const seederService = app.get(seeder_service_1.SeederService);
    try {
        await seederService.seed();
        console.log('Database seeded successfully!');
    }
    catch (error) {
        console.error('Error seeding database:', error);
    }
    finally {
        await app.close();
    }
}
seed();
//# sourceMappingURL=seed.js.map