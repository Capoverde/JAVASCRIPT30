// --------------------- EXE #1 --------------------- //
            // Array Cardio practice:

// My experiments with filter method:

const people = [
  {name: 'Jan', last: 'As', age:29, city: 'Poznan', post_code:'01-232' },
  {name: 'Anna', last: 'Sowa', age:32, city: 'Krakow', post_code:'02-432'  },
  {name: 'Piotr', last: 'Augustyn', age:37, city: 'Lodz', post_code:'90-249'  },
  {name: 'Pawel', last: 'Pawlowski', age:43, city: 'Warszawa', post_code:'02-847'  },
  {name: 'Janina', last: 'Pawlak', age:78, city: 'Lodz', post_code:'90-234'  },
  {name: 'Adrian', last: 'Wetuj', age:42, city: 'Warsaw', post_code:'01-100'  },
  {name: 'Antoni', last: 'Smolenski', age:70, city: 'Warsaw', post_code:'01-123'  },
  {name: 'Kazik', last: 'Staszewski', age:59, city: 'Wroclaw', post_code:'89-345'  },
  {name: 'Monika', last: 'Bikini', age:20, city: 'Poznan', post_code: '01-345' },
  {name: 'Karol', last: 'Wisniewski', age:34, city: 'Katowice', post_code:'10-897'  },
  {name: 'Roman', last: 'Traktor', age:67, city: 'Zadupie', post_code:'00-000'  }
];




// let peopleFilter = people.filter(function(human){
//     if (human.age <= 29 && human.city === 'Poznan' ){
//       return human;
//     }
// });
// console.table(peopleFilter);


// ------------------ map() ------------------- //

// const FullNames = people.map(human => `${human.name} ${human.last}`);

// console.table(FullNames);

// ------------------ sort() ------------------- //

// const ordered = people.sort(function(a,b){
//   if(a.age > b.age){
//     return 1;
//   }else{
//     return -1;
//   }
// });

// ES6 Version:

// const ordered = people.sort((a,b)=> a.age > b.age ? 1 : -1)
// console.table(ordered);



window.addEventListener('keydown', function (e) {
    e.preventDefault();
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    if (!audio) return;
    audio.currentTime = 0;
    audio.play();
})