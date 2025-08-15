// polyfill for Array.prototype.filter() method 

if (!Array.prototype.polyfillFilter) { // check if polyfillFilter is defined 

    Array.prototype.polyfillFilter = function (callbackFn, thisArg) {

        if (typeof callbackFn !== 'function') {
            throw new TypeError(`${callbackFn} is not a function.`);
        }

        const Obj = Object(this); // convert 'this' to an object to support array like values 
        const length = Obj.length >>> 0; // snapshot length and convert it to 32-bit unsigned integer 
        const result = [];

        for (let i = 0; i < length; i++) {
            if (Object.prototype.hasOwnProperty.call(Obj, i)) { // allow only own props; ignore inherit props
                if (callbackFn.call(thisArg, Obj[i], i, Obj)) { // check if callbackFn returns true
                    result.push(Obj[i]);
                }
            }
        }

        return result;
    }
}