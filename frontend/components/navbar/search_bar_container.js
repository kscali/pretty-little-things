import { connect } from 'react-redux';
import SearchBar from './search_bar';

const mstp = state => ({
  products: Object.values(state.products)
});

export default connect(mstp, null)(SearchBar);