const products =[
    {id:1,name:'samsung phone note 7', price: 19000},
    {id:2,name:'iphone', price: 100000},
    {id:3,name:'mac book air', price: 119000},
    {id:4,name:'lenovo yoga lapTOP 2025', price: 19000},
    {id:5,name:'Dell inspiron laptop', price: 19000},
    {id:6,name:'xiaomi phone one night', price: 19000},
    {id:7,name:'nokia old age gone', price: 19000},
    {id:8,name:'Phone one', price: 19000},
];
// for(const product of products){
//     console.log(product)
// }

function matchedProducts(products, search){
    const matched = [];
    for(const product of products){
        if(product.name.toLowerCase().includes(search.toLowerCase())){
            matched.push(product);
        }
    }
    return matched;
}

const result = matchedProducts(products,'PHONE');
console.log(result);