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
        type: DataTypes.STRING(100),
        primaryKey: true
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
    tipo:{
        allowNull: true,
        type: DataTypes.TINYINT
    },
    cansancioEmocional: {  
        allowNull: true,
        type: DataTypes.STRING(100)
    },
    despersonalizacion: {
        allowNull: true,
        type: DataTypes.STRING(100)
    },
    relacionPersonal: {
        allowNull: true,
        type: DataTypes.STRING(100)
    },
    porcentaje: {
        allowNull: true,
        type: DataTypes.INTEGER
    },
    
    
},
    {
        timestamps: false,
        tableName: "pacientes",
        modelName: "pacientes",
        sequelize

    })



export default Paciente;
