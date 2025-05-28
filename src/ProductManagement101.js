
import React, { useState } from "react";

export default function ProductManagement101() {
  const [page, setPage] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);
  const [submittedVision, setSubmittedVision] = useState(null);
  const [name, setName] = useState("");
  const [vision, setVision] = useState("");

  const handleAnswerClick = (answer) => {
    setSelectedAnswer(answer);
    setIsCorrect(answer === "Growth");
  };

  const handleSubmit = () => {
    if (name && vision) {
      setSubmittedVision({ name, vision });
      setPage(page + 1);
    }
  };

  const pages = [
    <div>
      <h2>What is Product Management vs Product Ownership?</h2>
      <p>Product Management is about setting the long-term vision and strategy for a product. Product Managers focus on the market, customer needs, and the overall business value. Product Owners, often part of Agile teams, are responsible for defining user stories and prioritizing the backlog to guide development.</p>
    </div>,
    <div>
      <h2>Overview of the Product Lifecycle</h2>
      <p>The product lifecycle is the journey a product takes from the idea stage to being retired. It has six main stages: Discovery, Development, Launch, Growth, Maturity, and Decline/Sunset.</p>
    </div>,
    <div>
      <h2>The Mindset of a Product Leader</h2>
      <p>Product leaders are problem-solvers who think about the customer first. They use data to make decisions, listen to feedback, and aren’t afraid to change direction if something isn’t working.</p>
    </div>,
    <div>
      <h2>Case Study: The Rise and Fall of MySpace</h2>
      <p>MySpace was once the most visited social networking site in the world. Poor product decisions, lack of innovation, and competition from Facebook led to its rapid decline. This highlights the importance of listening to users, adapting quickly, and maintaining product quality and focus.</p>
    </div>,
    <div>
      <h2>Word Problem Activity</h2>
      <p>Imagine you created a mobile app for short video sharing. In the first year, your user base grows from 10,000 to 10 million, your app is trending, and you are making revenue from ads. What phase of the product lifecycle is your app in?</p>
      {['Discovery', 'Launch', 'Growth', 'Sunset'].map((answer, i) => (
        <div key={i} style={{ marginBottom: '1rem' }}>
          <button onClick={() => handleAnswerClick(answer)} disabled={selectedAnswer !== null}>{answer}</button>
          {selectedAnswer === answer && (
            <span style={{ marginLeft: '1rem', color: isCorrect ? 'green' : 'red' }}>
              {isCorrect ? 'CORRECT' : 'INCORRECT'}
            </span>
          )}
          {answer === 'Growth' && selectedAnswer && (
            <div style={{ color: 'red', marginTop: '0.5rem' }}>
              User growth and monetization are key traits of the Growth stage.
            </div>
          )}
        </div>
      ))}
    </div>,
    <div>
      <h2>Personal Product Vision Statement</h2>
      <p>A product vision statement explains what your product aims to achieve and who it serves. It should be inspirational, clear, and focused. Include the target user, the problem being solved, and the unique value your product offers.</p>
      <textarea
        value={vision}
        onChange={(e) => setVision(e.target.value)}
        placeholder="Write your vision statement here..."
        style={{ width: '100%', height: '100px', marginBottom: '1rem' }}
      />
      <div>
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{ marginRight: '1rem' }}
        />
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </div>,
    <div>
      <h2>Submission Received</h2>
      <p>Thank you <strong>{submittedVision?.name}</strong>!</p>
      <p>Your Product Vision: {submittedVision?.vision}</p>
    </div>
  ];

  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial, sans-serif', maxWidth: '700px', margin: '0 auto' }}>
      {pages[page]}
      <div style={{ marginTop: '2rem' }}>
        {page < pages.length - 1 && (
          <button onClick={() => setPage(page + 1)}>Next</button>
        )}
      </div>
    </div>
  );
}
