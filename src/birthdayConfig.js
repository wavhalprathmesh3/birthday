/**
 * =========================================================================
 * 🌹 SHRUTI'S BIRTHDAY SURPRISE — MASTER CONFIGURATION FILE
 * =========================================================================
 * 
 * You can easily customize any text, name, photographs, memories,
 * love letter, and songs directly in this single file.
 */

export const birthdayConfig = {
  // Names
  girlfriendName: "Shruti",
  myName: "Vaibhav", // Can easily change this anytime!
  relationshipDate: "Special Memory", // Optional date or anniversary

  // Music configuration — Aankhon Se Batana (Local audio file)
  music: {
    audioPath: "/music/aankhon-se-batana.mp3",
    title: "Aankhon Se Batana",
    artist: "Dikshant",
    targetVolume: 0.30, // 25–35% volume
    autoPlayAfterEnter: true,
  },

  // The 5 personal photographs (Stored in /public/images/)
  photos: {
    // 1. Black-and-white saree portrait of Shruti
    shrutiBlackWhite: "/images/shruti-black-white.jpg",
    
    // 2. Beautiful pink saree portrait of Shruti
    shrutiPink: "/images/shruti-pink.jpg",
    
    // 3. Candid outdoor photo of both of you with heart decorations (horizontal)
    usOutdoor: "/images/us-outdoor.jpg",
    
    // 4. Cinematic low-angle outdoor photo of both of you
    usCinematic: "/images/us-cinematic.jpg",
    
    // 5. Close indoor selfie of both of you
    usSelfie: "/images/us-selfie.jpg",

    // Optional video clip
    memoryVideo: "/images/our-memory-video.mp4"
  },

  // Scene 1: The Mystery
  mystery: {
    subtitle: "A private story made with all my heart",
    introLine1: "Hey Shruti...",
    introLine2: "I made something for you.",
    enterButtonText: "Enter My Little World ❤️",
  },

  // Scene 2: "Her" (Black & White Portrait)
  herSection: {
    title: "Before I tell you anything...",
    subtitle: "...just look at you.",
    mainThought: "How am I supposed to describe someone who makes beautiful look effortless?",
    handwrittenNote: "That's my Shruti. ❤️",
  },

  // Scene 3: Her Smile (Pink Saree Portrait)
  herSmile: {
    title: "There's something about your smile...",
    subtitle: "...that makes everything in the world feel a little lighter.",
    message: "In a world that rushes by so fast, seeing you smile feels like time gently stops. I hope you never stop smiling.",
    highlight: "Your smile is, and will always be, my favorite sight in this universe.",
  },

  // Scene 3: The First "Us"
  firstMemory: {
    leadIn: "And then...",
    transitionText: "somehow...",
    turningPoint: "there was us.",
    description: "And suddenly,\nordinary moments started becoming\nmy favorite memories.",
    subtext: "From two separate lives to a world made just for you and me.",
  },

  // Scene 5: Our Little World (Outdoor photo parallax & depth)
  ourLittleWorld: {
    title: "Our Little World",
    subtitle: "The unscripted magic between us",
    moments: [
      "The random conversations that last for hours.",
      "The stupid jokes that only we find hilarious.",
      "The little arguments that always end in laughter.",
      "The silent smiles across the room.",
      "The moments that nobody else in this world gets to see.",
    ],
    conclusion: "And somehow... those are the moments I treasure the most."
  },

  // Scene 6: Cinematic Memory (Low angle photo with movie subtitles)
  cinematicMemory: {
    badge: "SCENE 06 • CINEMATIC MEMORY",
    quoteLine1: "Maybe the best memories aren't the planned, perfect ones.",
    quoteLine2: "Maybe they're the completely random, spontaneous ones.",
    quoteLine3: "The ones where we're simply...",
    climaxWord: "US. ❤️",
    footerText: "Caught in between reality and a movie of our own."
  },

  // Scene 7: Scattered Floating Memory Gallery
  memoryGallery: {
    title: "Our Little Universe",
    subtitle: "Click each memory to open the romantic polaroid view",
    items: [
      {
        id: 1,
        image: "/images/shruti-black-white.jpg",
        caption: "One of my favorite views.",
        subtitle: "Grace, elegance, and pure poetry in a single frame.",
        date: "Timeless",
        tag: "Her Elegance"
      },
      {
        id: 2,
        image: "/images/shruti-pink.jpg",
        caption: "That smile.",
        subtitle: "The kind of smile that brightens up even my darkest days.",
        date: "Pure Joy",
        tag: "Her Smile"
      },
      {
        id: 3,
        image: "/images/us-outdoor.jpg",
        caption: "One random day.",
        subtitle: "Surrounded by little hearts, but none compare to how full my heart was.",
        date: "Together",
        tag: "Our Laughter"
      },
      {
        id: 4,
        image: "/images/us-cinematic.jpg",
        caption: "Just us.",
        subtitle: "Looking up at the open sky, knowing I have everything I need right here.",
        date: "Cinematic",
        tag: "Our Movie"
      },
      {
        id: 5,
        image: "/images/us-selfie.jpg",
        caption: "One more memory I never want to forget.",
        subtitle: "Close to you is where everything feels safe and peaceful.",
        date: "Forever",
        tag: "Our Warmth"
      }
    ]
  },

  // Scene 8: "Things I Love About You" (Interactive 3D Cards)
  loveCards: {
    title: "Things I Love About You",
    subtitle: "Click each card to reveal what I secretly admire about you...",
    cards: [
      {
        id: "smile",
        frontTitle: "YOUR SMILE",
        frontIcon: "✨",
        revealMessage: "I genuinely love seeing you happy. It's an instant reminder of why life is beautiful.",
        accentColor: "from-pink-500/20 to-rose-600/20"
      },
      {
        id: "heart",
        frontTitle: "YOUR KIND HEART",
        frontIcon: "🤍",
        revealMessage: "The genuine warmth and softness you carry. You care in ways people rarely do nowadays.",
        accentColor: "from-rose-500/20 to-red-600/20"
      },
      {
        id: "habits",
        frontTitle: "YOUR LITTLE HABITS",
        frontIcon: "🌙",
        revealMessage: "All those tiny quirks, the way you tuck your hair, the little expressions you make without realizing.",
        accentColor: "from-amber-500/20 to-rose-600/20"
      },
      {
        id: "laugh",
        frontTitle: "YOUR LAUGH",
        frontIcon: "🎵",
        revealMessage: "My absolute favorite sound. Even hearing it for a second resets whatever stress I had.",
        accentColor: "from-purple-500/20 to-pink-600/20"
      },
      {
        id: "care",
        frontTitle: "THE WAY YOU CARE",
        frontIcon: "🕊️",
        revealMessage: "You make me feel understood and protected in ways I never even knew I needed.",
        accentColor: "from-red-500/20 to-burgundy-700/20"
      },
      {
        id: "moments",
        frontTitle: "MAKING ORDINARY SPECIAL",
        frontIcon: "💫",
        revealMessage: "Even sitting in silence or running mundane errands feels like an adventure with you.",
        accentColor: "from-rose-400/20 to-pink-700/20"
      },
      {
        id: "you",
        frontTitle: "JUST... YOU",
        frontIcon: "🌹",
        revealMessage: "Not a single thing to change. Unapologetically, wonderfully, beautifully Shruti.",
        accentColor: "from-rose-600/20 to-amber-600/20"
      }
    ]
  },

  // Scene 9: The Secret
  secretSurprise: {
    heading: "Shruti...",
    subheading: "I still haven't told you everything.",
    mysteryPrompt: "There's one more little secret hidden here for you.",
    buttonText: "Open It ❤️",
    revealedTitle: "Okay... you caught me.",
    revealedMessage: "I could have simply wished you Happy Birthday with a standard text...\n\nBut you deserve so much more than just a message.\n\nSo I crafted this entire digital sanctuary — a little piece of us that will forever belong to you.",
    photoCaption: "Us, exactly where we belong. ❤️"
  },

  // Scene 10: Love Letter (Vintage handwritten card with typewriter animation)
  loveLetter: {
    heading: "For Shruti ❤️",
    date: "On Your Special Day",
    body: `Dear Shruti,

Happy Birthday to the girl who became such a beautiful part of my life.

I don't know if I always say it properly, but I hope you know how much you mean to me.

It's not just the big moments.

It's the small things.

The random conversations.
The silly moments.
The laughs.
The little fights.
The memories.
The moments where we're doing absolutely nothing and somehow they're still my favorite.

You have become someone I genuinely don't want to imagine my life without.

And if I could choose one thing for you today, it would simply be this:

I hope you always stay happy.
I hope you keep smiling.
I hope you achieve everything you dream about.

And I hope I get to be there for many of those moments.

Happy Birthday, Shruti.

You are incredibly special to me.

With all my love,
Vaibhav ❤️`
  },

  // Scene 11: Playful Romantic Question
  romanticQuestion: {
    title: "One last question...",
    question: "Do you know how much I love you?",
    option1Text: "I know ❤️",
    option1ResponseTitle: "Good...",
    option1Response: "But I'll still remind you every single day anyway. ❤️",
    option2Text: "Tell me again 😌",
    option2ResponseTitle: "Gladly...",
    option2Response: "More than I could ever fit into this website, across all stars, and through every lifetime. ❤️"
  },

  // Scene 12: Final Reveal & Emotional Climax
  finalReveal: {
    firstPauseText: "Shruti...",
    secondPauseText: "Before you leave...",
    thirdPauseText: "I want you to remember one thing.",
    flashPrompt: "Out of all the photographs in the world...",
    turningQuote: "my favorite one...",
    turningQuoteClimax: "...is the one where we're together.",
    favoritePlace: "Because my favorite place is wherever I get to be with you. ❤️",
    mainGreeting: "HAPPY BIRTHDAY, SHRUTI",
    wishes: [
      "More laughs.",
      "More memories.",
      "More random moments.",
      "More adventures.",
      "More photographs.",
      "More us."
    ],
    finalLoveSign: "Happy Birthday, My Love. ❤️",
    authorSign: "Made with all my heart, just for you."
  }
};
