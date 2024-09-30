import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import copycopy from "../assets/img/copycopy.JPG";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "Web Developer", "Web Designer", "UI/UX Designer" ];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <span className="tagline">Welcome to my Portfolio</span>
                <h1>{`Hi! I'm Anugrah Sivadasan`} <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Web Developer", "Web Designer", "UI/UX Designer" ]'><span className="wrap">{text}</span></span></h1>
                  <p>I’m Anugrah Sivadasan, a dedicated MERN stack developer with a strong foundation in front-end and back-end web development. With expertise in MongoDB, Express.js, React, and Node.js, I specialize in building dynamic and responsive web applications that focus on user experience and seamless functionality. My passion for coding is reflected in my ability to design and implement creative solutions using technologies like HTML, CSS, JavaScript, Bootstrap, and React.

I’ve built and contributed to a range of projects, from clone websites like Nike and Google Play Store to functional applications like a BMI calculator and a Fantra Drink website with interactive elements. I’m also proficient in using GSAP for animations and have experience in API integration and state management in React applications.

With a keen eye for detail and a drive for continuous learning, I’m always looking to expand my skillset and collaborate on innovative projects. My goal is to create applications that are not only technically sound but also visually compelling and user-friendly.

Feel free to explore my projects and get in touch for collaboration!</p>
                  <button onClick={() => console.log('connect')}>Let’s Connect <ArrowRightCircle size={25} /></button>
              </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                 <img 
  src="https://static-00.iconduck.com/assets.00/web-developer-illustration-1004x1024-wcqgbag3.png"
  alt="Header Img" 
  style={{ 
    width: '450px', 
    height: '450px', 
    borderRadius: '0%', 
    objectFit: 'cover' ,
    boxShadow:'2px,4px,6px'
    
  }} 
/>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
