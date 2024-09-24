"use client";
import React from "react";

function MainComponent() {
  const wordsData = [
    {
      word: "Claim",
      definition: "To assert or maintain a position.",
      related_terms: ["assert", "declare"],
      example_sentence:
        "I claim that our project will set a new standard in the industry.",
    },
    {
      word: "Project",
      definition: "A planned undertaking.",
      related_terms: ["initiative", "scheme"],
      example_sentence: "We need to prioritize our tasks for the project.",
    },
    {
      word: "Expand",
      definition: "To increase in size or scope.",
      related_terms: ["enlarge", "broaden"],
      example_sentence: "We should expand our skill sets to justify our roles.",
    },
    {
      word: "Address",
      definition: "To deal with or discuss a matter.",
      related_terms: ["tackle", "approach"],
      example_sentence: "We need to address the client’s concerns.",
    },
    {
      word: "Detect",
      definition: "To discover or identify something.",
      related_terms: ["identify", "spot"],
      example_sentence: "This software can detect anomalies in the data.",
    },
    {
      word: "Evolve",
      definition: "To develop gradually.",
      related_terms: ["develop", "progress"],
      example_sentence: "As the market evolves, we must innovate.",
    },
    {
      word: "Guarantee",
      definition: "To provide a formal assurance.",
      related_terms: ["promise", "ensure"],
      example_sentence:
        "I can guarantee that our new strategy will improve sales.",
    },
  ];

  const [words, setWords] = React.useState(wordsData);
  const [currentWordIndex, setCurrentWordIndex] = React.useState(0);
  const [showDefinition, setShowDefinition] = React.useState(false);
  const [searchQuery, setSearchQuery] = React.useState("");
  const [quizScore, setQuizScore] = React.useState(0);

  const filteredWords = words.filter((word) =>
    word.word.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const currentWord = words[currentWordIndex];

  const handleNextWord = () => {
    setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    setShowDefinition(false);
  };

  const handlePreviousWord = () => {
    setCurrentWordIndex(
      (prevIndex) => (prevIndex - 1 + words.length) % words.length
    );
    setShowDefinition(false);
  };

  const handleFlipCard = () => {
    setShowDefinition(!showDefinition);
  };

  const handleQuizAnswer = (isCorrect) => {
    if (isCorrect) {
      setQuizScore((prevScore) => prevScore + 1);
    }
    handleNextWord();
  };

  return (
    <div className="min-h-screen bg-gray-100 font-sans">
      <nav className="bg-blue-600 text-white p-4">
        <h1 className="text-2xl font-bold">IT Business Vocabulary</h1>
      </nav>

      <div className="container mx-auto p-4">
        <div className="mb-4">
          <input
            type="text"
            placeholder="Search words..."
            className="w-full p-2 border rounded"
            name="search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded shadow">
            <h2 className="text-xl font-bold mb-2">Word List</h2>
            <ul>
              {filteredWords.map((word) => (
                <li key={word.word} className="mb-2">
                  <strong>{word.word}</strong>: {word.definition}
                  <br />
                  <span className="text-sm text-gray-600">
                    Related terms: {word.related_terms.join(", ")}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white p-4 rounded shadow">
            <h2 className="text-xl font-bold mb-2">Word Details</h2>
            {currentWord && (
              <div>
                <h3 className="text-lg font-semibold">{currentWord.word}</h3>
                <p className="mb-2">{currentWord.definition}</p>
                <p className="mb-2">
                  <strong>Related terms:</strong>{" "}
                  {currentWord.related_terms.join(", ")}
                </p>
                <p
                  className="mb-4"
                  dangerouslySetInnerHTML={{
                    __html: currentWord.example_sentence,
                  }}
                />
                <div className="flex justify-between">
                  <button
                    onClick={handlePreviousWord}
                    className="bg-blue-500 text-white px-4 py-2 rounded"
                  >
                    Previous Word
                  </button>
                  <button
                    onClick={handleNextWord}
                    className="bg-blue-500 text-white px-4 py-2 rounded"
                  >
                    Next Word
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="mt-8 bg-white p-4 rounded shadow">
          <h2 className="text-xl font-bold mb-2">Flashcard Quiz</h2>
          {currentWord && (
            <div className="text-center">
              <div
                className="bg-yellow-100 p-8 rounded cursor-pointer"
                onClick={handleFlipCard}
              >
                {showDefinition ? (
                  <div>
                    <p className="mb-2">{currentWord.definition}</p>
                    <p
                      className="text-sm text-gray-600"
                      dangerouslySetInnerHTML={{
                        __html: currentWord.example_sentence,
                      }}
                    />
                  </div>
                ) : (
                  <p className="text-2xl font-bold">{currentWord.word}</p>
                )}
              </div>
              <div className="mt-4">
                <button
                  onClick={() => handleQuizAnswer(true)}
                  className="bg-green-500 text-white px-4 py-2 rounded mr-2"
                >
                  I knew it
                </button>
                <button
                  onClick={() => handleQuizAnswer(false)}
                  className="bg-red-500 text-white px-4 py-2 rounded"
                >
                  I didn't know
                </button>
              </div>
              <p className="mt-4">Score: {quizScore}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default MainComponent;