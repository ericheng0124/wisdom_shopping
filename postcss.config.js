// postcss.config.js
module.exports = {
  plugins: {
    'postcss-px-to-viewport': {
      // vw适配的标准屏的宽度 通常以iphone x屏幕宽度为标准
      // 设计图宽度是 750 的，则需要调成1倍的 => 适配375
      // 设计图宽度是 640 的，则需要调成1倍的 => 适配320，则需要将viewportWidth值改为320
      viewportWidth: 375
    }
  }
}
