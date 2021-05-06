import {Component} from "react"
import {Card, Button} from "react-bootstrap"
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();
class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div className="projectsSection">
                <div data-aos="fade-up" data-aos-duration="2000">
            <h1 className="aboutTitle">Projects</h1>
            </div>
            <div className="projects">
            <Card data-aos="fade-right" data-aos-duration="1500" style={{ width: '18rem' }}>
            {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
            <Card.Body>
                <Card.Title>Table Tennis Tournament Generator</Card.Title>
                <Card.Text>
                Using React and Redux, I built an application enables the user to input player names that will be shuffled and entered into a knockout tournament. Winners can be selected from each round and will then appear in the next round.
                </Card.Text>
                <Card.Text className="types">HTML, CSS, JS, React, Redux, Git</Card.Text>
                <div className="cardButtons">
                <Button variant="primary"><a className="codeLink"href="https://williambraney.github.io/PingPongTournamentGenerator/">Visit Project</a></Button>
                <Button variant="primary"><a className="codeLink"href="https://github.com/Williambraney/PingPongTournamentGenerator.git">Code Repository</a></Button>
                </div>
            </Card.Body>
            </Card>
                        <Card  data-aos="fade-up" data-aos-duration="1000" style={{ width: '18rem' }}>
            {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
            <Card.Body>
                <Card.Title>Table Tennis Scoring Application</Card.Title>
                <Card.Text className="cardText2">
                An Application that tracks the scoring of two players within a game of Ping Pong. Serve change, names, and the winning score can be manipulated by the user.
                </Card.Text>
                <Card.Text className="types">HTML, CSS, JS, React, Redux, Git</Card.Text>
                <div className="cardButtons2">
                <Button variant="primary"><a className="codeLink"href="https://williambraney.github.io/PingPong/">Visit Project</a></Button>
                <Button variant="primary"><a className="codeLink"href="https://github.com/Williambraney/PingPong.git">Code Repository</a></Button>
                </div>
            </Card.Body>
            </Card>
                        <Card data-aos="fade-left" data-aos-duration="1000" style={{ width: '18rem' }}>
            {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
            <Card.Body>
                <Card.Title>Book Search Application</Card.Title>
                <Card.Text>
                Website that uses a react/redux front-end and a Laravel back-end to store and display books and authors. This project was completed as part of a team. My role was to aid the development of the front-end.
                </Card.Text>
                <Card.Text className="types">HTML, CSS, JS, Laravel, React, Redux, Git</Card.Text>
                <div className="cardButtons3">
                <Button variant="primary "><a className="codeLink"href="https://williambraney.github.io/BookAppFrontEnd/">Visit Project</a></Button>
                <Button variant="primary"><a className="codeLink"href="https://github.com/Williambraney/BookAppFrontEnd.git">Code Repository</a></Button>
                </div>
            </Card.Body>
            </Card>
            </div>
            </div>
        );
    }
}

export default Projects;