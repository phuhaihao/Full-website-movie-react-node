import React from 'react';
import Flickity from 'react-flickity-component';
import Movie from './Movie';

class FlickityBar extends React.Component {
    render(){
        const flickityOptions = {
            initialIndex: 3
        };
        
        return(
            <Flickity
                className={'carousel row d-flex justify-content-center'} // default ''
                elementType={'div'} // default 'div'
                options={flickityOptions} // takes flickity options {}
                disableImagesLoaded={true} // default false
                reloadOnUpdate // default false
                static={true} // default false
            >
                <Movie />
            </Flickity>
        );
    };
};

export default FlickityBar;