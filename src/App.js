import { useState } from "react";

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

// //////////////////////////////////////////////////////////////////////////
// // Handling Events the React Way
// //////////////////////////////////////////////////////////////////////////
// // Handling events in React
// // is actually pretty straightforward
// // and so let's now learn how it's done.
// // So, as you can imagine,
// // we are not going to use the addEventListener here
// // because that is the imperative way of building UIs.
// // But here in React we use a more declarative approach.

// // So we do not manually select DOM elements,
// // and so therefore, we do also not use addEventListener.
// // Instead we use something similar
// // to the HTML inline event listener.
// // So instead in React we do something very similar
// // to the HTML inline event listener.
// // So basically we will directly listen
// // for the event right on the element where they will happen.

// export default function App() {
//   const step = 1;

//   //   And, so usually we create those event handler functions
//   // right here in the component.
//   function handlePrevious() {
//     alert("Previous");
//   }

//   function handleNext() {
//     alert("Next");
//   }

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
//         {/* So basically we will directly listen
//           for the event right on the element where they will happen.
//           So right here on the button, for example, we can use the
//           onClick prop, and then we simply specify a function here.
//           So, the "Click" is the event name
//           and then we always prefix it with the "on".
//           And then we need to write it in camel case.
//           While in inline HTML
//           we would write it like this.
//           So like this, and then specifying a string.
//           So no camel case,
//           but this is not HTML it is JSX
//           and so it's slightly different
//           just as we learned before in the lecture
//           about the rules on JSX.
//           So, again, we will pass in here now a function
//           and that function will then be executed
//           whenever there is a click happening on this DOM element. */}

//         {/* So this is how we handle events The React way.
//           no addEventListeners,
//           but instead we specify an event listener function
//           directly on the element using, in this case,
//           the onClick prop.
//           But it could be any other event as well,
//           So we can specify another event handler.
//           So let's use the onMouseEnter. */}

//         {/*

//           So again, very, very important, do not call a function here
//           but really specify a function value.

//           We want to basically define a callback function
//           which will be called at a later time.
//           And that later time is in this case
//           when the mouse enters this element. */}
//         <button
//           style={{ backgroundColor: "#7950f2", color: "#fff" }}
//           // we do not directly define the event handler function
//           // right here in the onClick prop,
//           // but instead we create a separate function
//           // and then pass that function in here.
//           //////////
//           // onClick={ () => alert("Previous")}
//           // onMouseEnter={() => alert("Mouse enter")}

//           // And once again, really, really important to notice
//           // that here, we are just passing in the function value.
//           // So we are not calling it,
//           // because if we were calling it,
//           // then again, we would immediately see that "Previous".
//           ////////
//           // onClick={handlePrevious()}

//           // And once again, really, really important to notice
//           // that here, we are just passing in the function value.
//           // So we are not calling it,
//           onClick={handlePrevious}
//         >
//           Previous
//         </button>
//         <button
//           style={{ backgroundColor: "#7950f2", color: "#fff" }}
//           // onClick={() => alert("Next")}
//           onClick={handleNext}
//         >
//           Next
//         </button>
//       </div>
//     </div>
//   );
// }

////////////////////////////////////////////////////////////////////////
// What is State in React?
////////////////////////////////////////////////////////////////////////

// see pdf lecture and video

// So we learned how to use event handlers,
// but, now, we want them
// to actually do something useful, right?
// So we want to make the component interactive.
// And for that,
// as I have mentioned already, we need state.

////////////////////////////////////////////////////////////////////
// Creating a State Variable With useState
////////////////////////////////////////////////////////////////////

// let's try to implement it in our small project.
// And just as a quick reminder,
// what we want to happen
// is that when we click this next and this previous button
// we basically want the step to change.
// So the step here is currently set to one,
// but we want this step variable basically to be dynamic.
// And so for that,
// we now need to add a new piece of state to our component.

export default function App() {
  // So in order to use state in practice in a component,
  // we do it in three steps.

  // First, we add a new state variable,

  // Second, we use it in a code and usually in JSX.

  // And third, we then update the piece of state
  // in some event handler.

  //   the use state function is a function,
  // and so it takes an argument,
  // and the argument that we need to specify here
  // is the default value of this state variable..

  // Now this use state function here
  // will return an array.
  ///////
  // const arr = useState(1);
  // console.log(arr);
  //   And so you see it has two values here.
  // So this first value, so this number one,
  // is the default value that we want for our state.
  // So this one here.
  // And then the second one is a function
  // that we can use to update our state variable.
  // So what we usually do
  // is to then immediately destructure this array right here.
  // So first we have step, which again is this first right here.
  // And so this will be our state variable itself.
  // And then second, again, we have the function.
  // And so this one we usually call set
  // and then the name of the state variable.
  // So set step in this case.

  const [step, setStep] = useState(1);
  //   Now just a few more things
  // about the creation of the state variable here.
  // So first of all, this use state function here
  // is what we call a hook in React.

  // And we can identify hooks
  // because they start with this use keyword here.
  // So all the React functions that start with use like this,
  // for example, use effect or use reducer,
  // and of course, this use state, are React hooks.

  // And we will learn in detail
  // what a React hook is a bit later.

  // But for now, what you need to know
  // is that we can only call hooks
  // like use state, on the top level of the function.
  // So of this App component function right here.
  // So only here is it allowed to call use state
  // not inside an if statement,
  // or inside another function, or inside a loop.

  //  the other important thing about state
  // is that we should really only update state
  // using this setter function right here.
  // So not manually.

  function handlePrevious() {
    if (step > 1) setStep(step - 1);
  }

  function handleNext() {
    if (step < 3) setStep(step + 1);
  }

  return (
    <div className="steps">
      <div className="numbers">
        {/* <div className={`${step >= 1 ? "active" : ""}`}>1</div>
        <div className={`${step >= 2 ? "active" : ""}`}>2</div>
        <div className={`${step >= 3 ? "active" : ""}`}>3</div> */}

        {/* So there is no need for a template literal here
        because here we are not really creating a new string.
        We are just basically outputting a new string
        based here on this turnery operator.
        we now have this nice dynamic component
        all without the imperative dom manipulations
        that we need in vanilla JavaScript. */}
        <div className={step >= 1 ? "active" : ""}>1</div>
        <div className={step >= 2 ? "active" : ""}>2</div>
        <div className={step >= 3 ? "active" : ""}>3</div>
      </div>

      <p className="message">
        Step {step}: {messages[step - 1]}
      </p>

      <div className="buttons">
        <button
          style={{ backgroundColor: "#7950f2", color: "#fff" }}
          onClick={handlePrevious}
        >
          Previous
        </button>
        <button
          style={{ backgroundColor: "#7950f2", color: "#fff" }}
          onClick={handleNext}
        >
          Next
        </button>
      </div>
    </div>
  );
}
