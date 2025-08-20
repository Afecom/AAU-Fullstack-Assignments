import { Model } from 'sequelize'

export default (sequelize, DataTypes) => {
    class Orders extends Model{
        static associate(models){
            Orders.belongsTo(models.User, {
                foreignKey: 'user_id',
                as: 'users'
            }),
            Orders.hasMany(models.Order_item, {
                foreignKey: 'order_id',
                as: 'order_items'
            })
        }
    }

    Orders.init({
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'User',
                key: 'id'
            }
        }
    }, {
        sequelize,
        modelName: 'Order',
        tableName: 'Orders',
        timestamps: true
    })

    return Orders
}