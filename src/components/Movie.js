import React from 'react';

class Movie extends React.Component {
    render(){
        this.state = [
            {
                id: "1",
                name: "Thôn Phệ Tinh Không",
                src: "https://hhpanda.tv/images/1638340670.png",
            },
            {
                id: "2",
                name: "Tây Hành Kỷ",
                src: "https://hhpanda.tv/images/1651029914.jpg",
            },
            {
                id: "3",
                name: "Tuyệt Thế Võ Hồn",
                src: "https://hhpanda.tv/images/1635570439.png",
            },
            {
                id: "4",
                name: "Thư Linh Kỷ",
                src: "https://hhpanda.tv/images/1635570246.jpg",
            },
            {
                id: "5",
                name: "Kiếm Tiên Ở Đây",
                src: "https://hhpanda.tv/images/1652498953.jpg",
            },
            {
                id: "6",
                name: "Vạn Giới Thần Chủ",
                src: "https://hhpanda.tv/images/1635909521.png",
            },
        ];
        return(
            this.state.map((item, index)=>{
                return (<a href="#hello">
                    <img
                        src={item.src}
                        alt={item.name}
                        title={item.name}
                    >
                    </img>
                </a>)
            })
        )
    }
}

export default Movie;