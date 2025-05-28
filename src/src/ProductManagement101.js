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

export default function ProductManagement101() {
  const [page, setPage] = useState(0);
  const topic = topics[page];
  const isLastPage = page === topics.length - 1;

  const progressPercent = Math.round(((page + 1) / topics.length) * 100);

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
      <h1 style={{
        fontSize: '2.5rem',
        fontWeight: '700',
        marginBottom: '1.5rem',
        color: '#1a202c',
        textAlign: 'center'
      }}>
        Product Management 101
      </h1>

      {/* Progress Tracker */}
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

      <div style={{ textAlign: 'center', marginTop: '2rem' }}>
        {!isLastPage ? (
          <button
            style={{
              backgroundColor: '#3182ce',
              color: 'white',
              padding: '0.75rem 2rem',
              fontSize: '1rem',
              borderRadius: '8px',
              border: 'none',
              cursor: 'pointer',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
            }}
            onClick={() => setPage(page + 1)}
          >
            Next Topic
          </button>
        ) : (
          <p style={{ fontWeight: '600', fontSize: '1.25rem', color: '#2f855a' }}>
            You've completed all topics in Product Management 101!
          </p>
        )}
      </div>
    </div>
  );
}
