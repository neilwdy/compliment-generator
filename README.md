🃏 Playing Card Boost

A delightful, interactive web application that serves as a digital "deck" of positivity and humor. This project features a stylized playing card interface that generates personalized compliments and family-friendly jokes against a serene, twinkling night sky.

✨ Features

Interactive Card UI: A beautifully designed container with the exact dimensions and aesthetic of a professional playing card.

Dynamic "Suits": Every time a button is clicked, the corner icons and colors update randomly, choosing from a variety of symbols (stars, hearts, clovers, etc.).

Dual Content Modes:

Compliments: Over 100 unique, heartwarming affirmations to boost your mood.

Jokes: 50 family-friendly jokes with an animated punchline feature.

Timed Punchlines: To preserve the "comedic timing," joke punchlines appear with a smooth slide-up animation after a 2.5-second delay.

Starry Night Background: A custom-built CSS and JavaScript star field featuring 150 unique stars with individual twinkling animations.

Responsive Design: Fully optimized for mobile, tablet, and desktop viewing.

🛠️ Technologies Used

HTML5: Semantic structure for the card and controls.

CSS3:

Custom properties (variables) for consistent branding.

Flexbox for layout management.

Keyframe animations for twinkling stars and smooth UI transitions.

JavaScript (Vanilla):

DOM manipulation for content updates.

Procedural generation for the star field.

State management for timing joke reveals.

Google Fonts: Utilizes Nunito, Lato, and Bungee for a modern, playful typographic hierarchy.

🚀 How it Works

Initialization: On load, a script generates 150 div elements with random positions and animation delays to create the star field.

The "Suit" System: A suits array stores icon-color pairs. Each interaction triggers updateSuits(), which picks a new pair and applies it to the top-right and inverted bottom-left circles.

Punchline Logic: When a joke is requested, the setup is displayed immediately. A setTimeout function is utilized to trigger the show class on the punchline element after 2500ms, ensuring the user has time to read the setup.

📂 Project Structure

index.html: The single-file entry point containing all HTML structure, CSS styling, and JavaScript logic.

Made with 💖 to bring a smile to your face.
