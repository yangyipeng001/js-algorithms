/* 
    new
*/

// 第一版代码
/*  
    用new Object() 的方式新建了一个对象 obj
    取出第一个参数，就是我们要传入的构造函数。此外因为 shift 会修改原数组，所以 arguments 会被去除第一个参数
    将 obj 的原型指向构造函数，这样 obj 就可以访问到构造函数原型中的属性
    使用 apply，改变构造函数 this 的指向到新建的对象，这样 obj 就可以访问到构造函数中的属性
    返回 obj
*/
function objectFactory() {

    var obj = new Object();

    Constructor = [].shift.call(arguments);

    obj.__proto__ = Constructor.prototype;

    Constructor.apply(obj, arguments);

    return obj;
};

// 第二版的代码
function objectFactory() {

    var obj = new Object();

    Constructor = [].shift.call(arguments);

    obj.__proto__ = Constructor.prototype;

    var ret = Constructor.apply(obj, arguments);

    return typeof ret === 'object' ? ret : obj;
};


var arr1 = [1, 2, 3, [1, 2, 3, 4, [2, 3, 4]]];
  function flatten(arr) {
    var res = [];
    for (let i = 0, length = arr.length; i < length; i++) {
      if (Array.isArray(arr[i])) {
        res = res.concat(flatten(arr[i])); //concat 并不会改变原数组
      //res.push(...flatten(arr[i])); //扩展运算符  
      } else {
        res.push(arr[i]);
      }
    }
    console.log('-----res', res)
    return res;
  }
  flatten(arr1); //[1, 2, 3, 1, 2, 3, 4, 2, 3, 4]