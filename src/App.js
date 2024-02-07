// /////////////////////////////////////////////////////
// // The "children" Prop: Making a Reusable Button
// /////////////////////////////////////////////////////

// //see lecture and video

// // So, moving on now, it's time to learn about
// // yet another fundamental concept that we use
// // all the time in React development.
// // And that is, "The Children Prop."

// // what I want to do in this lecture
// // and the next one as I introduce you to the children prop,
// // is to use the steps component that we built before.

// import { useState } from "react";

// const messages = [
//   "Learn React ⚛️",
//   "Apply for jobs 💼",
//   "Invest your new income 🤑",
// ];

// export default function App() {
//   return (
//     <div>
//       <Steps />
//       {/* <Steps /> */}
//     </div>
//   );
// }

// function Steps() {
//   let [step, setStep] = useState(1);
//   const [isOpen, setIsOpen] = useState(true);

//   function handlePrevious() {
//     if (step > 1) setStep((s) => s - 1);
//   }

//   function handleNext() {
//     if (step < 3) {
//       setStep((s) => s + 1);
//     }
//   }

//   return (
//     <div>
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

//           {/* these two buttons here,
//           again, I now want to create a reusable button
//           that we use instead of these two. */}

//           <div className="buttons">
//             {/* <button
//               style={{ backgroundColor: "#7950f2", color: "#fff" }}
//               onClick={handlePrevious}
//             >
//               Previous
//             </button> */}
//             {/* <button
//               style={{ backgroundColor: "#7950f2", color: "#fff" }}
//               onClick={handleNext}
//             >
//               Next
//             </button> */}
//             {/*
//             <Button
//               bgColor="#7950f2"
//               textColor="#fff"
//               onClick={handlePrevious}
//               text="Previous"
//               emoji="👈🏼"
//             />
//             <Button
//               bgColor="#7950f2"
//               textColor="#fff"
//               onClick={handleNext}
//               text="Next"
//               emoji="👉🏼"
//             /> */}

//             <Button bgColor="#7950f2" textColor="#fff" onClick={handlePrevious}>
//               <span>👈🏼</span> Previous
//             </Button>
//             <Button bgColor="#7950f2" textColor="#fff" onClick={handleNext}>
//               Next <span>👉🏼</span>
//             </Button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// // function Button({ textColor, bgColor, onClick, text, emoji }) {

// //   return (
// //     <button
// //       style={{ backgroundColor: bgColor, color: textColor }}
// //       onClick={onClick}
// //     >
// //       <span>{emoji}</span>
// //       {text}

// //     </button>
// //   );
// // }

// // But now let's say that I wanted this emoji here to be
// // on this left side, but the other emoji on the right side,
// // so that it would say next
// // and then pointing right to the right side.
// // So with this we kind of have a problem
// // because we already have so many props.
// // And so do you think that we should add yet another prop
// // basically for this direction?
// // Well, maybe not.
// // Maybe it's getting a little bit too crazy here
// // with all these props.
// // And we could keep adding more and more
// // to customize this button even more.
// // But I think at this point we should not add, for example,
// // this one here, like for the direction,
// // or for the side of the emoji,
// // and instead make use of the children prop that I mentioned
// // at the beginning of the video.
// // So instead of passing in this side here, this emoji,
// // and the text, which are basically the content
// // here of this button element,
// // what if we could simply pass the content
// // right into the button as well?
// // Or in other words, what if we could pass simply some JSX
// // into the component and then the component could use that JSX
// // and simply display it?
// // Well, we can actually do that in React.
// function Button({ textColor, bgColor, onClick, children }) {
//   //   So, the children prop is a prop that each React component
//   // automatically receives.
//   // And the value of the children prop is exactly
//   // what is between the opening
//   // and the closing tag of the component.
//   return (
//     <button
//       style={{ backgroundColor: bgColor, color: textColor }}
//       onClick={onClick}
//     >
//       {children}
//     </button>
//   );
// }

// // And now just to finish,
// // let's quickly recap what we just did here.
// // So, by using the children prop in the button component,
// // we basically left an empty hole
// // right in the component that we could then fill
// // with any JSX markup that the component receives as children.

// // But then the question is, how do we pass in these children?
// // Well, when we include the button component in some JSX,
// // instead of immediately closing the element,
// // we can write some more JSX into that element.
// // So just like we can write any HTML markup
// // inside other HTML elements, right?
// // So just like an HTML,
// // we can write anything that we want between the opening
// // and the closing tag of the component that we are using.

// // So, in this example, this piece of JSX creates the elements
// // that are then the children of the button component,
// // and they will then be accessible inside that button
// // as props.children.
// // So that's why we say it is the children prop.

// // So, basically, by defining child elements like this,
// // we are passing them into the button
// // just like we can pass in any other prop.
// // The difference is in the way
// // in which we specify other props.
// // So, the more regular props, and this one.

// // So by passing in content
// // between the opening and the closing tag of an element
// // we basically fill the hole that we left
// // in the component by using props.children
// // in the JSX of that button, so of that button component.

// // So, if we think about this,
// // the children prop is really an ideal way
// // of making reusable and configurable components.
// // Especially when it comes to the content of the component.

// // So for example, let's say that we wanted to create
// // a second, similar button,
// // but with some other emojis and text.

// // Well, now that we know about the children prop,
// // that is really easy.
// // All we have to do is to pass in some different JSX
// // and then the button gets completely different content.

// // And this technique is really, really useful
// // for building generic components that do not know
// // about their content before actually being used.
// // Like, for example, a model window, a generic slider,
// // or simply a generic button like the one that we just built.

// // So, again, this button component had absolutely no idea
// // about the content that it was receiving,
// // and therefore about the content that it was displaying.
// // And so this is really amazing
// // to create generic and reusable components.

// // So using the children prop like this
// // is really an extremely powerful technique
// // that you will need to master as you learn React.

// // But we will use this over and over again.
// // And so there will be plenty of time to practice,
// // and actually starting right in the next video.

//////////////////////////////////////////////////////////////////
// More Reusability With the "children" Prop
//////////////////////////////////////////////////////////////////

// Let's now build another reusable component
// by leveraging the children prop once again.

import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  return (
    <div>
      <Steps />
      {/* <Steps /> */}
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

          {/* And this time, let's say that we wanted a component to display a
          message. And so that message will always be this paragraph element. */}
          <p className="message">
            Step {step}: {messages[step - 1]}
          </p>

          <div className="buttons">
            <Button bgColor="#7950f2" textColor="#fff" onClick={handlePrevious}>
              <span>👈🏼</span> Previous
            </Button>
            <Button bgColor="#7950f2" textColor="#fff" onClick={handleNext}>
              Next <span>👉🏼</span>
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}

function Button({ textColor, bgColor, onClick, children }) {
  return (
    <button
      style={{ backgroundColor: bgColor, color: textColor }}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
