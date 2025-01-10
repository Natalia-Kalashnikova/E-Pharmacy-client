import { useState } from "react";
import css from './TabsContainer.module.css';
import Description from '../Description/Description.jsx';
import Reviews from '../Reviews/Reviews.jsx';

const TabsContainer = ({ product }) => {
    const [activeTab, setActiveTab] = useState('Description');

    const handleTabClick = tabName => {
    setActiveTab(tabName);
  };
  return (
    <div className={css.container}>
      <div className={css.tabsWrapper}>
        <div className={css.tabs}>
          <button
            className={`${css.tabLink} ${
              activeTab === 'Description' ? css.active : ''
            }`}
            onClick={() => handleTabClick('Description')}
          >
            Description
          </button>
          <button
            className={`${css.tabLink} ${
              activeTab === 'Reviews' ? css.active : ''
            }`}
            onClick={() => handleTabClick('Reviews')}
          >
            Reviews
          </button>
        </div>
        <div className={css.divider}></div>
      </div>
      <div className={css.bottomWrapper}>
        <div className={css.tabContent}>
          {activeTab === 'Description' && <Description product={product} />}
          {activeTab === 'Reviews' && <Reviews product={product} />}
        </div>
      </div>
    </div>
  );
}

export default TabsContainer;