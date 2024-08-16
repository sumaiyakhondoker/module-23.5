const nayok = {
    name: 'Sakib Khan',
    id: 121,
    address: 'movie cinema',
    isSingle: true,
    friends : ['Apu', 'Raaz','Salman','amir'],
    car: {
        brand: 'tesla',
        price : 5000000,
        made : 2025,
        manufacturer:{
            name:'tesla',
            ceo : 'Elon Mask',
            country :'USA'  
        },
    },
    movies :[
        {name: 'no. 1', year: 2015},
        {name : 'king khan',year : 2018}
    ],
    act: function(){
        console.log('acting like sakib khan');
    }
};
// console.log(nayok.car);

console.log(nayok.name);
console.log(nayok.name,nayok.address,nayok.friends,nayok.id, nayok.isSingle, nayok.car.brand);
// nayok.act();