
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
      <h2>🚀 What is Product Management vs Product Ownership?</h2>
      <p>Imagine you’re the captain of a spaceship (the product). The <strong>Product Manager</strong> decides where the ship should go and why — based on star maps, crew feedback, and what’s happening in the galaxy (market). The <strong>Product Owner</strong> keeps the crew focused on reaching the next milestone, making sure each system (feature) is built and functioning correctly.</p>
      <ul>
        <li><strong>PM</strong>: Vision, strategy, user empathy, market fit</li>
        <li><strong>PO</strong>: Backlog, refinement, sprint planning, team unblocking</li>
      </ul>
      <p><em>You’ll need to wear both hats sometimes, so understanding the difference helps you shift gears effectively.</em></p>
    </div>,
    <div>
      <h2>🌀 The Product Lifecycle</h2>
      <p>Products, like living things, go through a journey. This journey is called the <strong>product lifecycle</strong> — and it helps you know what decisions to focus on.</p>
      <ol>
        <li><strong>Discovery</strong> – Is there a real problem? Who has it? Can we solve it?</li>
        <li><strong>Development</strong> – Building and testing an MVP (minimum viable product)</li>
        <li><strong>Launch</strong> – First public release — messaging, metrics, support</li>
        <li><strong>Growth</strong> – Gaining users, improving onboarding, monetizing</li>
        <li><strong>Maturity</strong> – Optimize, differentiate, scale sustainably</li>
        <li><strong>Decline / Sunset</strong> – Product isn’t viable or needed anymore</li>
      </ol>
      <p><em>Good product leaders adjust their strategy depending on the stage. You’ll learn how.</em></p>
    </div>,
    <div>
      <h2>🧠 The Mindset of a Product Leader</h2>
      <p>Being a product owner is like being a curious detective and a calm coach. You ask questions, notice patterns, and guide your team toward the outcome — not just the output.</p>
      <p><strong>Core traits:</strong></p>
      <ul>
        <li>Empathy → You build what users actually need</li>
        <li>Clarity → You translate strategy into clear work</li>
        <li>Curiosity → You’re always learning, testing, iterating</li>
        <li>Focus → You say "no" more than "yes" to stay on track</li>
      </ul>
    </div>,
    <div>
      <h2>📉 Case Study: MySpace</h2>
      <p>MySpace was once the top social network. What happened?</p>
      <ul>
        <li>They focused on customization over usability</li>
        <li>Ignored feedback from users and developers</li>
        <li>Slowed innovation while competitors (Facebook) sped up</li>
      </ul>
      <p><strong>Lesson:</strong> Products fail when the team stops listening and adapting. Great ideas die without great execution and evolution.</p>
    </div>,
    <div>
      <h2>🧩 Activity: Lifecycle Diagnosis</h2>
      <p><strong>Scenario:</strong> You launch a short-form video app. Within a year, it goes viral. You scale from 10,000 to 10 million users and begin ad monetization. What stage is your product in?</p>
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
      <h2>📝 Define Your Product Vision</h2>
      <p>Your vision is your north star — it helps align your team and prioritize work. A great product vision:</p>
      <ul>
        <li>Addresses a meaningful problem</li>
        <li>Specifies who it’s for</li>
        <li>Shares what success looks like</li>
      </ul>
      <p><em>Example: "Help neurodivergent students stay organized and reduce stress through a customizable, voice-activated planning app."</em></p>
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
      <h2>✅ Vision Submitted</h2>
      <p>Thanks, <strong>{submittedVision?.name}</strong>! Here’s what you wrote:</p>
      <blockquote style={{ fontStyle: 'italic', borderLeft: '4px solid #ccc', paddingLeft: '1rem' }}>{submittedVision?.vision}</blockquote>
      <p>You’ll reflect on this in later modules. Save it somewhere you can revisit.</p>
    </div>
  ];

  return (
    <div style={{ padding: '2rem', fontFamily: 'Segoe UI, sans-serif', maxWidth: '800px', margin: '0 auto', background: '#f9fafb', borderRadius: '8px' }}>
      {pages[page]}
      <div style={{ marginTop: '2rem', textAlign: 'right' }}>
        {page < pages.length - 1 && (
          <button onClick={() => setPage(page + 1)} style={{ backgroundColor: '#2b6cb0', color: 'white', padding: '0.75rem 1.5rem', borderRadius: '6px', border: 'none', cursor: 'pointer' }}>Next →</button>
        )}
      </div>
    </div>
  );
}
