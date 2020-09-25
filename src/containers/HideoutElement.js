import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Checkbox, Label } from 'semantic-ui-react';

// Action Creators
import {
  incrementHideoutItem,
  decrementHideoutItem,
  patchFollowHideout,
  followCheck,
} from '../actions';

import '../styles/hideoutElement.scss';

import Item from '../containers/Item';

// import '../styles/hideoutElement.scss';

// eslint-disable-next-line no-shadow
const HideoutElement = ({
  name,
  id,
  items,
  itemsCountHideout,
  incrementHideoutItem,
  decrementHideoutItem,
  patchFollowHideout,
  followedListHideout,
  isLogged,
  followCheckValue,
  followCheck,
}) => {
  const isFollowedHideout = followedListHideout.find((elem) => (elem.id === id));
  const elementId = id;
  return (
    <div className="hideout-element">
      <div className="hideout-infos">
        <div className="hideout-header">
          <h3>
            {name}
          </h3>
          <div>
            {followCheckValue && (
            <Label basic color='red' pointing='right'>
              You must be connected !
            </Label>
            )}
            <label className="labelFollow">Follow</label>
            <Checkbox toggle type="checkbox" onChange={() => {
              patchFollowHideout(id);
              // eslint-disable-next-line no-unused-expressions
              (!isLogged && (
                followCheck()
              ));
              console.log(followCheckValue);
            }} id={id} name={id} defaultChecked={isFollowedHideout}
            />
          </div>
        </div>
      </div>
      <div className="hideout-items-container">
        <div className="hideout-items">
          {
                items.map((item) => (
                  // eslint-disable-next-line max-len
                  <Item key={item.id} {...item} increment={incrementHideoutItem} decrement={decrementHideoutItem} count={itemsCountHideout[item.id]} elementId={elementId} itemsNeeded={item.Objective_has_items.quantity} />
                ))
              }
        </div>
      </div>
    </div>
  );
};

const mapState = (state) => ({
  itemsCountHideout: state.counter.itemsCountHideout,
  followedListHideout: state.follow.followedListHideout,
  followCheckValue: state.follow.followCheckValue,
  isLogged: state.loginForm.isLogged,
});

const mapDispatch = (dispatch) => ({
  incrementHideoutItem: (id, elementId, count) => {
    console.log('increment from dispatch');
    dispatch(incrementHideoutItem(id, elementId, count));
  },
  decrementHideoutItem: (id, elementId, count) => {
    console.log('decrement from dispatch');
    dispatch(decrementHideoutItem(id, elementId, count));
  },
  patchFollowHideout: (payload) => {
    console.log('dispatching action to modify follow status on HIDEOUT');
    dispatch(patchFollowHideout(payload));
  },
  followCheck: () => {
    console.log('dispatching action to modify follow status on QUEST');
    dispatch(followCheck());
  },
});

HideoutElement.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  items: PropTypes.array.isRequired,
  itemsCountHideout: PropTypes.object.isRequired,
  incrementHideoutItem: PropTypes.func.isRequired,
  decrementHideoutItem: PropTypes.func.isRequired,
  patchFollowHideout: PropTypes.func.isRequired,
  followedListHideout: PropTypes.array.isRequired,
  isLogged: PropTypes.bool.isRequired,
  followCheckValue: PropTypes.bool.isRequired,
  followCheck: PropTypes.func.isRequired,
};

export default connect(mapState, mapDispatch)(HideoutElement);
