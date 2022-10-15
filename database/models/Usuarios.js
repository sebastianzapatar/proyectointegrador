module.exports=(sequelize,DataTypes)=>{
    const Usuarios=sequelize.define("users",
    {
        idUser:{
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
        rolId:{
            type: DataTypes.INTEGER
        }
    }
    ,
    {
        tableName:'users',
        timestamps:false
    }
    );
<<<<<<< HEAD
    /*Usuarios.associate=function(models){
        Usuarios.belongsTo(models.Rols,{
=======
    Usuarios.associate=function(models){
        Usuarios.belongsTo(models.rols,{
>>>>>>> e45f29121020a9e8b144f6eba117f33e7b12369f
            as:"rols",
            foreignKey:"rolId"
        })
    }*/
    return Usuarios;
}

