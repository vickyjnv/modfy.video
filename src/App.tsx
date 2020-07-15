
import React, { Fragment } from 'react';
import { observer } from "mobx-react"
// import { action } from "mobx"
// import LoaderHandler from "./test"
import './App.css';
import { Loader, Header, Footer } from "./components/static/static"
import Dropzone from "./components/dropzone/dropzone"
import TerminalComponent from "./components/terminal/terminalComponent"
import { ComponentStoreType } from "./types/store"


type AppProps = {
  componentStore: ComponentStoreType;
};
const App: React.FC<AppProps> = ({ componentStore }) => {

  let { loaded, fileUploaded, updateLoaded, updateFiles, updateTerminalText, updateClearTerminal, clearTerminal, terminalText } = componentStore
  // componentStore.loaded = true

  console.log(fileUploaded)
  // updateLoaded = updateLoaded.bind(componentStore)
  updateLoaded(true)


  if (!loaded) {
    return (<Fragment><Loader /> <Footer></Footer></Fragment>);
  } else {
    return (
      <Fragment>
        <main>
          <Header />
          <div className="flex-wrapper">
            <div className="col dropzone-wrapper">
              <Dropzone updateFiles={updateFiles} />
            </div>

            <div className="terminal-wrapper">
              <TerminalComponent terminalText={terminalText} clearTerminal={clearTerminal} updateClearTerminal={updateClearTerminal} updateTerminalText={updateTerminalText} loaded={loaded} />
            </div>
          </div>

        </main >
        <Footer />
      </Fragment>
    );
  }

};

export default observer(App);
