const people = ["Alice", "Bob", "Carly", "Dan", "Ed", "Ferdinand", "Ginny"]



function generateSecretSantaPairs(arr) {
   // Copy the array to avoid modifying the original array
  const shuffledPeople = [...people];

  // Shuffle an array randomly
  for (let i = shuffledPeople.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledPeople[i], shuffledPeople[j]] = [shuffledPeople[j], shuffledPeople[i]];
  }

  // Create pairs
  const pairs = {};
  for (let i = 0; i < shuffledPeople.length; i++) {
    const currentPerson = shuffledPeople[i];
    const nextPerson = shuffledPeople[(i + 1) % shuffledPeople.length];
    pairs[currentPerson] = currentPerson === nextPerson ? shuffledPeople[(i + 2) % shuffledPeople.length] : nextPerson;
  }

    return pairs
}

console.log(generateSecretSantaPairs(people))

/**
Example output:
{
    Alice: "Dan",
    Bob: "Ferdinand",
    Carly: "Ed",
    Dan: "Alice",
    Ed: "Ginny",
    Ferdinand: "Bob",
    Ginny: "Carly"
}
 */