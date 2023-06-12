import Container from '../components/Container';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PageHeader from '../components/PageHeader';

const Contact = () => {
  return (
    <div className='contact'>
      <Container>
        <Header />
          <PageHeader title="Contact" />
        <Footer />
      </Container>
    </div>
  );
};
export default Contact;
