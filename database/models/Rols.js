module.exports=(sequelize,DataTypes)=>{
    const Rol=sequelize.define("rols",
    {
        idRol:{
            autoIncrement:true,
            primaryKey:true,
            type: DataTypes.INTEGER
        },
        rolType:{
            type:DataTypes.STRING
        }
    }
    ,
    {
        tableName:'rols',
        timestamps:false
    }
    );
    Rol.associate=function(models){
        Rol.hasMany(models.Usuarios,{
            as:"users",
            foreingKey:"idUsers"
        })
    }
    return Rol;
}

