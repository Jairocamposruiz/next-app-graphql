import { Footer } from '@components/Footer/Footer';
import { Container } from '@components/Layout/Container';
import { Navbar } from '@components/Navbar/Navbar';

interface Props {
  children: React.ReactNode;
}

export const Layout = ({ children }: Props) => {
  return (
    <div
      className={`flex flex-col min-h-screen justify-between`}
    >
      <Navbar />
      <Container>
        {children}
      </Container>
      <Footer />
    </div>
  );
};
