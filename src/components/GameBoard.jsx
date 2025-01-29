const initialBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard({ onSelectSquare, turns }) {
  let gameBoard = initialBoard; // a computed value from gameTurns state
  for (const turn of turns) {
    const { square, player } = turn;
    const { row, col } = square;

    gameBoard[row][col] = player;
  }

  // If your state is object or array we should update it in immutable way "By creating a copy"
  //   const [gameBoard, setGameBoard] = useState(initialBoard);
  //   function handleCellSelection(rowIndex, colIndex) {
  //     setGameBoard((prevGameBoard) => {
  //       // prevGameBoard[rowIndex][colIndex] = 'X'; // Not recommended to update directly
  //       const updatedBoard = [...prevGameBoard.map(innerArray => [...innerArray])]; // Pasting all elements from old array
  //       updatedBoard[rowIndex][colIndex] = activePlayerSymbol;
  //       return updatedBoard;
  //     });
  //     onSelectSquare();
  //   }

  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button
                  onClick={() => onSelectSquare(rowIndex, colIndex)}
                  disabled={playerSymbol !== null}
                >
                  {playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
