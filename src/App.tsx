import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { books } from './booksData';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Special+Elite&display=swap');
  body {
    background: linear-gradient(rgba(20,8,10,0.65), rgba(20,8,10,0.65)), #2d1012 url('https://www.transparenttextures.com/patterns/wood-pattern.png');
    background-repeat: repeat;
    color: #222;
    font-family: 'Special Elite', 'Courier New', Courier, monospace;
    margin: 0;
    padding: 0;
  }
`;

const AppContainer = styled.div`
  display: flex;
  min-height: 100vh;
`;

const Sidebar = styled.nav`
  width: 220px;
  background: #181818;
  padding: 32px 0 32px 24px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  position: sticky;
  top: 0;
  height: 100vh;
  overflow-y: auto;

  @media (max-width: 950px) {
    display: none;
  }
`;

const SidebarList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const SidebarItem = styled.li`
  margin-bottom: 18px;
`;

const SidebarLink = styled.a`
  color: #fff;
  text-decoration: none;
  font-size: 1rem;
  font-family: inherit;
  transition: color 0.2s;
  &:hover {
    color: #e0e0e0;
    text-decoration: underline;
  }
`;

const MainContent = styled.main`
  flex: 1;
  padding: 40px 40px 40px 40px;
  @media (max-width: 950px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
    max-width: 700px;
    width: 100%;
  }
`;

const Header = styled.h1`
  font-size: 2.5rem;
  font-family: inherit;
  color: #fff;
  margin-bottom: 0.5rem;
`;

const SubHeader = styled.div`
  font-size: 1.2rem;
  color: #fff;
  margin-bottom: 2.5rem;
  font-family: inherit;
`;

const BookList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 36px;
`;

const BookCard = styled.section`
  background: #fdf6e3;
  color: #222;
  border-radius: 10px;
  box-shadow: 0 2px 12px rgba(0,0,0,0.08);
  padding: 64px 32px 56px 32px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 32px;
  font-family: inherit;
  max-width: 700px;
  -webkit-mask-image: url('data:image/svg+xml;utf8,<svg width="100%25" height="100%25" viewBox="0 0 100 100" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg"><path d="M0,2 Q5,0 10,2 T20,2 T30,2 T40,2 T50,2 T60,2 T70,2 T80,2 T90,2 T100,2 L100,98 Q95,100 90,98 T80,98 T70,98 T60,98 T50,98 T40,98 T30,98 T20,98 T10,98 T0,98 Z" fill="white"/></svg>');
  -webkit-mask-size: 100% 100%;
  mask-image: url('data:image/svg+xml;utf8,<svg width="100%25" height="100%25" viewBox="0 0 100 100" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg"><path d="M0,2 Q5,0 10,2 T20,2 T30,2 T40,2 T50,2 T60,2 T70,2 T80,2 T90,2 T100,2 L100,98 Q95,100 90,98 T80,98 T70,98 T60,98 T50,98 T40,98 T30,98 T20,98 T10,98 T0,98 Z" fill="white"/></svg>');
  mask-size: 100% 100%;
  border: 1.5px solid #e6ddc4;
  box-shadow: 0 4px 18px 0 rgba(60,40,10,0.10), 0 1.5px 0 #e6ddc4 inset;

  @media (max-width: 950px) {
    flex-direction: column;
    align-items: center;
    padding: 96px 12px 88px 12px;
    gap: 20px;
    -webkit-mask-image: url('data:image/svg+xml;utf8,<svg width="100%25" height="100%25" viewBox="0 0 100 100" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg"><path d="M0,1 Q10,0 20,1 T40,1 T60,1 T80,1 T100,1 L100,99 Q90,100 80,99 T60,99 T40,99 T20,99 T0,99 Z" fill="white"/></svg>');
    mask-image: url('data:image/svg+xml;utf8,<svg width="100%25" height="100%25" viewBox="0 0 100 100" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg"><path d="M0,1 Q10,0 20,1 T40,1 T60,1 T80,1 T100,1 L100,99 Q90,100 80,99 T60,99 T40,99 T20,99 T0,99 Z" fill="white"/></svg>');
  }
`;

const CoverImage = styled.img`
  max-width: 200px;
  width: 100%;
  height: auto;
  border-radius: 4px;
  box-shadow: 0 32px 96px 0 rgba(60,40,10,0.45), 0 8px 48px 0 rgba(60,40,10,0.28), 0 1.5px 0 #e6ddc4 inset;
  background: #fff;
  @media (max-width: 950px) {
    margin-bottom: 0;
    display: block;
    margin-left: auto;
    margin-right: auto;
  }
`;

const BookInfo = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const BookTitle = styled.h2`
  font-size: 1.5rem;
  margin: 0 0 0.3rem 0;
  font-family: inherit;
  
  @media (max-width: 950px) {
    padding-top: 18px;
  }
`;

const BookAuthor = styled.div`
  font-size: 1.1rem;
  margin-bottom: 0.2rem;
  color: #444;
`;

const BookYear = styled.div`
  font-size: 1rem;
  margin-bottom: 1.1rem;
  color: #666;
`;

const StylizedQuote = styled.span`
  font-size: 2.2rem;
  color: #b48a78;
  font-family: 'Special Elite', 'Courier New', Courier, monospace;
  vertical-align: top;
  line-height: 1;
  margin-right: 0.18em;
`;

const StylizedCloseQuote = styled.span`
  font-size: 2.2rem;
  color: #b48a78;
  font-family: 'Special Elite', 'Courier New', Courier, monospace;
  vertical-align: bottom;
  line-height: 1;
  margin-left: 0.18em;
`;

const JimDescription = styled.div`
  font-size: 1.08rem;
  margin-bottom: 1.2rem;
  color: #222;
  p {
    margin: 0;
    line-height: 1.5em;
    text-indent: 2em;
  }
`;

const Genre = styled.div`
  font-size: 1rem;
  color: #888;
  margin-top: auto;
  font-style: italic;
`;

const Quote = styled.div`
  font-size: 1.08rem;
  color: #fff;
  margin-bottom: 2.2rem;
  font-style: italic;
  max-width: 700px;
  line-height: 1.5em;
`;

const GoToTopSidebarItem = styled(SidebarItem)`
  margin-top: 48px;
`;

const scrollToBook = (id: string) => {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};

function App() {
  return (
    <>
      <GlobalStyle />
      <AppContainer>
        <Sidebar>
          <SidebarList>
            {books.map((book) => (
              <SidebarItem key={book.jim_order}>
                <SidebarLink
                  href={`#book-${book.jim_order}`}
                  onClick={e => {
                    e.preventDefault();
                    scrollToBook(`book-${book.jim_order}`);
                  }}
                >
                  {book.title}
                </SidebarLink>
              </SidebarItem>
            ))}
            <GoToTopSidebarItem>
              <SidebarLink
                href="#top"
                onClick={e => {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
              >
                Go to Top
              </SidebarLink>
            </GoToTopSidebarItem>
          </SidebarList>
        </Sidebar>
        <MainContent>
          <Header>A Novel Reading List</Header>
          <SubHeader>by James J. Mihnerick (1939&#8209;2019)</SubHeader>
          <Quote>
            "I read most of these books more than twenty years ago, but they are still fresh in my mind. This perhaps is as good a benchmark for literary greatness as any." - Jim
          </Quote>
          <BookList>
            {books
              .sort((a, b) => a.jim_order - b.jim_order)
              .map((book) => (
                <BookCard id={`book-${book.jim_order}`} key={book.jim_order}>
                  <CoverImage src={book.cover_image} alt={book.title} />
                  <BookInfo>
                    <BookTitle>{book.title}</BookTitle>
                    <BookAuthor>{book.author}</BookAuthor>
                    <BookYear>{book.published_year}</BookYear>
                    <JimDescription>
                      {book.jim_description.split('\n').map((para, idx, arr) => (
                        <p key={idx}>
                          {idx === 0 && <StylizedQuote>&ldquo;</StylizedQuote>}
                          {para}
                          {idx === arr.length - 1 && <StylizedCloseQuote>&rdquo;</StylizedCloseQuote>}
                        </p>
                      ))}
                    </JimDescription>
                    <Genre>Genre: {book.genre}</Genre>
                  </BookInfo>
                </BookCard>
              ))}
          </BookList>
        </MainContent>
      </AppContainer>
    </>
  );
}

export default App;
