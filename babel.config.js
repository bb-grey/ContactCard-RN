module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          '@assets': './src/assets',
          '@screens': './src/screens',
          '@routes': './src/routes',
          '@services': './src/services',
          '@hooks': './src/hooks',
          '@components': './src/components',
          '@utils': './src/utils',
        },
      },
    ],
  ],
};
