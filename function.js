
function getSquare(){
    return {
        square: function(number){
            if(typeof number !== Number){
                console.log('Please provide a number');
                return;
            }
            return number * number;
        }
    }
}

module.exports = getSquare