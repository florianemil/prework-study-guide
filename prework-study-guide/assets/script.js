
var topics = ['HTML', 'CSS', 'GIT', 'JavaScript'];
var randomTopic = topics[Math.floor(Math.random() * topics.length)];

function listTopics() {
  for (var x = 0; x < topics.length; x++) {
    console.log(topics[x]);
}
  }

function selectTopic() {
  if (randomTopic === 'HTML') {
    console.log("Let's study HTML!");
  } else if (randomTopic === 'CSS') {
    console.log("Let's study CSS!");
  } else if (randomTopics === 'Git') {
    console.log("Let's study Git!");
  } else if (randomTopics === 'JavaScript') {
    console.log("Let's study Javascript!");
  } else {
    console.log("Please try again!");
  }
}

console.log('Here are the topics we learned through Prework: ');
listTopics();
console.log('Wich topic should we study first?');
selectTopic();
