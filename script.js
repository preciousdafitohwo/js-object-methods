console.log("hello world")
const person = {
    name: "Bob",
    age: 30,
    favouriteColour: "red",
    sayHello: function () {
      console.log("Hello!");
    },
  };

  person.sayHello(); // using the function method on say hello to display its value
  

  const per = {
    name: "Alice",
    age: 30,
    favouriteColour: "red",
    sayHello: function (name) {
      console.log("Hello " + name + "!");
    },
  };

  per.sayHello("bob");

  const person01 = {
    name: "Bob",
    age: 30,
    favouriteColour: "red",
    getAge: function () {
      return person01.age;
    },
  };

  const age = person01.getAge();
  console.log(age);

  const car = {
    make: "vw",
    model: "scirocco",
    colour: "white",
    advert: function(){console.log(car.make + " " + car.model + " " + car.colour )
    }
  }

  car.advert();

  const book = {
    title:"48 days",
    author:"John doe",
    numberOfPages:125,
    advert: function(){
        return `Buy ${book.title} by ${book.author} which has ${book.numberOfPages} pages`;
    },
  }

  const bookAd = book.advert();
  console.log(bookAd);