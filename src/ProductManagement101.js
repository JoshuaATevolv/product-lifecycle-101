
import React, { useState } from "react";

const topics = [
  {
    title: "What is Product Management vs Product Ownership?",
    content: `Product Management is about setting the long-term vision and strategy for a product. Product Managers focus on the market, customer needs, and the overall business value. Product Owners, often part of Agile teams, are responsible for defining user stories and prioritizing the backlog to guide development.`,
    takeaway: [
      "PMs focus on strategy and vision; POs focus on execution and delivery",
      "Both roles collaborate to ensure the right product gets built effectively"
    ],
    image: "https://cdn-icons-png.flaticon.com/512/2972/2972185.png"
  },
  {
    title: "Overview of the Product Lifecycle",
    content: `The product lifecycle is the journey a product takes from the idea stage to being retired. It has six main stages: Discovery, Development, Launch, Growth, Maturity, and Decline/Renewal.`,
    takeaway: [
      "Lifecycle stages help you plan product work in context",
      "Understanding the lifecycle helps prioritize what matters most at each stage"
    ],
    image: "https://cdn-icons-png.flaticon.com/512/5969/5969471.png"
  },
  {
    title: "The Mindset of a Product Leader",
    content: `Product leaders are problem-solvers who think about the customer first. They use data to make decisions, listen to feedback, and aren’t afraid to change direction if something isn’t working.`,
    takeaway: [
      "Empathy, communication, and curiosity are key traits",
      "Product leaders must be flexible, data-informed, and customer-focused"
    ],
    image: "https://cdn-icons-png.flaticon.com/512/4149/4149678.png"
  }
];

const quizQuestions = [
  {
    type: "multiple",
    question: "Which of the following are responsibilities of a Product Owner?",
    options: [
      "Creating long-term market strategy",
      "Prioritizing backlog items",
      "Conducting customer interviews",
      "Writing user stories"
    ],
    answer: [1, 3]
  },
  {
    type: "fill",
    question: "The _______ is responsible for defining the vision of the product and aligning it with business goals.",
    answer: "Product Manager"
  },
  {
    type: "word",
    question: "Maria is part of an Agile team. She makes sure developers work on the most valuable features and writes user stories. What is her role likely to be?",
    answer: "Product Owner"
  },
  {
    type: "match",
    question: "Match the lifecycle stage with its definition:",
    pairs: {
      "Discovery": "Identifying a problem or opportunity",
      "Development": "Building the solution",
      "Launch": "Introducing the product to the market",
      "Maturity": "Optimizing and scaling the product"
    }
  }
];

const visionExamples = [
  "I want to build an app that helps students manage their study time effectively.",
  "I believe busy parents need a meal planning solution that’s quick and collaborative.",
  "I’m passionate about creating a tool for artists to showcase and sell their digital work."
];

export default function ProductManagement101() {
  const [page, setPage] = useState(0);
  const [showQuiz, setShowQuiz] = useState(false);
  const isLastTopic = page === topics.length - 1;
  const isDone = page > topics.length;
  const topic = page < topics.length ? topics[page] : null;
  const progressPercent = Math.round(((page + 1) / (topics.length + 1)) * 100);

  return (
    <div style={{
      padding: '2rem',
      maxWidth: '800px',
      margin: '0 auto',
      fontFamily: 'Segoe UI, sans-serif',
      color: '#333',
      lineHeight: 1.6,
      backgroundColor: '#f8f9fa',
      borderRadius: '10px',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
    }}>
      <h1 style={{ fontSize: '2.5rem', fontWeight: '700', marginBottom: '1.5rem', color: '#1a202c', textAlign: 'center' }}>
        Product Management 101
      </h1>

      <div style={{ marginBottom: '1.5rem' }}>
        <div style={{ backgroundColor: '#e2e8f0', borderRadius: '9999px', height: '12px' }}>
          <div style={{
            width: `${progressPercent}%`,
            backgroundColor: '#4299e1',
            height: '100%',
            borderRadius: '9999px',
            transition: 'width 0.5s ease'
          }}></div>
        </div>
        <p style={{ textAlign: 'right', fontSize: '0.875rem', color: '#4a5568' }}>{progressPercent}% Complete</p>
      </div>

      {topic && (
        <div style={{ marginBottom: '2rem', backgroundColor: '#ffffff', padding: '1.5rem', borderRadius: '8px' }}>
          <img src={topic.image} alt="Topic illustration" style={{ maxWidth: '100px', display: 'block', margin: '0 auto 1rem' }} />
          <h2 style={{ fontSize: '1.75rem', fontWeight: '600', color: '#2b6cb0', textAlign: 'center' }}>{topic.title}</h2>
          <p style={{ marginTop: '1rem', fontSize: '1.125rem' }}>{topic.content}</p>
          <div style={{ marginTop: '1rem' }}>
            <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '0.5rem' }}>Key Takeaways</h3>
            <ul style={{ paddingLeft: '1.5rem', fontSize: '1.125rem' }}>
              {topic.takeaway.map((point, i) => (
                <li key={i} style={{ marginBottom: '0.5rem' }}>{point}</li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {isDone && !showQuiz && (
        <div style={{ backgroundColor: '#ffffff', padding: '1.5rem', borderRadius: '8px' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '1rem' }}>Activity: Create Your Product Vision</h2>
          <p>Think of a problem you've experienced or observed. How would you describe your vision for a product that solves it?</p>
          <p style={{ fontWeight: '600', marginTop: '1rem' }}>Example Visions:</p>
          <ul>
            {visionExamples.map((ex, i) => <li key={i}>{ex}</li>)}
          </ul>
        </div>
      )}

      {isDone && showQuiz && (
        <div style={{ backgroundColor: '#ffffff', padding: '1.5rem', borderRadius: '8px' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '1rem' }}>Quiz</h2>
          {quizQuestions.map((q, index) => (
            <div key={index} style={{ marginBottom: '1.5rem' }}>
              <p><strong>{q.question}</strong></p>
              {q.type === "multiple" && q.options && (
                <ul>
                  {q.options.map((opt, i) => <li key={i}>{opt}</li>)}
                </ul>
              )}
              {q.type === "fill" && <p style={{ fontStyle: 'italic' }}>(Fill in the blank)</p>}
              {q.type === "word" && <p style={{ fontStyle: 'italic' }}>(Short answer)</p>}
              {q.type === "match" && q.pairs && (
                <ul>
                  {Object.entries(q.pairs).map(([key, val], i) => <li key={i}>{key} → {val}</li>)}
                </ul>
              )}
            </div>
          ))}
        </div>
      )}

      <div style={{ textAlign: 'center', marginTop: '2rem' }}>
        {!isLastTopic ? (
          <button
            style={{ backgroundColor: '#3182ce', color: 'white', padding: '0.75rem 2rem', fontSize: '1rem', borderRadius: '8px', border: 'none', cursor: 'pointer' }}
            onClick={() => setPage(page + 1)}
          >
            Next Topic
          </button>
        ) : !isDone ? (
          <button
            style={{ backgroundColor: '#2f855a', color: 'white', padding: '0.75rem 2rem', fontSize: '1rem', borderRadius: '8px', border: 'none', cursor: 'pointer' }}
            onClick={() => setPage(page + 1)}
          >
            Start Activity
          </button>
        ) : (
          !showQuiz && (
            <button
              style={{ backgroundColor: '#805ad5', color: 'white', padding: '0.75rem 2rem', fontSize: '1rem', borderRadius: '8px', border: 'none', cursor: 'pointer' }}
              onClick={() => setShowQuiz(true)}
            >
              Take Quiz
            </button>
          )
        )}
      </div>
    </div>
  );
}
