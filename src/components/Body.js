import { Slider } from "./Body/Slider";

export function Body() {
  return (
    <div className="body body__home">
      <Slider />
      <Categories />
    </div>
  );
}

function Categories() {
  return (
    <div className="body__home-categories">
      <h1 className="body__home-categories-title">Shop the latest</h1>
      <button className="body__home-categories-btn-viewall">View all</button>
      <CategoriesList />
    </div>
  );
}

function CategoriesList() {
  return (
    <div className="body__home-categories-list">
      <CategoriesItem />
    </div>
  );
}

function CategoriesItem() {
  return (
    <div className="body__home-categories-item">
      <a className="body__home-categories-item-link">
        <img className="body__home-categories-item-img"></img>
        <div className="body__home-categories-item-product-name"></div>
        <div className="body__home-categories-item-product-cost"></div>
      </a>
      <button className="body__home-categories-item-btn-add">
        Add to cart
      </button>
    </div>
  );
}
