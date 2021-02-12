/** 

1. mycarDetails fonksiyonunu "GA12345 Toyota" ciktisini verecek sekilde duzenleyin.

**/

/**
var car = { 
    registrationNumber: "GA12345",
    brand: "Toyota",

    displayDetails: function(){
        console.log(this.registrationNumber + " " + this.brand);
    }
}


var myCarDetails =  car.displayDetails;
myCarDetails();
**/
//1.

var car = { 
    registrationNumber: "GA12345",
    brand: "Toyota",

    displayDetails: function(){
       console.log(this.car.registrationNumber + " " + this.car.brand);
    }
}

var myCarDetails =  car.displayDetails;
myCarDetails();


//2. bind ile

var car = {
  registrationNumber: "GA12345",
  brand: "Toyota",

  displayDetails: function () {
    console.log(this.registrationNumber + " " + this.brand);
  },
};

var myCarDetails = car.displayDetails.bind(car);
myCarDetails();

/** 

2.name parametresi alan bir isValidName fonksiyonu yazin. Fonksiyon asagidaki kosullarin hepsi saglaniyorsa true, saglanmiyorsa false donmelidir:

name string olmali
name bos olmamali
bosluk icerebilir, ancak bosluk haridcindeki isimler en az 2 karakterden olusmali.

**/

/// your code here
function isValid(name) {
  if (typeof(name) === 'string' && name.trim().length !== 0) {

    let a = name.split(' ');

    for (let i = 0; i < a.length; i++) {
      if (a[i].length >= 2) {
        continue
      } else {
        return false
      }
    }

    return true
  } 
  else {
    return false
  }

}
console.log(isValid('Salih'))


/**


3. summary fonkisyonunu ciktisi "Brave New World was written by Aldous Huxley. It is a dystopian novel written in 1932." olacak sekilde cagirin.

**/
/**
const book = {
  title: 'Brave New World',
  author: 'Aldous Huxley',
}

function summary(genre, year) {
  console.log(
    `${this.title} was written by ${this.author}. It is a ${genre} novel written in ${year}.`,
  )
}
**/
//1. 

const book = {
  title: 'Brave New World',
  author: 'Aldous Huxley',
}

function summary(genre, year) {
  console.log(
    `${book.title} was written by ${book.author}. It is a ${genre} novel written in ${year}.`
  )
}
summary('dystopian','1932')

//2. call ile

const book = {
  title: "Brave New World",
  author: "Aldous Huxley",
};

function summary(genre, year) {
  console.log(
    `${this.title} was written by ${this.author}. It is a ${genre} novel written in ${year}.`
  );
}
summary.call(book, 'dystopian', '1932');


