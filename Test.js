console.log("正则表达式练习");

var regularStr = 'my name is zjruan,and my age is 21,i\'m work in mistong ';

var result = /[^my]/.exec(regularStr)

console.log(result)