export const dogTypes = {
  puppy: {
    name: "Puppy Developer 🐶",
    description: "Everything is new! Everything is exciting! Everything is also terrifying! Constantly asking 'Is this supposed to happen?' Prone to zoomies (sudden bursts of productivity followed by naps).",
    strengths: [
      "Unbridled curiosity and enthusiasm",
      "Asks 'dumb questions' that catch real issues",
      "Not set in bad habits yet",
      "Celebrates small wins HARD"
    ],
    weaknesses: [
      "Gets overwhelmed by big codebases",
      "Needs lots of supervision",
      "Occasionally breaks everything while 'just trying to help'",
      "Has accidents (commits secrets to GitHub)"
    ],
    famousFor: '"WAIT I MADE IT WORK! ...wait how did I make it work?"',
    errorMessage: "PuppyError: Too excited, need to calm down. Tip: It's okay! You're learning! 🐾",
    encouragement: "Every senior developer was once exactly where you are. That senior dev you admire? They still Google how to center a div."
  },
  
  golden: {
    name: "Golden Retriever Developer 🦮",
    description: "Enthusiastic about EVERYTHING. Wants to learn ALL the frameworks. Overly friendly variable names and excessive comments. Team player extraordinaire.",
    strengths: [
      "Excellent at pair programming",
      "Always positive in code reviews",
      "Great team morale booster",
      "Genuinely excited about new tech"
    ],
    weaknesses: [
      "Easily distracted by shiny new frameworks",
      "Tries to help with every PR",
      "Sometimes too trusting of tutorial code",
      "Can't say no to new features"
    ],
    famousFor: '"This is AMAZING!" in every standup',
    errorMessage: "Oh no! But we can fix this together! Let's debug as a team! 🎉"
  },
  
  collie: {
    name: "Border Collie Developer 🐕‍🦺",
    description: "Obsessive about best practices. Herds teammates toward clean code. Perfectly organized, lint errors are personal failures.",
    strengths: [
      "Catches every edge case",
      "Documentation master",
      "Code reviews are thorough and helpful",
      "Enforces best practices"
    ],
    weaknesses: [
      "Can't let a PR go without 'one more refactor'",
      "Sometimes over-engineers simple solutions",
      "Analysis paralysis on architecture decisions",
      "Judges messy code harshly"
    ],
    famousFor: '"Actually, we should..." in every meeting',
    errorMessage: "Error detected. Here are 12 ways to fix it and 5 articles on why it happened."
  },
  
  husky: {
    name: "Husky Developer 🐺",
    description: "Dramatic. Vocal about every bug. Verbose console.logs. Everything is either THE BEST or A COMPLETE DISASTER.",
    strengths: [
      "Loudly advocates for needed changes",
      "Passionate about code quality",
      "Won't let critical issues be ignored",
      "Brings energy to the team"
    ],
    weaknesses: [
      "Everything is a CRISIS",
      "Dramatic Slack messages cause unnecessary panic",
      "Mood swings based on build status",
      "Sometimes cries wolf"
    ],
    famousFor: '"THIS ENTIRE CODEBASE IS BROKEN" (it\'s one typo)',
    errorMessage: "🚨 CRITICAL ERROR!!! THE SYSTEM IS DOWN!!! (it's a missing semicolon)"
  },
  
  chihuahua: {
    name: "Chihuahua Developer 🌭",
    description: "Small but FIERCE. Will fight any linter. Scrappy, aggressive Git commits. Unnecessarily confrontational with semicolons.",
    strengths: [
      "Fearless tackling hard problems",
      "Doesn't back down from challenges",
      "Fiercely protects code quality",
      "Questions bad decisions loudly"
    ],
    weaknesses: [
      "Unnecessarily combative in code reviews",
      "Takes technical disagreements personally",
      "Aggressive commit messages alienate teammates",
      "Sometimes fights battles not worth fighting"
    ],
    famousFor: 'Commit messages like "FIXED THE STUPID BUG"',
    errorMessage: "Error: I SAID NO. Do it MY way."
  },
  
  corgi: {
    name: "Corgi Developer 🦴",
    description: "Short Stack Overflow searches, big brain energy. Efficient, gets to the point, no fluff. Why use many line when few line do trick?",
    strengths: [
      "Writes compact, elegant solutions",
      "No-nonsense problem solving",
      "Efficient with time and code",
      "Delivers reliably"
    ],
    weaknesses: [
      "Sometimes too terse in code reviews",
      "Stubbornly attached to their approach",
      "Documentation can be sparse",
      "Impatient with long meetings"
    ],
    famousFor: 'Commit messages: "fix bug"',
    errorMessage: "Nope. Try again, human."
  },
  
  dane: {
    name: "Great Dane Developer 🦴",
    description: "Big, gentle, means well. Occasionally knocks over the entire architecture while trying to help. Apologizes profusely.",
    strengths: [
      "Tackles big, complex problems",
      "Kind and patient with juniors",
      "Humble and open to feedback",
      "Takes ownership of mistakes"
    ],
    weaknesses: [
      "'I just changed ONE thing' (changed 47 files)",
      "Accidentally breaks staging regularly",
      "Too apologetic even for minor issues",
      "Underestimates impact of changes"
    ],
    famousFor: '"Oh no, I\'m so sorry, I didn\'t mean to delete the database"',
    errorMessage: "Error: I'm so sorry! This is completely my fault! How can I fix this?"
  },
  
  beagle: {
    name: "Beagle Developer 🐕",
    description: "Follows every interesting scent (bug) until distracted by new scent (different bug). Curious explorer of the entire codebase.",
    strengths: [
      "Great at finding hidden bugs",
      "Thorough code investigator",
      "Discovers interesting edge cases",
      "Deep knowledge of codebase"
    ],
    weaknesses: [
      "'Wait, what was I working on again?'",
      "47 open browser tabs of Stack Overflow",
      "Gets lost in rabbit holes",
      "Forgets original task"
    ],
    famousFor: '"Started fixing X, found Y, also looked at Z, discovered Q..."',
    errorMessage: "Error: Wait... what? Let me sniff around more... oh look, a different issue!"
  },
  
  greyhound: {
    name: "Greyhound Developer 🏃",
    description: "FAST. Ships features at lightning speed. Speed over perfection. 'We'll refactor later' (narrator: they won't).",
    strengths: [
      "Incredible productivity",
      "Meets every deadline",
      "Unblocks team quickly",
      "Comfortable with imperfection"
    ],
    weaknesses: [
      "Technical debt follows like a shadow",
      "'It works' is good enough",
      "Skips tests to ship faster",
      "Refactor never happens"
    ],
    famousFor: '"It\'s deployed!" (5 minutes after ticket assigned)',
    errorMessage: "Error: Failed successfully (but quickly). Ship it anyway?"
  }
};