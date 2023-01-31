import {Title,Preview,CategoryPreviewContainer} from  "./Category-preview.styles.jsx";
import ProductCard from "../product-card/Product-card.component";
// import { CategoriesContext } from '../../contexts/categories.context';


const CategoryPreview = ({ title, products }) => {
  

  return (
    <CategoryPreviewContainer>
      <h2>
        <Title to={title}>
          {title.toUpperCase()}
        </Title>
      </h2>
      <Preview>
        {products
          .filter((_, index) => index < 4)
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </Preview>
    </CategoryPreviewContainer>
  );
};

export default CategoryPreview;
