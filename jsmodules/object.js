/* ------- Object ------- */
let user = {
     name: "Philis",
     age: 30,
     email: "philis@example.com",
     location: "Malaysia",
     hobbies: [
          'badminton',
          'music',
          'movie'
     ],
     sing: function() {
          return 'I believe I can fly'
     },
     introduce: function() {
          return `I'm ${this.name}`
     }
}


user.age = 35;
user.name = "Philip"
console.log(user)

console.log(user.introduce());

for( let key in user ){
     console.log(user.hasOwnProperty(key));
}

console.log(user.hasOwnProperty('introduce'));
