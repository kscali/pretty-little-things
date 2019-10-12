import { connect } from 'react-redux';
import Hair from './hair';
import { getHair } from './../../reducers/selectors';

const mstp = state => ({
  hair: getHair(state)
})

export default connect(mstp, null)(Hair);