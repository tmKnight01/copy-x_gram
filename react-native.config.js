module.exports = {
  project: {
    ios: {},
    android: {},
  },
  dependencies: {
    'react-native-code-push': {
      platforms: {
        android: null, // disable Android platform, other platforms will still autolink if provided
      },
    },
  },
  assets: ['./src/Assets/Fonts/'],
}
