import React from 'react';
import Navbar from "./navbar";
import Form from "./Form";
import PageContent from  "./pageContent";
import {ThemeProvider} from "./contexts/ThemeContext";
import {LanguageProvider} from "./contexts/LanguageContext"

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
      <PageContent>
        <Navbar/>
        <Form/>
      </PageContent>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
