//Clases en JS

//Par encapsular atributos en js
const _private = new WeakMap();

class Book {
  //atributos

  //Constructor de la clase para instanciar objectos
  constructor(title, author, price) {
    //Usando el encapsulamiento private en atributos
    const properties = {
      title: title,
      author: author,
      price: price,
    };
    //Hacemos encapsulamiento a los atributos
    _private.set(this, { properties });
  }

  //Metodos get - set para title, autor, costo

  get title() {
    return _private.get(this).properties["title"];
  }

  set title(newTitle) {
    return (_private.get(this).properties["title"] = newTitle);
  }

  get author() {
    return _private.get(this).properties["author"];
  }

  set author(newAutor) {
    return (_private.get(this).properties["author"] = newAutor);
  }

  get price() {
    return _private.get(this).properties["price"];
  }

  set price(newPrice) {
    return (_private.get(this).properties["price"] = newPrice);
  }
}

//Clase Hija Comic

class Comic extends Book {
  constructor(title, author, price, _ilustrador) {
    super(title, author, price);
    this._ilustrador = _ilustrador;
  }
}

const book1 = new Book("Persona Normal", "Benito Taibo", 250);

const comic1 = new Comic("civil war", "marvel", 250, ["1", "2", "3"]);

console.log(
  `el libro ${comic1.title} de ${comic1.author} con un costo de ${comic1.price}`
);
//hacemos un set

// book1.title = "Corazonadas";

// console.log(
//   `el libro ${book1.title} de ${book1.author} con un costo de ${book1.price}`
// );
