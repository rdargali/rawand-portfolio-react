import pokedex from "../images/pokedex.png";
import statsdontlie from "../images/statsdontlie.png";
import tetris from "../images/tetris.png";
import trivia from "../images/trivia.png";
import tweet from "../images/tweet.png";
import sirentimer from "../images/sirentimer.gif";

const projects = [
  {
    title: "Tetris",
    thumbnail: tetris,
    description:
      "Full Tetris game using Node.js and PostgresSQL with multiplayer functionality,  leaderboard and chatroom using sockets.io. ",
    github: "https://github.com/rdargali/tetris",
    link: "https://powerful-ravine-73143.herokuapp.com/",
  },
  {
    title: "Trivia Night",
    thumbnail: trivia,
    description:
      "Challenge yourself with trivia of your choice of category, difficulty, and number of questions. Provides single and multiplayer mode.",

    github: "https://github.com/rdargali/TriviaApp",
    link: "https://summerbr.github.io/TriviaApp/",
  },
  {
    title: "Pokémon Pokédex",
    thumbnail: pokedex,
    description:
      "An easy to use app made with React and Bootstrap for fans of Pokemon that replicates the 'Pokedex' from the TV show.",
    github: "https://github.com/rdargali/pokedex",
    link: "https://rdpokedex.netlify.app/",
  },
  {
    title: "Stats Don't Lie",
    thumbnail: statsdontlie,
    description:
      "A React app that allows users to compare NBA players' statistics side by side using visuals such as charts and grids. ",
    github: "https://github.com/rdargali/stats-dont-lie",
    link: "https://statsdontlie.netlify.app/",
  },
  {
    title: "Siren Timer",
    thumbnail: sirentimer,
    description:
      " A countdown timer for the hearing impaired that uses loud visuals instead of loud sounds to signal the end of a timer. Made with HTML, CSS, and JavaScript.",
    github: "https://github.com/rdargali/siren-timer",
    link: "https://sirentimer.netlify.app/",
  },
  {
    title: "Tweet Tweet",
    thumbnail: tweet,
    description:
      "Twitter clone using Node.js, Express, Sequelize, and PostGres that allows users to log in and post tweets and view other users' tweets. ",
    github: "https://github.com/rdargali/Tweet-Tweet",
    link: "https://dctweet.herokuapp.com/",
  },
];

export default projects;
