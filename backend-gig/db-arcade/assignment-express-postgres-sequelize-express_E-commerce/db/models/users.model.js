import { DataTypes } from 'sequelize'
import sequelize from '../sequelize.js'

const User = sequelize.define('User', {
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
}, {
    timestamps: true,
    modelName: 'User',
    tableName: 'Users'
})

export default User