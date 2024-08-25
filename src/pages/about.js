import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import '../assets/css/about.css'

export default function About() {
  return (
    <div className='abt'>
        <Header/>
        <div className='h-w'>
            <video autoPlay loop muted className="background-video">
               <source src="https://cdn.kastatic.org/videos/homepage-background.mp4" type="video/mp4" />
               Your browser does not support the video tag.
            </video>
            <h1>Our Mission is to offer an interactive and engaging storytelling experience for children, enhancing their literacy and cognitive skills.
            </h1>
        </div>
        <div className='personalized'>
            <h1>A personalized learning resource for children</h1>
            <p>With interactive stories, educational games, and a personalized learning journey, Storylearn empowers young learners to explore, imagine, and learn at their own pace. Designed for children of all 7-12, Storylearn covers essential skills such as reading, listening comprehension, creativity, and critical thinking. Through engaging narratives, synchronized audio, and visually stimulating content, Storylearn focuses on immersive learning experiences that help children build strong cognitive and literacy foundations, preparing them for future academic success and lifelong learning.</p>
        </div>
        <div className='img-row'>
            <img src='https://cdn.kastatic.org/images/about/product_images/volume5.gif'/>
            <img src='https://cdn.kastatic.org/images/about/product_images/about_withgifs-07.jpg'/>
            <img src='https://cdn.kastatic.org/images/about/product_images/about_withgifs-12.jpg'/>
            <img src='https://cdn.kastatic.org/images/about/product_images/about_withgifs-07.jpg'/>
        </div>

        <div className='personalized'>
            <h1>Free Customizable Tools for Educators</h1>
            <p>As part of our future plans, Storylearn will introduce a suite of free tools designed to empower educators. Teachers will be able to create and customize their own stories, lessons, and educational games, tailoring content to meet the unique needs of their students. These tools will enable educators to craft personalized learning experiences, incorporating specific themes, vocabulary, and subject matter that align with their curriculum. By providing the flexibility to design interactive and engaging educational materials, Storylearn aims to support teachers in fostering a dynamic and inclusive learning environment for all children.</p>
        </div>
        <div className='img-row'>
            <img src='https://cdn.kastatic.org/images/about/product_images/about_withgifs-09.jpg'/>
            <img src='https://cdn.kastatic.org/images/about/product_images/about_withgifs-13.jpg'/>
            <img src='https://cdn.kastatic.org/images/about/product_images/graph.gif'/>
            <img src='https://cdn.kastatic.org/images/about/product_images/about_withgifs-10.jpg'/>
        </div>
        <div className='donate'>
            <h1>Anyone can learn anything. For free.</h1>
            <p>Education is a human right. We are a nonprofit because we believe in a free, world-class education for anyone, anywhere. Instead of ads or subscriptions, we are supported by individual contributions from people like you. Please join us today.</p>
            <button className='donate-btn'>Donate</button>
        </div>
        <Footer/>
    </div>
  )
}
