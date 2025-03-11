/* FACTORY

    function createBook(title, author, pages, chapters, chaptersDetails) {
    return {
        bookTitle: title,
        bookAuthor: author,
        bookPages: pages,
        bookChapters: chapters,
        bookChaptersDetails: chaptersDetails,
    };
    }

    const book1Title = "Atomic Habits";
    const book1Author = "James Clear";
    const book1Pages = 306;
    const book1Chapters = 21;
    const book1ChaptersDetails = {
    Chapter1: "The Surprising Power of Atomic Habits",
    Chapter2: "How Your Habits Shape Your Identity (and Vice Versa)",
    Chapter3: "How to Build Better Habits in 4 Simple Steps",
    Chapter4: "The Man Who Didn't Look Right",
    Chapter5: "The Best Way to Start a New Habit",
    Chapter6: "Motivation is Overrated; Environment Often Matters More",
    Chapter7: "The Secret to Self-Control",
    Chapter8: "How to Make a Habit Irresistible",
    Chapter9: "The Role of Family and Friends in Shaping Your Habits",
    Chapter10: "How to Find and Fix the Causes of Your Bad Habits",
    Chapter11: "Walk Slowly, but Never Backward",
    Chapter12: "The Law of Least Effort",
    Chapter13: "How to Stop Procrastinating by Using the Two-Minute Rule",
    Chapter14: "How to Make Good Habits Inevitable and Bad Habits Impossible",
    Chapter15: "The Cardinal Rule of Behavior Change",
    Chapter16: "How to Stick with Good Habits Every Day",
    Chapter17: "How an Accountability Partner Can Change Everything",
    Chapter18: "The Truth About Talent (When Genes Matter and When They Don't)",
    Chapter19: "The Goldilocks Rule: How to Stay Motivated in Life and Work",
    Chapter20: "The Downside of Creating Good Habits",
    Chapter21: "Conclusion: The Secret to Results That Last",
    };

    const book2Title = "The Power of Habit";
    const book2Author = "Charles Duhigg";
    const book2Pages = 375;
    const book2Chapters = 16;
    const book2ChaptersDetails = {
    Chapter1:  "The Habit Loop: How Habits Work", // prettier-ignore
    Chapter2:  "The Craving Brain: How to Create New Habits", // prettier-ignore
    Chapter3:  "The Golden Rule of Habit Change: Why Transformation Occurs", // prettier-ignore
    Chapter4:
        "Keystone Habits, or The Ballad of Paul O’Neill: Which Habits Matter Most",
    Chapter5:  "Starbucks and the Habit of Success: When Willpower Becomes Automatic", // prettier-ignore
    Chapter6:  "The Power of a Crisis: How Leaders Create Habits Through Accident and Design", // prettier-ignore
    Chapter7:  "How Target Knows What You Want Before You Do: When Companies Predict (and Manipulate) Habits", // prettier-ignore
    Chapter8:  "Saddleback Church and the Montgomery Bus Boycott: How Movements Happen", // prettier-ignore
    Chapter9:  "The Neurology of Free Will: Are We Responsible for Our Habits?", // prettier-ignore
    Chapter10: "The Habits of Successful Organizations", // prettier-ignore
    Chapter11: "The Habits of Societies", // prettier-ignore
    Chapter12: "The Science of Hiding and Finding Habits",
    Chapter13: "The Ethical and Policy Implications of Habit Formation",
    Chapter14: "Habits in Medicine and Health",
    Chapter15: "Educational Habits and Learning",
    Chapter16: "The Future of Habit Research",
    };

    // prettier-ignore
    const Book1 = createBook(book1Title, book1Author, book1Pages, book1Chapters, book1ChaptersDetails);
    // prettier-ignore
    const Book2 = createBook(book2Title, book2Author, book2Pages, book2Chapters, book2ChaptersDetails);


    console.log(Book1);
    console.log(Book2);

*/

///////////////////////////////////// constructor

function CreateBook(title, author, pages, chapters, chaptersDetails) {
  this.bookTitle = title;
  this.bookAuthor = author;
  this.bookPages = pages;
  this.bookChapters = chapters;
  this.bookChaptersDetails = chaptersDetails;
}

const book11Title = "Atomic Habits";
const book11Author = "James Clear";
const book11Pages = 306;
const book11Chapters = 21;
const book11ChaptersDetails = {
  Chapter1: "The Surprising Power of Atomic Habits",
  Chapter2: "How Your Habits Shape Your Identity (and Vice Versa)",
  Chapter3: "How to Build Better Habits in 4 Simple Steps",
  Chapter4: "The Man Who Didn't Look Right",
  Chapter5: "The Best Way to Start a New Habit",
  Chapter6: "Motivation is Overrated; Environment Often Matters More",
  Chapter7: "The Secret to Self-Control",
  Chapter8: "How to Make a Habit Irresistible",
  Chapter9: "The Role of Family and Friends in Shaping Your Habits",
  Chapter10: "How to Find and Fix the Causes of Your Bad Habits",
  Chapter11: "Walk Slowly, but Never Backward",
  Chapter12: "The Law of Least Effort",
  Chapter13: "How to Stop Procrastinating by Using the Two-Minute Rule",
  Chapter14: "How to Make Good Habits Inevitable and Bad Habits Impossible",
  Chapter15: "The Cardinal Rule of Behavior Change",
  Chapter16: "How to Stick with Good Habits Every Day",
  Chapter17: "How an Accountability Partner Can Change Everything",
  Chapter18: "The Truth About Talent (When Genes Matter and When They Don't)",
  Chapter19: "The Goldilocks Rule: How to Stay Motivated in Life and Work",
  Chapter20: "The Downside of Creating Good Habits",
  Chapter21: "Conclusion: The Secret to Results That Last",
};

const book22Title = "The Power of Habit";
const book22Author = "Charles Duhigg";
const book22Pages = 375;
const book22Chapters = 16;
const book22ChaptersDetails = {
  Chapter1:  "The Habit Loop: How Habits Work", // prettier-ignore
  Chapter2:  "The Craving Brain: How to Create New Habits", // prettier-ignore
  Chapter3:  "The Golden Rule of Habit Change: Why Transformation Occurs", // prettier-ignore
  Chapter4:    "Keystone Habits, or The Ballad of Paul O’Neill: Which Habits Matter Most", // prettier-ignore
  Chapter5:  "Starbucks and the Habit of Success: When Willpower Becomes Automatic", // prettier-ignore
  Chapter6:  "The Power of a Crisis: How Leaders Create Habits Through Accident and Design", // prettier-ignore
  Chapter7:  "How Target Knows What You Want Before You Do: When Companies Predict (and Manipulate) Habits", // prettier-ignore
  Chapter8:  "Saddleback Church and the Montgomery Bus Boycott: How Movements Happen", // prettier-ignore
  Chapter9:  "The Neurology of Free Will: Are We Responsible for Our Habits?", // prettier-ignore
  Chapter10: "The Habits of Successful Organizations", // prettier-ignore
  Chapter11: "The Habits of Societies", // prettier-ignore
  Chapter12: "The Science of Hiding and Finding Habits",
  Chapter13: "The Ethical and Policy Implications of Habit Formation",
  Chapter14: "Habits in Medicine and Health",
  Chapter15: "Educational Habits and Learning",
  Chapter16: "The Future of Habit Research",
};

// prettier-ignore
const Book11 = new CreateBook(book11Title, book11Author, book11Pages, book11Chapters, book11ChaptersDetails);
// prettier-ignore
const Book22 = new CreateBook(book22Title, book22Author, book22Pages, book22Chapters, book22ChaptersDetails);

console.log(Book11);
console.log(Book22);


