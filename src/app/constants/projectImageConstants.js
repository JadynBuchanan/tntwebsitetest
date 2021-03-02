const projectImages = {
  offstage: require.context(`../../assets/images/projectImages/offstage`, false, /.*\.png$/),
  onward: require.context(`../../assets/images/projectImages/onward`, false, /.*\.png$/),
  company: require.context(`../../assets/images/projectImages/company`, false, /.*\.png$/),
  nexttonormal: require.context(`../../assets/images/projectImages/nexttonormal`, false, /.*\.png$/),
  hairspray: require.context(`../../assets/images/projectImages/hairspray`, false, /.*\.png$/),
  littleshophorrors: require.context(`../../assets/images/projectImages/littleshophorrors`, false, /.*\.png$/),
  legallyblonde: require.context(`../../assets/images/tntimages/legallyblonde`, false, /.*\.png$/),
  catchmeifyoucan: require.context(`../../assets/images/projectImages/catchmeifyoucan`, false, /.*\.png$/)
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
     {id: '1', ratioWidth: 3, ratioHeight: 1},
     {id: '5', ratioWidth: 3, ratioHeight: 1},
  ]
};
