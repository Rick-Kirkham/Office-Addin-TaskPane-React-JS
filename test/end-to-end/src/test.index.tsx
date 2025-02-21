import App from "./test.app";
import { AppContainer } from "react-hot-loader";
import { initializeIcons } from "@fluentui/react/lib/Icons";
import * as React from "react";
import * as ReactDOM from "react-dom";

/* global document, Office, module, require */

initializeIcons();

const title = "Contoso Task Pane Add-in";
let isOfficeInitialized = false;

const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <Component title={title} isOfficeInitialized={isOfficeInitialized} />
    </AppContainer>,
    document.getElementById("container")
  );
};

/* Render application after Office initializes */
Office.initialize = () => {
  isOfficeInitialized = true;
  render(App);
};

/* Initial render showing a progress bar */
render(App);

if ((module as any).hot) {
  (module as any).hot.accept("./test.app", () => {
    const NextApp = require("./test.app").default;
    render(NextApp);
  });
}
