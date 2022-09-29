module.exports=(sequelize,DataTypes)=>{
    const Usuarios=sequelize.define("users",
    {
        idUsers:{
            autoIncrement:true,
            primaryKey:true,
            type: DataTypes.INTEGER
        },
        name:{
            type:DataTypes.STRING
        },
        email:{
            type:DataTypes.STRING
        },
        image:{
            type:DataTypes.STRING
        },
        password:{
            type:DataTypes.STRING
        },
        idRol:{
            type: DataTypes.INTEGER
        }
    }
    ,
    {
        tableName:'users',
        timestamps:false
    }
    );
    Usuarios.associate=function(models){
        Usuarios.belongsTo(models.Rols,{
            as:"rols",
            foreingKey:"idUsers"
        })
    }
    return Usuarios;
}

