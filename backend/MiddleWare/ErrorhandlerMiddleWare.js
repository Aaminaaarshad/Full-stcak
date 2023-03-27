const errorHandler = (err, req, res, next)=>{
    const statusCode = res.statusCode ? res.statusCode : 500
    res.status(statusCode).json({success: false, message:err.message})
}


module.exports =errorHandler



// Default erro handler ====== ye ek html ka page bna kr error likh kr forntend ko send klr daita ha 