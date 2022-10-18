export const getItems = (page, list, limit) => {
  page = parseInt(page);
  const start = (page - 1) * limit;
//   console.log('Slicing', page, list, start, start + limit);
  console.log('',start,limit)
  return list.slice(start, start + limit);
};
