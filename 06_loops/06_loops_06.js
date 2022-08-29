// Write your code below
let bobsFollowers = ['Art', 'Ben', 'Charlie', 'Dick'];
let tinasFollowers = ['Art', 'Ben', 'Zach'];
let mutualFollowers = [];

for (let i = 0; i < bobsFollowers.length; i++) {
  for (let j = 0; j < tinasFollowers.length; j++) {
    if (bobsFollowers[i] === tinasFollowers[j]) {
      mutualFollowers.push(bobsFollowers[i]);
    }
  }
}
