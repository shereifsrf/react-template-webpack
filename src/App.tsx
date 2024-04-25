import React, { useEffect, useState } from 'react';

const App = () => {
  const [data, setData] = useState<String[]>([]);

  useEffect(() => {
    // For webpack tree shaking
    require('./assets/results.js');

    const script = document.createElement('script');
    script.src = './assets/results.js';
    script.async = true;

    script.onload = () => {
      if ((window as any).results) 
        setData((window as any).results); 
    };
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }
  , []);

  return (
    <div>
      <div className="srf font-bold">
        {data.map((item, idx) => (
          <p key={idx}  className='srf'>{item}</p>
        ))}
      </div>
    </div>
  );
};

export default App;
