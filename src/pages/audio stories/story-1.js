import React, { useState, useEffect, useRef } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import '../../assets/css/story.css';

// Import your images
import image1 from '../../assets/images/si1.jpeg';
import image2 from '../../assets/images/si2.jpeg';
import image3 from '../../assets/images/si3.jpeg';

const Story = () => {
  const story = [
    "Once upon a time, in a land far, far away, Lord William and Lady Emma were getting ready for the most magical adventure of their lives. They were going to the moon! The Moon Queen had invited them to a special tea party, and they couldn't wait to see what wonders awaited them.",
    "As they soared through the night sky in their enchanted carriage, the stars twinkled like diamonds above them. Lord William and Lady Emma gazed up at the moon, growing bigger and bigger until they finally landed with a soft thud on its silvery surface.",
    "The Moon Queen herself greeted them, her long, flowing silver hair shining like the moonbeams. 'Welcome, dear friends,' she said, her piercing blue eyes sparkling with kindness. 'I'm so delighted you could join me for tea.'",
    "Twinkle, a tiny fairy with delicate wings and hair as bright as the stars, flitted about their heads, playing a lively tune on her miniature flute. Lord William and Lady Emma clapped with delight, and the Moon Queen smiled. 'Shall we begin our tea party?' she asked, leading them to a beautiful table set with dainty cups and saucers that shone like the stars.",
    "The tea was a magical brew that tasted like moonbeams and starlight. As they sipped their tea, the Moon Queen told them stories of the ancient magic that lived in the moon. Lord William and Lady Emma listened with wide eyes, feeling as though they were part of a wonderful dream.",
    "Suddenly, Twinkle flew up to them, her wings shimmering with excitement. 'Shall we dance with the stars?' she asked, her voice like the tinkling of a tiny bell. The Moon Queen smiled, and with a wave of her hand, the stars began to twinkle and swirl around them.",
    "Lord William and Lady Emma laughed and spun, feeling as though they were dancing on air. The Moon Queen and Twinkle joined in, and together they twirled and leaped across the moon's surface, their footsteps making the stars shine brighter.",
    "As the night wore on, the Moon Queen led them on a magical journey across the moon, showing them hidden craters filled with glittering gemstones and secret caves that shone like diamonds. Lord William and Lady Emma felt as though they were discovering wonders they never knew existed.",
    "As the evening drew to a close, the Moon Queen led them back to their enchanted carriage. 'Thank you for coming to my tea party,' she said, hugging them both tightly. 'Remember, the magic of the moon will always be in your hearts.'",
    "With a final wave, the Moon Queen and Twinkle disappeared into the starry night, leaving Lord William and Lady Emma to drift off to sleep, their hearts full of wonder and their minds full of magical memories."
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

  const handleStop = () => {
    if (utteranceRef.current) {
      window.speechSynthesis.cancel();
      setCurrentWordIndex(0);
      setIsPlaying(false);
    }
  };

  const handleButtonClick = () => {
    if (isPlaying) {
      handleStop();
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
        <h2><a href='#'>Track 2</a>/ <a href='#'>Audio Stories</a>/ <a href='#'>The Moonlit Tea Party</a> </h2>
      </div>
      <div className='story'>
        <h1>The Moonlit Tea Party</h1>
        <button className='bt' onClick={handleButtonClick}>
          {isPlaying ? 'Stop' : 'Play'}
        </button>
        {renderParagraphsWithImages()}
      </div>
      <Footer />
    </div>
  );
};

export default Story;
