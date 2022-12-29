import { useContext,Fragment, useState, useEffect} from "react";
import{Title,CategoryContainer,} from "./category.style.jsx";
import ProductCard from "../../components/product-card/Product-card.component";
import { useParams } from "react-router-dom";
import { CategoriesContext } from "../../contexts/categories.context";
const Category = () => {
  const { category } = useParams();
  const { categoriesMap } = useContext(CategoriesContext);

  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);
  return (
    <Fragment>
      <Title>{category.toUpperCase}</Title>
      <CategoryContainer>
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </CategoryContainer>
    </Fragment>
  );
};
export default Category;
