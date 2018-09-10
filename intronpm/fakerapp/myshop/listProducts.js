var faker = require('faker');


var product = [];
var prices = [];
for(var i = 0;i<10;i++)
{
    product.push(faker.fake("{{commerce.productName}}"));
    prices.push(faker.fake("{{commerce.price}}"));
    
    console.log(product[i]+": $"+prices[i]);
}





