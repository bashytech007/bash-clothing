import {Fragment, useState, useEffect} from "react";
import {useSelector} from 'react-redux';
import {Title,CategoryContainer} from "./category.style.jsx";
import ProductCard from "../../components/product-card/Product-card.component";
import { useParams } from "react-router-dom";
import { selectCategoriesIsLoading, selectCategoriesMap } from "../../store/categories/category.selector.js";
import Spinner from '../../components/spinner/Spinner.component'
const Category = () => {
  const { category } = useParams();
 const categoriesMap = useSelector(selectCategoriesMap);
  const isLoading=useSelector(selectCategoriesIsLoading);
  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);
  return (
    <Fragment>
      <Title>{category.toUpperCase}</Title>
      {isLoading ?(
      <Spinner/>
        ):(
         <CategoryContainer>
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </CategoryContainer>
  )}
  </Fragment>
  );
          }
        
      
export default Category;
