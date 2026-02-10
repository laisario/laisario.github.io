import React, { useEffect } from 'react';
import './App.module.scss';
import BaseLayout from "./components/BaseLayout";
import {BrowserRouter} from "react-router-dom";
import { useTranslation } from 'react-i18next';

function App() {
   const { i18n } = useTranslation();

   useEffect(() => {
      const title = i18n.language.startsWith('pt') 
         ? 'Laísa Rio - Desenvolvedora Full Stack'
         : 'Laísa Rio - Full Stack Developer';
      document.title = title;
   }, [i18n.language]);

   return (
      <div>
         <BrowserRouter>
            <BaseLayout/>
         </BrowserRouter>
      </div>
   );
}


export default App;
