import {Component} from "react"
import CVPDF from "../../assets/WilliamBraneyCV.pdf"
import "../CSS/CV.css"
class CV extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div className="CVSection">
            <h1 className="aboutTitle">CV</h1>
            <a className="CVLink" href={CVPDF} download><h1 className="CVLink">Download my CV</h1></a>
            </div>
        );
    }
}

export default CV;