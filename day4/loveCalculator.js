function loveCalculator(name1,name2)
{
    var per=Math.random();
    per=(per*100)+1;
    return Math.floor(per);

}
var name1=prompt("Enter name :");
var name2=prompt("Enter another name :");
console.log(loveCalculator(name1,name2));
