import { connect } from 'react-redux';
import Fragrance from './fragrance';
import { getFragrances } from './../../reducers/selectors';

const mstp = state => ({
  fragrances: getFragrances(state)
})


export default connect(mstp, null)(Fragrance);
