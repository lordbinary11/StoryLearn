import React, { useState, useEffect, useRef } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import '../../assets/css/story.css';

// Import your images
import image1 from '../../assets/images/s2i1.jpeg';
import image2 from '../../assets/images/s2i2.jpeg';
import image3 from '../../assets/images/s2i3.jpeg';

const Story = () => {
    const story = [
        "Lilyanna Starlight sat at her desk, her curly blonde hair bouncing with each excited bounce of her leg. She was always eager to learn new things, and today's lesson with Professor Orion Brightstone was going to be the most thrilling one yet! As the professor wrote complicated equations on the blackboard, Lilyanna's bright green eyes sparkled with curiosity.",
        
        "Professor Brightstone, with his wild shock of white hair and piercing blue eyes, smiled at his diligent student. 'Ah, Lilyanna, I see you're already solving the problem in your head! Am I right, my star student?' Lilyanna nodded enthusiastically, her ponytail bobbing up and down.",
        
        "Just then, a strange shimmering light appeared on the wall behind the professor. The class gasped as a glowing portal swirled to life, filling the room with an otherworldly glow. 'What in the galaxy...?' Professor Brightstone trailed off, his eyes wide with wonder.",
        
        "'Is that a magical portal, Professor?' Lilyanna asked, her voice barely above a whisper. The professor nodded, his white hair quivering with excitement. 'It seems we have a mystery on our hands, class! Who's ready to explore?'",
        
        "Blossom Bloom, Lilyanna's gentle classmate with short, spiky pink hair and big brown eyes, raised her hand timidly. 'I-I think I am, Professor?' The professor beamed at Blossom. 'Excellent! We'll need all the help we can get! Lilyanna, would you like to be our team leader?'",
        
        "Lilyanna's face lit up like a star. 'Really, Professor? Me?' Professor Brightstone nodded. 'You're the only one who can decipher the ancient text etched on the portal. It's a puzzle, and I have a feeling you're the only one who can solve it.'",
        
        "Lilyanna's eyes scanned the glowing portal, her mind racing with possibilities. She took a deep breath, her heart pounding with excitement. 'I think I can do it, Professor. I'll give it a try!'",
        
        "With Blossom and the professor by her side, Lilyanna stepped through the shimmering portal and into a world beyond her wildest dreams. The air was sweet with the scent of honey and flowers, and the skies twinkled like diamonds. A soft voice whispered in Lilyanna's ear, 'Welcome, brave adventurers. The treasure of the Golden Acorn awaits, but first, you must solve the riddles of the ancient ones...'",
        
        "As they journeyed deeper into the fantastical world, the trio encountered talking trees, mischievous sprites, and enchanting creatures that guided them toward the treasure. But they soon realized that they weren't alone – a sneaky thief had stolen the Golden Acorn, leaving a trail of cryptic clues behind.",
        
        "'Ah ha!' Professor Brightstone exclaimed, his eyes twinkling with excitement. 'It seems we have a treasure hunt on our hands! Lilyanna, can you decipher this riddle etched on the ancient stone?' Lilyanna's eyes narrowed, her mind whirling with possibilities. She took a deep breath, her heart pounding with excitement. 'I think I have it, Professor! The answer is...the language of flowers!'"
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
        <h2><a href='#'>Track 2</a>/ <a href='#'>Audio Stories</a>/ <a href='#'>The Brightest Pupil</a> </h2>
      </div>
      <div className='story'>
        <h1>The Brightest Pupil</h1>
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
