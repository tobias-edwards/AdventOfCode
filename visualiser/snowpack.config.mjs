export default {
  mount: {
    public: '/',
    src: '/dist',
  },
  // Not working yet, possibly since whole component is rerendering, thus resetting the state?
  plugins: ['@snowpack/plugin-react-refresh'],
};
