//callback function
 
function myFuncA(xx, yy, zz){
 
    let data = xx + yy(20, 30)  //callback function
 
    console.log(data)
 
    zz( 'Wow wow wow' ) //callback function
}
 
//-------------------------------------
 
myFuncA(
    100,
    function(x, y){
        return x * y
    },
    ( info ) => {
        console.log(`IoT ${info}`)
    }
)