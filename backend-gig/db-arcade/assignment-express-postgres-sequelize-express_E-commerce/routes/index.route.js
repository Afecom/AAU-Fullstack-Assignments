import userRouter from "./users.route.js";
import productsRouter from "./products.route.js";
import categoryRouter from "./categories.route.js";
import { Router } from "express";
const indexRouter = Router()

indexRouter.use('/users', userRouter)
indexRouter.use('/products', productsRouter)
indexRouter.use('/category', categoryRouter)

export default indexRouter