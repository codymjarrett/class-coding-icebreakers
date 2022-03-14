
function getSquare(){
    return {
        square: function(number){
            // if(typeof number !== Number){
            //     console.log('Hey, provide a number next time.');
            //  return ;
            // }
            // return number * number;

            if(typeof number !== Number){
                console.log('Hey, provide a number next time.');
            } else {
                return number * number;
            }
        }
    }
}

module.exports = getSquare