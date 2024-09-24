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
    },
    {
      "word": "Impel",
      "definition": "To drive or force someone to do something.",
      "related_terms": ["urge", "drive"],
      "example_sentence": "The need for innovation can impel us to rethink our strategies."
    },
    {
      "word": "Lubricate",
      "definition": "To make something smooth or easier to operate.",
      "related_terms": ["smooth", "facilitate"],
      "example_sentence": "We should lubricate our communication processes to avoid misunderstandings."
    },
    {
      "word": "Nibble",
      "definition": "To take small bites; to gradually reduce or diminish.",
      "related_terms": ["bite", "chew"],
      "example_sentence": "Let’s nibble away at this project in smaller tasks."
    },
    {
      "word": "Polarize",
      "definition": "To cause division or conflict within a group.",
      "related_terms": ["divide", "separate"],
      "example_sentence": "Our recent policy changes might polarize opinions within the team."
    },
    {
      "word": "Pounce",
      "definition": "To spring or leap suddenly in order to seize or attack.",
      "related_terms": ["spring", "leap"],
      "example_sentence": "We need to pounce on new opportunities as they arise."
    },
    {
      "word": "Retaliate",
      "definition": "To respond to an attack or injury with a similar action.",
      "related_terms": ["avenge", "counter"],
      "example_sentence": "Instead of retaliating, we should focus on improving our service."
    },
    {
      "word": "Rummage",
      "definition": "To search through something in a hurried or messy way.",
      "related_terms": ["search", "scavenge"],
      "example_sentence": "We should rummage through past data to find trends."
    },
    {
      "word": "Spearhead",
      "definition": "To lead or initiate an effort or movement.",
      "related_terms": ["lead", "initiate"],
      "example_sentence": "I’d like to spearhead the new project initiative."
    },
    {
      "word": "Typify",
      "definition": "To represent or embody a particular type or characteristic.",
      "related_terms": ["represent", "exemplify"],
      "example_sentence": "This case can typify the challenges we face in this sector."
    },
    {
      "word": "Prowl",
      "definition": "To move about stealthily or secretly.",
      "related_terms": ["sneak", "skulk"],
      "example_sentence": "We need to prowl the market for new trends."
    },
    {
      "word": "Retract",
      "definition": "To withdraw or take back a statement or promise.",
      "related_terms": ["withdraw", "recant"],
      "example_sentence": "We might need to retract that statement if new information arises."
    },
    {
      "word": "Ruffle",
      "definition": "To disturb or disarrange; to upset the calm of.",
      "related_terms": ["disturb", "upset"],
      "example_sentence": "We don’t want to ruffle any feathers with our new policies."
    },
    {
      "word": "Detest",
      "definition": "To dislike intensely; to hate.",
      "related_terms": ["hate", "loathe"],
      "example_sentence": "I detest unnecessary meetings that waste our time."
    },
    {
      "word": "Feign",
      "definition": "To pretend to be affected by a feeling, state, or injury.",
      "related_terms": ["pretend", "simulate"],
      "example_sentence": "We shouldn't feign ignorance about customer feedback."
    },
    {
      "word": "Fluctuate",
      "definition": "To change or vary irregularly.",
      "related_terms": ["vary", "change"],
      "example_sentence": "Sales figures tend to fluctuate during the holiday season."
    },
    {
      "word": "Meddle",
      "definition": "To interfere in something that is not one's concern.",
      "related_terms": ["interfere", "intrude"],
      "example_sentence": "Let’s not meddle in other teams’ projects."
    },
    {
      "word": "Pamper",
      "definition": "To indulge with attention, comfort, or kindness.",
      "related_terms": ["spoil", "coddle"],
      "example_sentence": "We should pamper our clients with exceptional service."
    },
    {
      "word": "Peruse",
      "definition": "To read or examine something carefully.",
      "related_terms": ["examine", "review"],
      "example_sentence": "Please peruse the report before our meeting."
    },
    {
      "word": "Pique",
      "definition": "To stimulate interest or curiosity.",
      "related_terms": ["stimulate", "arouse"],
      "example_sentence": "This feature will pique user interest significantly."
    },
    {
      "word": "Indoctrinate",
      "definition": "To teach a doctrine or ideology to someone.",
      "related_terms": ["instruct", "teach"],
      "example_sentence": "We must indoctrinate our team with the new values."
    },
    {
      "word": "Orchestrate",
      "definition": "To arrange or direct the elements of a situation.",
      "related_terms": ["arrange", "organize"],
      "example_sentence": "We need to orchestrate a better workflow among departments."
    },
    {
      "word": "Fortify",
      "definition": "To strengthen or secure.",
      "related_terms": ["strengthen", "secure"],
      "example_sentence": "We should fortify our cybersecurity measures."
    },
    {
      "word": "Bolster",
      "definition": "To support or strengthen.",
      "related_terms": ["support", "boost"],
      "example_sentence": "We need to bolster our marketing efforts this quarter."
    },
    {
      "word": "Exhort",
      "definition": "To strongly encourage or urge someone to do something.",
      "related_terms": ["urge", "encourage"],
      "example_sentence": "I will exhort the team to meet deadlines."
    },
    {
      "word": "Coerce",
      "definition": "To persuade someone to do something by using force or threats.",
      "related_terms": ["force", "compel"],
      "example_sentence": "We should not coerce clients into decisions."
    },
    {
      "word": "Dazzle",
      "definition": "To impress deeply; to astonish.",
      "related_terms": ["impress", "astonish"],
      "example_sentence": "Let’s dazzle our clients with our new presentation."
    },
    {
      "word": "Debunk",
      "definition": "To expose the falseness or hollowness of a myth or belief.",
      "related_terms": ["disprove", "expose"],
      "example_sentence": "We need to debunk the myths about remote work."
    },
    {
      "word": "Surmise",
      "definition": "To suppose that something is true without having evidence.",
      "related_terms": ["guess", "infer"],
      "example_sentence": "I can only surmise the reasons for the drop in sales."
    },
    {
      "word": "Reiterate",
      "definition": "To say something again for emphasis or clarity.",
      "related_terms": ["repeat", "restate"],
      "example_sentence": "I want to reiterate the importance of teamwork."
    },
    {
      "word": "Enunciate",
      "definition": "To pronounce clearly and distinctly.",
      "related_terms": ["articulate", "pronounce"],
      "example_sentence": "Please enunciate your points clearly during the presentation."
    },
    {
      "word": "Defuse",
      "definition": "To make a situation less tense or dangerous.",
      "related_terms": ["calm", "alleviate"],
      "example_sentence": "We need to defuse any tension during negotiations."
    },
    {
      "word": "Berate",
      "definition": "To scold or criticize someone angrily.",
      "related_terms": ["rebuke", "scold"],
      "example_sentence": "We shouldn’t berate employees for minor mistakes."
    },
    {
      "word": "Abscond",
      "definition": "To leave hurriedly and secretly, typically to avoid detection.",
      "related_terms": ["escape", "flee"],
      "example_sentence": "We need to ensure no sensitive data is absconded."
    },
    {
      "word": "Broach",
      "definition": "To bring up a topic for discussion.",
      "related_terms": ["mention", "raise"],
      "example_sentence": "I want to broach the topic of remote work options."
    },
    {
      "word": "Bask",
      "definition": "To lie exposed to warmth and light for relaxation.",
      "related_terms": ["enjoy", "revel"],
      "example_sentence":: "We can bask in our recent success, but we must keep pushing forward."
    },
    {
      "word": "Wrath",
      "definition": "Extreme anger; rage.",
      "related_terms": ["anger", "fury"],
      "example_sentence": "We need to avoid incurring the wrath of our clients."
    },
    {
      "word": "Antiseptic",
      "definition": "A substance that prevents infection.",
      "related_terms": ["clean", "sterile"],
      "example_sentence": "This approach acts like an antiseptic for bad practices."
    },
    {
      "word": "Attrition",
      "definition": "The reduction of a workforce by employees leaving.",
      "related_terms": ["reduction", "loss"],
      "example_sentence": "Employee attrition can impact our team dynamics."
    },
    {
      "word": "Bombardment",
      "definition": "A continuous attack with bombs or artillery.",
      "related_terms": ["attack", "assault"],
      "example_sentence": "We are facing a bombardment of requests from clients."
    },
    {
      "word": "Euphoria",
      "definition": "A feeling of intense happiness and excitement.",
      "related_terms": ["joy", "elation"],
      "example_sentence": "The team is in a state of euphoria after the successful launch."
    },
    {
      "word": "Futility",
      "definition": "Pointlessness or uselessness.",
      "related_terms": ["pointlessness", "ineffectiveness"],
      "example_sentence": "We must avoid the futility of redundant tasks."
    },
    {
      "word": "Infatuation",
      "definition": "An intense but short-lived passion or admiration.",
      "related_terms": ["obsession", "passion"],
      "example_sentence": "We should not fall into infatuation with flashy features over functionality."
    },
    {
      "word": "Inhalation",
      "definition": "The act of breathing in.",
      "related_terms": ["breath", "respiration"],
      "example_sentence": "Taking a deep inhalation can help reduce stress during presentations."
    },
    {
      "word": "Labyrinth",
      "definition": "A complicated network of winding passages or paths.",
      "related_terms": ["maze", "complexity"],
      "example_sentence": "Navigating the labyrinth of regulations can be challenging."
    },
    {
      "word": "Reconnaissance",
      "definition": "Military observation of a region to locate an enemy or ascertain strategic features.",
      "related_terms": ["scouting", "surveying"],
      "example_sentence": "We need to conduct reconnaissance on competitor strategies."
    },
    {
      "word": "Remittance",
      "definition": "A sum of money sent, especially by mail, in payment for goods or services.",
      "related_terms": ["payment", "transfer"],
      "example_sentence": "Timely remittance from clients is essential for cash flow."
    },
    {
      "word": "Rendezvous",
      "definition": "A meeting at an agreed time and place.",
      "related_terms": ["meeting", "appointment"],
      "example_sentence": "Let’s set up a rendezvous to discuss the project."
    },
    {
      "word": "Restitution",
      "definition": "The restoration of something lost or stolen to its proper owner.",
      "related_terms": ["return", "repayment"],
      "example_sentence": "We need to discuss restitution for the lost data."
    },
    {
      "word": "Slur",
      "definition": "To speak in a way that is unclear or not distinct.",
      "related_terms": ["mumble", "speak indistinctly"],
      "example_sentence": "Let’s ensure our messages are clear and not a slur."
    },
    {
      "word": "Strife",
      "definition": "Angry or bitter disagreement over fundamental issues.",
      "related_terms": ["conflict", "discord"],
      "example_sentence": "There has been strife within the team regarding project direction."
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