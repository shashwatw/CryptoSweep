export const getCreators = (nfts) => {
//   console.log('TEST');
  const creators = nfts.reduce((creatorObject, nft) => {
    (creatorObject[nft.seller] = creatorObject[nft.seller] || []).push(nft);

    return creatorObject;
  }, {});

  return Object.entries(creators).map((creator) => {
    const seller = creator[0];
    const sum = creator[1].map((item) => Number(item.price)).reduce((prev, curr) => prev + curr, 0);

    return ({ seller, sum });
  });
};

// {
//     'A': [{}, {}, {}],
//     'B': [{}],
//     'C': [{}, {}]
// }
