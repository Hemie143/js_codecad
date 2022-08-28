let raceNumber = Math.floor(Math.random() * 1000);

let earlyRunner = true;
let runnerAge = 18;

if (runnerAge >= 18 && earlyRunner) {
  raceNumber += 1000;
}
if (runnerAge >= 18 && earlyRunner) {
  console.log(`You will race at 9:30 am with number ${raceNumber}`);
} else if (runnerAge >= 18 && !earlyRunner) {
  console.log(`You will race at 11:00 am with number ${raceNumber}`);
} else if (runnerAge < 18) {
  console.log(`You will race at 12:30 pm with number ${raceNumber}`);
} else {
  console.log(`Case not possible. Age: ${runnerAge} - early: ${earlyRunner}`);
}
