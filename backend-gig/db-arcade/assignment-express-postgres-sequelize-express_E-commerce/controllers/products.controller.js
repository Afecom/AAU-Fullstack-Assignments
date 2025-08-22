import models from '../db/models/index.model.js'
const Product = models['Products']
const Category = models['Category']

export async function publishProduct(req, res){
    const body = req.body
    const { name, description, price, category_id, quantity } = body

    try {
        const product = await Product.create({name, description, price, category_id, quantity})
        res.status(201).json(product)
    } catch (error) {
        res.status(400).json({
            message: "Couldn't create a product",
            error: error.message || error
        })
    }
}
export async function listProducts(req, res){
    try {
        const products = await Product.findAll({
            include: {
                model: Category,
                as: 'category'
            }
        })
        res.json(products)
    } catch (error) {
         res.status(404).json({
            message: "Couldn't find a product",
            error: error.message || error
        })
    }
}
export async function updateProducts(req, res){}
export async function deleteProduct(req, res){}