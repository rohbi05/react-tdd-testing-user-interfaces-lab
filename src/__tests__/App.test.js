import { logRoles, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import App from '../App';

// Your tests here
describe('App', () => {
  test("displays a top-level heading with the text Hi, I'm _______", () => {
    // Arrange
    render(<App />);
    // Act
    const topLevelHeading = screen.getByRole('heading', {
      name: /hi, i'm/i,
      exact: false,
      level: 1,
    });
    // Assert
    expect(topLevelHeading).toBeInTheDocument();
  });
  test('displays an image with an alt attribute identifying its content', () => {
    //Arrange
    render(<App />);
    //Act
    // logRoles(render(<App />).container)
    const image = screen.getByRole('img');
    //Assert
    expect(image).toHaveAttribute('alt');
    expect(image).toHaveAttribute('src');
  });
  test('displays a second-level heading with the text "About Me"', () => {
    //Arrange
    render(<App />);
    //Act
    const secondLevelHeading = screen.getByRole('heading', {
      name: /about me/i,
      exact: false,
      level: 2,
    });
    //Assert
    expect(secondLevelHeading).toBeInTheDocument();
  });
  test('displays a paragraph for biography', () => {
    //Arrange
    render(<App />);
    //Act
    const biographyParagraph = screen.getByText(/my biography/i);
    //Assert
    expect(biographyParagraph).toBeInTheDocument();
  });
  test('displays two links, to Github and LinkedIn', () => {
    //Arrange
    render(<App />);
    //Act
    const githubLink = screen.getByRole('link', {
      name: /github/i,
    });
    const linkedinLink = screen.getByRole('link', {
      name: /linkedin/i,
    });
    //Assert
    expect(githubLink).toBeInTheDocument()
    expect(githubLink).toHaveAttribute('href')

    expect(linkedinLink).toBeInTheDocument()
    expect(linkedinLink).toHaveAttribute('href')

  });
});