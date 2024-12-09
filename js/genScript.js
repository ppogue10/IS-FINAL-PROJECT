const rapNames = [
    "Lil Blaze",
    "MC Thunder",
    "Young Spitta",
    "Big Ice",
    "DJ Flash",
    "Lil Savage",
    "King Flow",
    "Queen Vibes",
    "Crazy Beats",
    "Big Cheese",
    "MC Rhythm",
    "Young Legend",
    "DJ Scratch",
    "Ice Fire",
    "Savage Flow",
    "Lil Dagger",
    "MC Fireball",
    "Young Ace",
    "Big Storm",
    "DJ Shadow",
    "Lil Hustle",
    "King Supreme",
    "Queen Fierce",
    "Wavy Vibes",
    "Big Drip",
    "MC Blaze",
    "Young Dreamer",
    "DJ Eclipse",
    "Ice Razor",
    "Savage Vortex",
    "Lil Phantom",
    "MC Frostbite",
    "Young Titan",
    "Big Chill",
    "DJ Vortex",
    "Lil Venom",
    "King Swagger",
    "Queen Majesty",
    "Fire Beats",
    "Big Hustle",
    "MC Inferno",
    "Young Vision",
    "DJ Spark",
    "Ice Typhoon",
    "Savage Whisper",
    "Lil Rebel",
    "MC Galaxy",
    "Young Hero",
    "Big Star",
    "DJ Tornado",
    "Lil Eclipse",
    "King Inferno",
    "Queen Power",
    "Blazing Flow",
    "Big Wave",
    "MC Phoenix",
    "Young Kingpin",
    "DJ Velocity",
    "Ice Warrior",
    "Savage Glow",
    "Lil X",
    "MC Shadow",
    "Young Mastermind",
    "Big Smoke",
    "DJ Flame",
    "Lil Thunder",
    "King Lion",
    "Queen Lightning",
    "Wicked Rhymes",
    "Big Groove",
    "MC Alpha",
    "Young Rebel",
    "DJ Chill",
    "Ice Edge",
    "Savage Knight",
    "Lil Blaze-It",
    "MC Raptor",
    "Young Genesis",
    "Big Zenith",
    "DJ Inferno",
    "Lil Magnum",
    "King Zenith",
    "Queen Luxe",
    "Firestorm Beats",
    "Big Energy",
    "MC Supersonic",
    "Young Maverick",
    "DJ Blaze",
    "Ice Nova",
    "Savage Tempest"
];

document.getElementById('generateBtn').addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * rapNames.length);
    document.getElementById('rapName').textContent = `Your rap name is: ${rapNames[randomIndex]}!`;
});
