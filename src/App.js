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

// ////////////////////////////////////////////////////////////////////////
// // What is State in React?
// ////////////////////////////////////////////////////////////////////////

// // see pdf lecture and video

// // So we learned how to use event handlers,
// // but, now, we want them
// // to actually do something useful, right?
// // So we want to make the component interactive.
// // And for that,
// // as I have mentioned already, we need state.

// ////////////////////////////////////////////////////////////////////
// // Creating a State Variable With useState
// ////////////////////////////////////////////////////////////////////

// // let's try to implement it in our small project.
// // And just as a quick reminder,
// // what we want to happen
// // is that when we click this next and this previous button
// // we basically want the step to change.
// // So the step here is currently set to one,
// // but we want this step variable basically to be dynamic.
// // And so for that,
// // we now need to add a new piece of state to our component.

// export default function App() {
//   // So in order to use state in practice in a component,
//   // we do it in three steps.

//   // First, we add a new state variable,

//   // Second, we use it in a code and usually in JSX.

//   // And third, we then update the piece of state
//   // in some event handler.

//   //   the use state function is a function,
//   // and so it takes an argument,
//   // and the argument that we need to specify here
//   // is the default value of this state variable..

//   // Now this use state function here
//   // will return an array.
//   ///////
//   // const arr = useState(1);
//   // console.log(arr);
//   //   And so you see it has two values here.
//   // So this first value, so this number one,
//   // is the default value that we want for our state.
//   // So this one here.
//   // And then the second one is a function
//   // that we can use to update our state variable.
//   // So what we usually do
//   // is to then immediately destructure this array right here.
//   // So first we have step, which again is this first right here.
//   // And so this will be our state variable itself.
//   // And then second, again, we have the function.
//   // And so this one we usually call set
//   // and then the name of the state variable.
//   // So set step in this case.

//   const [step, setStep] = useState(1);
//   //   Now just a few more things
//   // about the creation of the state variable here.
//   // So first of all, this use state function here
//   // is what we call a hook in React.

//   // And we can identify hooks
//   // because they start with this use keyword here.
//   // So all the React functions that start with use like this,
//   // for example, use effect or use reducer,
//   // and of course, this use state, are React hooks.

//   // And we will learn in detail
//   // what a React hook is a bit later.

//   // But for now, what you need to know
//   // is that we can only call hooks
//   // like use state, on the top level of the function.
//   // So of this App component function right here.
//   // So only here is it allowed to call use state
//   // not inside an if statement,
//   // or inside another function, or inside a loop.

//   //  the other important thing about state
//   // is that we should really only update state
//   // using this setter function right here.
//   // So not manually.

//   function handlePrevious() {
//     if (step > 1) setStep(step - 1);
//   }

//   function handleNext() {
//     if (step < 3) setStep(step + 1);
//   }

//   return (
//     <div className="steps">
//       <div className="numbers">
//         {/* <div className={`${step >= 1 ? "active" : ""}`}>1</div>
//         <div className={`${step >= 2 ? "active" : ""}`}>2</div>
//         <div className={`${step >= 3 ? "active" : ""}`}>3</div> */}

//         {/* So there is no need for a template literal here
//         because here we are not really creating a new string.
//         We are just basically outputting a new string
//         based here on this turnery operator.
//         we now have this nice dynamic component
//         all without the imperative dom manipulations
//         that we need in vanilla JavaScript. */}
//         <div className={step >= 1 ? "active" : ""}>1</div>
//         <div className={step >= 2 ? "active" : ""}>2</div>
//         <div className={step >= 3 ? "active" : ""}>3</div>
//       </div>

//       <p className="message">
//         Step {step}: {messages[step - 1]}
//       </p>

//       <div className="buttons">
//         <button
//           style={{ backgroundColor: "#7950f2", color: "#fff" }}
//           onClick={handlePrevious}
//         >
//           Previous
//         </button>
//         <button
//           style={{ backgroundColor: "#7950f2", color: "#fff" }}
//           onClick={handleNext}
//         >
//           Next
//         </button>
//       </div>
//     </div>
//   );
// }

// //////////////////////////////////////////////////////////////////
// // Don't Set State Manually!
// //////////////////////////////////////////////////////////////////
// // By the end of the last lecture,
// // I said that we should only update state using
// // the setter function, but don't just trust me on that.
// // So, instead, let's actually explore this and break React.
// // So, just to see what happens when we try
// // to update state manually.

// export default function App() {
//   //   So, let's change this to a let
//   // and so then we can actually break this.
//   // So, let's say the tier in handle next,
//   // instead of updating the state in the correct way,
//   let [step, setStep] = useState(1);

//   ////////////
//   // BAD PRACTICE
//   // let [test] = useState({ name: "Elmar" });

//   let [test, setTest] = useState({ name: "Elmar" });

//   function handlePrevious() {
//     if (step > 1) setStep(step - 1);
//   }

//   function handleNext() {
//     // if (step < 3) setStep(step + 1);

//     //     And so right now, this is a let variable,
//     // so a variable that we can update.
//     // And so again, this would be a perfectly normal way
//     // of updating variables in JavaScript.

//     // But let's see what now happens when we click this button.
//     // Well, simply nothing happens.

//     // So, we don't get any error from React,
//     // but simply nothing happens.
//     // And so, the reason for that is that React has no way
//     // of knowing that this is actually trying to update the state.
//     // So, React has no magic way of knowing
//     // that this here is the state variable
//     // and that this operation is basically updating it.
//     // So again, React doesn't know about that
//     // and that's why React provided us
//     // with this setter function here, which is a functional way
//     // of updating the state value, but without mutating it.

//     // Because here we are directly mutating now
//     // this step variable, right?
//     // But React is all about immutability.
//     // And so, therefore, we can only update the state using
//     // the tools that React gives us.
//     // So, in this case, this set step function.
//     ////////
//     // step = step + 1;

//     /////////////////
//     if (step < 3) setStep(step + 1);

//     ////////////
//     // BAD PRACTICE
//     // test.name = "Fred";
//     //////////
//     //     However, mutating objects like this is a really,
//     // really bad practice.
//     // So, React really doesn't want you to do this
//     // and that's because sometimes, in more complex situations,
//     // this actually won't work.
//     // And in general, it's really just a bad practice
//     // of mutating objects like this,
//     // especially in a framework like React,
//     // which is all about immutability
//     // and functional state updates.
//     // So, never do this.
//     // So, if you really wanted to update this object here,
//     // we would again create a setter function here.
//     // So, not creating, but basically taking this setter function
//     // out of the result of use state.
//     // And then here we would call that setter function
//     // and then pass in the complete new object.
//     // So, the name should now be Fred.
//     setTest({ name: "Fred" });

//     // So, always treat state as immutable in React.
//     // So, as something that you cannot change directly,
//     // but that you can only change using the tools
//     // that React gives us.
//     // So, using the state setter function.
//   }

//   return (
//     <div className="steps">
//       <div className="numbers">
//         <div className={step >= 1 ? "active" : ""}>1</div>
//         <div className={step >= 2 ? "active" : ""}>2</div>
//         <div className={step >= 3 ? "active" : ""}>3</div>
//       </div>

//       <p className="message">
//         Step {step}: {messages[step - 1]} {test.name}
//       </p>

//       <div className="buttons">
//         <button
//           style={{ backgroundColor: "#7950f2", color: "#fff" }}
//           onClick={handlePrevious}
//         >
//           Previous
//         </button>
//         <button
//           style={{ backgroundColor: "#7950f2", color: "#fff" }}
//           onClick={handleNext}
//         >
//           Next
//         </button>
//       </div>
//     </div>
//   );
// }

///////////////////////////////////////////////////////////////
// The Mechanics of State
///////////////////////////////////////////////////////////////

//  see pdf lecture and video

// Okay, so we have just seen the power of state
// by using the useState function,
// but now let's get a better understanding
// of how exactly state works in React.
// And let's start from a fundamental React principle
// that we have already discussed earlier.

///////////////////////////////////////////////////////////////
// Adding Another Piece of State
///////////////////////////////////////////////////////////////
// o practice state a little bit more,
// let's now implement the open and close functionality
// for our component.

// So looking at the demo here,
// what we want to implement now is this functionality
// that when we click this button here,
// then this part of the component disappears,
// and then when we click it again, then it is back.

export default function App() {
  let [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true); //initial value

  function handlePrevious() {
    if (step > 1) setStep(step - 1);
  }

  function handleNext() {
    if (step < 3) setStep(step + 1);
  }

  return (
    //     we first needed to create
    // this div element here outside,
    // basically to start our JSX.
    // And so then inside that JSX
    // is where we can enter the JavaScript mode.

    //     And we need this JavaScript mode here
    // because now we will use our isOpen.
    // And then as for the conditional rendering,

    //  /* /////// -it will return one element   */
    //  /* <div> */

    <>
      {/* /* /////// -it will return one element   */}
      {/* /* <div> */}

      {/* So instead of creating a handle function out here like these two, I will
      now define the function directly here. So just to show you that sometimes
      this is also what we do especially when we have some very simple logic. So
      we need to create a new function, and now what do we want to do here?
      Well, we want to update the isOpen state. So set isOpen, and then again,
      we need to pass in the new state, so the updated state. And what should
      that be? Well, it should always be the opposite of the current state. So
      if this open is true, it should become false, and if it's false, it should
      become true. And the way we do that is by using the not operator. So
      again, that's just common and standard JavaScript. Okay, and this should
      now already work. So let's just reload here to get rid of that error. And
      yes, beautiful. */}
      <button className="close" onClick={() => setIsOpen(!isOpen)}>
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
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
      )}
      {/* /////// -it will return one element   */}
      {/* </div> */}

      {/* // is that we actually don't want to return // just one element here. //
      So we want to return basically both, // this part here and the button. //
      And so this means // that this is a great use case for a React fragment
      here. // So before I do that, let's just inspect. // And so indeed, we
      have our root // which is basically everything, // so the entire app. //
      And then in there, we have this div, which is this one. // But again,
      let's say we don't want that. // Let's say, we just want to have the
      button // and then this steps div. // So let's remove this from here and
      from here. // And so now we have remember a fragment. // So that's like
      the root of this JSX element here // which will then disappear in the DOM.
      // So if we take a look now // then we only have this button and the step
      div. // So again, whenever you are in a situation like this, // so what
      you need a piece of JSX to return two elements, // then the fragment is
      great for that. */}
    </>
  );
}

////////////////////////////////////////////////////////////
// React Developer Tools
////////////////////////////////////////////////////////////
// SEE VIDEO

// As web developers, we rely a lot
// on Developer Tools.
// So things like the Console
// or the Element Inspect panel in our browser.

// And so since tools are so helpful for developers
// the React team built dev tools specific for React
// which can be extremely helpful when working with State.
// And so since we're working with State now,

// CHROME DEV TOOLS
// https://chromewebstore.google.com/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?pli=1

// once you have these developer tools here already open,
// you'll see one tab which appears here
// or actually two which are coming from the React dev tools.

// So that's this
// Component tab
// and this Profiler tab.

// So Components, basically, as the name says, is
// for showing a component tree
// Now, right now we only have one component, so only
// the app component, and so then this
// is the only one that we can see here.
// But if we had more, then all of them
// would be showing up down here
// and we could see our entire component tree.
// So I will show you this again once we have that.
// The point here now is that we can take a look
// at all the State that is inside each component.

// And so this is very, very important to keep in
// mind that you can use the dev tools for this kind of thing.
// So that's one thing.
// And as I mentioned earlier
// it's also very useful to be able to see the
// entire component tree right here because
// when we have many, many files in a project and dozens
// or even hundreds of components in our app maybe,
// then it can become quickly out of hand
// and we can lose sight which components are where.
// And so then a component tree can become very handy.
// So instead of drawing that manually
// we just come here and there it is.
// Okay, and that's for now all I had to tell you
// about these dev tools.
// Very handy.
// Make sure that you install them and we will come
// back to them in future lectures, for sure.
