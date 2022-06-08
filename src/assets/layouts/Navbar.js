import React from 'react';
import logo from '../img/logo.png';

class Navbar extends React.Component {
    render(){
        return(
        <div className="topnav">
            <a href="#home">
                <img 
                    src={logo}
                    alt="logo-hh"
                >
                </img>
            </a>
            <a className="active" href="#home">Trang Chủ</a>
            <a href="#news">HH 3D Trung Quốc</a>
            <a href="#contact">Thể Loại</a>
            <a href="#about">Lịch Chiếu</a>
            <a href="#about">Mới Cập Nhật</a>
            <a href="#about">Hoàn Thành</a>
          </div>
        );
    };
};

export default Navbar;