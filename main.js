// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

// Factory function to create P. aequor organisms
const pAequorFactory = (num, arr) => {
  return {
    specimenNum: num,
    dna: arr,
    mutate(){
      // Select a random index in the dna array
      const randIndex = Math.floor(Math.random() * this.dna.length);

      // Get the current base at that index
      let currentBase = this.dna[randIndex];

      // Ensure the new base is different from the current one
      let newBase;
      
      do {
        newBase = returnRandBase();
      } while (newBase === currentBase);

      // Replace the old base with the new one
      this.dna[randIndex] = newBase;

      return this.dna;
    },
    // Method to compare DNA with another P. aequor specimen
    compareDNA(otherAequor){
      let identicalBases = 0;
      // Iterate through both DNA sequences and count identical bases
      for (let i = 0; i < this.dna.length; i++){
        if(this.dna[i] === otherAequor.dna[i]){
          identicalBases++;
        }
      }
      // Calculate the percentage of identical bases
      const similarity = ((identicalBases / this.dna.length) * 100).toFixed(2);
      // Print a message stating the similarity percentage
      console.log(`Specimen #${this.specimenNum} and Specimen #${otherAequor.specimenNum} have ${similarity}% DNA in common.`);
    },
    willLikelySurvive(){
      // Count occurrences of 'C' and 'G' bases
      const cgCount = this.dna.filter(base => base === 'C' || base === 'G').length;
      // Calculate percentage
      const survivalRate = (cgCount / this.dna.length) * 100;
      // Return true if at least 60% of bases are 'C' or 'G'
      return survivalRate >= 60;
    }
  };
}
// Array to store surviving instances
const survivingSpecimens = [];

// Generate organisms until we have 30 that can survive
while (survivingSpecimens.length < 30){
  let newOrganism = pAequorFactory(survivingSpecimens.length + 1, mockUpStrand());
  // Only add organisms that meet the survival criteria
  if (newOrganism.willLikelySurvive()){
    survivingSpecimens.push(newOrganism);
  }
}

console.log(survivingSpecimens);






