const projectImages = {
  offstage: require.context(`../../assets/images/projectImages/offstage`, false, /\.(png|jpe?g|svg)$/),
  onward: require.context(`../../assets/images/projectImages/onward`, false, /\.(png|jpe?g|svg)$/),
  company: require.context(`../../assets/images/projectImages/company`, false, /\.(png|jpe?g|svg)$/),
  nexttonormal: require.context(`../../assets/images/projectImages/nexttonormal`, false, /\.(png|jpe?g|svg)$/),
  hairspray: require.context(`../../assets/images/projectImages/hairspray`, false, /\.(png|jpe?g|svg)$/),
  littleshophorrors: require.context(`../../assets/images/projectImages/littleshophorrors`, false, /\.(png|jpe?g|svg)$/),
  legallyblonde: require.context(`../../assets/images/projectImages/legallyblonde`, false, /\.(png|jpe?g|svg)$/),
  catchmeifyoucan: require.context(`../../assets/images/projectImages/catchmeifyoucan`, false, /\.(png|jpe?g|svg)$/)
};

export const getProjectImages = id => {
  if (!id) return [];

  const images = projectImages[id];
  const extractedImages = [];

  images.keys().forEach((key, index) => {
    const image = images(key);
    // extracts filename with extension for id
    const id = key
      .substring(0, key.lastIndexOf("."))
      .substring(key.lastIndexOf("/") + 1);

    extractedImages.push({ image, id, index });
  });
  return extractedImages;
};

// used to explicitly specify a image ratio to be show in grid
export const imageSpecificRatio = {
  nexttonormal: [{ id: "1", ratioWidth: 3, ratioHeight: 1 }],
  hairspray: [{ id: '1', ratioWidth: 2, ratioHeight: 1 }],
  legallyblonde: [
     {id: '1', ratioWidth: 1, ratioHeight: 1},
     {id: '5', ratioWidth: 3, ratioHeight: 1},
  ]
};
