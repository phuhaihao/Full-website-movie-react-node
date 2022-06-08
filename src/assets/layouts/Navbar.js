import React from 'react';
import logo from '../img/logo.png';

class Navbar extends React.Component {
    render(){
        return(
        <div className="topnav row">
            <a href="#home" className = "col-lg-1">
                <img 
                    src={logo}
                    alt="logo-hh"
                >
                </img>
            </a>
            <a className="active col-lg-2" href="#home">Trang Chủ</a>
            <a href="#news" className = "col-lg-2">HH 3D Trung Quốc</a>
            <a href="#contact" className = "col-lg-2">Thể Loại</a>
            <a href="#about" className = "col-lg-2">Lịch Chiếu</a>
            <a href="#about" className = "col-lg-2">Mới Cập Nhật</a>
            <a href="#about" className = "col-lg-1">Hoàn Thành</a>
          </div>
        );
    };
};

export default Navbar;