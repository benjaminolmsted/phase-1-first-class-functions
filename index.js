function receivesAFunction(cb){
    cb();
}

function returnsANamedFunction(){
    const named = function(){
    }   
    return named;
}

function returnsAnAnonymousFunction(){
    return function(){};
}