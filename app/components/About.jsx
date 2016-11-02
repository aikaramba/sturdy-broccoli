var React = require('react');

var About = (props) => {
  return (
    <div>
      <h1 className="text-center">About</h1>
      <p>Welcome to weather app!</p>
      <p>This is a weather app I've built
        for the Complete React Web App Dev Course.</p>
      <p>You can get realtime temperature data for any city in the world!</p>
      <p>Here are some of the tools I've used</p>
      <ul>
        <li>
          <a href="https://facebook.github.io/react">React</a>
        </li>
        <li>
          <a href="http://openweathermap.org">Open Weather Map</a> - Weather data API provider
        </li>
      </ul>
      <p><b>Source code for the project</b></p>
      <p>Github: <a href="https://github.com/aikaramba/sturdy-broccoli">https://github.com/aikaramba/sturdy-broccoli</a></p>
    </div>
  );
};

module.exports = About;
