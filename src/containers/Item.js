// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import axios from 'axios';

// Action Creators
import {
  incrementQuestItem,
  decrementQuestItem,
  incrementHideoutItem,
  decrementHideoutItem,
} from '../actions';

import '../styles/item.scss';

const Item = ({
  img,
  name,
  id,
  count,
  category,
  wiki_link,
  elementId,
  increment,
  decrement,
  itemsNeeded,
  noCount,
  price,
  basePrice,
  avg24hPrice,
  avg7daysPrice,
  traderName,
  traderPrice,
  traderPriceCur,
  updated,
  slots,
  diff24h,
  diff7days

}) => {
  const countToSend = count;
  return (
    <div className="item">
      <div className="item-infos">
        <div className="item-image">
          <img src={img} alt="" />
        </div>
        <h3 className="item-name">
          {name}
        </h3>

        {category
        ?
        <h3 className="item-category">
          {category}
        </h3>
        :
        (<div></div>)
        }
        
        {price
        ?
        (<div className="item-price">
          <div className="item-price-infos"><a href={wiki_link} target="_blank" rel="noreferrer">Wiki Link</a></div>
          <div className="item-price-infos"><span className="item-price-infos-sub">Price :</span> {price} ₽</div>
          <div className="item-price-infos"><span className="item-price-infos-sub">Base price :</span> {basePrice} ₽</div>
          <div className="item-price-infos"><span className="item-price-infos-sub">Average 24h price :</span> {avg24hPrice} ₽</div>
          <div className="item-price-infos"><span className="item-price-infos-sub">Average 7 days price :</span> {avg7daysPrice} ₽</div>
          <div className="item-price-infos"><span className="item-price-infos-sub">TraderName :</span> {traderName}</div>
          <div className="item-price-infos"><span className="item-price-infos-sub">Trader price :</span> {traderPrice} {traderPriceCur}</div>
          <div className="item-price-infos"><span className="item-price-infos-sub">Slots :</span> {slots}</div>
          <div className="item-price-infos"><span className="item-price-infos-sub">Difference 24h :</span> {diff24h} ₽</div>
          <div className="item-price-infos"><span className="item-price-infos-sub">Difference 7 days:</span> {diff7days} ₽</div>
        </div>)
        : 
        (<div><a href={wiki_link} target="_blank" rel="noreferrer">Wiki Link</a></div>)
        }

      </div>
      {!noCount && (
        <div className="count-bar">
          <div
            className="increment-decrement-button"
            onClick={() => {
              decrement(id, elementId, countToSend);
            }}
          >
            -
          </div>
          {/* <div className="count">{count ? count : 0} </div> */}
          <div className="count">{countToSend} </div>
          <div className="count-no-allitems-slash">/</div>
          <div className="count-no-allitems">{itemsNeeded}</div>
          <div
            className="increment-decrement-button"
            onClick={() => {
              increment(id, elementId, countToSend);
            }}
          >
            +
          </div>
        </div>
      )}
    </div>
  );
}

const mapStateToProps = null;

const mapDispatchToProps = (dispatch) => ({
  incrementQuestItem: () => {
    console.log("increment quest item from dispatch");
    dispatch(incrementQuestItem());
  },
  decrementQuestItem: () => {
    console.log("decrement quest item from dispatch");
    dispatch(decrementQuestItem());
  },
  incrementHideoutItem: () => {
    console.log("increment hideout item from dispatch");
    dispatch(incrementHideoutItem());
  },
  decrementHideoutItem: () => {
    console.log("decrement hideout item from dispatch");
    dispatch(decrementHideoutItem());
  },
});

Item.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  category: PropTypes.string.isRequired,
  wiki_link: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Item);
