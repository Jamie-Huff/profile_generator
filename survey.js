const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
const survey = function () {
  let object = {
    name: '',
    listen: '',
    activity: '',
    favFood: '',
    favMeal: '',
    favSport: '',
    amazing: ''
  }
  rl.question('What is your name?: ', (answer) => {
    object.name = answer
  rl.question('What\'s an activity you like doing?: ', (answer) => {
    object.activity = answer
  rl.question('What do you listen to while doing that?: ', (answer) => {
    object.listen = answer
  rl.question('Which meal is your favourite (eg: dinner, brunch, etc.)?: ', (answer) => {
    object.favMeal = answer
  rl.question('What\'s your favourite thing to eat for that meal?: ', (answer) => {
    object.favFood = answer
  rl.question('Which sport is your absolute favourite?: ', (answer) => {
    object.favSport = answer
  rl.question('What is your superpower? In a few words, tell us what you are amazing at!: ', (answer) => {
    object.amazing = answer
    console.log(`${object.name} loves listening to ${object.listen} while ${object.activity}, devouring ${object.favFood} for ${object.favMeal}, prefers ${object.favSport} over any other sport, and is ${object.amazing}.`)
  rl.close()
                }
              )}
            )}
          )}
        )}
      )}
    )}
  )
}
survey()
