import {  Fragment } from "react";
import { useSelector } from "react-redux";
import { selectCategoriesIsLoading, selectCategoriesMap } from "../../store/categories/category.selector";
import CategoryPreview from "../../components/category-preview/Category-preview.component";
import Spinner from "../../components/spinner/Spinner.component";
const CategoriesPreview = () => {
  const categoriesMap=useSelector(selectCategoriesMap);
  const isLoading=useSelector(selectCategoriesIsLoading)
  return (
    <Fragment>
      {isLoading ?(
      <Spinner/>
      ):(
        Object.keys(categoriesMap).map((title) => {
        const products = categoriesMap[title];
     //    console.log(products);
        return (
          <CategoryPreview key={title.id} title={title} products={products} />
        );
        })
     )}
    </Fragment>
  );
};

export default CategoriesPreview;
