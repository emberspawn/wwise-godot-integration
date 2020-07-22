module.exports = {
  pluginOptions: {
    electronBuilder: {
      nodeIntegration: true,
      builderOptions: {
        productName: "Wwise Godot Integration App",
        win: {
          target: "portable",
        },
      },
    },
  },
};