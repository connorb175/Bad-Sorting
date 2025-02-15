const { IsSorted } = require("../IsSorted")


module.exports = {

    /**
     * Guess Sorts the array
     * @param {Array} arr array to sort
     * @returns {Array} 
     */
    GuessSort: (arr) =>{
        const arrayLen = arr.length;
        let randomArray = [];
        const completed = false

        const elementCount = [] 
                
        arr.forEach(element => {
            elementCount[element] = (elementCount[element] || 0 ) +1 ; 
        });

        while (!completed) {
            for(let i = 0 ; i < arrayLen; i ++){
                const randomnum = Math.floor(Math.random()*1000)+1;
                randomArray.push(randomnum);
            }
            if(IsSorted(randomArray)){
                for (const element of randomArray){
                    if (elementCount[element]){
                        elementCount[element]--;
                    }
                }
                for (let key in elementCount){
                    if (elementCount[key]!== 0 ){ 
                        completed == true
                    }
                }
            }
        }
        return randomArray;
        
    }
}