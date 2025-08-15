// polyfill for Array.prototype.map() method 

if (!Array.prototype.polyfillMap) { // check if polyfillMap is defined 

    Array.prototype.polyfillMap = function (callbackFn, thisArg) {

        if (typeof callbackFn !== 'function') {
            throw new TypeError(`${callbackFn} is not a function.`);
        }

        const Obj = Object(this); // convert 'this' to an object to support array like values 
        const length = Obj.length >>> 0; // snapshot length and convert it to 32-bit unsigned integer 
        const result = new Array(length);

        for (let i = 0; i < length; i++) {
            if (Object.prototype.hasOwnProperty.call(Obj, i)) { //allow only own props; ignore inherit props
                result[i] = callbackFn.call(thisArg, Obj[i], i, Obj); // cb(currentValue, index, array)
            }
        }

        return result;
    }
}