var chai = require('chai');
const {expect, should} = chai;
chai.use(require('chai-json-schema'));

var goodApple = [{
    skin: 'thin',
    colors: ['red', 'green', 'yellow'],
    taste: 10
  },
  {
    skin: 'thick',
    colors: ['red'],
    taste: 10
  }];
  var badApple = [{
    colors: ['brown'],
    taste: 0,
    worms: 2
  }];
  
  const fruitSchema = require('./schemaFruit.js');

  console.log(fruitSchema);
  
  //bdd style
  //expect(goodApple).to.be.jsonSchema(fruitSchema);
  expect(badApple).to.not.be.jsonSchema(fruitSchema);
  
//   goodApple.should.be.jsonSchema(fruitSchema);
//   badApple.should.not.be.jsonSchema(fruitSchema);
  
//   //tdd style
//   assert.jsonSchema(goodApple, fruitSchema);
//   assert.notJsonSchema(badApple, fruitSchema);