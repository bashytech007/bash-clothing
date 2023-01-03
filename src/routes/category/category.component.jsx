import {Fragment, useState, useEffect} from "react";
import {useSelector} from 'react-redux';
import {Title,CategoryContainer} from "./category.style.jsx";
import ProductCard from "../../components/product-card/Product-card.component";
import { useParams } from "react-router-dom";
import { selectCategoriesMap } from "../../store/categories/category.selector.js";
const Category = () => {
  const { category } = useParams();
 const categoriesMap = useSelector(selectCategoriesMap);
  
  const [products, setProducts] = useState(categoriesMap[category]);
console.log('render/re-rendering category component')
  useEffect(() => {
    console.log('effecr fired calling setproducts')
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
