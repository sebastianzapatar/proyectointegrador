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
    Usuarios.associate=function(models){
        Usuarios.belongsTo(models.rols,{
            as:"rols",
            foreignKey:"rolId"
        })
    }
    return Usuarios;
}
