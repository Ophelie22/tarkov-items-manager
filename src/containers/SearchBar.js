import { connect } from 'react-redux';
import SearchBar from '../components/AllItems/SearchBar';
import { searchBar } from '../actions';

const mapState = (state) => ({
  sbValue: state.searchBar.sbValue,
});

const mapDispatch = (dispatch) => ({
  onInputChange: (newValue) => {
    console.log('user a tapé dans input: ', newValue);
    dispatch(searchBar(newValue));
  },
});

export default connect(mapState, mapDispatch)(SearchBar);
