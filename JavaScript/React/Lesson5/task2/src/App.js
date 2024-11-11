import React, { useState, useEffect } from 'react';
import withLoadingIndicator from './HOCs/withLoadingIndicator';
import DataDisplay from './components/DataDisplay';

const DataDisplayWithLoading = withLoadingIndicator(DataDisplay);

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(null);

  // Типа загрузкa
  useEffect(() => {
    setTimeout(() => {
      setData("Text");
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <div>
      <DataDisplayWithLoading isLoading={isLoading} data={data} />
    </div>
  );
}

export default App;
