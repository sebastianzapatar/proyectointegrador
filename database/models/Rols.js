module.exports=(sequelize,DataTypes)=>{
    const Rol=sequelize.define("rols",
    {
        idRol:{
            autoIncrement:true,
            primaryKey:true,
            type: DataTypes.INTEGER
        },
        roleType:{
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
        Rol.hasMany(models.users,{
            as:"users",
            foreignKey:"rolId"
        })
    }
    return Rol;
}
