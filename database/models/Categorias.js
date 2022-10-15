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
<<<<<<< HEAD
    /*Categoria.associate=function(models){
        Categoria.hasMany(models.Productos,{
=======
    Categoria.associate=function(models){
        Categoria.hasMany(models.products,{
>>>>>>> e45f29121020a9e8b144f6eba117f33e7b12369f
            as:"products",
            foreignKey:"categorieId"
        })
    }*/
    return Categoria;
}

