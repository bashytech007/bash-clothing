import { useContext, Fragment } from "react";
import { CategoriesContext } from "../../contexts/categories.context";
import CategoryPreview from "../../components/category-preview/Category-preview.component";

const CategoriesPreview = () => {
  const { categoriesMap } = useContext(CategoriesContext);
  return (
    <Fragment>
      {Object.keys(categoriesMap).map((title) => {
        const products = categoriesMap[title];
     //    console.log(products);
        return (
          <CategoryPreview key={title.id} title={title} products={products} />
        );
      })}
    </Fragment>
  );
};

export default CategoriesPreview;
