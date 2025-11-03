'use client';

import { useState } from 'react';

interface Scene {
  id: number;
  title: string;
  dialogue: {
    character: string;
    text: string;
    emotion?: string;
  }[];
  background?: string;
  choices?: {
    text: string;
    nextScene: number;
  }[];
}

const scenes: Scene[] = [
  {
    id: 1,
    title: "The Trap is Sprung",
    background: "bg-gradient-to-b from-orange-100 to-yellow-100",
    dialogue: [
      {
        character: "Naruto",
        text: "Oh no. Oh no. That's a binding contract in girl language.",
        emotion: "panicking internally"
      },
      {
        character: "Hinata",
        text: "So… you'll do anything, right?",
        emotion: "sweet smile that hides danger"
      },
      {
        character: "Naruto",
        text: "Uh— I mean— anything anything? Or like— anything as in… homework-related anything?"
      },
      {
        character: "Hinata",
        text: "You didn't specify.",
        emotion: "smiles like Neji just got replaced by a demon lawyer"
      }
    ],
    choices: [
      { text: "Continue", nextScene: 2 }
    ]
  },
  {
    id: 2,
    title: "The \"Favor\"",
    background: "bg-gradient-to-b from-blue-100 to-purple-100",
    dialogue: [
      {
        character: "Scene",
        text: "Kiba, Shino, and half of Team 10 peek around a corner..."
      },
      {
        character: "Kiba",
        text: "Yo, she's finally cashing in that debt. Man's doomed."
      },
      {
        character: "Shino",
        text: "Observation: Naruto's social naivety is about to cost him his dignity."
      },
      {
        character: "Kiba",
        text: "You mean his freedom."
      },
      {
        character: "Hinata",
        text: "Okay Naruto, here's what I want."
      },
      {
        character: "Naruto",
        text: "Oh boy."
      },
      {
        character: "Hinata",
        text: "Pretend to be my boyfriend for a week."
      },
      {
        character: "Naruto",
        text: "Wha—WHAT?! WHY?!"
      },
      {
        character: "Hinata",
        text: "Ino won't stop teasing me about not having a boyfriend."
      },
      {
        character: "Naruto",
        text: "So I'm just— what— your decoy?"
      },
      {
        character: "Hinata",
        text: "No. My promise-fulfillment partner."
      },
      {
        character: "Naruto",
        text: "...That sounds legally terrifying."
      }
    ],
    choices: [
      { text: "Accept the deal", nextScene: 3 },
      { text: "Try to negotiate", nextScene: 4 }
    ]
  },
  {
    id: 3,
    title: "The Chaos Begins",
    background: "bg-gradient-to-b from-pink-100 to-red-100",
    dialogue: [
      {
        character: "Naruto",
        text: "Fine! But just for a week, right? And no weird stuff!"
      },
      {
        character: "Hinata",
        text: "Define 'weird'.",
        emotion: "innocent smile"
      },
      {
        character: "Naruto",
        text: "...I've made a terrible mistake."
      },
      {
        character: "Scene",
        text: "Meanwhile, from behind the corner..."
      },
      {
        character: "Kiba",
        text: "He actually agreed! This is gonna be GOLD!"
      },
      {
        character: "Shino",
        text: "I estimate a 97.3% probability of comedic disaster."
      },
      {
        character: "Ino",
        text: "Oh THIS should be interesting... *pulls out camera*"
      }
    ],
    choices: [
      { text: "Start from the beginning", nextScene: 1 }
    ]
  },
  {
    id: 4,
    title: "Negotiation Attempt",
    background: "bg-gradient-to-b from-gray-100 to-slate-200",
    dialogue: [
      {
        character: "Naruto",
        text: "Wait wait wait! Can we at least set some ground rules?"
      },
      {
        character: "Hinata",
        text: "You said ANYTHING, Naruto-kun. A promise is a promise."
      },
      {
        character: "Naruto",
        text: "But I didn't know what I was promising!"
      },
      {
        character: "Hinata",
        text: "That's not my problem. That's a 'you didn't read the terms and conditions' problem.",
        emotion: "cold business smile"
      },
      {
        character: "Naruto",
        text: "Since when did you become so scary?!"
      },
      {
        character: "Hinata",
        text: "I learned from the best. You know Neji? He taught me about 'fate'. Your fate... is to be my boyfriend for a week.",
        emotion: "activates Byakugan menacingly"
      },
      {
        character: "Naruto",
        text: "...Fine. You win."
      }
    ],
    choices: [
      { text: "Continue", nextScene: 3 }
    ]
  }
];

export default function Home() {
  const [currentSceneId, setCurrentSceneId] = useState(1);
  const [dialogueIndex, setDialogueIndex] = useState(0);
  const [showChoices, setShowChoices] = useState(false);

  const currentScene = scenes.find(s => s.id === currentSceneId)!;
  const currentDialogue = currentScene.dialogue[dialogueIndex];

  const handleNext = () => {
    if (dialogueIndex < currentScene.dialogue.length - 1) {
      setDialogueIndex(dialogueIndex + 1);
    } else {
      setShowChoices(true);
    }
  };

  const handleChoice = (nextScene: number) => {
    setCurrentSceneId(nextScene);
    setDialogueIndex(0);
    setShowChoices(false);
  };

  return (
    <main className={`min-h-screen ${currentScene.background || 'bg-gradient-to-b from-yellow-50 to-orange-50'} flex items-center justify-center p-4`}>
      <div className="max-w-4xl w-full bg-white/90 backdrop-blur rounded-2xl shadow-2xl overflow-hidden border-4 border-orange-300">
        {/* Title Bar */}
        <div className="bg-gradient-to-r from-orange-400 to-yellow-400 px-6 py-4 border-b-4 border-orange-500">
          <h1 className="text-2xl font-bold text-white drop-shadow-lg">
            {currentScene.title}
          </h1>
        </div>

        {/* Dialogue Box */}
        <div className="p-8 min-h-[400px] flex flex-col justify-between">
          <div className="space-y-6">
            {/* Character Name */}
            <div className="flex items-center gap-3">
              <div className="bg-gradient-to-r from-orange-500 to-yellow-500 px-4 py-2 rounded-full">
                <h2 className="text-lg font-bold text-white">
                  {currentDialogue.character}
                </h2>
              </div>
              {currentDialogue.emotion && (
                <span className="text-sm italic text-gray-600 bg-gray-100 px-3 py-1 rounded-full">
                  {currentDialogue.emotion}
                </span>
              )}
            </div>

            {/* Dialogue Text */}
            <div className="bg-amber-50 p-6 rounded-xl border-2 border-orange-200 shadow-inner">
              <p className="text-lg leading-relaxed text-gray-800">
                {currentDialogue.text}
              </p>
            </div>
          </div>

          {/* Controls */}
          <div className="mt-8 flex justify-center gap-4">
            {!showChoices ? (
              <button
                onClick={handleNext}
                className="bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transform transition hover:scale-105 active:scale-95"
              >
                Next ▶
              </button>
            ) : (
              <div className="flex flex-col gap-3 w-full max-w-md">
                {currentScene.choices?.map((choice, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleChoice(choice.nextScene)}
                    className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-bold py-3 px-6 rounded-lg shadow-lg transform transition hover:scale-105 active:scale-95"
                  >
                    {choice.text}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="bg-gradient-to-r from-orange-300 to-yellow-300 px-6 py-3 border-t-4 border-orange-400">
          <p className="text-center text-sm text-orange-900">
            Scene {currentScene.id} • Dialogue {dialogueIndex + 1}/{currentScene.dialogue.length}
          </p>
        </div>
      </div>
    </main>
  );
}
