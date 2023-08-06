module.exports = function (api) {
  api.cache(true);

  return {
    presets: ['babel-preset-expo'],
    plugins: [
      // Required for expo-router
      'expo-router/babel',

      // Add the module resolver plugin here
      [
        'module-resolver',
        {
          alias: {
            '@/': './src', // Substitua './src' pelo caminho correto para a pasta onde seus arquivos estão localizados.
          },
        },
      ],
    ],
  };
};
