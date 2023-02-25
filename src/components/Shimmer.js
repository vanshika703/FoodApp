import { ShimmerPostList, ShimmerSectionHeader } from "react-shimmer-effects";

const Shimmer = () => {
  return (
    <>
      <div className="flex flex-col m-10 p-10">
        <ShimmerSectionHeader center />
        <ShimmerPostList postStyle="STYLE_FOUR" col={4} row={2} gap={30} />;
      </div>
    </>
  );
};

export default Shimmer;
