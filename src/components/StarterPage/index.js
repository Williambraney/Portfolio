import { connect } from 'react-redux';
import { StartWebsite } from '../../data/actions/actions';
import StarterPage from "./StarterPage"

const mapDispatchToProps = dispatch => {
     return {
          StartWebsite: () => dispatch(StartWebsite()),
     };
};

export default connect(null, mapDispatchToProps) (StarterPage)