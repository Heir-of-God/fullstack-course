import { useState } from "react";

function Button({ onClick, text }) {
  return <button onClick={onClick}>{text}</button>;
}

function AnecdoteSection({ anecdoteTitle, anecdoteText, anecdoteVotes }) {
  const lines = anecdoteText.split("\n");
  return (
    <div>
      <h2>{anecdoteTitle}</h2>
      {lines.map((line, index) => (
        <p key={index}>{line}</p>
      ))}
      <p>Votes for this anecdote: {anecdoteVotes}</p>
    </div>
  );
}

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];
  const [selected, setSelected] = useState(0);
  const initialArray = Array(anecdotes.length).fill(0);
  const [votes, setVotes] = useState(initialArray);

  function getMergedAnecdotesWithMostVotes() {
    let res = "";
    let maxVotes = -1;

    for (let i = 0; i < anecdotes.length; i++) {
      if (votes[i] === maxVotes) {
        res += "\n" + anecdotes[i];
      } else if (votes[i] > maxVotes) {
        res = anecdotes[i];
        maxVotes = votes[i];
      }
    }

    return res;
  }

  function updateRandomAnecdote() {
    const randInd = Math.floor(Math.random() * anecdotes.length);
    setSelected(randInd);
  }

  function updateVotesCounter() {
    const newVotes = votes.slice();
    newVotes[selected] += 1;
    setVotes(newVotes);
  }

  return (
    <>
      <AnecdoteSection
        anecdoteTitle="Anecdote of the day: "
        anecdoteText={anecdotes[selected]}
        anecdoteVotes={votes[selected]}
      />
      <Button onClick={updateVotesCounter} text="Vote" />
      <Button onClick={updateRandomAnecdote} text="Next Anecdote" />
      <AnecdoteSection
        anecdoteTitle="Anecdotes with most votes: "
        anecdoteText={getMergedAnecdotesWithMostVotes()}
        anecdoteVotes={Math.max(...votes)}
      />
    </>
  );
};

export default App;
