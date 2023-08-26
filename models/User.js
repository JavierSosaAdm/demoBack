const { DataTypes } = require('sequelize');

module.exports = (database) => {
    database.define('User', {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            set(value) {
                this.setDataValue('name', value.toLowerCase());
            }
        },
        email: {
            type: DataTypes.STRING,
            unique: true,
        },
        phone: {
            type: DataTypes.STRING,
            unique: true,
        },
        gender : {
            type: DataTypes.ENUM("Male", "Female"),
        }, 
        fechaNacimiento: {
            type: DataTypes.DATE,
            defaultValue: new Date('1998-02-25')
        },
        age: {
            type: DataTypes.VIRTUAL,
            get() {
                const hoy = new Date();
                const nacimiento = new Date(this.fechaNacimiento);
                const calculoDeEdad = hoy.getTime() - nacimiento.getTime();
                return Math.floor(calculoDeEdad / (1000*60*60*24*365.25));
            }
        }
    },
    {
        timestamps: false,
    })
}