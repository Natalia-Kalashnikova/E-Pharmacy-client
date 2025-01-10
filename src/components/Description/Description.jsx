import css from './Description.module.css';

const Description = ({ product }) => {
    return (
    <div className={css.descriptionWrapper}>
      <p className={css.text}>{product.description}</p>
    </div>
  );
}

export default Description;