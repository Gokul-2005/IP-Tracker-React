import React, { useEffect, useRef, useState } from 'react'
import Body from '../Body/Body';
import Head from '../Head/Head';
import style from "./App.module.css"
function App() {
  const [details,setDetails] = useState('');
  return (
    <div className={style.App}>
      <Head detailsState={setDetails} />
      { details?<Body mapDetails={details}/>:null}
    </div>
  );
}

export default App;
