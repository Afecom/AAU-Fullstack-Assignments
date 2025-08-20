import { Model } from "sequelize"

export default (sequelize, DataTypes) => {
    class User extends Model {
        static associate(models){
            User.hasMany(models.Order, {
                foreignKey: 'user_id',
                as: 'orders'
            }),
            User.hasMany(models.Cart, {
                foreignKey: 'user_id',
                as: 'carts'
            })
        }
    }

    User.init({
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        first_name: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        last_name: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        phone_number: {
            type: DataTypes.TEXT,
            allowNull: false
        }
    },{
        sequelize,
        timestamps: true,
        modelName: 'User',
        tableName: 'Users' 
    })

    return User
}