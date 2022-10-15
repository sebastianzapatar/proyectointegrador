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
<<<<<<< HEAD
    /*Rol.associate=function(models){
        Rol.hasMany(models.Usuarios,{
=======
     Rol.associate=function(models){
        Rol.hasMany(models.users,{
>>>>>>> e45f29121020a9e8b144f6eba117f33e7b12369f
            as:"users",
            foreignKey:"rolId"
        })
    }*/
    return Rol;
}

