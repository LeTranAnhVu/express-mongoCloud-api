export default {
  isGoodDate: function(d){
    let _d = new Date(d);
    return _d && _d instanceof Date && !isNaN(_d);
  }
}
