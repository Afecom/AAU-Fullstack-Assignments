import models from "../db/models/index.model.js"
const Category = models['Category']

export async function publishCategory(req, res){
    const { name } = req.body
    try {
        const created = await Category.create({name})
        if (created){
            res.status(201).json(created)
        }
    } catch (error) {
        res.status(400).json({
            message: "Couldn't create a category",
            error: error.message || error
        })
    }
}
export async function listCategories(req, res){
    try {
        const categories = await Category.findAll()
        if (categories){
            res.json(categories)
        }
        else{
            res.status(404).json({
            message: "Category not found",
        })
        }
    } catch (error) {
        res.status(400).json({
            message: "Couldn't fetch category",
            error: error.message || error
        })
    }
}
export async function updateCategory(req, res){}
export async function deleteCategory(req, res){}