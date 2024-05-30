import sequelize from "../connection/connection.js";

import { Sequelize, DataTypes } from "sequelize";

class UsuariosEvaluaciones extends Sequelize.Model { }
UsuariosEvaluaciones.init({

    nombreApellido: {
        allowNull: false,
        type: DataTypes.STRING(250)
    }, 
    email: {
        allowNull: true,
        type: DataTypes.STRING(100)
    }, 
    cansancioEmocional: {
        allowNull: true,
        type: DataTypes.STRING(5)
    },
    despersonalizacion: {
        allowNull: true,
        type: DataTypes.STRING(5)
    },
    relacionPersonal: {
        allowNull: true,
        type: DataTypes.STRING(5)
    },
    porcentaje: {
        allowNull: true,
        type: DataTypes.DECIMAL(40, 2)
    },
},
    {
        timestamps: false,
        tableName: "usuarios_evaluaciones",
        modelName: "usuarios_evaluaciones",
        sequelize

    })



export default UsuariosEvaluaciones;
