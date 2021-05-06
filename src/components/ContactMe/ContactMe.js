import {Component} from "react"
import "../CSS/ContactMe.css"
import email from "../../assets/email.svg"
import github from "../../assets/github.svg"
import linkedin from "../../assets/linkedin.svg"
class ContactMe extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div className="ContactMeSection">
            <h1 className="aboutTitle">Contact Me</h1>
            <div className="svg">
            <a href="https://www.linkedin.com/in/will-braney-4529a7195/"><img className="socialLinks" src={linkedin} alt="linkedin"></img></a>
            <a href="mailto:williambraney@aol.com"><img className="socialLinks" src={email} alt="email"></img></a>
            <a href="https://github.com/Williambraney"><img className="socialLinks" src={github} alt="github"></img></a>
            </div>
            <p className="contactMeParagraph">I am always interested in speaking about potential opportunities, either job related or collaboration, so please feel free to get in touch.</p>
            </div>
        );
    }
}

export default ContactMe;