// --------------------- EXE #1 --------------------- //

// My experiments :

const people = [
  {name: 'Jan', last: 'As', age:29, city: 'Poznan', post_code:01-232 },
  {name: 'Anna', last: 'Sowa', age:32, city: 'Krakow', post_code:02-432  },
  {name: 'Piotr', last: 'Augustyn', age:37, city: 'Lodz', post_code:90-249  },
  {name: 'Pawel', last: 'Pawlowski', age:43, city: 'Warszawa', post_code:02-847  },
  {name: 'Janina', last: 'Pawlak', age:78, city: 'Lodz', post_code:90-234  },
  {name: 'Adrian', last: 'Wetuj', age:42, city: 'Warsaw', post_code:01-100  },
  {name: 'Antoni', last: 'Smolenski', age:70, city: 'Warsaw', post_code:01-123  },
  {name: 'Kazik', last: 'Staszewski', age:59, city: 'Wroclaw', post_code:89-345  },
  {name: 'Monika', last: 'Bikini', age:20, city: 'Poznan', post_code: 01-345 },
  {name: 'Karol', last: 'Wisniewski', age:34, city: 'Katowice', post_code:10-897  },
  {name: 'Roman', last: 'Traktor', age:67, city: 'Zadupie', post_code:00-000  }
];

let peopleFilter = people.filter(function(human){
    if (human.city === 'Warsaw' || human.city === 'Warszawa' ){
      return human.city;
    }
});
console.table(peopleFilter);



