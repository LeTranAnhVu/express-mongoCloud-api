
export function jsonType (req, res, next){
    res.type('application/json');
    next();
}