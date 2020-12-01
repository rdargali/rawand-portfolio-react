import pokedex from "../images/pokedex.png";
import statsdontlie from "../images/statsdontlie.png";
import tetris from "../images/tetris.png";
import trivia from "../images/trivia.png";
import tweet from "../images/tweet.png";
import sirentimer from "../images/sirentimer.gif";
import multistopwatch from "../images/multistopwatch.png";
import elevatedplusmazestopwatch from "../images/elevatedplusmazestopwatch.png";

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
      "Challenge yourself with trivia in your choice of category, difficulty, and single or multiplayer mode. Utilizes Bootstrap and Firebase as a server.",

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
    title: "Elevated Plus Maze Stopwatch",
    thumbnail: elevatedplusmazestopwatch,
    description:
      "An optimized timer for scoring results on an elevated plus maze. Created with HTML, CSS, and JavaScript for the Neurobiology of Memory lab at the University of Texas at Dallas for neural engineering and studies on PTSD.",
    github: "https://github.com/rdargali/elevated-plus-maze-stopwatch",
    link: "https://epms.netlify.app/",
  },
  {
    title: "Siren Timer",
    thumbnail: sirentimer,
    description:
      " A countdown timer for the hearing impaired that uses loud visuals instead of loud sounds to signal the end of a timer. Created with HTML, CSS, and JavaScript for the Neurobiology of Memory lab at the University of Texas at Dallas for neural engineering and studies on PTSD.",
    github: "https://github.com/rdargali/siren-timer",
    link: "https://sirentimer.netlify.app/",
  },
  {
    title: "Multi Stopwatch",
    thumbnail: multistopwatch,
    description:
      " Displays multiple stopwatches to time multiple processes concurrently. Created with React for the Neurobiology of Memory lab at the University of Texas at Dallas for neural engineering and studies on PTSD.",
    github: "https://github.com/rdargali/multi-stop-watch",
    link: "https://multistopwatch.netlify.app/",
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
