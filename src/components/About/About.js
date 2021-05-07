import {Component} from "react"
import {Carousel} from "react-bootstrap"
import ProfilePhoto from "../../assets/ProfilePhoto.jpg"
import "../CSS/About.css"
class About extends Component {
    constructor(props) {
        super(props);
        this.state = { 
        };
    }


    render() {
        return (
            <div className="aboutContainer" title="about">
                <h1 className="aboutTitle" data-aos="fade-up" data-aos-duration="2000">About</h1>
                <div className="bio">
                <Carousel className="carousel" data-aos="fade-right" data-aos-duration="1500">
                    <Carousel.Item interval={1000}>
                        <img
                        className="d-block w-100"
                        src={ProfilePhoto}
                        alt="First slide"
                        />
                        <Carousel.Caption>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={500}>
                        <img
                        className="d-block w-100"
                        src={ProfilePhoto}
                        alt="Second slide"
                                width=""
                        />
                        <Carousel.Caption>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={ProfilePhoto}
                        alt="Third slide"
                        />
                        <Carousel.Caption>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
                <p data-aos="fade-left" data-aos-duration="1500" className="about">Dynamic and detail-orientated Software Developer seeking to start a career in development. I have recently completed an intensive full stack development course which alongside university experience and online Cisco and Codeacademy courses,  I hope will enable me to enter an industry that I find fascinating. I have experience working in a team and independently on projects and businesses which has provided me with a well rounded skillset that is ready for any opportunity.</p>
                </div>
            </div>
        );
    }
}

export default About;