import {Component} from "react"
import "../CSS/LandingPage.css"
import About from  "../About" 
import { Link, animateScroll as scroll } from "react-scroll";
import TechnicalSkills from "../TechnicalSkills";
import Projects from "../Projects/Projects";
import Education from "../Education";
import CVPDF from "../../assets/WilliamBraneyCV.pdf"
import ContactMe from "../ContactMe";

class StarterPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hide: false
        };
        this.StartWebsite = this.StartWebsite.bind(this);
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll); 
    }

        handleScroll() {
            let header = document.getElementById("header")
            if(window.pageYOffset > "140"){
                header.style.fontSize = "2vw";
                header.style.opacity = "0";
                document.getElementById("subtitle").style.fontSize = "2vw"
                document.getElementById("buttonEnter").style.marginTop = "0%"
                document.getElementById("nameNav").style.opacity = "1"
                document.getElementById("nameNav2").style.opacity = "1"
                document.getElementById("CVLink").style.opacity = "1"
                    
            } else {
                header.style.fontSize = "6vw"
                document.getElementById("subtitle").style.fontSize = "4vw"
                document.getElementById("buttonEnter").style.marginTop = "40%"
                header.style.opacity = "1"
                document.getElementById("nameNav2").style.opacity = "0"
                document.getElementById("nameNav").style.opacity = "0"
                document.getElementById("CVLink").style.opacity = "0"
            }
    }
scrollToTop() {
  scroll.scrollToTop();
}

scrollMoreUp300() {
  scroll.scrollMore(-300);
}

 scrollMoreUp100() {
  scroll.scrollMore(-100);
}

 scrollToBottom() {
  scroll.scrollToBottom();
}

 scrollMoreDown300() {
  scroll.scrollMore(200);
}
 scrollMoreDown100() {
  scroll.scrollMore(100);
}

    StartWebsite(){
        this.props.StartWebsite()
    }
    render() {
        return (
            <div className="landingContainer animate__animated animate__fadeInDown">
                <div id="left"></div>
                <div id="right"></div>
                <div id="bottom">
                    <footer className="footer">&copy; 2021 William Braney</footer>
                </div>
                <div id="top">
                    <h3 id="nameNav">William Braney</h3>
                    <nav id="nameNav" className="nameNav3">
                    <h3 id="nameNav2"><a href="about">Contact Me</a></h3>
                    <a  id="CVLink"className="CVLink" href={CVPDF} download><h3 id="CVLink"className="CVLink">Download CV</h3></a>
                    </nav>
                </div>
                <h2 onScroll={this.handleScroll} id="header" className="header animate__animated animate__fadeIn">William Braney <br /> <span id="subtitle" className="subtitle">Junior Web Developer</span></h2>
                <Link  activeClass="active" to="about" spy={true} smooth={true} duration={1000} id="buttonEnter"className="buttonEnter animate__animated animate__fadeIn arrow bounce"></Link>
                <About />
                <TechnicalSkills />
                <Projects />
                <Education />
                <ContactMe />
                <div className="space"></div>
            </div>
        );
    }
}

export default StarterPage;