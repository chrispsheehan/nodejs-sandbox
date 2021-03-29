var chai = require('chai');
let expect = chai.expect;
let should = chai.should();
let assert = chai.assert;
chai.use(require('chai-json-schema'));

let goodApple = {
  skin: "thin",
  colors: ["red", "green", "yellow"],
  taste: 10
};
let badApple = {
  colors: ["brown"],
  taste: 0,
  worms: 2
};
  
const fruitSchema = require('./schemaFruit.js');

console.log(fruitSchema);
  
//bdd style
expect(goodApple).to.be.jsonSchema(fruitSchema);
expect(badApple).to.not.be.jsonSchema(fruitSchema);

//should style
goodApple.should.be.jsonSchema(fruitSchema);
badApple.should.not.be.jsonSchema(fruitSchema);

//tdd style
assert.jsonSchema(goodApple, fruitSchema);
assert.notJsonSchema(badApple, fruitSchema);


let appleMissingSkin = {
  colors: ["red", "green", "yellow"],
  taste: 10,
};

expect(appleMissingSkin).to.not.be.jsonSchema(fruitSchema);

let appleIncorrectType = {
  skin: "thin",
  colors: ["red", "green", "yellow"],
  taste: 'veryNice'
};

expect(appleIncorrectType).to.not.be.jsonSchema(fruitSchema);

let appleMultipack = [{
  skin: "thin",
  colors: ["red", "green", "yellow"],
  taste: 'veryNice'
},
{
  skin: "thin",
  colors: ["red", "green", "yellow"],
  taste: 10
}];

expect(appleMultipack).to.be.an('array')
expect(appleMultipack[1]).to.be.jsonSchema(fruitSchema);
expect(appleMultipack[0]).to.not.be.jsonSchema(fruitSchema);

