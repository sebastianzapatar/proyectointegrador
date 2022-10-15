
module.exports=(sequelize,dataTypes)=>{
    const Productos=sequelize.define("products",
    {
        idProducts:{
            autoIncrement:true,
            primaryKey:true,
            type: dataTypes.INTEGER
        },
        name:{
            type:dataTypes.STRING
        },
        description:{
            type:dataTypes.STRING
        },
        image:{
            type:dataTypes.STRING
        },
        price:{
            type:dataTypes.DECIMAL
        },
        idCategoria:{
            type: dataTypes.INTEGER
        }
    }
    ,
    {
        tableName:'products',
        timestamps:false
    }
    );
    
   /* Productos.associate=function(models){
        Usuarios.belongsTo(models.Usuarios,{
            as:"categories",
            foreingKey:"idCategoria"
        })
    }*/
    return Productos;
}

