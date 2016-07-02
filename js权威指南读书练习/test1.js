/**
 * Created by skyADMIN on 16/7/2.
 */


/* in/instanceof 运算符的使用 */

var point = {
    x: 1,
    y: 1
};

console.log("x" in point);      //true : x是point的属性
console.log("z" in point);      //false : z不是

var data = [7, 8, 9];
console.log("0" in data);       //true : 索引为0的元素是存在的,书上表述好像有误?
console.log(3 in data);         //false : 索引为3的元素不存在

var d = new Date();             //通过Date()构造函数创建对象
console.log(d instanceof Date); //true : d是Date类的对象
console.log(d instanceof Object);//true : Object是Date的父类
console.log(d instanceof Number);//false : d不是Number类的对象


/* 表达式计算 —— eval方法 */

console.log(eval("3+2"));       //eval是函数,但是经常被当做运算符对待,不建议在实际中应用
//eval方法只有一个参数,如果传入的参数是字符串,它会将其当成js代码进行编译(解析?原文parse,淘宝翻译团队认为应该翻译为编译,是说这个方法只负责把字符串变成代码不负责执行么?执行还是由外部的js解释器来进行这个意思?)

eval("function f() {console.log('123')}");
eval("f()");