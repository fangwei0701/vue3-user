module.exports = {
  plugins: {
    "postcss-pxtorem": {
      rootValue: 37.5,
      propList: ["*"],
      selectorBlackList: [".norem"], // .norem-开头的class，不进行rem转换
    },
  },
};
