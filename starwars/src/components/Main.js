import React, {Component} from 'react';
import SwapiService from '../services/swapiService';
import {get} from 'lodash';

export default class Main extends Component {
    SwapiService = new SwapiService();
    state = {
        people: [],
        error: false
    }


    componentWillMount() {
        this.peopleRender();
    }


    peopleRender() {
        this.SwapiService.getAllInfo()
        .then(this.onPeopleLoaded)
        .catch(this.onError);
    }

    onPeopleLoaded = (people) => {
        this.setState({
            people,
            error: false
        })
        // console.log (get(this.state, 'people.results',))
        console.log (this.state.people.results)
    }   
    

    onError = (err) => {
        this.setState({
            error: true
        })
    }
    
    renderItems(arr) {
        return arr.map(item => {
            const {name} = item;
            return(
                <ul>{name}</ul>
            )
        });
    }



    render() {
        return (
            <div>
             {/* <h6>{get(this.state, 'people.results', []).map(i => get(i, 'name', ''))}</h6>  */}
            {this.state.people.results.name[0]}
            </div>
        )
            
    }
        
}



// class Main extends Component {
//     constructor() {
//         super()
//         this.state = {
//             character: {}
//         }
//     }
    
//     componentDidMount() {
//         fetch("https://swapi.co/api/people/1")
//             .then(response => response.json())
//             .then(data => {
//                 this.setState({
//                     character: data
//                 })
//             })
//     }
    
//     render() {
//         return (
//             <div>
//                 {this.state.character.name}
//             </div>
//         )
//     }
// }

// export default Main



