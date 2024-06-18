/// <references types="houdini-svelte">

/** @type {import('houdini').ConfigFile} */
const config = {
  watchSchema: {
    url: "https://graphql-pokeapi.graphcdn.app/",
  },

  plugins: {
    "houdini-svelte": {
      framework: "svelte",
    },
  },
};

module.exports = config;

