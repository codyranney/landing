import { Link } from 'react-router-dom';
import Logo from '../Components/Logo';
import Plan from '../Components/Plan';
import plans from '../data/plans';
import withRouter from '../utils/withRouter';
import './Landing.scss';
import styled from 'styled-components';

const LandingPage = () => {
  return (
    <div data-component="LandingPage">
      <div
        className="banner"
        style={{ backgroundImage: 'url(/banner-background.png)' }}
      >
        <Link className="banner-button" to="/login">
          Login / Signup
        </Link>

        <Logo className="logo" style={{ height: 'initial' }} />
      </div>

      <div className="container">
        <h1 className="text-5xl mb-8 text-blue-500">See what we are all about below.</h1>

        <div className="mb-16">
          <p className="text-lg mb-5">
            Welcome to our AI-powered platform that can transform your text
            input into high-quality images, job ads, emails, and even code! With
            our innovative technology, you can bring your ideas to life with
            ease and efficiency.
          </p>
          <p className="text-lg mb-5">
            - Image Creation: With just a few simple lines of text, you can
            create a stunning image with Our AI-powered platform that uses
            cutting-edge algorithms to generate images that perfectly match your
            description.
          </p>

          <p className="text-lg mb-5">
            - Content Creation: Our platform can also generate engaging and
            persuasive content like emails and job ads. Simply input your
            requirements and let our AI do the rest. You'll receive polished
            content that's sure to make an impact.
          </p>

          <p className="text-lg mb-5">
            - Code Generation and Teaching: Our AI platform can help you learn
            and create code through a user-friendly chat interface. Whether
            you're a beginner or an experienced coder, our platform can help you
            develop your skills and produce high-quality code.
          </p>

          <p className="text-lg mb-5">
            - Chat-AI: Our super powerful AI assistant that can help you with
            complex tasks like creating code or answering questions and can even
            look for syntax errors in code. With Chat-AI, you'll have access to
            the latest AI technology and be able to get things done faster and
            more efficiently than ever before.
          </p>

          <p className="text-lg mb-5">
            Our platform is designed to help you achieve your goals quickly and
            easily. Whether you're looking to create stunning visuals, write
            persuasive content, or develop your coding skills, our AI-powered
            platform is the perfect tool for you. Try it out today and discover
            the power of AI for yourself!
          </p>
        </div>

        <h1 className="text-center text-5xl mb-8 text-blue-500">Sample Image Gallery Below!</h1>
        

        <div className="mb-16">
          <h3 className="text-center text-blue-500 text-3xl mb-10">Credits</h3>
          <li>1 credit per featured tool use.</li>
          <li>1.5 credits per high quility image.</li>
          <li>.75 credit per image upscale.</li>
          <li>1 credit per image edit.</li>
          <li>1 credit per image variation.</li>
          <li>.25 credits when using Chat-Ai. </li>
        </div>

        <h3 className="text-center text-blue-500 text-3xl mb-10">Plans and Pricing</h3>

        <div className="grid grid-cols-1 gap-12 mt-4 lg:grid-cols-3 px-4 lg:px-0 mb-20">
          {Object.keys(plans).map((planName) => (
            <Plan key={planName} planName={planName} href="/login" />
          ))}
        </div>

        <h3 className="text-center text-3xl text-blue-500 mb-10">Sample Gallery</h3>
        <ImagesGrid className="imagesGrid">
          {images.map((image, i) => (
            <img key={i} src={image} />
          ))}
        </ImagesGrid>

        <h4 className="text-2xl text-center text-blue-500 mb-4">Contact Us</h4>

        <a
          href="mailto:Contact@Code-e.Ai"
          className="text-2xl block text-center"
        >
          Email: Contact@Code-e.Ai
        </a>
      </div>

      <div></div>
    </div>
  );
};

const ImagesGrid = styled.div`
  display: grid;
  tem
`;

const images = [
  '/images-samples/1.png',
  '/images-samples/5.png',
  '/images-samples/3.png',

  '/images-samples/4.png',
  '/images-samples/7.png',
  '/images-samples/6.png',

  '/images-samples/2.png',
  '/images-samples/8.png',
  '/images-samples/9.png',

  '/images-samples/10.png',
  '/images-samples/11.png',
  '/images-samples/12.png',

  '/images-samples/13.png',
  '/images-samples/14.png',
  '/images-samples/15.png',
];



export default withRouter(LandingPage);
