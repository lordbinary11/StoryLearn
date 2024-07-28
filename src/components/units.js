import img1 from '../assets/images/img1.png'
import img2 from '../assets/images/img2.png'
import img3 from '../assets/images/img3.png'
import img4 from '../assets/images/img4.png'
import img5 from '../assets/images/img5.png'
import img6 from '../assets/images/img6.png'
import img7 from '../assets/images/img7.png'
import img8 from '../assets/images/img8.png'

import { HiFolder,HiPencil,HiPlay } from 'react-icons/hi';


export const units = [
    {
      id: 1,
      title: 'Numerical Literary',
      subtitle: '8 Units',
      logo: '📘',
      link: '/track1/numerical_literacy/1',
      description: {
        intro: "Welcome to the Numerical Literacy adventure!",
        about: "Numerical Literacy is all about having fun with numbers and learning how they work in the world around us. Designed especially for kids aged 7-10, this course helps you become a math whiz while having a great time!",
        discovery: {
          title: "What You’ll Discover",
          items: [
            "Fun Lessons: Our lessons are full of exciting videos that explain math ideas in a way that's easy to understand. You'll watch fun animations and see cool examples that make learning about numbers a blast!",
            "Interactive Exercises: After each lesson, you can try out fun exercises and games that help you practice what you've just learned. These activities are designed to be enjoyable and give you a chance to show off your new skills.",
            "Cool Challenges: You’ll get to solve interesting problems and puzzles that make learning feel like a game. Every challenge helps you get better at math and prepares you for the next adventure!",
            "Track Your Progress: As you work through the course, you’ll see how much you’ve learned and can even earn rewards for completing challenges. It’s a fun way to keep track of how you’re doing!"
          ]
        },
        learning: {
          title: "What You’ll Learn",
          items: [
            "Basic Math Skills: Addition, subtraction, multiplication, and division in a fun and easy way.",
            "Fractions and Decimals: Understanding how to work with fractions and decimals through playful activities.",
            "Percentages: Learning what percentages are and how to use them in everyday situations.",
            "Ratios and Proportions: Exploring ratios and proportions with exciting examples and games.",
            "Reading Data: Looking at charts and graphs to see what they tell us in a fun and simple way."
          ]
        },
        loveIt: "Our Numerical Literacy course is designed to make learning math fun and exciting for kids just like you. With lots of videos, games, and cool challenges, you'll be having so much fun that you won't even realize how much you’re learning. Join us and become a math superstar!"
      }
    },
    { 
      id: 2,
      title: 'UNIT 1', 
      link: '/track1/numerical_literacy/2',
      subtitle: 'Add and Subtract within 20', 
      about: "In this unit, we'll learn how to add and subtract small numbers in a fun and interactive way, develop confidence with these basic math skills, and build a strong foundation for future learning.", 
      section1: {
          title: 'Add within 20',
          items: [
              {logo: 'HiFolder', text: 'Add and subtract within 20: FAQ',link_1:'/unit1'},
              {logo: 'HiPlay', text: 'Add and subtract within 20: FAQ',link_1:'/unit1'},
              {logo: 'HiPlay', text: 'Add and subtract within 20: FAQ',link_1:'/unit1'},
              {logo: 'HiPlay', text: 'Add and subtract within 20: FAQ',link_1:'/unit1'},
          ]
      }
    },
    { id: 3,link: '/content/3', title: 'Unit Three', subtitle: 'Third Subtitle' },
    { id: 4,link: '/content/4', title: 'Unit Four', subtitle: 'Fourth Subtitle' },
    { id: 5,link: '/content/5', title: 'Unit Five', subtitle: 'Fifth Subtitle' },
    { id: 6,link: '/content/6', title: 'Unit Six', subtitle: 'Sixth Subtitle' },
    { id: 7,link: '/content/7', title: 'Unit Seven', subtitle: 'Seventh Subtitle' },
  ];


  export const unit1 = [
    {
      id: 1,
      title: 'Add and subtract within 20:FAQ',
      subtitle: 'Frequently asked questions about adding  and subtracting within 20.',
      logo: HiFolder,
      link: '/track1/numerical_literacy/1',
      question1: {
        title: "How can we use place value blocks to help add and subtract?",
        p1: "We can use place value blocks to represent each number we want to add, and then combine them to find the total.",
        p2: "For example, if we want to add 12+6 we can start by drawing 12 blocks and then make a second group of place value blocks that has 6 blocks After we put them together, we will see there are 18 blocks",
        img1: img1,
        p3: "For subtraction, we can use the blocks to represent the larger number, and then take away the appropriate number of blocks to find the difference.",
        p4: "For example, to subtract 14-8, we can draw a set of blocks that has 14 place value blocks. Then we can take away 8 place value blocks from the 14 blocks. Now there are 6 blocks left.",
        img2: img2
      },
      question2: {
        title: "How can we use ten frames to help add and subtract?",
        p1: "Ten frames can be helpful for adding and subtracting because they allow us to visually see the numbers we're working with. To add using ten frames, we can fill in the frames with the numbers we want to add.",
        p2: "For example, if we want to add 8 and 4, we could fill in eight squares on one ten frame and four squares on another ten frame. By combining the two frames, we can see that the sum is 12",
        img3: img3,
        p3: "To subtract using ten frames, we can fill in the frame with the larger number and then remove squares to represent the smaller number. For example, if we want to subtract 3 from 7, we would fill in seven squares on the ten frame and then remove three squares. This would leave us with four squares filled in, which represents the difference.",
        img4: img4,
      },
      question3: {
        title: "How can we use number lines to help add and subtract?",
        p1: "We can use the number line to visually represent the two numbers being added or subtracted. For example, to solve 7+9, we can mark down both 7 and 9 on the number line. Then we can see that adding the two numbers together will result in a sum 16.",
        img5: img5,
        p2: "To solve 12-4, mark 12 on the number line. Then we can subtract 4 to see that the jump ends at 8",
        img6: img6,
        
      },
      question4: {
        title: "How can we use arrays to help us add?",
        p1: "We can use arrays to represent repeated addition! For example, an array of 5 rows and 3 columns can be thought of as adding 5 threes",
        img7: img7
        
      },
      question5: {
        title: "Where do we use addition and subtraction in the real world?",
        p1: "We use addition and subtraction all the time! For example, we might use them when we're counting money, dividing up snacks, or measuring ingredients for a recipe.",    
      }
    },
    { 
      id: 2,
      logo: HiPlay,
      title: 'Adding within 20 using place value blocks', 
      about: "Unit 1", 
      video: 'https://www.youtube.com/embed/dDv4FTqKBmY?si=FpcIhlgr72g4ZV8z'
    },
    { id: 3,
        logo: HiPlay,
        title: 'Adding within 20 using ten frames', 
        about: "Unit 1", 
        video: 'https://www.youtube.com/embed/UzQnoXrJg1o?si=-xOJyXwJUbqn0GWS'
    },
    { id: 4,
        logo: HiPlay,
        title: 'Adding 7 + 6', 
        about: "Unit 1", 
        video: 'https://www.youtube.com/embed/ZgzpTx-s9Zo?si=zL54OMhK1Shk0d-j'
    },
    { id: 5,
        logo: HiPlay,
        title: 'Adding 8 + 7', 
        about: "Unit 1", 
        video: 'https://www.youtube.com/embed/AK0NZITv5Ns?si=6aXhdLe0sTHWsXvG'
    },
    {
        id:6,
        logo: HiPencil,
        title: "Exercise: Add within 20 visually",
        img8:img8
    }
  ];