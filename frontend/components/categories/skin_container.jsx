import { connect } from 'react-redux';
import Skin from './skin';
import { getSkin } from './../../reducers/selectors';

const mstp = state => ({
  skin: getSkin(state)
});

export default connect(mstp, null)(Skin);