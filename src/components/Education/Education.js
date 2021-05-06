import {Component} from "react"
import "../CSS/Education.css"
class Education extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div className="educationWrapper">
            <h1 className="aboutTitle">Education</h1>
            <div className="education">
                <section>
                    <h3 className="color">Develop Me / <span className="color">Full Stack Software Development</span></h3>
                    <h5>JANUARY 2021 - MARCH 2021,  Bristol / Remote</h5>
                    <p>Intensive project-driven 12 week software development on the webstack course, taught by industry professionals using best practice approaches.</p>
                </section>
                <section>
                    <h3 className="color">Southampton Solent University / Computing / <span className="color">2 Years Completed</span></h3>
                    <h5>September 2017 - July 2020,  Southampton</h5>
                    <p>Successfully passed two years of the degree with an average grade of 2:1 before deciding that a Full Stack Development Course was a better fit for my career.</p>
                </section>
                <section>
                    <h3 className="color">Colchester Sixth Form / <span className="color">AS & A Levels</span></h3>
                    <h5>September 2014 - July 2017,  Colchester</h5>
                    <div className="educationList">
                    <ul>
                        <h4>A-Levels</h4>
                        <li>Physical Education</li>
                        <li>Psychology</li>
                        <li>Applied Science</li>
                    </ul>
                    <ul>
                        <h4>AS-Levels</h4>
                        <li>Mathematics</li>
                        <li>Applied Business</li>
                        <li>Sociology</li>
                    </ul>
                    </div>
                </section>
            </div>
            </div>
        );
    }
}

export default Education;