module.exports=(sequelize,DataTypes)=>{
    const Categoria=sequelize.define("categories",
    {
        idCategorie:{
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
        Categoria.hasMany(models.products,{
            as:"products",
            foreignKey:"categorieId"
        })
    }
    return Categoria;
}

