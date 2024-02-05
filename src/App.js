import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

function Counter() {
  return <div>TEST</div>;
}

//////////////////////////////////////////////////////
// Challenge 1 instructions

// Welcome to the next coding challenge,
// which as you can imagine, is all about state.
// So what I want you to build in this challenge
// is this very simple date counter.
// So here we have the current date,
// but then when we click here on the plus icon,
// you see that the count increases to one
// and then it says one day from now,
// it is Tuesday, June 22, while before it was 21.
// So then when we keep going up,
// it basically keeps adding this number of days
// to the current date.
// We can also go back in time,
// so like six days ago, it was this date.
// So that's the most basic thing,
// but then here we can also adjust the step.
// So for example, if the step is five,
// and each time we click on the plus button,
// it increases by five.
// So no longer by one.
// So 10, 15, 20, and so on and so forth.
// And the calculation then here, of course, is still the same.
// So that's what we're going to build.
// So open up a new code send box with react dot new,
// or of course, as always,
// you can also build this challenge on your local computer.
// So for that, you can just create a new React app,
// just like we have been doing before.
// Now here, just to make sure you can see,
// I will make this a bit bigger, maybe not that big,
// and then I will actually just start writing
// a little bit of code here.
// So just to show you what I actually want,
// so I want you to create this counter function,
// which for now will just return test,
// and then all we want to do
// is to include that counter right here.
// And that's it.
// So you can leave everything else the same,
// even the styles, let's just leave them here
// and just focus on this counter functionality.
// Now this part here with the dates
// can be a little bit tricky.
// So what I want you to focus on the most
// is actually the counter functionality here.
// So if the dates are a bit too tricky,
// then just leave that until the end
// and you can just print the current count value down here.
// Or you can also just Google, for example,
// Java script at days to date.
// Okay, so I will leave this up here
// so you can see what you are supposed to build
// and then I'll meet you back here in a minute
// with my solution.
