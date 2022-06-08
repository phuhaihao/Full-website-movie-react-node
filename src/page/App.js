import React from 'react';
import logo from '../assets/img/logo.svg';
import '../assets/scss/App.scss';
import Navbar from '../assets/layouts/Navbar'
import SearchBar from '../components/SearchBar';
import FlickityBar from '../components/FlickityBar';

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
          <FlickityBar />
        </div>
      </>
    )
  }
}

export default App;
