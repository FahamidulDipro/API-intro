//JSON --> Javascript Object Notation
const user = { id: 1, name: 'Amir', job: 'Actor' };
const stringyfiedUser = JSON.stringify(user);


const shop = {
    name: 'Alia Store',
    address: 'Ranbeer Road',
    products: ['Laptop', 'Mobile', 'Pepsi'],
    profit: 15000,
    isExpensive: false,
    owner: {
        name: 'Alia Bhat',
        profession: 'Actor'
    }
}
const stringShop = JSON.stringify(shop);
console.log(stringShop);
const convertedShop = JSON.parse(stringShop);
console.log(convertedShop.owner);