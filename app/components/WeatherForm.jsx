var React = require('react');

var WeatherForm = React.createClass({
    onFormSubmit: function(e){
      e.preventDefault();
      var locationRef = this.refs.location;
      var location = locationRef.value;

      if(location.length > 0){
        locationRef.value = '';
        this.props.onSearch(location);
      }
    },
    render: function(){
      return(
        <div>
          <form onSubmit={this.onFormSubmit}>
            <input type="search" placeholder="City name" ref="location"/>
            <button className="button expanded hollow">Get Weather</button>
          </form>
        </div>
      );
    }
});
module.exports = WeatherForm;
//http://api.openweathermap.org/data/2.5/weather?q=London,uk&units=metric&APPID=91e673e403fb2cfe5b5f69b2b81c5ea1
