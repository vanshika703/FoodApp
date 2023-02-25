import { ShimmerCategoryList } from "react-shimmer-effects";

const MenuShimmer = () => {
  return (
    <>
      <div className="flex mx-96 p-10">
        <ShimmerCategoryList title items={6} categoryStyle="STYLE_SEVEN" />;
      </div>
    </>
  );
};

export default MenuShimmer;
