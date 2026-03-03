export const questions = [
  {
    id: 1,
    question: "You encounter a bug in production. Your first reaction?",
    answers: [
      { text: "THERE'S A BUG?! WHERE?! WHAT DO I DO?! HELP?! 🐶", points: { puppy: 1 } },
      { text: "OMG THIS IS A LEARNING OPPORTUNITY! Let's debug together! 🎉", points: { golden: 1 } },
      { text: "Systematically review logs, identify root cause, implement fix methodically", points: { collie: 1 } },
      { text: "🚨 PRODUCTION IS DOWN!!! CRITICAL ERROR!!! ALL HANDS ON DECK!!!", points: { husky: 1 } },
      { text: "I WILL DESTROY THIS BUG *aggressive keyboard typing*", points: { chihuahua: 1 } },
      { text: "Quick fix, deploy, move on", points: { corgi: 1 } },
      { text: "Oh no, was it me? I'm so sorry! Let me check what I changed!", points: { dane: 1 } },
      { text: "Interesting... let me investigate... oh wait, there's another issue... and another...", points: { beagle: 1 } },
      { text: "Already fixed. Already deployed. Next task.", points: { greyhound: 1 } }
    ]
  },
  {
    id: 2,
    question: "Your debugging process looks like:",
    answers: [
      { text: "console.log(EVERYTHING), Google frantically, maybe cry a little 🐶", points: { puppy: 1 } },
      { text: "Team debugging session! Let's pair on this! More eyes are better!", points: { golden: 1 } },
      { text: "Binary search the problem, use proper debugging tools, write test to prevent regression", points: { collie: 1 } },
      { text: "*Loud verbal processing for entire office to hear*", points: { husky: 1 } },
      { text: "Fight the code until it submits", points: { chihuahua: 1 } },
      { text: "Isolate issue, fix, done", points: { corgi: 1 } },
      { text: "Carefully add logging, terrified I'll break something else", points: { dane: 1 } },
      { text: "Start debugging X, discover Y is also broken, investigate Z, forget what X was", points: { beagle: 1 } },
      { text: "Try 5 things rapidly, one works, ship it", points: { greyhound: 1 } }
    ]
  },
  {
    id: 3,
    question: "Your Git commit messages are typically:",
    answers: [
      { text: "i think i did it? pls work 🙏 or just asdfasdf", points: { puppy: 1 } },
      { text: "Added awesome new feature! Team is gonna love this! 🎉✨", points: { golden: 1 } },
      { text: "feat(auth): Implement OAuth2.0 with PKCE flow per RFC-7636", points: { collie: 1 } },
      { text: "FINALLY!!! FIXED THE THING THAT WAS DRIVING ME INSANE!!!", points: { husky: 1 } },
      { text: "MADE IT WORK. DEAL WITH IT.", points: { chihuahua: 1 } },
      { text: "fix bug", points: { corgi: 1 } },
      { text: "Sorry, I think I broke something in my last commit, this might fix it?", points: { dane: 1 } },
      { text: "Started fixing login, found issue in nav, also updated footer", points: { beagle: 1 } },
      { text: "updates *48 files changed*", points: { greyhound: 1 } }
    ]
  },
  {
    id: 4,
    question: "How many Stack Overflow tabs do you currently have open?",
    answers: [
      { text: "47 tabs: half SO, half tutorials, also YouTube playing in background 🐶", points: { puppy: 1 } },
      { text: "3-5 tabs of helpful community discussions", points: { golden: 1 } },
      { text: "1-2, and only after exhausting official documentation", points: { collie: 1 } },
      { text: "TOO MANY AND THEY'RE ALL STRESSING ME OUT", points: { husky: 1 } },
      { text: "Zero. I AM Stack Overflow", points: { chihuahua: 1 } },
      { text: "1. Found my answer, closed it", points: { corgi: 1 } },
      { text: "5-6, worried my question is too dumb to ask", points: { dane: 1 } },
      { text: "23+ from following rabbit holes for the past 3 hours", points: { beagle: 1 } },
      { text: "0. Already implemented solution from first result", points: { greyhound: 1 } }
    ]
  },
  {
    id: 5,
    question: "You just made your code work, but you don't know why:",
    answers: [
      { text: "🎉 CELEBRATE LIKE I WON THE LOTTERY 🎉 then panic it might break 🐶", points: { puppy: 1 } },
      { text: "Share with team! Let's learn together why it works!", points: { golden: 1 } },
      { text: "Unacceptable. Must understand completely before proceeding", points: { collie: 1 } },
      { text: "IT WORKS! ...WAIT WHY DOES IT WORK?! *NEW PANIC*", points: { husky: 1 } },
      { text: "Works = victory. Who cares why", points: { chihuahua: 1 } },
      { text: "Make mental note to revisit later (probably won't)", points: { corgi: 1 } },
      { text: "Carefully document what I did, just in case", points: { dane: 1 } },
      { text: "Spend next 2 hours investigating why instead of moving on", points: { beagle: 1 } },
      { text: "Ship it. Next task.", points: { greyhound: 1 } }
    ]
  },
  {
    id: 6,
    question: "Someone mentions a framework you don't know:",
    answers: [
      { text: "*Frantically writes it down* 'Is that important? Should I learn it? Am I behind?' 🐶", points: { puppy: 1 } },
      { text: "OMG tell me EVERYTHING about it! I want to learn!", points: { golden: 1 } },
      { text: "Add to research list, will properly evaluate later", points: { collie: 1 } },
      { text: "WHY DON'T I KNOW THIS?! I SHOULD KNOW THIS!", points: { husky: 1 } },
      { text: "It's probably overhyped anyway", points: { chihuahua: 1 } },
      { text: "I'll learn it if I need it", points: { corgi: 1 } },
      { text: "*Quietly panics* *Googles it later*", points: { dane: 1 } },
      { text: "*Opens 12 tabs comparing it to other frameworks*", points: { beagle: 1 } },
      { text: "I'll learn it this weekend (won't)", points: { greyhound: 1 } }
    ]
  },
  {
    id: 7,
    question: "Your code review style:",
    answers: [
      { text: "I'm too scared to review anyone's code, I barely understand my own 🐶", points: { puppy: 1 } },
      { text: "Encouraging comments! 'Great work!' 'Love this solution!' 🎉", points: { golden: 1 } },
      { text: "Thorough analysis with references to best practices and documentation", points: { collie: 1 } },
      { text: "LOTS of comments. VERY detailed. VERY passionate.", points: { husky: 1 } },
      { text: "Brutally honest, will fight over semicolons", points: { chihuahua: 1 } },
      { text: "Approve or request changes, keep it brief", points: { corgi: 1 } },
      { text: "Apologetic suggestions: 'Maybe we could consider... if you think... sorry...'", points: { dane: 1 } },
      { text: "Start reviewing, notice interesting pattern, investigate codebase for 30 min", points: { beagle: 1 } },
      { text: "Speed review, approve, done", points: { greyhound: 1 } }
    ]
  },
  {
    id: 8,
    question: "When you see legacy code:",
    answers: [
      { text: "Wait... I'm supposed to understand this? *panic* 🐶", points: { puppy: 1 } },
      { text: "Opportunity to learn different approaches! So interesting!", points: { golden: 1 } },
      { text: "*Immediately starts planning comprehensive refactor*", points: { collie: 1 } },
      { text: "WHO WROTE THIS?! THIS IS A DISASTER!", points: { husky: 1 } },
      { text: "This code is garbage and I will rewrite ALL of it", points: { chihuahua: 1 } },
      { text: "If it works, don't touch it", points: { corgi: 1 } },
      { text: "Touch nothing, break nothing, apologize anyway", points: { dane: 1 } },
      { text: "Interesting... wonder why they did it this way... *3 hour deep dive*", points: { beagle: 1 } },
      { text: "Make minimal necessary change, get out fast", points: { greyhound: 1 } }
    ]
  },
  {
    id: 9,
    question: "Your ideal work environment:",
    answers: [
      { text: "Lots of help available, patient mentors, and snacks 🐶", points: { puppy: 1 } },
      { text: "Collaborative open office with team lunches and pair programming!", points: { golden: 1 } },
      { text: "Quiet, organized, ergonomic setup with two perfectly aligned monitors", points: { collie: 1 } },
      { text: "Doesn't matter because I'll be loudly coding anyway", points: { husky: 1 } },
      { text: "My space. My rules. Don't touch my keyboard.", points: { chihuahua: 1 } },
      { text: "Minimal distractions, efficient setup, noise-canceling headphones", points: { corgi: 1 } },
      { text: "Somewhere I can't accidentally break production... again", points: { dane: 1 } },
      { text: "Somewhere interesting to explore with lots of different problems", points: { beagle: 1 } },
      { text: "Fast wifi, fast computer, minimal meetings", points: { greyhound: 1 } }
    ]
  },
  {
    id: 10,
    question: "When deployment fails:",
    answers: [
      { text: "WHAT DID I DO?! HOW DO I FIX IT?! *PANIC GOOGLING* 🐶", points: { puppy: 1 } },
      { text: "No worries team! We'll figure it out together!", points: { golden: 1 } },
      { text: "Review deployment logs systematically, identify failure point, rollback if needed", points: { collie: 1 } },
      { text: "🚨 EVERYTHING IS ON FIRE!!! ROLL BACK ROLL BACK!!! 🚨", points: { husky: 1 } },
      { text: "The deployment pipeline is STUPID and I will FIGHT IT", points: { chihuahua: 1 } },
      { text: "Check logs, fix issue, redeploy", points: { corgi: 1 } },
      { text: "I KNEW I would break something. I'm so sorry everyone.", points: { dane: 1 } },
      { text: "Hmm, interesting error... I wonder if it's related to that other thing... *investigates for hours*", points: { beagle: 1 } },
      { text: "Already rolled back, already fixed, already redeployed", points: { greyhound: 1 } }
    ]
  }
];