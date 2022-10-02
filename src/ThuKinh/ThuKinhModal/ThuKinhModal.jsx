import React, { Component } from 'react'

export default class ThuKinhModal extends Component {
    dataGlass = [
        {
            "id": 1,
            "price": 30,
            "name": "GUCCI G8850U",
            "url": "./glassesImage/v1.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 2,
            "price": 50,
            "name": "GUCCI G8759H",
            "url": "./glassesImage/v2.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 3,
            "price": 30,
            "name": "DIOR D6700HQ",
            "url": "./glassesImage/v3.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 4,
            "price": 70,
            "name": "DIOR D6005U",
            "url": "./glassesImage/v4.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 5,
            "price": 40,
            "name": "PRADA P8750",
            "url": "./glassesImage/v5.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 6,
            "price": 60,
            "name": "PRADA P9700",
            "url": "./glassesImage/v6.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 7,
            "price": 80,
            "name": "FENDI F8750",
            "url": "./glassesImage/v7.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 8,
            "price": 100,
            "name": "FENDI F8500",
            "url": "./glassesImage/v8.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 9,
            "price": 60,
            "name": "FENDI F4300",
            "url": "./glassesImage/v9.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        }
    ]


    renderGlass = () => {
        return this.dataGlass.map((index) => {
            let {  url } = index;
            return <div className="col-2" key={`glasses-${index.id}`}>
                <img style={{ cursor: 'pointer' }} onClick={() => {
                    this.changeGlasses(index)
                }} className="img-fluid" src={url} alt="" />
            </div>
        })
    }


    changeGlasses = (index) => {
        this.setState({
            glassDetail: index
        })
    }


    state = {
        glassDetail: {
            "id": 1,
            "price": 30,
            "name": "GUCCI G8850U",
            "url": "./glassesImage/v1.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        }
    }

    render() {
        let { glassDetail } = this.state;
        return (
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <div className="card">
                            <div className="model" id="avatar">
                                <img className="leftIMG img-fluid" src="./glassesImage/model.jpg" alt="" />
                            </div>
                            <div>
                                <div className="glassImg">
                                    <img id='glassTest' className="img-fluid" src={glassDetail.url} alt="" />
                                <div className="glassInfo">
                                    <h2 className="title">{glassDetail.name}</h2>
                                    <p>{glassDetail.desc}</p>
                                </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <img className="rightIMG img-fluid" src="./glassesImage/model.jpg" alt="" />
                    </div>
                </div>
                <div className="glassesWrap">
                     <div className="row" id="glassesList">
                         {this.renderGlass()}
                     </div>
                 </div>
            </div>

        );
    }
}
