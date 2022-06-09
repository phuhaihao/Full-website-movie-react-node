import React from 'react';
import axios from 'axios';
import Movie from '../../components/Movie';

class Home extends React.Component {
    state = {
        movies: [],
    };

    async componentDidMount() {
        axios.get(`http://localhost:8000/api/v1`)
        .then(res => {
          const movies = res.data
          this.setState({ movies })
        })
    };
    
    render(){
        return(
            <div className="row">
                <Movie movie={this.state}/>
            </div>
        )
    }
}

export default Home;