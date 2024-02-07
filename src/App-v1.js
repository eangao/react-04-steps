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

// ///////////////////////////////////////////////////////////////
// // Adding Another Piece of State
// ///////////////////////////////////////////////////////////////
// // o practice state a little bit more,
// // let's now implement the open and close functionality
// // for our component.

// // So looking at the demo here,
// // what we want to implement now is this functionality
// // that when we click this button here,
// // then this part of the component disappears,
// // and then when we click it again, then it is back.

// export default function App() {
//   let [step, setStep] = useState(1);
//   const [isOpen, setIsOpen] = useState(true); //initial value

//   function handlePrevious() {
//     if (step > 1) setStep(step - 1);
//   }

//   function handleNext() {
//     if (step < 3) setStep(step + 1);
//   }

//   return (
//     //     we first needed to create
//     // this div element here outside,
//     // basically to start our JSX.
//     // And so then inside that JSX
//     // is where we can enter the JavaScript mode.

//     //     And we need this JavaScript mode here
//     // because now we will use our isOpen.
//     // And then as for the conditional rendering,

//     //  /* /////// -it will return one element   */
//     //  /* <div> */

//     <>
//       {/* /* /////// -it will return one element   */}
//       {/* /* <div> */}

//       {/* So instead of creating a handle function out here like these two, I will
//       now define the function directly here. So just to show you that sometimes
//       this is also what we do especially when we have some very simple logic. So
//       we need to create a new function, and now what do we want to do here?
//       Well, we want to update the isOpen state. So set isOpen, and then again,
//       we need to pass in the new state, so the updated state. And what should
//       that be? Well, it should always be the opposite of the current state. So
//       if this open is true, it should become false, and if it's false, it should
//       become true. And the way we do that is by using the not operator. So
//       again, that's just common and standard JavaScript. Okay, and this should
//       now already work. So let's just reload here to get rid of that error. And
//       yes, beautiful. */}
//       <button className="close" onClick={() => setIsOpen(!isOpen)}>
//         &times;
//       </button>
//       {isOpen && (
//         <div className="steps">
//           <div className="numbers">
//             <div className={step >= 1 ? "active" : ""}>1</div>
//             <div className={step >= 2 ? "active" : ""}>2</div>
//             <div className={step >= 3 ? "active" : ""}>3</div>
//           </div>

//           <p className="message">
//             Step {step}: {messages[step - 1]}
//           </p>

//           <div className="buttons">
//             <button
//               style={{ backgroundColor: "#7950f2", color: "#fff" }}
//               onClick={handlePrevious}
//             >
//               Previous
//             </button>
//             <button
//               style={{ backgroundColor: "#7950f2", color: "#fff" }}
//               onClick={handleNext}
//             >
//               Next
//             </button>
//           </div>
//         </div>
//       )}
//       {/* /////// -it will return one element   */}
//       {/* </div> */}

//       {/* // is that we actually don't want to return // just one element here. //
//       So we want to return basically both, // this part here and the button. //
//       And so this means // that this is a great use case for a React fragment
//       here. // So before I do that, let's just inspect. // And so indeed, we
//       have our root // which is basically everything, // so the entire app. //
//       And then in there, we have this div, which is this one. // But again,
//       let's say we don't want that. // Let's say, we just want to have the
//       button // and then this steps div. // So let's remove this from here and
//       from here. // And so now we have remember a fragment. // So that's like
//       the root of this JSX element here // which will then disappear in the DOM.
//       // So if we take a look now // then we only have this button and the step
//       div. // So again, whenever you are in a situation like this, // so what
//       you need a piece of JSX to return two elements, // then the fragment is
//       great for that. */}
//     </>
//   );
// }

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

// ///////////////////////////////////////////////////////////////
// // Updating State Based on Current State
// ///////////////////////////////////////////////////////////////
// // It's very common that we update
// // a state variable based on the current value of that state.
// // And so, let's now learn how to best do that.
// // And in fact, we are updating state based on
// // the current state all the time here.

// export default function App() {
//   let [step, setStep] = useState(1);
//   const [isOpen, setIsOpen] = useState(true);

//   function handlePrevious() {
//     // So, the way that we have been doing it.
//     // Instead, what we should do is to pass
//     // in a callback function here.
//     // So instead of a value, we pass a function,
//     // which will receive as the argument,
//     // the current value of the state.
//     /////
//     // if (step > 1) setStep(step - 1);

//     // So, let's remove this here and let's create a function,
//     // and I will just create a simple arrow function here.
//     // And so as I was saying, this will receive, as an input,
//     // the current value of the state.
//     // Now, there are multiple conventions on how
//     // to call this argument.
//     // So, we could again call it step,
//     // but this might then be a bit confusing.
//     // We can call it the current step, for example, or just S.
//     // And so this is what I'm going to do now.
//     // So, just an abbreviation.
//     // And so then, here we can do S minus one, just like before.
//     // And so this will now work the exact same way, right?
//     // So, the view here was updated in the same way as before,
//     // but this is a little bit more correct,
//     // because if we do this here,
//     if (step > 1) setStep((s) => s - 1);
//   }

//   //   Now, the way we are doing it right now
//   // is working just fine, right?
//   // So, our app works fine, but now let's imagine that
//   // after a few months, we come back to this app
//   // and then we want to change something.
//   // So, let's say that we want this handle next function here
//   // to actually move forward twice.
//   // So, let's say that we want to set the step state twice.
//   // So, there's nothing stopping us from doing that.
//   // So, we can do this once and duplicate it.
//   // So, this is perfectly fine.
//   // We can call the same function twice.
//   // But what? What happens now?
//   // So, what do you think is going to happen
//   // when I click next now?
//   // So, in theory, it should take the step,
//   // which is currently one, at one, so two,
//   // and then here it should do the same
//   // from two to three, right?
//   // But again, watch what happens.
//   // So, it only updated the state once.
//   // Now, we will go into detail why exactly this happens.
//   // But for now, what I need you to know is
//   // that we should not update state based
//   // on the current state like this.

//   // So, the way that we have been doing it.
//   // Instead, what we should do is to pass
//   // in a callback function here.
//   // So instead of a value, we pass a function,
//   // which will receive as the argument,
//   // the current value of the state.
//   function handleNext() {
//     if (step < 3) {
//       // So, we can do this once and duplicate it.
//       // So, this is perfectly fine.
//       // We can call the same function twice.
//       // But what? What happens now?
//       // So, what do you think is going to happen
//       // when I click next now?
//       // So, in theory, it should take the step,
//       // which is currently one, at one, so two,
//       // and then here it should do the same
//       // from two to three, right?
//       // But again, watch what happens.
//       // So, it only updated the state once.
//       // Now, we will go into detail why exactly this happens.
//       // But for now, what I need you to know is
//       // that we should not update state based
//       // on the current state like this.
//       ///
//       // setStep(step + 1);
//       // setStep(step + 1);

//       // So, the way that we have been doing it.
//       // Instead, what we should do is to pass
//       // in a callback function here.
//       // So instead of a value, we pass a function,
//       // which will receive as the argument,
//       // the current value of the state.

//       //  this is a little bit more correct,
//       // because if we do this here,

//       // so again, receiving the current step as an input,
//       // which we just call S, but it could be called anything.
//       // And so then here we return that current step plus one
//       // and the same here, plus one.
//       // And so if we run this again, then it works.
//       // So then, it is updating the state twice.

//       // So, it started at one, then, therefore,
//       // this callback here received the value of one,
//       // and then one plus one was two.
//       // And then here in the next state up,
//       // that updated value is already passed here
//       // into this callback.
//       // And so then we have two plus one, which makes three.

//       // Now, here we actually do not want this, of course,
//       // so we just want to move forwards by one.
//       /////////
//       // setStep((s) => s + 1);
//       // setStep((s) => s + 1);

//       // But in order to be safe for future updates,
//       // it's a good idea to always use a callback like this
//       // when we want to update state based on the current value
//       // of that state.
//       setStep((s) => s + 1);
//     }
//   }

//   return (
//     <>
//       <button className="close" onClick={() => setIsOpen((isOpen) => !isOpen)}>
//         &times;
//       </button>
//       {isOpen && (
//         <div className="steps">
//           <div className="numbers">
//             <div className={step >= 1 ? "active" : ""}>1</div>
//             <div className={step >= 2 ? "active" : ""}>2</div>
//             <div className={step >= 3 ? "active" : ""}>3</div>
//           </div>

//           <p className="message">
//             Step {step}: {messages[step - 1]}
//           </p>

//           <div className="buttons">
//             <button
//               style={{ backgroundColor: "#7950f2", color: "#fff" }}
//               onClick={handlePrevious}
//             >
//               Previous
//             </button>
//             <button
//               style={{ backgroundColor: "#7950f2", color: "#fff" }}
//               onClick={handleNext}
//             >
//               Next
//             </button>
//           </div>
//         </div>
//       )}
//     </>
//   );
// }

// // Now, when we're not setting state based
// // on the current state, then of course we can just pass
// // in the value as normal.
// // So, just like we did here, for example.
// /////
// // setTest({name: "Elmar"})

// // So, that also happens sometimes.
// // And so in that case, we need no callback.
// // Then, we just pass in the new state value,
// // as we do here, and as we also had here previously.
// /////
// // setTest({name: "Elmar"})

// // So again, in many situations, that would work just fine.
// // So, before we only had the S minus one here
// // and nothing else and so that worked as well.
// /////
// // if (step > 1) setStep(step - 1);

// // But in order to be safe for future updates
// // or for working with coworkers, it's best to update the state
// // in a more safe way like this.
// // And so from now on, I will do this each time
// // that we update the state based on the current value
// // of the state.
// /////////
// // if (step > 1) setStep((s) => s - 1);

//////////////////////////////////////////////////////////////
// More Thoughts About State + State Guidelines
//////////////////////////////////////////////////////////////
// see pdf lecture and video

// As we finish this first dive into state,
// I want to share a few more important thoughts,
// or ideas, about state, as well as some practical guidelines.

//////////////////////////////////////////////////////////////
// A Vanilla JavaScript Implementation
//////////////////////////////////////////////////////////////
// So to finish up this part, I want to once again
// do a quick comparison of the React code that we just wrote
// with an equivalent Vanilla JavaScript implementation
// of the same app.
// And this Vanilla JavaScript implementation I actually
// gave you at the beginning of this section.
// So we placed it right in the public folder.
// So let's now open that up and open it here on the site.
// Okay, so again, the Vanilla JavaScript implementation is
// inside an HTML file, where here we have first the HTML
// and then separated the JavaScript.
// So this HTML might look familiar
// as it is quite similar of course to this JSX.
// The only thing we don't have here is the button
// to open and close the component.

//////////////
//////////////
// There's just one small thing that I want to do here
// which is going back to the previous lecture
// where I told you that each component has
// and manages its own state.
// So what I want to do now is to prove that to you in code.

export default function App() {
  return (
    <div>
      <Steps />
      <Steps />
    </div>
  );
}

function Steps() {
  let [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  function handlePrevious() {
    if (step > 1) setStep((s) => s - 1);
  }

  function handleNext() {
    if (step < 3) {
      setStep((s) => s + 1);
    }
  }

  return (
    //     and then we want to have
    // the steps two time.
    // Now just a few more changes we need to do.
    // So now since we have two components on the same page
    // let's actually
    // return a <div> instead of fragment <> ear so that the button
    // and then these steps are all in the same place.
    // And then just one quick change in the CSS please.
    // So down here in the close
    // let's just remove this line of code.
    /* position: absolute; */

    <div>
      <button className="close" onClick={() => setIsOpen((isOpen) => !isOpen)}>
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
    </div>
  );
}

// So we successfully reused our steps component.
// So this is now no longer the app.
// Again, it is steps, and we can nicely see that here
// in the React dev tools.
// So now we have a bit of a bigger component tree.
// So we have app and then it has two child components.
// So, but what I wanted to show you is that
// as we change the state in this one, for example
// the state here will stay the same.

// And so even though both of them are steps component
// the state in each of them is completely isolated.

// So of course I can also close this one,
// and this one stays open.
// And we can obviously also see that down here
// in the dev tools
// with a bit more space even.
// Yeah. So the first steps here
// the state is three, and it is visible.

// So that's this true here.
// While the second one, the state is one
// and it is not visible.
// Okay, so that was just a small and quick demonstration.
// And so now that we have used state a couple of times here
// it's time for you to practice state
// on your own in the upcoming coding challenge.
