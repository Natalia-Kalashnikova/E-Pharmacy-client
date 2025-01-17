import DOMPurify from 'dompurify';
import css from './Description.module.css';

const Description = ({ product }) => {
  const sanitizedDescription = product?.description
    ? DOMPurify.sanitize(product.description)
    : '';
  return (
    <div
      className={css.descriptionWrapper}
      dangerouslySetInnerHTML={{ __html: sanitizedDescription }}></div>
  );
};

export default Description;
