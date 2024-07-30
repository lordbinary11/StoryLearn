import React, { useState, useEffect, useRef } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import '../../assets/css/story.css';

// Import your images
import image1 from '../../assets/images/s4i2.avif';
import image2 from '../../assets/images/s4i1.avif';
import image3 from '../../assets/images/s4i3.avif';

const Story = () => {
    const story = [
        "In a small village, there was a curious girl named Amina. She had curly black hair and bright brown eyes. One sunny morning, Amina decided to explore the nearby enchanted forest.",
        "As she walked through the forest, she admired the tall trees and listened to the singing birds. Everything was colorful and magical. She found a big, old oak tree with golden leaves that sparkled in the sunlight.",
        "Suddenly, the oak tree spoke. 'Hello, Amina,' it said. 'I am the Guardian of the Forest. We need your help.' Amina was excited and asked, 'How can I help?'",
        "The Guardian told Amina that a playful sprite had stolen a magical Moonstone that protected the forest. Without it, the forest was losing its magic, and the creatures were sad. Amina agreed to help find the Moonstone.",
        "Amina followed a path of glittering fairy dust deeper into the forest. She met friendly animals who wanted to help her. An old owl gave her a magical feather to guide her, and a rabbit gave her a map of the forest.",
        "Amina reached a hidden cave where the sprite was hiding. The sprite, with tiny wings and a cheeky smile, was holding the Moonstone. 'Why did you take it?' Amina asked. The sprite said he wanted some magic for his own home but didn’t know it was so important.",
        "Amina offered to help the sprite find another way to bring magic to his home. She showed him that by sharing kindness and joy, he could make his own magic. The sprite agreed and gave back the Moonstone, promising to spread happiness.",
        "Amina returned the Moonstone to the Guardian of the Forest. The Guardian thanked her, and the forest’s magic came back. The creatures celebrated with a big party for Amina.",
        "As the sun set, the Guardian gave Amina a necklace with a Moonstone pendant. 'This is a thank you gift,' said the Guardian. 'Wear it and remember the magic you helped restore.'",
        "Amina went back to her village with a happy heart and a new magical friend. She visited the forest often, and her adventures became the stories she shared with her friends. The magic of the forest and Amina’s kindness kept shining bright."
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
        <h2><a href='#'>Track 2</a>/ <a href='#'>Audio Stories</a>/ <a href='#'>Amina's Magical Adventure</a> </h2>
      </div>
      <div className='story'>
        <h1>Amina's Magical Adventure</h1>
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
