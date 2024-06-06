import sequelize from "../connection/connection.js";

import { Sequelize, DataTypes } from "sequelize";

class Paciente extends Sequelize.Model { }
Paciente.init({

    nombreApellido: {
        allowNull: false,
        type: DataTypes.STRING(250)
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
        tableName: "pacientes",
        modelName: "pacientes",
        sequelize

    })



export default Usuario;
