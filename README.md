# mystery-organism-starter
Uses JavaScript

# 🧬 P. aequor DNA Simulation

A simple JavaScript simulation that models the DNA of *P. aequor*, a fictional organism. This program generates DNA strands, simulates mutations, and filters for specimens likely to survive based on their genetic makeup.

## Features

- Random DNA generation (15-base strands)
- DNA mutation ensuring base change
- DNA comparison between specimens
- Survival prediction based on GC content (≥60%)
- Generates 30 specimens likely to survive

## Usage

```js
// Create a single DNA strand
const strand = mockUpStrand();

// Create a specimen
const specimen = pAequorFactory(1, strand);

// Mutate its DNA
specimen.mutate();

// Compare with another specimen
specimen.compareDNA(otherSpecimen);

// Check survival likelihood
specimen.willLikelySurvive();

Specimen #1 and Specimen #2 have 66.67% DNA in common.
true // Indicates specimen is likely to survive

Tech Stack
JavaScript (ES6+)
