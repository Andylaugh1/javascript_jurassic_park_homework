const Park = function ( name, ticketPrice ) {
  this.name = name;
  this.ticketPrice = ticketPrice;
  this.dinosaurs = [];
}

Park.prototype.addDinosaur = function(dinosaur) {
  this.dinosaurs.push(dinosaur);
}

Park.prototype.removeDinosaur = function(dinosaur) {
  this.dinosaurs.splice();
}

Park.prototype.mostPopularDinosaur = function () {
  compare = function (dinosaur1, dinosaur2) {
    if (dinosaur1.guestsAttractedPerDay > dinosaur2.guestsAttractedPerDay)
      return -1;
    if (dinosaur1.guestsAttractedPerDay < dinosaur2.guestsAttractedPerDay)
      return 1;
      return 0;
  }

  const sortedDinosaurs = this.dinosaurs.sort(compare);
  return sortedDinosaurs[0];

}

Park.prototype.findDinosaurSpecies = function (dinosaurSpecies) {
  const foundDinosaurs = [];
  for (dinosaur of this.dinosaurs) {
    if (dinosaur.species === dinosaurSpecies) {
      foundDinosaurs.push(dinosaur);
    }
  }
  return foundDinosaurs;
}

Park.prototype.removeDinosaursSpecies = function (dinosaurSpecies) {
  for (dinosaur of this.dinosaurs) {
    if (dinosaur.species === dinosaurSpecies) {
      let a = this.dinosaurs.indexOf(dinosaur);
      this.dinosaurs.splice(a, 1);
    }
  }
  return this.dinosaurs;
}

module.exports = Park;
