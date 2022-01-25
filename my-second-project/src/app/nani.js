var arr=[1,1,2,2,3,3,4,4,5,5,5]
function uniqarayy() {
var uni=[];
for(var i of arr){
    if(arr.indexOf(i)==-1){
        arr.push(i)
    }
    console.log(i);
}


}