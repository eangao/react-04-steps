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

  //   And, so usually we create those event handler functions
  // right here in the component.
  function handlePrevious() {
    alert("Previous");
  }

  function handleNext() {
    alert("Next");
  }

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
        {/* So basically we will directly listen
          for the event right on the element where they will happen.
          So right here on the button, for example, we can use the
          onClick prop, and then we simply specify a function here.
          So, the "Click" is the event name
          and then we always prefix it with the "on".
          And then we need to write it in camel case.
          While in inline HTML
          we would write it like this.
          So like this, and then specifying a string.
          So no camel case,
          but this is not HTML it is JSX
          and so it's slightly different
          just as we learned before in the lecture
          about the rules on JSX.
          So, again, we will pass in here now a function
          and that function will then be executed
          whenever there is a click happening on this DOM element. */}

        {/* So this is how we handle events The React way.
          no addEventListeners,
          but instead we specify an event listener function
          directly on the element using, in this case,
          the onClick prop.
          But it could be any other event as well,
          So we can specify another event handler.
          So let's use the onMouseEnter. */}

        {/* 
      

          So again, very, very important, do not call a function here
          but really specify a function value.

          We want to basically define a callback function
          which will be called at a later time.
          And that later time is in this case
          when the mouse enters this element. */}
        <button
          style={{ backgroundColor: "#7950f2", color: "#fff" }}
          // we do not directly define the event handler function
          // right here in the onClick prop,
          // but instead we create a separate function
          // and then pass that function in here.
          //////////
          // onClick={ () => alert("Previous")}
          // onMouseEnter={() => alert("Mouse enter")}

          // And once again, really, really important to notice
          // that here, we are just passing in the function value.
          // So we are not calling it,
          // because if we were calling it,
          // then again, we would immediately see that "Previous".
          ////////
          // onClick={handlePrevious()}

          // And once again, really, really important to notice
          // that here, we are just passing in the function value.
          // So we are not calling it,
          onClick={handlePrevious}
        >
          Previous
        </button>
        <button
          style={{ backgroundColor: "#7950f2", color: "#fff" }}
          // onClick={() => alert("Next")}
          onClick={handleNext}
        >
          Next
        </button>
      </div>
    </div>
  );
}
