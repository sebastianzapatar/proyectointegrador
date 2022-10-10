module.exports=(sequelize,DataTypes)=>{
    const Productos=sequelize.define("products",
    {
        idProducts:{
            autoIncrement:true,
            primaryKey:true,
            type: DataTypes.INTEGER
        },
        name:{
            type:DataTypes.STRING
        },
        description:{
            type:DataTypes.STRING
        },
        image:{
            type:DataTypes.STRING
        },
        price:{
            type:DataTypes.DECIMAL
        },
        categorieId:{
            type: DataTypes.INTEGER
        }
    }
    ,
    {
        tableName:'products',
        timestamps:false
    }
    );
    // Productos.associate=function(models){
    //     Productos.belongsTo(models.users,{
    //         as:"categories",
    //         foreingKey:"idCategoria"
    //     })
    // }
    return Productos;
}

