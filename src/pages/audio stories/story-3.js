import React, { useState, useEffect, useRef } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import '../../assets/css/story.css';

// Import your images
import image1 from '../../assets/images/S3I1.jpeg';
import image2 from '../../assets/images/s3i2.jpeg';
import image3 from '../../assets/images/s3i3.jpeg';

const Story = () => {
    const story = [
        "In the heart of the Whispering Woods Academy, where the moonlight filtered through the treetops like a silver mist, a young student named Orion Midnight stepped into the grand hall. His midnight-black hair gleamed in the flickering torchlight, and his piercing emerald green eyes shone with curiosity as he scanned the bustling room.",
        
        "Professor Luminaria, with her silver hair and twinkling sapphire blue eyes, welcomed Orion with a warm smile. 'Ah, our new student has arrived! I'm Professor Luminaria, your guide to the wonders of magic.' Orion's eyes widened as he shook her hand, feeling a spark of magic in her touch.",
        
        "As the students settled into their lessons, Orion's curiosity got the better of him. He wandered into the academy's ancient library, where dusty tomes and mysterious artifacts whispered secrets to each other. That's when he stumbled upon a hidden book, bound in black leather with silver runes that shimmered like the stars. The title, 'Moonwhisper Spells,' was etched in elegant script on the cover.",
        
        "'Wow, this looks like a treasure!' Orion exclaimed, his fingers tracing the intricate runes. Suddenly, the book creaked open, releasing a puff of glittering moon dust. The pages rustled, revealing elaborate drawings of crescent moons, sparkling stars, and mystical creatures.",
        
        "Professor Luminaria appeared beside Orion, her eyes twinkling with excitement. 'Ah, you've found the legendary Moonwhisper Spells! A powerful book, hidden away for centuries. It's said to hold the secrets of our realm's magic.'",
        
        "Orion's eyes grew wide with wonder. 'What magic?' he asked, his voice barely above a whisper.",
        
        "'The magic that once flowed through our realm like a shimmering river,' Professor Luminaria replied, her voice filled with a hint of sadness. 'But a dark and ancient force has disrupted the balance, and our magic has begun to fade.'",
        
        "Just then, a faint rustling echoed from the shadows. Raven Nightshade emerged, her raven-black wings unfolding like a dark umbrella. Her piercing crimson eyes fixed on Orion, and a shiver ran down his spine.",
        
        "'Who are you?' Orion asked, trying to sound brave.",
        
        "'I am Raven Nightshade,' she replied, her voice as smooth as the night sky. 'And I've been waiting for you, Orion Midnight. You see, I've been searching for the Moonwhisper Spells for a very long time...'",
        
        "'I don't understand,' Orion said, his curiosity getting the better of him.",
        
        "'You will, soon enough,' Raven Nightshade whispered, her eyes glinting with a hint of mystery. 'The fate of our realm's magic depends on it.'",
        
        "As Raven Nightshade vanished into the shadows, Orion felt a thrill of excitement mixed with a pinch of fear. He looked up at Professor Luminaria, who smiled reassuringly. 'Don't worry, Orion. We'll face whatever comes our way, together.'",
        
        "With the Moonwhisper Spells in hand, Orion, Professor Luminaria, and their friends set out on a perilous quest to restore the balance of magic in the realm. And as they embarked on their journey, the moon rose high in the night sky, guiding them through the whispering woods and into the unknown."
      ];
            

  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const utteranceRef = useRef(null);

  // Combine story into a single text for highlighting
  const fullStory = story.join(' ');
  const words = fullStory.split(' ');

  // Create a map of word start positions
  const wordStartPositions = {};
  let position = 0;
  words.forEach((word, index) => {
    wordStartPositions[index] = position;
    position += word.length + 1; // +1 for the space
  });

  const handlePlay = () => {
    const utterance = new SpeechSynthesisUtterance(fullStory);

    utteranceRef.current = utterance;

    utterance.onboundary = (event) => {
      if (event.name === 'word') {
        // Calculate global word index
        const wordIndex = fullStory.substring(0, event.charIndex).split(' ').length - 1;
        setCurrentWordIndex(wordIndex);
      }
    };

    utterance.onend = () => {
      setCurrentWordIndex(words.length);
      setIsPlaying(false);
    };

    setIsPlaying(true);
    window.speechSynthesis.speak(utterance);
  };

  const handlePause = () => {
    if (utteranceRef.current) {
      window.speechSynthesis.pause();
      setIsPlaying(false);
    }
  };

  const handleResume = () => {
    if (utteranceRef.current) {
      window.speechSynthesis.resume();
      setIsPlaying(true);
    }
  };

  const handleButtonClick = () => {
    if (isPlaying) {
      handlePause();
    } else if (window.speechSynthesis.speaking) {
      handleResume();
    } else {
      handlePlay();
    }
  };

  useEffect(() => {
    return () => {
      if (utteranceRef.current) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  const renderHighlightedText = (paragraph) => {
    const fullParagraph = paragraph;
    const paragraphWords = fullParagraph.split(' ');

    return paragraphWords.map((word, index) => {
      const wordIndex = words.findIndex(w => w === word);
      return (
        <span key={index} style={{ backgroundColor: wordIndex === currentWordIndex ? '#4D2C5E' : 'transparent', color: wordIndex === currentWordIndex ? 'white':'black' }}>
          {word}{' '}
        </span>
      );
    });
  };

  const renderParagraphsWithImages = () => {
    return story.map((paragraph, index) => (
      <React.Fragment key={index}>
        <p>{renderHighlightedText(paragraph)}</p>
        {index === 0 && <img src={image1} alt="Scene 1" className="story-image" />}
        {index === 4 && <img src={image2} alt="Scene 2" className="story-image" />}
        {index === 8 && <img src={image3} alt="Scene 3" className="story-image" />}
      </React.Fragment>
    ));
  };

  return (
    <div>
      <Header />
      <div className='display disp'>
        <h2><a href='#'>Track 2</a>/ <a href='#'>Audio Stories</a>/ <a href='#'>The Lost Enchantment</a> </h2>
      </div>
      <div className='story'>
        <h1>The Lost Enchantment</h1>
         <button className='bt' onClick={handleButtonClick}>
          {isPlaying ? 'Pause' : 'Play'}
        </button>
        {renderParagraphsWithImages()}
      </div>
      <Footer/>
    </div>
  );
};

export default Story;
