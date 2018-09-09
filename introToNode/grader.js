function average(scores)
{
    var avg = 0;
    for(var i = 0 ;i<scores.length;i++)
    {
        avg+=scores[i];
    }
    
    return Math.round(avg/(scores.length));
}

var scores = [90,98,89,100,100,86,94];
var scores2 = [40,65,77,82,80,54,73,63,95,49];

console.log(average(scores));
console.log(average(scores2));
