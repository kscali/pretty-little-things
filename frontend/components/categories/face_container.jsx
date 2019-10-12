import { connect } from 'react-redux';
import Face from './face';
import { getFace } from './../../reducers/selectors';

const mstp = state => ({
  faces: getFace(state)
})

export default connect(mstp, null)(Face);