const facts = [
  "'Pleasure in the job puts perfection in the work.' - Aristotle",
  "'You must take the time to play to be creative.' - John Cohn",

  "Job satisfaction is the no. 1 predictor of organizational performance.",
  "Your brain at positive is 31% more productive than your brain at negative, neutral or stressed.",
  "Studies have shown employee happiness results in less sick leave and greater productivity.",
  "Watching a comedy video can make you 12% more productive.",
  "Watching a *Robin Williams* comedy video can make you 20% more productive.",
  "Laughter is a nice muscle workout.",
  "Laughter can defuse tense situations.",
  "Fun matters in agriculture: piglet litters grow faster if they play more.",
];
const randomInt = (n) => Math.floor(Math.random() * n);
const fact = () => facts[randomInt(facts.length)];

module.exports = fact;
