const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

////////////////////////////////////////////////////////////
// Let's Build a Steps Component
////////////////////////////////////////////////////////////

// export default function App() {
//   const step = 1;

//   return (
//     <div className="steps">
//       <div className="numbers">
//         <div className={`${step >= 1 ? "active" : ""}`}>1</div>
//         <div className={`${step >= 2 ? "active" : ""}`}>2</div>
//         <div className={`${step >= 3 ? "active" : ""}`}>3</div>
//       </div>

//       <p className="message">
//         Step {step}: {messages[step - 1]}
//       </p>

//       <div className="buttons">
//         <button style={{ backgroundColor: "#7950f2", color: "#fff" }}>
//           Previous
//         </button>
//         <button style={{ backgroundColor: "#7950f2", color: "#fff" }}>
//           Next
//         </button>
//       </div>
//     </div>
//   );
// }

//////////////////////////////////////////////////////////////////////////
// Handling Events the React Way
//////////////////////////////////////////////////////////////////////////
// Handling events in React
// is actually pretty straightforward
// and so let's now learn how it's done.
// So, as you can imagine,
// we are not going to use the addEventListener here
// because that is the imperative way of building UIs.
// But here in React we use a more declarative approach.

// So we do not manually select DOM elements,
// and so therefore, we do also not use addEventListener.
// Instead we use something similar
// to the HTML inline event listener.
// So instead in React we do something very similar
// to the HTML inline event listener.
// So basically we will directly listen
// for the event right on the element where they will happen.

export default function App() {
  const step = 1;

  return (
    <div className="steps">
      <div className="numbers">
        <div className={`${step >= 1 ? "active" : ""}`}>1</div>
        <div className={`${step >= 2 ? "active" : ""}`}>2</div>
        <div className={`${step >= 3 ? "active" : ""}`}>3</div>
      </div>

      <p className="message">
        Step {step}: {messages[step - 1]}
      </p>

      <div className="buttons">
        <button style={{ backgroundColor: "#7950f2", color: "#fff" }}>
          Previous
        </button>
        <button style={{ backgroundColor: "#7950f2", color: "#fff" }}>
          Next
        </button>
      </div>
    </div>
  );
}
