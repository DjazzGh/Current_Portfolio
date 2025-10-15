import CustomButton from './CustomButton';
import DownloadButton from './DownloadButton';

function Hero() {
  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      console.error(`Element with ID ${id} not found`);
    }
  };

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = './cv.pdf';
    link.download = 'Ghomari_Djazia_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

    return (
      <section className="hero" id="hero">
        <div className="profile-container">
          <span role="img" aria-label="Profile" className="profile-img">
           <img src="./pic4.jpeg" width="100px" height="150px" alt="Profile"/>
          </span>
        </div>
        <h1 className="typewriter">Ghomari Djazia</h1>
        <p>
       Full Stack Web Developer with a passion for AI and cybersecurity.
        </p>
        <div className="button-container">
          <CustomButton onClick={() => handleScroll('contact')}>Get In Touch</CustomButton>
          <DownloadButton onClick={handleDownload}>Download CV</DownloadButton>
        </div>
      </section>
    );
  }
  export default Hero;