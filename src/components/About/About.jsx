import addContact from 'images/add-contact.png';
import editContact from 'images//edit-contact.png';
import filtersContact from 'images/filters.png';
import signIn from 'images/sign-in.png';

import {
  Container,
  Section,
  HeroTitle,
  Text,
  Span,
  SecondTitle,
  Item,
  ItemIcon,
  ItemSpan,
  ImageWrapper,
  Image,
  LinkToAuth,
} from './About.styled';

const About = () => {
  return (
    <Container>
      <Section>
        <HeroTitle>Welcome to our web application, Phonebook!</HeroTitle>
        <Text style={{ marginBottom: 10 }}>
          <Span>Phonebook</Span> is a <b>unique website</b> that provides users
          with access to a private phone directory with various editing
          capabilities. Unlike similar websites, all our information is
          available completely free of charge.
        </Text>
        <Text>
          In our application, you can register and gain access to a convenient
          contacts book. It allows you to easily store all your important
          contacts and have quick access to them.
        </Text>
      </Section>
      <section>
        <SecondTitle>
          The key features of our contacts book include:
        </SecondTitle>
        <ul>
          <Item>
            <Text>
              <ItemSpan>
                <ItemIcon /> Registration:
              </ItemSpan>{' '}
              Experience the simplicity and speed of our registration process.
              Create your account or seamlessly log in to your existing profile
              within our application. By registering, you unlock the full
              potential of our contacts book, ensuring that your personal
              contacts are securely stored and readily accessible whenever and
              wherever you need them. Say goodbye to the hassle of manually
              managing your contacts across multiple devices.
            </Text>
            <ImageWrapper>
              <Image src={signIn} alt="Sign In User Images" />
            </ImageWrapper>
          </Item>
          <Item>
            <Text>
              <ItemSpan>
                <ItemIcon />
                Adding Contacts:
              </ItemSpan>{' '}
              Adding new contacts has never been easier. Our intuitive interface
              allows you to effortlessly input the name and phone number of each
              contact. With just a few clicks, you can swiftly populate your
              contacts book with important individuals, whether they are
              friends, family members, colleagues, or business associates. Enjoy
              the convenience of having all your important connections in one
              centralized location.
            </Text>
            <ImageWrapper>
              <Image src={addContact} alt="Add Contact Images" />
            </ImageWrapper>
          </Item>
          <Item>
            <Text>
              <ItemSpan>
                <ItemIcon />
                Search Filter:
              </ItemSpan>{' '}
              Our robust search filter empowers you to find the desired contact
              with remarkable speed and precision. No more scrolling through
              endless lists or manually searching for specific names. Simply
              enter a partial name, and our advanced filtering mechanism will
              instantly narrow down the results to display the most relevant
              matches. Spend less time searching and more time connecting with
              the people who matter to you.
            </Text>
            <ImageWrapper>
              <Image src={filtersContact} alt="Filter Contact Images" />
            </ImageWrapper>
          </Item>
          <Item>
            <Text>
              <ItemSpan>
                <ItemIcon />
                Contact Editing:
              </ItemSpan>{' '}
              We understand that contact information is dynamic and subject to
              change. Our editing feature provides you with the flexibility to
              modify and update contact details at any time. Whether you need to
              correct a name, update a phone number, our user-friendly interface
              makes the process seamless. Enjoy the peace of mind that comes
              with effortlessly managing and maintaining accurate contact
              information. As relationships evolve, some contacts may become
              obsolete. Our platform ensures swift and efficient contact
              deletion. Keep your list organized, clutter-free, and up to date.
            </Text>
            <ImageWrapper>
              <Image src={editContact} alt="Edit Contact Images" />
            </ImageWrapper>
          </Item>
        </ul>
        <Text>
          Experience the power of our contacts book, where convenience, speed,
          and ease-of-use are at the forefront. Streamline your contact
          management, save valuable time, and never miss an important connection
          again. We strive to provide reliability and simplicity in working with
          the contacts book, so you can effortlessly manage your contacts and
          have access tothem anytime.{' '}
          <LinkToAuth to="/register">Join us today</LinkToAuth> and discover a
          new level of efficiency and control in managing your vital contacts!
        </Text>
      </section>
    </Container>
  );
};

export default About;
