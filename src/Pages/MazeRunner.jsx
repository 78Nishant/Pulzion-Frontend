import React, { useState } from "react";

const MazeRunner = () => {
  const maze = [
    [0, 1, 0, 0, 0],
    [0, 1, 1, 1, 0],
    [0, 0, 0, 1, 0],
    [1, 1, 0, 0, 0],
    [0, 0, 0, 1, 0],
  ];

  const playerStart = { x: 0, y: 0 };
  const homePosition = { x: 4, y: 4 };

  const [playerPosition, setPlayerPosition] = useState(playerStart);
  const [directions, setDirections] = useState("");
  const [message, setMessage] = useState("");

  const handleInputChange = (e) => {
    setDirections(e.target.value);
  };

  const movePlayer = () => {
    const moves = directions.split(",").map((dir) => dir.trim());
    let newPosition = { ...playerPosition };

    for (const move of moves) {
      switch (move.toLowerCase()) {
        case "up":
          if (newPosition.x > 0 && maze[newPosition.x - 1][newPosition.y] === 0) {
            newPosition.x -= 1;
          }
          break;
        case "down":
          if (newPosition.x < maze.length - 1 && maze[newPosition.x + 1][newPosition.y] === 0) {
            newPosition.x += 1;
          }
          break;
        case "left":
          if (newPosition.y > 0 && maze[newPosition.x][newPosition.y - 1] === 0) {
            newPosition.y -= 1;
          }
          break;
        case "right":
          if (newPosition.y < maze[0].length - 1 && maze[newPosition.x][newPosition.y + 1] === 0) {
            newPosition.y += 1;
          }
          break;
        default:
          break;
      }
    }

    setPlayerPosition(newPosition);
    checkForHome(newPosition);
    setDirections("");
  };

  const checkForHome = (position) => {
    if (position.x === homePosition.x && position.y === homePosition.y) {
      setMessage("Congratulations! You've reached home!");
    } else {
      setMessage("You are still in the maze!");
    }
  };

  return (
    <div className="max-w-lg mx-auto text-center p-4 h-screen">
      <h1 className="text-2xl font-bold mb-4">Maze Runner Game</h1>
      <div className="grid grid-cols-5 gap-0 border border-gray-600">
        {maze.map((row, rowIndex) => (
          <React.Fragment key={rowIndex}>
            {row.map((cell, colIndex) => {
              const isPlayer = playerPosition.x === rowIndex && playerPosition.y === colIndex;
              const isHome = homePosition.x === rowIndex && homePosition.y === colIndex;
              return (
                <div
                  key={colIndex}
                  className={`w-12 h-12 flex items-center justify-center border border-gray-500 ${
                    cell === 1 ? "bg-gray-400" : ""
                  } ${isPlayer ? "bg-green-300" : ""} ${isHome ? "bg-yellow-300" : ""}`}
                >
                  {isPlayer ? "😊" : isHome ? "🏠" : ""}
                </div>
              );
            })}
          </React.Fragment>
        ))}
      </div>
      <input
        type="text"
        value={directions}
        onChange={handleInputChange}
        placeholder="Enter directions (up, down, left, right)"
        className="border border-gray-400 rounded p-2 mt-4 w-full"
      />
      <button
        onClick={movePlayer}
        className="bg-blue-500 text-white rounded py-2 px-4 mt-2 hover:bg-blue-600 transition duration-200"
      >
        Move
      </button>
      <p className="mt-4 text-lg">{message}</p>
    </div>
  );
};

export default MazeRunner;