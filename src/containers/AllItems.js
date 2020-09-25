import React from 'react';
import PropTypes from 'prop-types';
import { Search } from 'semantic-ui-react';
import { connect } from 'react-redux';
import NavBar from '../components/NavBar';
import { incrementQuestItem, decrementQuestItem, search } from '../actions';

import Header from '../components/Header';
import ItemsFilter from '../components/AllItems/ItemsFilter';
import Footer from '../components/Footer';
import Item from './Item';
import Loading from '../components/Loader';

import '../components/AllItems/styles.scss';

const AllItems = ({
  list,
  loading,
  incrementQuestItem,
  decrementQuestItem,
  itemsCountQuest,
  search,
}) => (
    <div className="allitems-container">
      <Header />
      <NavBar />
      <div className="allitems-container-body">
        <Search
          onSearchChange={(e) => {
            search(e.target.value);
          }}
          className="searchbar"
          placeholder="Search an item"
        />
        <div className="allitems-header">
          <span>All quest items</span>
          <div className="allitems-filter">
            <span>Filter by : </span>
            <ItemsFilter />
          </div>
        </div>
        {loading ? (<Loading />) : (
          <div className="allitems-list">
            {
              list.map((item) => (
                // eslint-disable-next-line max-len
                <Item key={item.id} {...item} increment={incrementQuestItem} decrement={decrementQuestItem} count={itemsCountQuest[item.id]} noCount />
              ))
            }
          </div>
        )}
      </div>
      <Footer />
    </div>
  );

const mapState = (state) => ({
  list: state.items.list,
  loading: state.items.loading,
  itemsCountQuest: state.counter.itemsCountQuest,
});

const mapDispatch = (dispatch) => ({
  incrementQuestItem: (id) => {
    dispatch(incrementQuestItem(id));
  },
  decrementQuestItem: (id) => {
    dispatch(decrementQuestItem(id));
  },
  search: (payload) => {
    dispatch(search(payload));
  },
});

AllItems.propTypes = {
  list: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
  incrementQuestItem: PropTypes.func.isRequired,
  decrementQuestItem: PropTypes.func.isRequired,
  itemsCountQuest: PropTypes.object.isRequired,
  search: PropTypes.func.isRequired,
};

export default connect(mapState, mapDispatch)(AllItems);
