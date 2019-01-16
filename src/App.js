import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
let defaultTextColour = '#fff';
let defaultStyle = {
  color : defaultTextColour
};

let fakeServerData = {
  user: {
    name: 'Matthew',
    playlists: [
      {
        name: 'My Favorites',
        songs: [{name:'GOTBGY', duration: 123} , {name:'Ohio', duration: 240}, {name:'Love Sick Stomachache', duration: 360}]
      },
      {
        name: 'My Favorites2',
        songs: [{name:'GOTBGY', duration: 123} , {name:'Ohio', duration: 240}, {name:'Love Sick Stomachache', duration: 360}]
      },
      {
        name: 'My Favorites3',
        songs: [{name:'GOTBGY', duration: 123} , {name:'Ohio', duration: 240}, {name:'Love Sick Stomachache', duration: 360}]
      },
      {
        name: 'My Favorites4',
        songs: [{name:'GOTBGY', duration: 123} , {name:'Ohio', duration: 240}, {name:'Love Sick Stomachache', duration: 360}]
      }
    ]
  }
};
class PlaylistCounter extends Component{
  render() {
    return (
      <div style={{...defaultStyle, width: '40%', display: 'inline-block'}}>
        <h2>{this.props.playlists.length} Playlist's </h2>
      </div>
    );
  }
}

class HoursCounter extends Component{
  render() {
    let allSongs  = this.props.playlists.reduce((songs, eachPlaylist)=>{
      return songs.concat(eachPlaylist.songs)
    },[]);
    let totalDuration = allSongs.reduce((sum, eachsSong) => {
      return sum + eachsSong.duration
    },0);
    return (
      <div style={{...defaultStyle, width: '40%', display: 'inline-block'}}>
        <h2>{Math.round(totalDuration/60)} Hours's </h2>
      </div>
    );
  }
}
class Filter extends Component {
  render() {
    return(
      <div style={{defaultStyle}}>
        <img/>
        <input type="text" />
      </div>
    );
  }
}

class Playlist extends Component {
  render() {
    return(
      <div style={{...defaultStyle, width: '25%', display: 'inline-block'}}>
        <img/>
        <h3>Playlist name </h3>
        <ul>
          <li> Song 1 </li>
          <li> Song 2 </li>
          <li> Song 3 </li>
        </ul>
      </div>
    );
  }
}
class App extends Component {
  constructor() {
    super()
    this.state = {serverData: {}}
  }
  componentDidMount() {
    setTimeout(() => {
       this.setState({serverData: fakeServerData});
    },1000);
  }
  render() {
    return (
      <div className="App">
        {this.state.serverData.user ?
        <div>
        <h1>{this.state.serverData.user.name}'s Playlist
        </h1>
          <PlaylistCounter playlists={this.state.serverData.user.playlists}/>
          <HoursCounter playlists={this.state.serverData.user.playlists}/>
          <Filter/>
          <Playlist/>
          <Playlist/>
          <Playlist/>
          <Playlist/>
        </div> : <h1>Loading...</h1>
        }
      </div>
    );
  }
}

export default App;
