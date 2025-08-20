import { Model } from "sequelize";

export default (sequelize, DataTypes) => {
    class Product extends Model {
        static associate(models) {
            Product.belongsTo(models.Category, {
                foreignKey: 'category_id',
                as: 'categories'
            }),
            Product.hasMany(models.Product_image, {
                foreignKey: 'product_id',
                as: 'images'
            }),
            Product.hasMany(models.Order_item, {
                foreignKey: 'product_id',
                as: 'order_items'
            }),
            Product.hasMany(models.Cart, {
                foreignKey: 'product_id',
                as: 'cart_items'
            })
        }
    }

    Product.init({
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        price: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        category_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'Categories',
                key: 'id'
            }
        },
        quantity: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    },{
        sequelize,
        timestamps: true,
        modelName: 'Product',
        tableName: 'Products'
    })

    return Product
}