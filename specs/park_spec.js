const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  let park;
  let dinosaur1;
  let dinosaur2;
  let dinosaur3;

  beforeEach(function () {
    park = new Park('Jurassic Park', 20);
    dinosaur1 = new Dinosaur('t-rex', 'carnivore', 50);
    dinosaur2 = new Dinosaur('Velociraptor', 'carnivore', 60);
    dinosaur3 = new Dinosaur('Brachiassaurus', 'herbivore', 20);

  })

  it('should have a name', function () {
    assert.strictEqual(park.name, 'Jurassic Park')
  });

  it('should have a ticket price', function () {
    assert.strictEqual(park.ticketPrice, 20)
  });

  it('should have a collection of dinosaurs', function () {
    assert.strictEqual(park.dinosaurs.length, 0)
  });

  it('should be able to add a dinosaur to its collection', function () {
    park.addDinosaur(dinosaur1);
    assert.strictEqual(park.dinosaurs.length, 1)
  });

  it('should be able to remove a dinosaur from its collection', function () {
    park.removeDinosaur(dinosaur1);
    assert.strictEqual(park.dinosaurs.length, 0)
  });

  // it('should be able to find the dinosaur that attracts the most visitors', function () {
  //   park.addDinosaur(dinosaur1);
  //   park.addDinosaur(dinosaur2);
  //   park.addDinosaur(dinosaur3);
  //   actualValue = park.mostPopularDinosaur().name;
  //   assert.strictEqual(actualValue, 'Velociraptor');
  // });

  it('should be able to find all dinosaurs of a particular species');

  it('should be able to remove all dinosaurs of a particular species');

});
