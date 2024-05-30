import sequelize from "../connection/connection.js";

import { Sequelize, DataTypes } from "sequelize";

class Usuario extends Sequelize.Model { }
Usuario.init({

    nombreApellido: {
        allowNull: false,
        type: DataTypes.STRING(250)
    },
    contrasena: {
        allowNull: true,
        type: DataTypes.STRING(100)
    },
    email: {
        allowNull: true,
        type: DataTypes.STRING(100)
    },
    tipo: {
        allowNull: true,
        type: DataTypes.TINYINT
    },
    edad: {
        allowNull: true,
        type: DataTypes.INTEGER
    },
    sexo: {
        allowNull: true,
        type: DataTypes.TINYINT
    },
    cargo: {
        allowNull: true,
        type: DataTypes.TINYINT
    },
},
    {
        timestamps: false,
        tableName: "usuarios",
        modelName: "usuarios",
        sequelize

    })



export default Usuario;
