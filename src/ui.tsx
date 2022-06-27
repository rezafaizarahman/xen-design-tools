import * as React from "react";
import * as ReactDOM from "react-dom";
import useFramerMessage from "framer-sites-figma-plugin";

declare function require(path: string): any;

const App = () => {
  useFramerMessage();
  return (
    <iframe
      src="https://xentool.framer.website/" // your framer sites url
      loading="lazy"
      style={{ width: "100%", height: "100%", border: "none" }}
    ></iframe>
  );
};

ReactDOM.render(<App />, document.getElementById("react-page"));
