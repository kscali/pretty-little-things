import { connect } from 'react-redux';
import Eye from './eye';
import { getEyes } from './../../reducers/selectors';

const mstp = state => ({
  eyes: getEyes(state)
})

export default connect(mstp, null)(Eye);