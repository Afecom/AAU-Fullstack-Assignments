import { DataTypes } from 'sequelize'
import sequelize from '../sequelize.js'

const category = sequelize.define('Category', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    name: {
        type: DataTypes.TEXT,
        allowNull: false
    }
}, {
    timestamps: true,
    modelName: 'Category',
    tableName: 'Categories'
})

export default category