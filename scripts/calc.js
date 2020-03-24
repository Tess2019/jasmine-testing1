Calculator = function(){
    this.value =0;
}


Calculator.prototype.sdd =function(number) {
    if(typeof(number)=="number"){
        this.value += number;
    }else{
        alert ("Error!");
    } 
}
