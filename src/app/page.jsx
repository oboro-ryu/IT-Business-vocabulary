"use client";
import React from "react";

function MainComponent() {
  const wordsData = [
    {
      "word": "Claim",
      "definition": "To assert or maintain a position.",
      "related_terms": ["assert", "declare"],
      "example_sentence": "I claim that our project will set a new standard in the industry."
    },
    {
      "word": "Project",
      "definition": "A planned undertaking.",
      "related_terms": ["initiative", "scheme"],
      "example_sentence": "We need to prioritize our tasks for the project."
    },
    {
      "word": "Expand",
      "definition": "To increase in size or scope.",
      "related_terms": ["enlarge", "broaden"],
      "example_sentence": "We should expand our skill sets to justify our roles."
    },
    {
      "word": "Address",
      "definition": "To deal with or discuss a matter.",
      "related_terms": ["tackle", "approach"],
      "example_sentence": "We need to address the client’s concerns."
    },
    {
      "word": "Detect",
      "definition": "To discover or identify something.",
      "related_terms": ["identify", "spot"],
      "example_sentence": "This software can detect anomalies in the data."
    },
    {
      "word": "Evolve",
      "definition": "To develop gradually.",
      "related_terms": ["develop", "progress"],
      "example_sentence": "As the market evolves, we must innovate."
    },
    {
      "word": "Guarantee",
      "definition": "To provide a formal assurance.",
      "related_terms": ["promise", "ensure"],
      "example_sentence": "I can guarantee that our new strategy will improve sales."
    },
    {
      "word": "Implement",
      "definition": "To put a plan or decision into effect.",
      "related_terms": ["execute", "apply"],
      "example_sentence": "We are ready to implement the new features next week."
    },
    {
      "word": "Weather",
      "definition": "To endure or withstand a situation.",
      "related_terms": ["survive", "endure"],
      "example_sentence": "We need to weather the storm of complaints."
    },
    {
      "word": "Justify",
      "definition": "To show or prove to be right.",
      "related_terms": ["defend", "validate"],
      "example_sentence": "Can you help me justify the need for more resources?"
    },
    {
      "word": "Convict",
      "definition": "To prove or declare guilty.",
      "related_terms": ["condemn", "prosecute"],
      "example_sentence": "We need to convict the idea that remote work lowers productivity."
    },
    {
      "word": "Prioritize",
      "definition": "To arrange or deal with in order of importance.",
      "related_terms": ["rank", "order"],
      "example_sentence": "Let’s prioritize our goals for this quarter."
    },
    {
      "word": "Rebel",
      "definition": "To resist authority or control.",
      "related_terms": ["revolt", "defy"],
      "example_sentence": "Sometimes we have to rebel against the norm."
    },
    {
      "word": "Fuel",
      "definition": "To provide a source of energy or inspiration.",
      "related_terms": ["ignite", "inspire"],
      "example_sentence": "New ideas can fuel our creativity."
    },
    {
      "word": "Sustain",
      "definition": "To maintain or keep something going.",
      "related_terms": ["maintain", "support"],
      "example_sentence": "We must find ways to sustain our team’s motivation."
    },
    {
      "word": "Portray",
      "definition": "To represent or depict something.",
      "related_terms": ["depict", "illustrate"],
      "example_sentence": "We need to portray our product effectively."
    },
    {
      "word": "Manipulate",
      "definition": "To handle or control something skillfully.",
      "related_terms": ["control", "influence"],
      "example_sentence": "We need to manipulate the data carefully."
    },
    {
      "word": "Stimulate",
      "definition": "To encourage or provoke a response.",
      "related_terms": ["inspire", "encourage"],
      "example_sentence": "Let’s plan activities to stimulate collaboration."
    },
    {
      "word": "Integrate",
      "definition": "To combine one thing with another.",
      "related_terms": ["merge", "unify"],
      "example_sentence": "We should integrate feedback from all departments."
    },
    {
      "word": "Undergo",
      "definition": "To experience or endure something.",
      "related_terms": ["experience", "go through"],
      "example_sentence": "The system will undergo updates soon."
    },
    {
      "word": "Diagnose",
      "definition": "To identify a problem or condition.",
      "related_terms": ["identify", "determine"],
      "example_sentence": "We need to diagnose the issue quickly."
    },
    {
      "word": "Enforce",
      "definition": "To compel observance of a law or rule.",
      "related_terms": ["impose", "administer"],
      "example_sentence": "It's essential to enforce the new policies."
    },
    {
      "word": "Abuse",
      "definition": "To misuse something for a bad purpose.",
      "related_terms": ["misuse", "exploit"],
      "example_sentence": "We must protect our systems from abuse."
    },
    {
      "word": "Dismiss",
      "definition": "To reject or disregard.",
      "related_terms": ["reject", "disregard"],
      "example_sentence": "Don’t dismiss the feedback from users."
    },
    {
      "word": "Migrate",
      "definition": "To move from one system or place to another.",
      "related_terms": ["transfer", "move"],
      "example_sentence": "We plan to migrate to the new platform next month."
    },
    {
      "word": "Contradict",
      "definition": "To assert the opposite of a statement.",
      "related_terms": ["dispute", "oppose"],
      "example_sentence": "These findings seem to contradict our earlier results."
    },
    {
      "word": "Plague",
      "definition": "To cause continual trouble or distress.",
      "related_terms": ["trouble", "bother"],
      "example_sentence": "Security issues plague many organizations."
    },
    {
      "word": "Complex",
      "definition": "Consisting of many different and connected parts.",
      "related_terms": ["complicated", "intricate"],
      "example_sentence": "The complex nature of this project requires more resources."
    },
    {
      "word": "Congress",
      "definition": "A formal meeting or assembly.",
      "related_terms": ["assembly", "gathering"],
      "example_sentence": "We need to stay informed about changes in Congress."
    },
    {
      "word": "Antibiotic",
      "definition": "A substance that kills or inhibits the growth of bacteria.",
      "related_terms": ["medicine", "drug"],
      "example_sentence": "This approach acts like an antibiotic for bad practices."
    },
    {
      "word": "Amendment",
      "definition": "A change or addition to a legal document.",
      "related_terms": ["revision", "alteration"],
      "example_sentence": "We should consider an amendment to the policy."
    },
    {
      "word": "Diversity",
      "definition": "The state of being diverse; variety.",
      "related_terms": ["variety", "multiformity"],
      "example_sentence": "We need to promote diversity in our hiring process."
    },
    {
      "word": "Plot",
      "definition": "A plan made in secret by a group of people.",
      "related_terms": ["scheme", "plan"],
      "example_sentence": "Let’s plot our next steps on the project timeline."
    },
    {
      "word": "Advocate",
      "definition": "To support or argue for a cause or policy.",
      "related_terms": ["supporter", "proponent"],
      "example_sentence": "I will advocate for more flexible working hours."
    },
    {
      "word": "Trait",
      "definition": "A distinguishing characteristic or quality.",
      "related_terms": ["characteristic", "feature"],
      "example_sentence": "A successful leader has the trait of good communication."
    },
    {
      "word": "Perspective",
      "definition": "A particular attitude toward or way of regarding something.",
      "related_terms": ["viewpoint", "outlook"],
      "example_sentence": "Understanding different perspectives helps us innovate."
    },
    {
      "word": "Stem",
      "definition": "To originate or derive from.",
      "related_terms": ["arise", "derive"],
      "example_sentence": "We need to stem the flow of misinformation."
    },
    {
      "word": "Component",
      "definition": "A part or element of a larger whole.",
      "related_terms": ["part", "element"],
      "example_sentence": "Each component of the system needs testing."
    },
    {
      "word": "Balance",
      "definition": "An even distribution of weight or importance.",
      "related_terms": ["equilibrium", "stability"],
      "example_sentence": "We need to balance our workload effectively."
    },
    {
      "word": "Inmate",
      "definition": "A person confined in an institution.",
      "related_terms": ["prisoner", "resident"],
      "example_sentence": "An inmate of bureaucracy can feel trapped."
    },
    {
      "word": "Extinction",
      "definition": "The state or process of a species ceasing to exist.",
      "related_terms": ["disappearance", "die-out"],
      "example_sentence": "We need to innovate to avoid extinction."
    },
    {
      "word": "Proponent",
      "definition": "A person who advocates for something.",
      "related_terms": ["supporter", "advocate"],
      "example_sentence": "I’m a proponent of agile methods."
    },
    {
      "word": "Uprising",
      "definition": "An act of resistance or rebellion.",
      "related_terms": ["rebellion", "insurrection"],
      "example_sentence": "There’s an uprising in customer complaints."
    },
    {
      "word": "Perception",
      "definition": "The way in which something is regarded or understood.",
      "related_terms": ["view", "interpretation"],
      "example_sentence": "Changing the perception of our brand is crucial."
    },
    {
      "word": "Habitat",
      "definition": "The natural home of an organism.",
      "related_terms": ["environment", "ecosystem"],
      "example_sentence": "Our work habitat needs to adapt to remote work."
    },
    {
      "word": "Bias",
      "definition": "A preference or inclination, especially one that inhibits impartial judgment.",
      "related_terms": ["prejudice", "partiality"],
      "example_sentence": "We need to check for any bias in our findings."
    },
    {
      "word": "Microbe",
      "definition": "A microscopic organism.",
      "related_terms": ["bacteria", "germ"],
      "example_sentence": "A microbe of an idea can lead to big changes."
    },
    {
      "word": "Archeologist",
      "definition": "A person who studies human history through excavation and analysis of artifacts.",
      "related_terms": ["historian", "researcher"],
      "example_sentence": "I feel like a data archeologist uncovering insights."
    },
    {
      "word": "Mutation",
      "definition": "The process of change in a certain direction.",
      "related_terms": ["change", "transformation"],
      "example_sentence": "A mutation in trends requires us to adapt."
    },
    {
      "word": "Attribute",
      "definition": "A quality or feature regarded as a characteristic.",
      "related_terms": ["quality", "characteristic"],
      "example_sentence": "We can attribute our success to teamwork."
    }
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
        {/* <div className="mb-4">
          <input
            type="text"
            placeholder="Search words..."
            className="w-full p-2 border rounded"
            name="search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div> */}
           {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
          </div> */}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          
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


        {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-4"> */}
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
          {/* </div> */}
        </div>
      </div>
    </div>
  );
}

export default MainComponent;