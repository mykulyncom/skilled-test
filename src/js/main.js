import noFollow from "./modules/link-blank";

const initJS = () => {
    console.log("Init from js");
    noFollow();
};

window.addEventListener("load", () => {
    initJS();
});
