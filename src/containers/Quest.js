/* eslint-disable arrow-body-style */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Checkbox, Label } from 'semantic-ui-react';

// Action Creators
import {
  incrementQuestItem,
  decrementQuestItem,
  patchFollow,
  followCheck,
} from '../actions';

import Item from '../containers/Item';

import '../styles/quests.scss';

const Quest = ({
  name,
  id,
  items,
  itemsCountQuest,
  incrementQuestItem,
  decrementQuestItem,
  patchFollow,
  followedList,
  isLogged,
  followCheckValue,
  followCheck,
}) => {
  const isFollowed = followedList.find((elem) => (elem.id === id));
  const elementId = id;
  return (
    <div className="quest">
      <div className="quest-infos">
        <div className="quest-header">
          <h3>
            {name}
          </h3>
          <div>
            {followCheckValue && (
              <Label basic color='red' pointing='right'>
                You must be connected !
              </Label>
            )}
            <label for="follow" className="labelFollow">Follow</label>
            <Checkbox toggle type="checkbox" onChange={() => {
              patchFollow(id);
              (!isLogged && (
                followCheck()
              ))
              console.log(followCheckValue);
            }} id={id} name={id} defaultChecked={isFollowed} />
          </div>
        </div>
      </div>

        <div className="quest-items-container">
          {
                items.map((item) => (
                  // eslint-disable-next-line max-len
                  <Item key={item.id} {...item} increment={incrementQuestItem} decrement={decrementQuestItem} count={itemsCountQuest[item.id]} elementId={elementId} itemsNeeded={item.Quest_has_items.quantity} />
                ))
              }
        </div>

    </div>
  );
};

const mapState = (state) => ({
  itemsCountQuest: state.counter.itemsCountQuest,
  followedList: state.follow.followedList,
  isLogged: state.loginForm.isLogged,
  followCheckValue: state.follow.followCheckValue,
});

const mapDispatch = (dispatch) => ({
  incrementQuestItem: (id, elementId, count) => {
    console.log('increment from dispatch');
    dispatch(incrementQuestItem(id, elementId, count));
  },
  decrementQuestItem: (id, elementId, count) => {
    console.log('decrement from dispatch');
    dispatch(decrementQuestItem(id, elementId, count));
  },
  patchFollow: (payload) => {
    console.log('dispatching action to modify follow status on QUEST');
    dispatch(patchFollow(payload));
  },
  followCheck: () => {
    console.log('dispatching action to modify follow status on QUEST');
    dispatch(followCheck());
  },
});

Quest.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  items: PropTypes.array.isRequired,
  itemsCountQuest: PropTypes.object.isRequired,
  incrementQuestItem: PropTypes.func.isRequired,
  decrementQuestItem: PropTypes.func.isRequired,
  patchFollow: PropTypes.func.isRequired,
  followedList: PropTypes.array.isRequired,
};

export default connect(mapState, mapDispatch)(Quest);
