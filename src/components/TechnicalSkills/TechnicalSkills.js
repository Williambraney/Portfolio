import {Component} from "react"
import "../CSS/TechnicalSkills.css"
class TechnicalSkills extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div className="skillsSection">
            <h1 className="aboutTitle">Skills</h1>
            <div className="skills">
            <ul className="skillsList" data-aos="zoom-in" data-aos-duration="1000">
                <h3>Web Technologies</h3>
                <li>HTML5</li>
                <li>CSS</li>
                <li>Javascript (Vanilla & Dom)</li>
                <li>Object Orientated PHP</li>
            </ul>
            <ul className="skillsList" data-aos="zoom-in" data-aos-delay="100" data-aos-duration="1000">
                <h3>Frameworks</h3>
                <li>React</li>
                <li>Redux</li>
                <li>Laravel</li>
            </ul>
            <ul className="skillsList">
                <h3>Tooling</h3>
                <li>Git</li>
                <li>Gulp</li>
                <li>npm</li>
                <li>Vagrant</li>
                <li>Chrome Developer Tools</li>
                <li>VS Code</li>
                <li>Pair Programming</li>
                <li>TDD</li>
                <li>Wireframing with Balsamiq</li>
            </ul>
            <ul className="skillsList">
                <h3>Programming</h3>
                <li>Types</li>
                <li>Variables</li>
                <li>Functions</li>
                <li>Data structures</li>
            </ul>
            <ul className="skillsList">
                <h3>Server-side</h3>
                <li>MySQL</li>
                <li>Database migrations</li>
                <li>API's</li>
                <li>Templating with Blade</li>
            </ul>
            <ul className="skillsList">
                <h3>Organisation</h3>
                <li>Project management</li>
                <li>Trello</li>
                <li>Agile</li>
                <li>Documentation and reporting</li>
            </ul>
            <ul className="skillsList">
                <h3>Interpersonal</h3>
                <li>Client relationships</li>
                <li>Teamworking</li>
                <li>Conflict resolution</li>
                <li>Problem Solving</li>
                <li>Decision Making</li>
            </ul>
            <ul className="skillsList">
                <h3>Courses Completed</h3>
                <h3>NEED TO DO</h3>
                <li>Client relationships</li>
                <li>Teamworking</li>
                <li>Conflict resolution</li>
                <li>Problem Solving</li>
                <li>Decision Making</li>
            </ul>
            </div>
            </div>
        );
    }
}

export default TechnicalSkills;