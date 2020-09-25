import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import NavBar from '../components/NavBar';

import { toggleDealer } from '../actions';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Loading from '../components/Loader';
import Quest from './Quest';

import '../styles/AllQuests.scss';

const AllQuests = ({
  // eslint-disable-next-line no-shadow
  dealersList, dealersLoading, toggleDealer, dealer,
}) => {
  const dealersArray = [];
  const dealersBar = [];
  dealersList.forEach((element) => {
    if (element.name === dealer) {
      dealersArray.push(
        <div className="quests-list-active">
          <div className="dealer-name"><span>{element.name}</span></div>
          {
            element.quests.map((item) => (
              <Quest key={item.id} {...item} />
            ))
          }
        </div>,
      );
      dealersBar.push(
        <div className="dealer-portrait-active" onClick={() => { toggleDealer(element.name) }}><img src={element.img_dealer} alt={element.name + " " + "Tarkov"} /></div>,
      );
    }
    else {
      dealersArray.push(
        <div className="quests-list">
          <div className="dealer-name"><span>{element.name}</span></div>
          {
            element.quests.map((item) => (
              <Quest key={item.id} {...item} />
            ))
          }
        </div>,
      );
      dealersBar.push(
        <div className="dealer-portrait" onClick={() => { toggleDealer(element.name) }}><img src={element.img_dealer} alt={element.name + " " + "Tarkov"} /></div>,
      );
    }
  });
  return (
    <div className="quests-container">
      <Header />
      <NavBar />
      <div className="quests-container-body">

        {dealersLoading ? (<Loading />) : (
          <div className="quest-container-body-quests">
            <div className="dealers-bar">
              {dealersBar}
            </div>
            {dealersArray.map((item) => (
              <div className="dealer-div">{item}</div>
            ))}
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

const mapState = (state) => ({
  dealersList: state.allQuests.dealersList,
  dealersLoading: state.allQuests.dealersLoading,
  dealer: state.allQuests.dealer,
});

const mapDispatch = (dispatch) => ({
  toggleDealer: (payload) => {
    dispatch(toggleDealer(payload));
  },
});

AllQuests.propTypes = {
  dealersList: PropTypes.array.isRequired,
  dealersLoading: PropTypes.bool.isRequired,
  toggleDealer: PropTypes.func.isRequired,
  dealer: PropTypes.string.isRequired,
};

export default connect(mapState, mapDispatch)(AllQuests);
