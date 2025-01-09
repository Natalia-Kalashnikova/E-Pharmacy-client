import { useState } from "react";
import products from '../../../products.json';
import { usePopover } from "../../hooks/usePopover.js";
import css from './MedicineFilters.module.css';
import Icon from '../Icon/Icon.jsx';
import clsx from "clsx";

const MedicineFilters = () => {
    const [keyword, setKeyword] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('');

    const categories = [...new Set(products.map(product => product.category))];

    const handleFiltration = () => {
    console.log({ keyword, selectedCategory });
    };
    
    const handleSearchChange = e => {
    setKeyword(e.target.value);
    };
    
    const handleCategoryChange = category => {
    setSelectedCategory(category);
    handleClosePopover();
    };
    
    const {
    isOpen,
    isVisible,
    handleTogglePopover,
    handleClosePopover,
    popoverRef,
    } = usePopover();
    
    return (
    <div className={css.container}>
      <h3 className={css.title}>Medicine</h3>
      <div className={css.wrapper}>
        <div className={css.label} ref={popoverRef}>
          <button
            type="button"
            className={css.buttonCategories}
            onClick={handleTogglePopover}
          >
            {selectedCategory || (
              <p className={css.placeholder}>Product category</p>
            )}
            <Icon
              iconId="icon-down"
              className={clsx(css.iconDown, { [css.iconRotate]: isOpen })}
            />
          </button>
          {isOpen && (
            <div className={clsx(css.popover, { [css.visible]: isVisible })}>
              <ul className={css.popoverList}>
                {categories.map(category => (
                  <li
                    key={category}
                    className={clsx(css.popoverItem, {
                      [css.selected]: category === selectedCategory,
                    })}
                    onClick={() => handleCategoryChange(category)}
                  >
                    {category}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
        <label className={css.label}>
          <input
            type="text"
            value={keyword}
            onChange={handleSearchChange}
            placeholder="Find the word"
            className={css.input}
          />
          <button type="button" className={css.button}>
            <Icon iconId="icon-search" className={css.icon} />
          </button>
        </label>
        <button
          type="button"
          className={css.buttonFilter}
          onClick={handleFiltration}
        >
          <Icon iconId="icon-filter" className={css.iconFilter}></Icon>
          <span className={css.textFilter}>Filter</span>
        </button>
      </div>
    </div>
  );
    
}

export default MedicineFilters;