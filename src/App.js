import React, { Component } from 'react';
// eslint-disable-next-line
import logo from './logo.svg';
import './styles/App.scss';
import TopNavbar from './Top-navbar';
import MainContainer from './Main-container';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: {},
      events: [{}],
      filters: {},
      params: {
        skeleton: [],
        date: '',
        endTime: ''
      }
    }
  }
  componentDidMount() {
      navigator.geolocation.getCurrentPosition((position)=>{
        this.setState({params: {
          ...this.state.params,
          coords: {lng: position.coords.longitude, lat: position.coords.latitude}
        }});
      });
      // this._getItinerary(this.state.params)
    }

    _generateItinerary = () => {
      axios.post('/api/itinerary', { ...this.state.params })
        .then((res) => {
          //this.setState({ itinerary: res.itinerary })
          console.log(res.itinerary);
        })
    }

    _addSkeleton = (type) => {
      this.setState({ params: {...this.state.params, skeleton: [...this.state.params.skeleton, type] }});
    }

    _handleDate = (date) => {
      this.setState({ params: {...this.state.params, date: date}});
    }

    _handleEndTime = (time) => {
      this.setState({ params: {...this.state.params, endTime: time}}, () => {console.log(this.state.params);});
    }

  render() {
    return (
      <div className="App">
        <TopNavbar />
        <MainContainer
          restaurant={this.state.events}
          params={this.state.params}
          addSkeleton={this._addSkeleton}
          handleDate={this._handleDate}
          handleEndTime={this._handleEndTime}
          generateItinerary={this._generateItinerary}
        />
      </div>
    );
  }
}

export default App;
