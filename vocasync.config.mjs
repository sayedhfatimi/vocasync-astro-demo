/**
 * VocaSync Configuration
 * @see https://vocasync.io/docs/astro
 */
export default {
  // Content collection settings
  collection: {
    name: "blog",
    path: "./src/content/blog",
  },

  // Language for synthesis (ISO 639-1 code)
  language: "en",

  // Synthesis settings
  synthesis: {
    voice: "onyx",
    quality: "hd",
    format: "mp3",
  },

  // No math/LaTeX support needed for this demo
  math: {
    enabled: false,
  },

  // Output settings
  output: {
    audioMapPath: "./src/data/audio-map.json",
  },

  // Frontmatter field to enable/disable audio per post
  frontmatterField: "audio",

  // Processing options
  processing: {
    concurrency: 3,
    force: false,
  },
};
