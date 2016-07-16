/**
 * Created by skyADMIN on 16/7/15.
 */

var o = {x: 1, y: 2};
delete o.x;
console.log("x" in o);           //false

var a = [1, 2, 3];
delete a[2];
console.log(2 in a);            //false
console.log(a.length);          //3   删除了元素,但留下了一个洞,并不修改数组长度

var arr = [1, 2, 3, 4];
for (var i in arr) {
    console.log(i + arr[i]);
}//for/in语句遍历数组

var obj = {
    a: 1,
    b: 2,
    c: 3,
    d: 4
};
for (var o in obj) {
    console.log(obj[o]);
}//for/in语句遍历对象属性

with (obj) {
    console.log(a);
}//严格模式中禁止使用

//严格模式和非严格模式的区别: 1、禁止使用with语句。2、所有变量要先声明。3、