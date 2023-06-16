import './Turn.css';

type TurnProps = {
  guess: string,
  referenceWord: string
}
const Turn: React.FC<TurnProps> = ({guess, referenceWord, }) => {
  const guessList = guess.split("");
  const referenceWordList = referenceWord.split("");
  // if Item is in the same position => Green
  // If Item is in list but incorrect position => Yellow
  // If Item is not in list => Red
  // [["A", "correct"], ["N", "incorrect"], ["G", "incorrect"], ["L", "incorrect"], ["E", "misplaced"]]
  const results = guessList.map((guessLetter, index) => {
    if(guessLetter === referenceWordList[index]){
      return [guessLetter, 'correct']
    } else if(referenceWordList.includes(guessLetter)){
      return [guessLetter, 'misplaced']
    } else {
      return [guessLetter, 'incorrect']
    }
  })


  return (
    <>
      { results.map((result, index) => (<span key={index} className={result[1]} data-testid={`${guess}-${index}`}>{result[0]}</span>)) }
    </>
  );
}

export default Turn;