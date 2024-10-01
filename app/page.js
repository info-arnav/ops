"use client";

import Image from "next/image";
import logo from "./logo.png";
import { useState } from "react";

export default function Home() {
  const jokeArray = [
    "Let's go to {name}'s house and TP their trees with rainbow-colored toilet paper!",
    "I say we make {name} the star of a meme competition—loser edition!",
    "How about we send {name} a cake that says 'Better luck next life!'",
    "Let’s buy a bunch of rubber ducks and leave them all over {name}'s front yard!",
    "How about we prank call {name} and tell them they've won the 'Most Annoying Person' award?",
    "Let’s leave a trail of crumbs from {name}'s house to a maze made of cardboard boxes!",
    "How about we Photoshop {name}'s face onto a bunch of baby pictures and post them online?",
    "Let's create a 'Wanted for Bad Dancing' poster featuring {name} and hang it around town.",
    "How about we declare today 'National Avoid {name} Day!'?",
    "Let's send {name} a fake fortune cookie that says 'Try again. You're still the worst.'",
    "Let's give {name} an award for 'Most likely to trip over nothing.'",
    "We should leave a trail of ketchup leading from {name}'s door and see if they panic.",
    "How about mailing {name} an empty box and writing 'Sorry, I couldn't find anything worth giving.'",
    "Let's change their contact name in someone's phone to 'Unnecessary Drama'!",
    "We could write {name}'s name on a sign and put it in the 'Lost and Found' section of the park.",
    "Let's send {name} a letter telling them they’ve been selected for the 'No Friends Club'.",
    "What if we replaced {name}'s shampoo with glue and see what happens?",
    "Let’s give {name} a 'Best Effort' ribbon—because they really tried... but failed.",
    "Let’s print out a giant photo of {name}'s face and stick it on a scarecrow!",
    "We could make a mixtape of the worst songs ever and say it's {name}'s 'Top Hits' playlist.",
    "How about we draw a mustache on every picture of {name} we can find?",
    "Let’s fill {name}'s yard with inflatable dinosaurs and tell them it's Jurassic Park 2.0.",
    "Let’s sign {name} up for a ballet class and say it’s because they have such great balance… not.",
    "Let’s pretend {name} is an alien and make an online conspiracy page about it.",
    "How about we send {name} a gift card to a restaurant that doesn't exist?",
    "Let’s leave sticky notes with terrible puns on everything {name} owns.",
    "Let’s give {name} a medal for 'Worst Excuse for Existing.'",
    "Let’s send {name} a map of nowhere with a note saying, 'Good luck finding yourself.'",
    "We could create a scavenger hunt for {name} and not include any actual clues.",
    "Let’s leave a 'No Entry' sign on {name}'s driveway and see how they react.",
    "How about we send {name} an invitation to a party that isn’t real?",
    "Let’s hide {name}'s stuff and leave riddles with no answers to find them.",
    "Let’s fill {name}'s mailbox with glitter and watch the chaos unfold!",
    "We could prank {name} with a fake movie script where they play the role of 'Villain #1'.",
    "Let’s create a 'Missing Person' poster for {name}, but they’re not actually missing.",
    "How about sending {name} a fake resume for the job of 'Professional Nuisance'?",
    "Let’s register {name} for a 'How to be Less Annoying' seminar.",
    "Let’s hang a sign on {name}'s car that says 'Honk if you hate me!'",
    "Let’s throw a surprise 'You’re the Worst' party for {name}—just because!",
    "How about sending {name} an email saying they’ve been demoted to 'Friend Acquaintance'?",
    "Let’s leave empty soda cans all over {name}'s yard like they had a terrible party.",
    "We could gift {name} a dictionary with all the pages ripped out—just like their logic.",
    "Let’s tell {name} they're on Santa's 'Naughty List'—for life!",
    "Let’s paint {name}'s driveway with invisible ink that glows under blacklight!",
    "Let’s sign {name} up for a dance-off with professional breakdancers and watch the embarrassment unfold.",
    "Let’s send {name} a letter saying they’ve won a prize for 'Best at Being the Worst.'",
    "Let’s tell {name} we booked them a vacation, but it’s just to their backyard.",
    "Let’s send {name} an anonymous poem that reads: Roses are red, violets are blue, no one hates you more than you.",
    "Let’s name a cockroach after {name} and donate it to a zoo.",
    "How about we change all the contacts in {name}'s phone to random food emojis?",
    "Let’s leave a trail of paper airplanes from {name}'s front door to nowhere.",
    "Let’s make a custom board game where every player except {name} wins.",
    "Let’s write {name}'s name on a 'Do Not Hire' list for fun jobs.",
    "Let’s dress up like detectives and show up at {name}'s door asking if they’ve seen their personality lately.",
    "Let’s photoshop {name} as a baby and pretend it’s their long-lost twin.",
    "Let’s draw a chalk outline in front of {name}'s house—just to freak them out.",
    "Let’s send {name} an email telling them they’ve been banned from 'Fun Club'.",
    "Let’s write {name}'s name on a balloon and release it into space. Good riddance!",
    "Let’s give {name} a participation trophy for 'Existing.'",
    "Let’s gift-wrap an empty box and tell {name} it represents their future.",
    "Let’s create a 'Where’s {name}?' book and never actually put them in it.",
    "Let’s send {name} a puzzle with all the pieces missing and see how long it takes for them to figure it out.",
    "Let’s put a fake eviction notice on {name}'s door!",
    "How about leaving an apology note on {name}'s car for 'stealing their personality.'",
    "Let’s dress up as clowns and perform an impromptu roast of {name} in public!",
    "Let’s replace all of {name}'s social media profile pictures with embarrassing childhood photos.",
    "Let’s get {name} a job as a professional balloon animal artist—with no training.",
    "Let’s send {name} a letter saying they’ve been chosen to compete in the 'Worst of the Worst' Olympics.",
    "Let’s send {name} an invitation to an 'Overcoming Your Annoying Personality' workshop.",
    "Let’s record ourselves reading {name}'s favorite book in the most monotone voice possible.",
    "Let’s rename {name}'s WiFi to 'Sorry, Try Again.'",
    "Let’s prank call {name} and act like we’re collecting donations for the 'Make {name} Better' fund.",
    "Let’s register {name} for a cheese-tasting event, and then it’s just them eating slices of American cheese.",
    "Let’s write {name}'s name in permanent marker on the office's worst chair.",
    "Let’s fill {name}'s house with balloons that pop as soon as they touch them.",
    "Let’s cover {name}'s yard with plastic pink flamingos and leave a note saying 'Welcome to Florida!'",
    "Let’s print a fake news article about {name} being the next worst reality TV star.",
    "Let’s sign {name} up for a 'How to Be More Likeable' seminar… anonymously, of course.",
    "Let’s send {name} a letter congratulating them on being voted 'Most Likely to Miss the Point.'",
    "Let’s write a review of {name} on Yelp, rating them as a 1-star human.",
    "Let’s pretend to be {name}'s biggest fan and then roast them in a series of terrible fan letters.",
    "Let’s get {name} a 'Congratulations for Waking Up' certificate.",
    "Let’s mail {name} a calendar where every day is labeled 'Your Day to Fail.'",
    "Let’s put {name}'s name on a fake 'Top 10 People Nobody Likes' list.",
    "Let’s record a personalized weather forecast for {name} that only predicts storms and bad days.",
    "Let’s draw a chalk hopscotch leading from {name}'s door to a brick wall.",
    "Let’s create a fake fan club for {name} and then have only one person join it (us).",
    "Let’s send {name} a box labeled 'Your Personality'—and it’s completely empty.",
    "Let’s rename {name}'s favorite playlist to 'Songs You Should Never Sing in Public.'",
    "Let’s change {name}'s alarm to a recording of us saying, 'Get out of bed, you failure!'",
    "Let’s leave a note on {name}'s desk that says, 'You've been replaced by a potted plant.'",
    "Let’s sneak into {name}'s car and leave a bunch of random rubber chickens.",
    "Let’s write a 'world’s worst person' award and deliver it to {name} on a silver platter.",
  ];

  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const [joke, setJoke] = useState("");
  const click = () => {
    messages.push(message);
    setMessages(messages);
    setMessage("");
  };
  const nClick = () => {
    let randomJoke = jokeArray[Math.floor(Math.random() * jokeArray.length)];
    setJoke(randomJoke.replace(/{name}/g, name));
  };
  return (
    <div>
      <nav
        style={{
          backgroundColor: "pink",
          width: "100%",
          margin: 0,
          padding: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <center>
          <div
            className="nav"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "calc(100vw - 40px)",
              borderRadius: 20,
              marginTop: 10,
              marginBottom: 10,
            }}
          >
            <Image
              src={logo}
              height={40}
              width={40}
              style={{ borderRadius: "100%", margin: 10 }}
            ></Image>
            <div
              style={{
                flex: 1,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: 10,
                fontWeight: "bold",
                fontSize: 14,
              }}
            >
              Aditi Gupta Ops List
            </div>
          </div>
        </center>
      </nav>
      <main
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            width: "calc(100vw - 40px)",
            fontWeight: "bold",
            marginBottom: 20,
          }}
        >
          Random Joke Maker
        </div>
        <div
          style={{
            width: "calc(100vw - 40px)",
            marginBottom: 10,
          }}
        >
          Who are you angry at ?
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "calc(100vw - 40px)",
            marginBottom: 10,
          }}
        >
          <input
            value={name}
            style={{
              flex: 1,
              height: 30,
              backgroundColor: "white",
              padding: 0,
              border: "none",
              borderTopLeftRadius: 20,
              borderBottomLeftRadius: 20,
              paddingLeft: 10,
              paddingRight: 10,
            }}
            onChange={(e) => setName(e.target.value)}
          ></input>
          <button
            style={{
              width: 70,
              height: 30,
              color: "white",
              backgroundColor: "black",
              padding: 0,
              border: "none",
              borderTopRightRadius: 20,
              borderBottomRightRadius: 20,
              cursor: "pointer",
            }}
            onClick={nClick}
          >
            Send
          </button>
        </div>
        <div
          style={{
            width: "calc(100vw - 40px)",
            marginBottom: 50,
          }}
        >
          {joke && joke}
        </div>
        <div
          style={{
            width: "calc(100vw - 40px)",
            fontWeight: "bold",
            marginBottom: 20,
          }}
        >
          Abusive Texter
        </div>
        <div
          style={{
            height: "calc(100vh - 500px)",
            minHeight: 300,
            overflow: "auto",
            width: "calc(100vw - 40px)",
          }}
        >
          {messages.length > 0
            ? messages.map((e) => {
                return <div>{e}</div>;
              })
            : "Write all the bad stuff you want here and no one will be able to ever see it; deleted on reload"}
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "calc(100vw - 40px)",
          }}
        >
          <input
            value={message}
            style={{
              flex: 1,
              height: 30,
              backgroundColor: "white",
              padding: 0,
              border: "none",
              borderTopLeftRadius: 20,
              borderBottomLeftRadius: 20,
              paddingLeft: 10,
              paddingRight: 10,
            }}
            onChange={(e) => setMessage(e.target.value)}
          ></input>
          <button
            style={{
              width: 70,
              height: 30,
              color: "white",
              backgroundColor: "black",
              padding: 0,
              border: "none",
              borderTopRightRadius: 20,
              borderBottomRightRadius: 20,
              cursor: "pointer",
            }}
            onClick={click}
          >
            Send
          </button>
        </div>
      </main>
    </div>
  );
}
