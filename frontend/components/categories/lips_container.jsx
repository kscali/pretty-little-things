import { connect } from 'react-redux';
import Lip from './lip';
import { getLips } from './../../reducers/selectors';

const mstp = state => ({
  lips: getLips(state)
});

export default connect(mstp, null)(Lip);