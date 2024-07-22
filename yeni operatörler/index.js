

const product={
    id: "12345",
    brand: "Samsung",
    type: "Smart Phone",
    price:2000

}

//?. notasyonu
console.log(product.id);

//?[] square bracket notasyonu

console.log(product["brand"]);

let ids=product.id;
ids="67890";// yapılan değişiklik objeyi etkilemez
console.log(ids);
// console.log(product.id);


// let brand=product.brand

const product2={

    id: "67890",
    brand: "Apple",
    type: "Smart Phone",
    price:3000
}


//^ object Destructuring objelerde sıralma önemli değil sen nasıl çağırırsan öyle gelir


// const {id,price}= product2

// console.log(id,price);

const {brand, price, type, id2 }=product2

console.log(brand,price, type, id2);

//* varsayılan değer 

const person ={

    personName: "ali ihsan",
    surname:"temiz"
}

let {personName,surname, age=66}=person

age=56
console.log(personName,surname,age);

const person2={
    personName:"John",
    surname:" Doe",

}

let {personName:userName, surname:userSurname,UserAge=66}=person2

console.log(person2);



//? fonksiyonlarda object destr

const person3={
    personName:"Jane",
    surname:"Doe",

}

const printPerson=(insan)=>{
    console.log(object);
}