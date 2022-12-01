const kittens = [
    {species: 'Russian Blue', hypoallergic: true},
    {species: 'Turkish Van', hypoallergenic: false},
    {species: 'Bengal', hypoallergenic: true},
    {species: 'Ragdoll', hypoallergenic: false},
    {species: 'Munchkins', hypoallergenic: false},
    {species: 'Siamese', hypoallergenic: true}
  ];
  
  module.exports = {
    getAll: function() {
      return kittens;
    }
  };
 