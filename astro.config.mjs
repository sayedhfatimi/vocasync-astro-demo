// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import vocasync from "@vocasync/astro";
import { rehypeAudioWords } from "@vocasync/astro/rehype";

export default defineConfig({
  site: "https://astro-integration-demo.vocasync.io",
  markdown: {
    rehypePlugins: [
      [
        rehypeAudioWords,
        {
          collectionName: "blog",
          audioMapPath: "src/data/audio-map.json",
        },
      ],
    ],
  },
  integrations: [mdx(), vocasync()],
});
