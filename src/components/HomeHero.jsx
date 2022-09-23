import styled from "styled-components";
import { motion } from "framer-motion";

const HomeHero = () => {
  return (
    <Section>
      <Container>
        <Text>
          <Hide>
            <h1>
              Finding <span>High-Value</span>
            </h1>
          </Hide>
          <Hide>
            <h1> Nigerian Tech Talents</h1>
          </Hide>
          <Hide>
            <h1>Just Got Easy</h1>
          </Hide>
          <p>
            Jobs Meet Devs connects companies with top vetted developers,
            designers, product managers, and project managers. Leave the tech
            headache to us and focus on other things that bring the big bucks
          </p>
          <div>
            <a href="#" className="homeHeroCTA">
              Connect me
            </a>
          </div>
        </Text>
      </Container>
    </Section>
  );
};

const Section = styled.section`
  margin-top: 12vh;
  width: 100%;
`;

const Container = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 85%;
  margin: 0 auto;
  padding: 2.5rem 0;
  border-bottom: 0.5px solid rgba(0, 0, 0, 0.1);
  article {
    width: 60%;
    min-height: 75vh;
  }
`;

const Text = styled(motion.article)`
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  h1 {
    font-family: "WhyteInktrap", sans-serif;
    font-size: 2.5rem;
    line-height: 50px;
    color: ${(props) => props.theme.text1};
    span {
      color: ${(props) => props.theme.secondary};
    }
  }
  p {
    font-family: "Open Sans", sans-serif;
    font-size: 1.2rem;
    line-height: 30px;
    margin: 2rem 0 4rem;
    color: ${(props) => props.theme.text2};
  }
  div {
    .homeHeroCTA {
      background-color: ${(props) => props.theme.primary};
      padding: 1.3rem 2rem;
      border-radius: 1rem;
      font-size: 1.1rem;
      font-family: "GTWalsheimPro", sans-serif;
      color: #fff;
      width: 27rem;
      height: 4.5rem;
    }
  }
`;

const Hide = styled.div`
  overflow: hidden;
`

export default HomeHero;
