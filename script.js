  
        const compliments = [
            "Your ability to listen is a true gift to everyone around you.",
            "You have an incredible mind and your ideas deserve to be heard.",
            "The kindness you show others is a beacon of light.",
            "You handle challenges with grace and resilience.",
            "Your energy is contagious in the best possible way.",
            "You make the world a more interesting and beautiful place just by being in it.",
            "I admire your dedication and commitment to your goals.",
            "You're the human equivalent of a double rainbow.",
            "If you were a potato, you'd be a sweet potato.",
            "You have the perfect amount of chill.",
            "You make rainy days feel like cozy sweater weather.",
            "Your laugh is a gift to humanity.",
            "You are better than a freshly baked cookie.",
            "You smell faintly of victory and cinnamon rolls.",
            "You're not weird, you're a limited edition.",
            "You have the courage of a house cat protecting its favorite toy.",
            "You're like a highly optimized piece of software.",
            "You could teach a masterclass in being awesome.",
            "Your pet probably thinks you're a superhero, and they are right.",
            "You're the reason they invented the high-five.",
            "Your fashion choices are always on point.",
            "You're so good at being you, it's honestly impressive.",
            "You possess great power and great responsibility.",
            "You're like a hidden track on an album: a pleasant surprise.",
            "You are the main character in this story.",
            "You deserve a standing ovation for your sheer effort.",
            "You make hard things look easy.",
            "If brilliance was a crime, you'd be serving a life sentence.",
            "Your positive attitude is the best accessory.",
            "You have a knack for turning ordinary moments into special ones.",
            "You're the person everyone wants on their team.",
            "You have the determination of a toddler with a cookie jar.",
            "You make spreadsheets look exciting.",
            "You’re definitely on the 'Nice' list this year.",
            "You are proof that good things happen to good people.",
            "Your memory is shockingly reliable.",
            "You should be cloned, but only for good purposes.",
            "You have fantastic posture.",
            "You inspire me to be less lazy.",
            "Your hair looks really good today.",
            "You're the glue that holds things together.",
            "You bring out the best in others.",
            "You are a stellar conversationalist.",
            "You make even mundane tasks seem exciting.",
            "You are more reliable than a sunrise.",
            "You're a human Swiss Army knife of skills.",
            "You are simply radiant.",
            "You deserve all the snacks.",
            "You are a powerhouse of potential.",
            "You're the best thing since sliced bread.",
            "You have an amazing moral compass.",
            "You make complexity understandable.",
            "Your integrity shines brighter than a diamond.",
            "You look like you know how to build a fire with friction.",
            "You are surprisingly good at that thing you tried once.",
            "You could talk your way out of a paper bag.",
            "You have the patience of a saint.",
            "You are wonderfully eccentric.",
            "You're not just smart, you're clever.",
            "You deserve a break and a large cup of tea.",
            "You're the reason someone is smiling today.",
            "Your creative potential is limitless.",
            "You're a champion of the small things.",
            "You have a very comforting presence.",
            "You're a beacon of common sense.",
            "Your enthusiasm is beautiful.",
            "You are an absolute delight.",
            "You're stronger than you think you are.",
            "You're doing a great job at life.",
            "You have a heart of gold.",
            "You're a breath of fresh air.",
            "You make others feel safe.",
            "You're smarter than you give yourself credit for.",
            "You're a true original.",
            "You have the best ideas.",
            "Your resilience is inspiring.",
            "You're a wonderful friend.",
            "You're a natural leader.",
            "Your kindness is your superpower.",
            "You're very observant.",
            "You've got great instincts.",
            "You're a joy to be around.",
            "You're incredibly thoughtful.",
            "You're a great problem solver.",
            "You're more than enough.",
            "You're a bright spot in my day.",
            "You have a great sense of style.",
            "You're a hard worker.",
            "You're very generous.",
            "You're a good listener.",
            "You're so brave.",
            "You're very compassionate.",
            "You have a wonderful imagination.",
            "You're very reliable.",
            "You're a great communicator.",
            "You're very talented.",
            "You're a ray of sunshine.",
            "You're very creative.",
            "You're a great teammate.",
            "You're just plain awesome!"
        ];

        const jokes = [
            { s: "Why don't scientists trust atoms?", p: "Because they make up everything!" },
            { s: "What do you call a fake noodle?", p: "An Impasta!" },
            { s: "Why did the scarecrow win an award?", p: "He was outstanding in his field!" },
            { s: "What do you call a bear with no teeth?", p: "A gummy bear!" },
            { s: "Why did the bicycle fall over?", p: "Because it was two-tired!" },
            { s: "What do you call cheese that isn't yours?", p: "Nacho cheese!" },
            { s: "Why can't a nose be 12 inches long?", p: "Because then it would be a foot!" },
            { s: "What's orange and sounds like a parrot?", p: "A carrot!" },
            { s: "Why did the math book look sad?", p: "Because it had too many problems!" },
            { s: "What do you call a sleeping dinosaur?", p: "A dino-snore!" },
            { s: "What did the ocean say to the beach?", p: "Nothing, it just waved!" },
            { s: "How do you make a tissue dance?", p: "You put a little boogie in it!" },
            { s: "What do you call a snowman with a six pack?", p: "An abdominal snowman!" },
            { s: "Why was 6 afraid of 7?", p: "Because 7, 8, 9!" },
            { s: "What do you call a magic dog?", p: "A Labracadabrador!" },
            { s: "Why did the cookie go to the doctor?", p: "Because he was feeling crumb-y!" },
            { s: "What did one plate say to the other?", p: "Lunch is on me!" },
            { s: "Why are elevator jokes so good?", p: "They work on so many levels!" },
            { s: "What did the stamp say to the envelope?", p: "Stick with me and we'll go places!" },
            { s: "What do you call a cow with no legs?", p: "Ground beef!" },
            { s: "What did the zero say to the eight?", p: "Nice belt!" },
            { s: "Why did the student eat his homework?", p: "Because the teacher said it was a piece of cake!" },
            { s: "How do you organize a space party?", p: "You planet!" },
            { s: "What kind of shoes do ninjas wear?", p: "Sneakers!" },
            { s: "What do you call a pile of kittens?", p: "A meow-ntain!" },
            { s: "Why did the tomato turn red?", p: "Because it saw the salad dressing!" },
            { s: "What falls but never hits the ground?", p: "The temperature!" },
            { s: "What do you call a fish with no eyes?", p: "A fsh!" },
            { s: "Why was the belt arrested?", p: "For holding up a pair of pants!" },
            { s: "What's a skeleton's favorite snack?", p: "Ribs!" },
            { s: "What do you call a funny mountain?", p: "Hill-arious!" },
            { s: "What fruit do twins love?", p: "Pears!" },
            { s: "How does a penguin build its house?", p: "Igloos it together!" },
            { s: "Why did the mushroom go to the party?", p: "Because he was a fun-gi!" },
            { s: "What did the sink say to the toilet?", p: "You look flushed!" },
            { s: "Why can't you give Elsa a balloon?", p: "Because she'll let it go!" },
            { s: "What do you call a duck that gets all A's?", p: "A wise quacker!" },
            { s: "What's brown and sticky?", p: "A stick!" },
            { s: "What did the grape do when he got stepped on?", p: "Nothing, he just let out a little wine!" },
            { s: "Why are spiders such good swimmers?", p: "They have webbed feet!" },
            { s: "What do you call a fly without wings?", p: "A walk!" },
            { s: "Why are frogs so happy?", p: "They eat whatever bugs them!" },
            { s: "What did the buffalo say to his son when he left?", p: "Bison!" },
            { s: "Why did the man put his money in the freezer?", p: "He wanted cold hard cash!" },
            { s: "What do you call a pig that knows karate?", p: "A pork chop!" },
            { s: "What runs but has no legs?", p: "A refrigerator!" },
            { s: "What's the best way to watch a fly fishing tournament?", p: "On the live-stream!" },
            { s: "What did the pirate say on his 80th birthday?", p: "Aye-matey!" },
            { s: "What do you call an alligator in a vest?", p: "An investigator!" },
            { s: "Why are ghosts so bad at lying?", p: "Because you can see right through them!" }
        ];

        const suits = [
            { icon: '⭐', color: '#FFD166' }, { icon: '💖', color: '#FF6B6B' },
            { icon: '🍀', color: '#06D6A0' }, { icon: '☀', color: '#FF9F1C' },
            { icon: '💎', color: '#118AB2' }, { icon: '🌙', color: '#073B4C' },
            { icon: '🍎', color: '#EF476F' }, { icon: '🎈', color: '#FF6363' },
            { icon: '🌈', color: '#8338EC' }, { icon: '🦄', color: '#FF006E' }
        ];

        let punchlineTimeout;

        function updateSuits() {
            const suit = suits[Math.floor(Math.random() * suits.length)];
            const tr = document.getElementById('icon-tr');
            const bl = document.getElementById('icon-bl');
            tr.textContent = bl.textContent = suit.icon;
            tr.style.backgroundColor = bl.style.backgroundColor = suit.color;
        }

        function clearContent() {
            document.getElementById('main-text').classList.add('fade-out');
            document.getElementById('punchline').classList.remove('show');
            clearTimeout(punchlineTimeout);
        }

        function showContent(text, type, punchline = "") {
            setTimeout(() => {
                const main = document.getElementById('main-text');
                const pLine = document.getElementById('punchline');
                document.getElementById('content-type').textContent = type;
                main.textContent = text;
                main.classList.remove('fade-out');

                if (punchline) {
                    pLine.textContent = punchline;
                    punchlineTimeout = setTimeout(() => {
                        pLine.classList.add('show');
                    }, 2500);
                } else {
                    pLine.textContent = "";
                }
            }, 300);
        }

        document.getElementById('btn-compliment').addEventListener('click', () => {
            clearContent();
            updateSuits();
            const text = compliments[Math.floor(Math.random() * compliments.length)];
            showContent(text, "Compliment");
        });

        document.getElementById('btn-joke').addEventListener('click', () => {
            clearContent();
            updateSuits();
            const joke = jokes[Math.floor(Math.random() * jokes.length)];
            showContent(joke.s, "Joke", joke.p);
        });

        // Background star generator
        function createStars() {
            const container = document.getElementById('star-field');
            const starCount = 150;
            
            for(let i=0; i<starCount; i++) {
                const star = document.createElement('div');
                star.className = 'star';
                
                // Random position
                const x = Math.random() * 100 + '%';
                const y = Math.random() * 100 + '%';
                
                // Random size (some small, some slightly larger)
                const size = (Math.random() * 2 + 1) + 'px';
                
                // Random animation duration
                const duration = (Math.random() * 3 + 2) + 's';
                const delay = (Math.random() * 5) + 's';
                
                star.style.left = x;
                star.style.top = y;
                star.style.width = size;
                star.style.height = size;
                star.style.setProperty('--duration', duration);
                star.style.animationDelay = delay;
                
                container.appendChild(star);
            }
        }

        document.addEventListener('DOMContentLoaded', () => {
            createStars();
            updateSuits();
        });
   