const { IsSorted } = require("../IsSorted") 

module.exports = {
    /**
     * gnome sorts the array 
     * @param {Array} arr array to be sorted 
     * @returns {Array}
     */

    GnomeSort(arr){
        let i = 0; 
        while (i< n){
            if (i === 0 || arr[i] >= arr[i - 1]){
                 index ++; 
            } else {
                [[arr[i]], arr[i-1]] = [arr[index - 1], arr[i]]
                index --; 
            }
        }
        return arr
    }
}