
//Flat (làm phẳng) - sử dụng reduce() để "làm phẳng" các mảng sâu
//var depthArray = [1, 2, [3, 4], 5, 6, [7, 8, 9]];

//function flatHandler(flatOutput, depthItem)
//{
//   return flatOutput.concat(depthItem);
//}

//var flatArray = depthArray.reduce(flatHandler, []);

//console.log(flatArray); //Output = [1, 2, 3, 4, 5, 6, 7, 8, 9]


/**------------------------------------------------------------ */
var arr = [
    'Javascript',
    'Javascript',
    'PHP',
    'Ruby'
];


Array.prototype.find2 = function(callBack)
{
    var result = [];
    var flag;
    var arrayLength = this.length;

    for (let i = 0; i < arrayLength; i++)
    {
        flag = callBack(this[i], i);
        if(flag)
        {
            result = this[i];
            break;
        }
    }
    return result;
}


var resultFind = arr.find2(function(name)
{
    return name === 'Javascript';
})

console.log('Value Find:' + resultFind);

//------------------Filter-----------------------

Array.prototype.filter2 = function(callBackFilter)
{
    var result = []
    var flag;
    var arrayLength = this.length;

    for (var i = 0; i < arrayLength; i++)
    {
        flag = callBackFilter(this[i], i)
        if (flag)
        {
            result.push(this[i]);
        }
    }
    return result;
}

var resultFilter = arr.filter2(function(name)
{
    return name == 'Javascript';
})

console.log('Value Filter: ' + resultFilter);

//--------------------Reduce---------------------


var resultReduce = arr.reduce(function(acc, value)
{
   
})

console.log('Value reduce: ' + resultReduce)




  
  