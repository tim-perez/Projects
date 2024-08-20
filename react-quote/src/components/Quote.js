import { useState } from 'react';
import axios from 'axios';
import Button from './Button';

const Quote = () => {
  const [quote, setQuote] = useState('');

  const fetchQuote = async () => {
    try {
      const response = await axios.get('https://api.quotable.io/random');
      setQuote(response.data.content);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="quote">
      <p>{quote}</p>
      <Button callApi={fetchQuote} />
    </div>
  );
}

export default Quote;