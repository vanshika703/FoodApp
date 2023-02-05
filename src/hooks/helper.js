export function filterData(searchText, restaurants) {
    console.log("rests",restaurants);
  restaurants.filter((restaurant) =>
    restaurant?.data?.name.toLowerCase().includes(searchText.toLowerCase())
  );
  console.log("helper :, filterData");
  return filterData;
}
