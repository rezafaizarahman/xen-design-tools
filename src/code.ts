import framerOnMessage from "framer-sites-figma-plugin/lib/api";

figma.showUI(__html__, {
  themeColors: false,
  width: 256,
  height: 600,
});

figma.ui.onmessage = (msg) => {
  framerOnMessage(msg);
};
