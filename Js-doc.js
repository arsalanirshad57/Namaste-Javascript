/**
 * This function adds the "Hello" prefix to the provided name.
 */
function greet(name) {
  return 'Hello ' + name;
}

/**
 * Multiplies two numbers
 */
function multiply(a, b) {
  return a * b;
}

multiply('20', 5);

/**
 * Calculates the discount based on price and percentage
 *
 * @param {number} percent
 * @param {number} price
 * @returns {number}
 */

function discount(price, percent) {
  return price - (price * percent) / 100;
}

discount(5555, 50);

/**
 * Retrun the Full name by combining first name and last name
 *
 * @param {string} firstName - User's first name
 * @param {string} lastName - User's last name
 * @returns {string} Full name
 */

function fullName(firstName, lastName) {
  return firstName + ' ' + lastName;
}

/**
 * Returns a greeting message.
 *
 * @param {string} name - Name of the person
 * @param {string} [title=''] - Optional title
 * @returns {string} Greeting message
 */
function greet(name, title = '') {
  return title ? `Hello ${title} ${name}` : `Hello ${name}`;
}

/**
 *
 * @param {string} name - User's name
 * @param {string} [role='Dr.'] - User's role
 * @returns
 */

function createUser(name, role) {
  return { name, role };
}

console.log(createUser('Arsalan'));

/**
 *
 * @returns {Array<{title: string, author: string, pages: number}>}
 */

function getBooks() {
  return [
    { title: 'Book A', author: 'Author 1', pages: 200 },
    { title: 'Book B', author: 'Author 2', pages: 350 },
  ];
}

/**
 * Represent a book
 */

class Book {
  /**
   *
   * @param {string} title - Book's title
   * @param {string} author - Book's author
   * @param {number} pages - Book's pages
   */
  constructor(title, author, pages) {
    /** @type {string} */
    this.title = title;
    /** @type {string} */
    this.author = author;
    /** @type {number} */
    this.pages = pages;
  }

  /**
   * retrurn a message
   * @returns {string} - Message about reading a book.
   */
  read() {
    return `Reading ${this.title} by ${this.author}`;
  }
}
