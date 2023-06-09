import React, { useEffect, useRef, useState } from 'react';
import Header from './FAQReader/Header';
import alanBtn from "@alan-ai/alan-sdk-web";
import Faq from './FAQReader/Faq';
import { ChakraProvider } from '@chakra-ui/react';
import './FAQReader/faq.css';

function App() {

  const alanBtnInstance = useRef(null);
  const [index, setIndex] = useState(null);

  useEffect(() => {
      if (!alanBtnInstance.current) {
          alanBtnInstance.current = alanBtn({
              key: '48c0e7a0da44b0fa555ade13883568032e956eca572e1d8b807a3e2338fdd0dc/stage',
              onCommand: (commandData) => {
              if (commandData.command === 'gotoFaq') {
                  setIndex(commandData.faqId - 1)
                }
              }
          });
      }
  }, []);

  return (
    <div className="App">
      <Header />
      <div class="alan-btn"></div>
      <ChakraProvider>
        <Faq index={index} setIndex={setIndex}/>
      </ChakraProvider>
    </div>
  );
}

export default App;
