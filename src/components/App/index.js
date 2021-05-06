import App from "./App";
import { connect } from "react-redux";

const mapStateToProps = state => {
    return {
        StartWebsite: state.StartWebsite
    }
}
export default connect(mapStateToProps)(App);