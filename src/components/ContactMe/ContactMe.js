import {Component} from "react"
import "../CSS/ContactMe.css"
import email from "../../assets/email.svg"
import github from "../../assets/github.svg"
import linkedin from "../../assets/linkedin.svg"
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
AOS.init();
class ContactMe extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div className="ContactMeSection">
            <h1 className="aboutTitle" data-aos="fade-up" data-aos-duration="2000">Contact Me</h1>
            <div className="svg">
            <a href="https://www.linkedin.com/in/will-braney-4529a7195/" data-aos="fade-right" data-aos-duration="1500" > <img className="socialLinks" src={linkedin} alt="linkedin"></img></a>
            <a href="mailto:williambraney@aol.com" data-aos="fade-up" data-aos-duration="1000"><img className="socialLinks" src={email} alt="email"></img></a>
            <a href="https://github.com/Williambraney" data-aos="fade-left" data-aos-duration="1000"><img className="socialLinks" src={github} alt="github"></img></a>
            </div>
            <p data-aos="zoom-in" data-aos-delay="700" data-aos-duration="1000" className="contactMeParagraph">I am always interested in speaking about potential opportunities, either job related or collaboration, so please feel free to get in touch.</p>
            </div>
        );
    }
}

export default ContactMe;