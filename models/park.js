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

Park.prototype.mostPopularDinosaur = function {
  function compare(dinosaur1, dinosaur2) {
    if (dinosaur1.guestsAttractedPerDay < dinosaur.guestsAttractedPerDay)
      return -1;
    if (dinosaur1.guestsAttractedPerDay > dinosaur.guestsAttractedPerDay)
      return 1;
    return 0;
  }
  dinosaurs.sort(compare);

  }
}

module.exports = Park;
