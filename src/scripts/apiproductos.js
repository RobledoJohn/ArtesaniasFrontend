exports.getProducts=async(req,res,next) =>{

    const productos = await product.find();


    res.status(200).json({
        success:true,
        message: "en esta ruta usted va a ver los productos"
    })
}