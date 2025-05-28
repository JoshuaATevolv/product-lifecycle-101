import React, { useState } from "react";

const topics = [
  {
    title: "What is Product Management vs Product Ownership?",
    content: `Product Management is about setting the long-term vision and strategy for a product. Product Managers focus on the market, customer needs, and the overall business value. Product Owners, often part of Agile teams, are responsible for defining user stories and prioritizing the backlog to guide development.

High school analogy: Think of a PM as the architect of a building (vision, purpose, design) and the PO as the construction foreman (daily execution, coordination).`,
    takeaway: [
      "PMs focus on strategy and vision; POs focus on execution and delivery",
      "Both roles collaborate to ensure the right product gets built effectively"
    ]
  },
  {
    title: "Overview of the Product Lifecycle",
    content: `The product lifecycle is the journey a product takes from the idea stage to being retired. It has six main stages: Discovery, Development, Launch, Growth, Maturity, and Decline/Renewal.

High school analogy: It’s like your favorite TV show – someone had the idea, it was created, aired, became popular, then either changed or got canceled.`,
    takeaway: [
      "Lifecycle stages help you plan product work in context",
      "Understanding the lifecycle helps prioritize what matters most at each stage"
    ]
  },
  {
    title: "The Mindset of a Product Leader",
    content: `Product leaders are problem-solvers who think about the customer first. They use data to make decisions, listen to feedback, and aren’t afraid to change direction if something isn’t working.

High school analogy: Like the captain of a team who balances the coach’s strategy, teammates’ strengths, and the goal of winning the game.`,
    takeaway: [
      "Empathy, communication, and curiosity are key traits",
      "Product leaders must be flexible, data-informed, and customer-focused"
    ]
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

const examples = [
  "I want to build an app that helps students manage their study time effectively.",
  "I believe busy parents need a meal planning solution that’s quick and collaborative.",
  "I’m passionate about creating a tool for artists to showcase and sell their digital work." 
];

export default function Week1Module() {
  const [showQuiz, setShowQuiz] = useState(false);
  return (
    <div style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '1rem' }}>
        Week 1: Introduction to Product Thinking & Lifecycle
      </h1>
      {topics.map((topic, index) => (
        <div key={index} style={{ marginBottom: '1.5rem' }}>
          <h2 style={{ fontSize: '1.25rem', fontWeight: '600' }}>{topic.title}</h2>
          <p style={{ marginTop: '0.5rem', whiteSpace: 'pre-line' }}>{topic.content}</p>
          <ul style={{ paddingLeft: '1.25rem', marginTop: '0.5rem' }}>
            {topic.takeaway.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>
        </div>
      ))}

      <div style={{ marginTop: '2rem' }}>
        <h2 style={{ fontSize: '1.25rem', fontWeight: '600' }}>Activity: Personal Product Vision</h2>
        <p style={{ marginTop: '0.5rem' }}>
          Think of a problem you've experienced or observed. How would you describe your vision for a product that solves it?
        </p>
        <p style={{ marginTop: '0.5rem', fontWeight: '600' }}>Example Visions:</p>
        <ul style={{ paddingLeft: '1.25rem' }}>
          {examples.map((ex, i) => (
            <li key={i}>{ex}</li>
          ))}
        </ul>
      </div>

      <div style={{ marginTop: '2rem' }}>
        <button style={{ backgroundColor: '#2563eb', color: 'white', padding: '0.5rem 1rem', borderRadius: '5px' }} onClick={() => setShowQuiz(!showQuiz)}>
          {showQuiz ? "Hide Quiz" : "Take Quiz"}
        </button>

        {showQuiz && (
          <div style={{ marginTop: '1rem' }}>
            {quizQuestions.map((q, index) => (
              <div key={index} style={{ padding: '1rem', border: '1px solid #ddd', marginBottom: '1rem', backgroundColor: '#f9f9f9' }}>
                <p style={{ fontWeight: '600' }}>{q.question}</p>
                {q.type === "multiple" && (
                  <ul>
                    {q.options.map((opt, i) => (
                      <li key={i}>{opt}</li>
                    ))}
                  </ul>
                )}
                {q.type === "fill" && <p style={{ fontStyle: 'italic' }}>(Fill in the blank)</p>}
                {q.type === "word" && <p style={{ fontStyle: 'italic' }}>(Short answer)</p>}
                {q.type === "match" && (
                  <ul>
                    {Object.entries(q.pairs).map(([key, val], i) => (
                      <li key={i}>{`${key} → ${val}`}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
