/*
  Given an array of ailements (illnesses), and an array of medication objects that have a nested array of treatedSymptoms
  return the medication name(s) that treats the most given symptoms
*/

const medications = [
    {
      name: "Sulforaphane",
      treatableSymptoms: [
        "dementia",
        "alzheimer's",
        "cancer",
        "inflammation",
        "neuropathy",
      ],
    },
    {
      name: "Longvida Curcumin",
      treatableSymptoms: [
        "pain",
        "inflammation",
        "depression",
        "arthritis",
        "anxiety",
      ],
    },
    {
      name: "Hericium erinaceus",
      treatableSymptoms: ["anxiety", "cognitive decline", "depression"],
    },
    {
      name: "Nicotinamide mononucleotide",
      treatableSymptoms: [
        "ageing",
        "low NAD",
        "obesity",
        "mitochondrial myopathy",
        "diabetes",
      ],
    },
    {
      name: "PainAssassinator",
      treatableSymptoms: [
        "pain",
        "inflammation",
        "cramps",
        "headache",
        "toothache",
        "back pain",
        "fever",
      ],
    },
  ];
  
  /*
  Input: ailments1, medications
  Output: ["PainAssassinator", "Longvida Curcumin"]
  */
  const ailments1 = ["pain"];
  
  /*
  Input: ailments2, medications
  Output: ["Longvida Curcumin"]
  */
  const ailments2 = [ "depression", "cancer", "ageing", "cramps", "diabetes"];
  
  /*
  Input: ailments3, medications
  Output: []
  */
  const ailments3 = ["existential dread"];
  
  function getMeMyMeds(ailments, meds) {
   // YOUR CODE HERE
   let maxMatchCount = 0;
   const ailmentSeen = {};
   let matchMeds = [];

   for(const ailment of ailments){
    ailmentSeen[ailment] = true;
   }
   for (const med of meds){
    let matchCount = 0;
    for (const symptom of med.treatableSymptoms){
        if (ailmentSeen.hasOwnProperty(symptom)){
            matchCount++;
        }
    }
    if (matchCount > 0){
        if (matchCount > maxMatchCount){
            maxMatchCount = matchCount;
            matchMeds = [med.name];
        } else if (matchCount === maxMatchCount){
            matchMeds.push(med.name)
        }
    }
   }
   return matchMeds;
}
console.log(getMeMyMeds(ailments1, medications));
console.log(getMeMyMeds(ailments2, medications));
console.log(getMeMyMeds(ailments3, medications));