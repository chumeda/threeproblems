//sumFor, sumWhile, sumRecursion, and sumTheSimpleWay

var numbers = [1,3,4];

function sumFor(list) {
    var total = 0;
    for(var i = 0; i<list.length; i++) {
        total += list[i];
    }
    return total;
}

function sumWhile(list) {
    var i = 0;
    var total = 0;
    while(i<list.length) {
        total += list[i];
        i++;
    }
    return total;
}

function sumRecursion(list) {

}

function sumTheSimpleWay(list) {
    return _.reduce(list, function(memo, num){ return memo + num; }, 0);
}
//console.log(sumTheSimpleWay(numbers));

var test1 = ['a','b','c'];
var test2 = [1,2,3];

function zipList(list1, list2) {
    var newlist = [];
    var count=0;
    for(var i=0; i<list1.length;i++) {
        newlist[count] = list1[i];
        count++;
        newlist[count] = list2[i];
        count++;
    }
    return newlist
}

function zipListTheSimpleWay(list1,list2) {
    return _.flatten(_.zip(list1, list2));
}

//console.log(zipListTheSimpleWay(test1,test2));

function fib() {
    var fibo = [0,1];
    for(var i = 2; i<100; i++) {
        fibo[i] = fibo[i-1] + fibo[i-2];
    }
    return fibo;
}
console.log(fib());