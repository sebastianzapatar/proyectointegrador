
module.exports=(sequelize,dataTypes)=>{
    const Productos=sequelize.define("products",
    {
        idProduct:{
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
<<<<<<< HEAD
        idCategoria:{
            type: dataTypes.INTEGER
=======
        categorieId:{
            type: DataTypes.INTEGER
>>>>>>> e45f29121020a9e8b144f6eba117f33e7b12369f
        }
    }
    ,
    {
        tableName:'products',
        timestamps:false
    }
    );
<<<<<<< HEAD
    
   /* Productos.associate=function(models){
        Usuarios.belongsTo(models.Usuarios,{
=======
    Productos.associate=function(models){
        Productos.belongsTo(models.categories,{
>>>>>>> e45f29121020a9e8b144f6eba117f33e7b12369f
            as:"categories",
            foreignKey:"categorieId"
        })
    }*/
    return Productos;
}

