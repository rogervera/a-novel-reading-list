import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { books } from './booksData';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Special+Elite&display=swap');
  body {
    background: #111;
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
  padding: 32px 0 32px 0;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  position: sticky;
  top: 0;
  height: 100vh;
  overflow-y: auto;

  @media (max-width: 700px) {
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
  background: #111;
`;

const Header = styled.h1`
  font-size: 2.5rem;
  font-family: inherit;
  color: #fff;
  margin-bottom: 0.5rem;
`;

const SubHeader = styled.div`
  font-size: 1.2rem;
  color: #e0e0e0;
  margin-bottom: 2.5rem;
  font-family: inherit;
`;

const BookList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 36px;
`;

const BookCard = styled.section`
  background: #f8f8f5;
  color: #222;
  border-radius: 8px;
  box-shadow: 0 2px 12px rgba(0,0,0,0.08);
  padding: 32px 24px 24px 24px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 32px;
  font-family: inherit;
  max-width: 700px;

  @media (max-width: 700px) {
    flex-direction: column;
    align-items: center;
    padding: 24px 8px 16px 8px;
    gap: 20px;
  }
`;

const CoverImage = styled.img`
  max-width: 200px;
  width: 100%;
  height: auto;
  border-radius: 4px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.10);
  background: #fff;
  @media (max-width: 700px) {
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

const JimDescription = styled.div`
  font-size: 1.08rem;
  margin-bottom: 1.2rem;
  color: #222;
`;

const Genre = styled.div`
  font-size: 1rem;
  color: #888;
  margin-top: auto;
  font-style: italic;
`;

const Quote = styled.div`
  font-size: 1.08rem;
  color: #e0e0e0;
  margin-bottom: 2.2rem;
  font-style: italic;
  max-width: 700px;
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
                    <JimDescription>"{book.jim_description}"</JimDescription>
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
