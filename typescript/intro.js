"use strict";
// function example(message){
//     console.log(message);
exports.__esModule = true;
exports.Creamshop = void 0;
// }
// let message ='first type script';
// example(message);
// var a:number=10;
// a=20;
// console.log(a);
// var b:string;
// b='hwllo';
// console.log(b);
// b='helo';
// console.log(b);
// var c=10;
// c=20;
// console.log(c);
// var d;
// d=10;
// console.log(d);
// d='wast';
// console.log(d);
// d=null;
// console.log(d);
// d=4;
// console.log(d);
// var e=undefined ;
// e='shic';
// console.log(e);
// var arr =[10,20,30,];
// var arr1=['hi','nai'];
// console.log(arr1);
// var arr3;
// arr3=[10,20,'hello','sjiva'];
// console.log(arr3);
// var ravi:number | string | boolean='bala';
// console.log(ravi);
// var nav:[number,string,boolean,number]=[10,'nava',true,20];
// console.log(nav);
// var ta:[number[],number[],string,boolean,number]=[[],[10],'hello',true,10];
// console.log(ta);
// var obj={
//     name:'nan',
//     age:20,
//     id:'10as'
// }
// console.log(obj);
// var obj:{name:string,id:string,age:number}={
//     name:'nan',
//     age:20,
//     id:'10as'
// }
// console.log(obj.age);
// enum Color{
//     orang,
//     red=99,
//     green,
//     yellow=100,
//     white
// }
// var abc:Color=Color.white;
// console.log(abc);
// interface Product {
//     productName:string,
//     productPrice:number,
//     isGood:boolean
// }
// let choclate:Product;
// choclate={
//     productName:'bar',
//     productPrice:50,
//     isGood:true
// }
// console.log(choclate);
// let Icecream:Product;
// Icecream={
//     productName:'amual',
//     productPrice:60,
//     isGood:false
// };
// console.log(Icecream);
// class Creamshop{
// nameIce='laadu';
// constructor(name:string){
//     this.nameIce=name;
// }
// flavor(type:string){
//     console.log('the ' +this.nameIce+'  is  '+type);  
// }
// };
// let obj=new Creamshop('cone');
// obj.flavor('butter');
// obj.namece='cup';
// obj.flavor('vennela');
var Creamshop = /** @class */ (function () {
    function Creamshop(name) {
        this.nameIce = 'laadu';
        this.nameIce = name;
    }
    Creamshop.prototype.flavor = function (type) {
        return ('the ' + this.nameIce + '  is  ' + type);
    };
    return Creamshop;
}());
exports.Creamshop = Creamshop;
;
var obj = new Creamshop('cone');
obj.flavor('butter');
// obj.namIce='cup';
obj.flavor('vennela');
var ana = {
    name: 'va',
    age: 12,
    id: '20as'
};
console.log(ana);
