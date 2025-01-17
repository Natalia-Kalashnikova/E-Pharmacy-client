import { useState } from 'react';
import Description from '../Description/Description.jsx';
import Reviews from '../Reviews/Reviews.jsx';
import css from './TabsContainer.module.css';

const TabsContainer = ({ product }) => {
  const [activeTab, setActiveTab] = useState('Description');

  const handleTabClick = tabName => {
    setActiveTab(tabName);
  };

  return (
    <div className={css.wrapper}>
      <div className={css.tabsWrapper}>
        <button
          className={`${css.tabLink} ${
            activeTab === 'Description' ? css.active : ''
          }`}
          onClick={() => handleTabClick('Description')}>
          Description
        </button>
        <button
          aria-label="Reviews"
          className={`${css.tabLink} ${
            activeTab === 'Reviews' ? css.active : ''
          }`}
          onClick={() => handleTabClick('Reviews')}>
          Reviews
        </button>
      </div>
      <div className={css.tabContent}>
        {activeTab === 'Description' && <Description product={product} />}
        {activeTab === 'Reviews' && <Reviews product={product} />}
      </div>
    </div>
  );
};

export default TabsContainer;
