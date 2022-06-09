import React from 'react';
import '../assets/scss/App.scss';
import Navbar from '../assets/layouts/Navbar'
import SearchBar from '../components/SearchBar';
import Home from './Nav/Home';

class App extends React.Component{
  componentDidMount(){
    document.title = "Phim Hoạt Hình Trung Quốc";
  }

  render(){
    return(
      <>
        <div className="container">
          <Navbar />
          <SearchBar />
          <Home />

        </div>
      </>
    )
  }
}

export default App;
