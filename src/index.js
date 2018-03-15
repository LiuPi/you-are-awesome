// DO WHATEVER YOU WANT HERE

const createEnumerableProperty = (p) => {
    p.enumerable = true;
    return p;
};
const createNotEnumerableProperty = (p) => {
    var obj = {};
    Object.defineProperty(obj, p, {
        enumerable: false
    });
    return obj.prop;
};
const createProtoMagicObject = () => {
};

//********************************************
const incrementor = (function sum() {

    var sum = 0;

    function f(b) {
        sum += 1;
        return f
    }

    f.valueOf = function() { return sum };

    return f
})();

const asyncIncrementor = (function sum() {

        var sum = 0;

        function f(b) {
            sum += 1;
            return f
        }

        f.valueOf = function() { return sum };

        return f
    })();
function* createIncrementer() {
    var i = 1;
    while (i < i+1)
        yield i++;

}

// return same argument not earlier than in one second, and not later, than in two
const returnBackInSecond = new Promise(function(resolve, reject) {setTimeout(resolve, 100, 'foo');});

const getDeepPropertiesCount = function pc(obj) {
    return Object(obj) !== obj ? 0
        : Object.values(obj).map(pc)
        .reduce( (a,b) => a+b, Object.keys(obj).length );
};

const createSerializedObject = () => {return new String('abc');};


const toBuffer = () => {
};
const sortByProto = (arr) => {
    return arr.sort((a,b) => a.__proto__ - b.__proto__);
};

exports.createEnumerableProperty = createEnumerableProperty;
exports.createNotEnumerableProperty = createNotEnumerableProperty;
exports.createProtoMagicObject = createProtoMagicObject;
exports.incrementor = incrementor;
exports.asyncIncrementor = asyncIncrementor;
exports.createIncrementer = createIncrementer;
exports.returnBackInSecond = returnBackInSecond;
exports.getDeepPropertiesCount = getDeepPropertiesCount;
exports.createSerializedObject = createSerializedObject;
exports.sortByProto = sortByProto;