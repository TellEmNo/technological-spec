const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',  // Указываем точку входа
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',  // Имя итогового бандла
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',  // Используем Babel для транспиляции
        },
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],  // Поддерживаем .js и .jsx
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html', // Путь к шаблону HTML
    }),
  ],
  devServer: {
    historyApiFallback: true,
    static: './dist',  // Указываем папку с файлами для сервера
    port: 3000,  // Порт для локального сервера
  },
  mode: 'development',  // Режим разработки
};
