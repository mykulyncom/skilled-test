export const assetDir = "assets";
export const entryFileNames = `${assetDir}/js/bundle-[hash].js`;
export const chunkFileNames = `${assetDir}/js/bundle-[hash]-chunk.js`;
const assets = [
    {
        output: `${assetDir}/img/[name]-[hash][extname]`,
        regex: /\.(png|jpe?g|gif|svg|webp|avif)$/,
    },
    {
        output: `${assetDir}/css/main-[hash][extname]`,
        regex: /\.css$/,
    },
    {
        output: `${assetDir}/fonts/[name][extname]`,
        regex: /\.woff2$/,
    },
];

export function processAssetFileNames(info) {
    if (info && info.name) {
        const name = info.name;
        const result = assets.find((a) => a.regex.test(name));
        if (result) {
            return result.output;
        }
    }

    return `${assetDir}/[name]-[hash][extname]`;
}
