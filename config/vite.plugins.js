// import pug from "@vituum/vite-plugin-pug";
import htmlImages from "vite-plugin-html-images";
// import { imagetools } from "vite-imagetools";
import injectHTML from "vite-plugin-html-inject";
import { resolve } from "path";

const vitePlugins = [
    injectHTML({
        tagName: "include", // Default is `load`
        sourceAttr: "file", // Default is `src`
    }),
    // imagetools(),
    // pug({
    //     root: "src/pug",
    //     options: {
    //         pretty: true,
    //     },
    // }),
    htmlImages(
        { tempDirname: ".img" },
        {
            png: { quality: 100 },
            webp: { quality: 100, lossless: true },
            jpeg: { quality: 100, mozjpeg: true },
        }
    ),
];

export default vitePlugins;
