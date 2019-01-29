import './css/reset.css';
import './css/app.css';
import location from './location.svg';
import React, { Component } from 'react';
import Map from './components/map-component';
import Axios from 'axios';
import getRandomLocation from './util/util';
const LIMIT_LIST = 10;
class App extends Component {
    state = {
        locations: [],
        current_location: null
    };
    constructor(){
        super();
        this.getNewLocation = this.getNewLocation.bind(this);
        this.AddNewPosition = this.AddNewPosition.bind(this);
        
    }
    getNewLocation(){
        Axios({
            method: 'get',
            url: `https://www.random.org/decimal-fractions/`,
            params: {
                num: 2,
                dec: 10,
                col: 1,
                format: 'plain',
                rnd: 'new'
            }
        }).then(res=>{
            let location = getRandomLocation(res);
            this.AddNewPosition(location);
        }).catch(err=>console.log('err',{err}));
    }
    AddNewPosition(location){
        let {locations} =this.state; 
        if(locations.length === LIMIT_LIST){
            locations.pop();
        }
        locations.unshift(location);
        this.setState({locations})
    }
    setLocacion(current_location){
        // console.log(current_location);
        this.setState({current_location});
    }
    render() {
        return (
        <div className="app">
            <header className="app__header">
                <div className="app__header-info">
                    <div className="app__logo">
                        <img className="app__logo-img" src={location} alt="Logo Location"/>
                    </div>
                    <div className="app__title">
                        {"Random Location"}
                    </div>
                    <div className="app__data-login">
                        <button className="app__button-log">
                            {this.props.user ? 'Logout': 'Login'}
                        </button>
                    </div>
                </div>
            </header>
            
            <div className="app__container">
                <Map
                    containerElement={<div style={{ height: `100%` }} />}
                    mapElement={<div style={{ height: `100%` }} />}
                    // defaultCenter={this.}
                    current_location={this.state.current_location}
                    // lat={10.9810912}
                    // lng={-74.7829539}
                />
                <div className="location-container">
                    <div className="location-container__background"/>
                    <div className="location-container__info">
                        <div className="location-container__top">
                            <button className="location-container__button-new" 
                                onClick={this.getNewLocation}>
                                New
                            </button>
                            <div className="location-container__title">
                                Locations
                            </div>
                        </div>
                        <ul className="location-container__list">
                        {
                            this.state.locations.map((loc,i)=>(
                                <li className="location-container__item"
                                    onClick={
                                        () => this.setLocacion(loc)}
                                    key={`item_${i}`} >
                                    <div>
                                        <b>lat:</b> {loc.lat} <br/>
                                        <b>lng:</b> {loc.lng}
                                    </div>
                                </li>
                            ))
                        }
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
  }
}

export default App;