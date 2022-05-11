import React, { useState } from 'react';
import data from './data';
function App() {
   const [number, setNumber] = useState(0);
   const [text, setText] = useState([]);
   const handleSumbit = (e) => {
      e.preventDefault();
      // convert string to number
      let amount = parseInt(number);
      if (amount < 0) amount = 1;
      if (amount > 8) {
         amount = 8;
      }
      setText(data.slice(0, amount));
   };
   return (
      <section className="section-center">
         <h4>tired of boring lorem ipsum</h4>
         <form className="lorem-form" onSubmit={handleSumbit}>
            <label htmlFor="amount">paragraph:</label>
            <input
               type="numebr"
               name="amount"
               id="amount"
               value={number}
               onChange={(e) => setNumber(e.target.value)}
            />
            <button type="submit" className="btn">
               generate
            </button>
         </form>
         <article className="lorem-text">
            {text.map((item, index) => {
               return <p key={index}>{item}</p>;
            })}
         </article>
      </section>
   );
}

export default App;
