
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const fortunes = [
  "A beautiful, smart, and loving person will be coming into your life.",
  "Your life will be filled with magical moments.",
  "You will conquer obstacles to achieve success.",
  "Now is the time to try something new.",
  "A faithful friend is a strong defense.",
  "A pleasant surprise is waiting for you.",
  "Adventure can be real happiness.",
  "An important person will offer you support.",
  "Change is happening in your life, so go with the flow!",
  "A dream you have will come true.",
  "A golden opportunity is coming your way.",
  "Your ability to accomplish tasks will improve this month.",
  "You will soon embark on a business venture.",
  "Your hard work will soon pay off.",
  "Good news will come to you by mail.",
  "Happiness begins with facing life with a smile and a wink.",
  "Help is on the way from an unexpected source.",
  "New experiences are on the horizon.",
  "People find it difficult to resist your persuasive manner.",
  "Serious trouble will bypass you.",
  "Someone will call you today with good news.",
  "Soon, a visitor shall delight you.",
  "Success lies in the hands of those who want it.",
  "The fortune you seek is in another cookie.",
  "The harder you work, the luckier you get.",
  "There is a time for caution, but not for fear.",
  "Today is the day to show someone you care.",
  "Your smile lights up the room.",
  "You will soon gain something you have always desired.",
  "A thrilling time is in your immediate future.",
  "You are very talented in many ways.",
  "Don’t just think — act!",
  "You will travel to many exotic places in your lifetime.",
  "Fortune favors the brave.",
  "Your love life will soon be exciting.",
  "You will receive a compliment soon.",
  "Your creativity will soon be recognized and rewarded.",
  "Expect the unexpected.",
  "All your hard work will soon pay off.",
  "Your intuition is your greatest asset.",
  "Your talents will be recognized and rewarded.",
  "This is a good time to start something new.",
  "An old friend will introduce you to new people and pleasures.",
  "Don't be afraid to take that big step.",
  "Trust your gut; it’s usually right.",
  "Believe in yourself and others will too.",
  "A stranger will soon become a friend.",
  "You will soon make a big difference in someone’s life.",
  "You're on the path to greatness.",
  "Let your ambitions carry you forward.",
  "Your kindness will lead you to success.",
  "Stay patient. Good things take time.",
  "You will uncover a hidden talent.",
  "Make time for self-reflection today.",
  "A surprise gift will arrive soon.",
  "Every challenge is an opportunity in disguise.",
  "You bring joy to those around you.",
  "Your positive attitude will lead to success.",
  "Be open to new ideas and opportunities.",
  "Success is a journey, not a destination.",
  "The best is yet to come.",
  "A secret admirer will soon reveal themselves.",
  "You’re about to enter a period of great abundance.",
  "A wish you have will soon be granted.",
  "Good fortune is headed your way.",
  "Your generosity will return to you tenfold.",
  "New doors are opening for you now.",
  "You’re destined for greatness.",
  "A great adventure is about to begin.",
  "Love and prosperity are in your near future.",
  "You will find clarity in an unexpected place.",
  "Be ready to seize a new opportunity.",
  "The universe is aligning in your favor.",
  "Your dreams are closer than you think.",
  "You’ll make a valuable new connection soon.",
  "Today is your lucky day!",
  "What you seek is seeking you.",
  "A moment of courage will lead to a breakthrough.",
  "Your optimism will guide you to success.",
  "Keep an open heart and miracles will follow.",
  "You have a powerful presence—use it wisely.",
  "You will leave a lasting legacy.",
  "There is more to life than increasing its speed.",
  "You are the master of your fate.",
  "Laugh more, worry less.",
  "You are about to meet someone who will change your life.",
  "Don’t let small setbacks hold you back.",
  "Be bold and mighty forces will come to your aid.",
  "You are stronger than you think.",
  "Your voice matters—use it wisely.",
  "A peaceful mind is a powerful weapon.",
  "Great things never come from comfort zones.",
  "You are capable of amazing things.",
  "Today is the beginning of anything you want.",
  "Trust the timing of your life.",
  "Your next step will be your best one yet.",
  "Take the risk or lose the chance.",
  "Let go of what no longer serves you.",
  "Your light is meant to shine bright.",
  "A challenge ahead will make you stronger.",
  "Someone is thinking of you right now.",
  "Your best days are still ahead.",
  "Keep your eyes open—opportunity is everywhere."
];

rl.question("Please enter your birth month (1-12): ", (monthInput) => {
  rl.question("Please enter your birth day (1-31): ", (dayInput) => {
    const month = Number(monthInput);
    const date = Number(dayInput);

    if ((month === 12 && date >= 22) || (month === 1 && date <= 19)) {
      console.log("You are a Capricorn");
    } else if ((month === 1 && date >= 20) || (month === 2 && date <= 18)) {
      console.log("You are an Aquarius");
    } else if ((month === 2 && date >= 19) || (month === 3 && date <= 20)) {
      console.log("You are a Pisces");
    } else if ((month === 3 && date >= 21) || (month === 4 && date <= 19)) {
      console.log("You are an Aries");
    } else if ((month === 4 && date >= 20) || (month === 5 && date <= 20)) {
      console.log("You are a Taurus");
    } else if ((month === 5 && date >= 21) || (month === 6 && date <= 20)) {
      console.log("You are a Gemini");
    } else if ((month === 6 && date >= 21) || (month === 7 && date <= 22)) {
      console.log("You are a Cancer");
    } else if ((month === 7 && date >= 23) || (month === 8 && date <= 22)) {
      console.log("You are a Leo");
    } else if ((month === 8 && date >= 23) || (month === 9 && date <= 22)) {
      console.log("You are a Virgo");
    } else if ((month === 9 && date >= 23) || (month === 10 && date <= 22)) {
      console.log("You are a Libra");
    } else if ((month === 10 && date >= 23) || (month === 11 && date <= 21)) {
      console.log("You are a Scorpio");
    } else if ((month === 11 && date >= 22) || (month === 12 && date <= 21)) {
      console.log("You are a Sagittarius");
    } else {
      console.log("Invalid date entered.");
    }

    const randomIndex = Math.floor(Math.random() * fortunes.length);
    console.log("Your fortune: " + fortunes[randomIndex]);

    rl.close();
  });
});
