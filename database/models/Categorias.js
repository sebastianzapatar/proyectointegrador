module.exports=(sequelize,DataTypes)=>{
    const Categoria=sequelize.define("categories",
    {
        idCategories:{
            autoIncrement:true,
            primaryKey:true,
            type: DataTypes.INTEGER
        },
        name:{
            type:DataTypes.STRING
        }
    }
    ,
    {
        tableName:'categories',
        timestamps:false
    }
    );
    Categoria.associate=function(models){
        Categoria.hasMany(models.Productos,{
            as:"products",
            foreingKey:"idProducts"
        })
    }
    return Categoria;
}

