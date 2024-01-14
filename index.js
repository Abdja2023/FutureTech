//--------- Selectores-----------------
const aside = document.querySelector("aside");

//-----Aside Responsive--------------
const barsBtn = document.querySelector(".header-responsive-btn");
const windowHeight = window.innerHeight;
const headerheight = +window
  .getComputedStyle(document.querySelector("header"))
  .height.split("px")
  .at(0);

barsBtn.addEventListener("click", (e) => {
  e.preventDefault();
  aside.classList.toggle("aside-active");
  const icon = [aside.classList].join(" ").includes("aside-active")
    ? "xmark"
    : "bars";
  const html = ` <i class="fa-solid fa-${icon}"></i>`;
  barsBtn.innerHTML = html;
  console.log([aside.classList].join(" ").includes("aside-active"));
});
aside.style.height = `${windowHeight - headerheight}px`;

//------------Blog bar Active----------------

const blogPostAnchors = [
  ...document.querySelectorAll(".blog-posts .container-bar a"),
];

const activeFunc = function (item) {
  blogPostAnchors.forEach((anchor) => anchor.classList.remove("active-anchor"));
  item.classList.add("active-anchor");
};
activeFunc(blogPostAnchors.at(0));

let anchorContent = "";
blogPostAnchors.forEach((anchor) =>
  anchor.addEventListener("click", (e) => {
    e.preventDefault();
    activeFunc(e.target);

    anchorContent = e.target.textContent.toLowerCase();
    console.log(anchorContent);
  })
);

//-----------Blog Post Generator---------------------
const posts = [
  {
    id: "post01",
    type: "Quantom computing",
    author: "Abdou Djaith",
    job: "React Js Developer",
    date: "octobre 7 , 2023",
    title: "The Quantom Leap in Computing",
    explanation:
      "Explore the revolution in quantum computing, its applications, and its potential impact on various industries.",
    likes: "10k",
    comments: "343",
    share: "12",
    likedOrNot: true,
  },
  {
    id: "post02",
    type: "Ai Ethics",
    author: "Sara Ethisist",
    job: "Ai Ethics",
    date: "November 5 , 2023",
    title: "The Ethical Dilemmas of AI",
    explanation:
      "A deep dive into ethical challenges posed by AI, including bias, privacy, and transparency.",
    likes: "32k",
    comments: "72",
    share: "18",
    likedOrNot: false,
  },
  {
    id: "post03",
    type: "Space Exploration",
    author: "Astronomer X",
    job: "Space Exploration",
    date: "December 10, 2023",
    title: "The Mars Colonization Challenge",
    explanation:
      "Exploring the technical and logistical challenges of human colonization on Mars.",
    likes: "20k",
    comments: "72",
    share: "12",
    likedOrNot: true,
  },
];
const postContainer = document.querySelector(".posts-container");
const postCreator = function (
  id,
  author,
  job,
  date,
  title,
  explanation,
  likes,
  comments,
  share,
  likedOrNot
) {
  return ` <div class="post-box" id='${id}'>
            <div class="box-left">
              <img src="/ressources/blog-${id}-profile.png"  />
              <h3>${author}</h3>
              <span>${job}</span>
            </div>
            <div class="box-right">
              <span id="date">${date} </span>
              <span id="title">${title}</span>
              <p id="explanation">
                ${explanation}
              </p>
              <div class="reactions-container">
                <a href="" id="like-box" class="reaction-box">
                  <img src="/ressources/blog-posts-reaction-icon${
                    likedOrNot ? "-liked" : ""
                  }.png" alt="" />
                  <span id="reaction-count">${likes}</span>
                </a>
                <a href="" id="comment-box" class="reaction-box">
                  <img src="/ressources/blog-posts-comment-icon.png" alt="" />
                  <span id="reaction-count">${comments}</span>
                </a>
                <a href="" id="share-box" class="reaction-box">
                  <img src="/ressources/blog-posts-share-icon.png" alt="" />
                  <span id="reaction-count">${share}</span>
                </a>
              </div>
            </div>
             <a href="#" id="post-viewPost-anchor">
              <span>View Post</span>
              <img src="/ressources/upper-header-link-icon.png" alt="">
            </a>

          </div>`;
};

postContainer.innerHTML = "";

posts.forEach((post) => {
  const postGenerated = postCreator(
    post.id,
    post.author,
    post.job,
    post.date,
    post.title,
    post.explanation,
    post.likes,
    post.comments,
    post.share,
    post.likedOrNot
  );
  postContainer.insertAdjacentHTML("beforeend", postGenerated);
});

const postsDivs = [...document.querySelectorAll(".post-container .post-box")];
postsDivs?.forEach((div) =>
  div.addEventListener("click", (e) => {
    e.preventDefault();
    console.log(e.target.closest("post-box"));
  })
);
console.log(postsDivs);

// Comments Creator Section

const commentsContainer = document.querySelector(".comments .container");
commentsContainer.innerHTML = "";
console.log(commentsContainer);
const testimonials = [
  {
    id: "test-01",
    author: "Sarah Thompson",
    location: "San Francisco, USA",
    content:
      "The ebooks on AI in education have been a game-changer for my research. They provide in-depth insights and case studies that are invaluable for staying updated.",
    rating: 5,
  },
  {
    id: "test-02",
    author: `Raj Patel`,
    location: "Mumbai, India",
    content:
      "The whitepapers on renewable energy strategies have greatly influenced my work. They offer detailed data and analysis.",
    rating: 4,
  },
  {
    id: "test-03",
    author: `Emily Adams`,
    location: "London, UK",
    content:
      "The AI in healthcare reports have been an essential resource for our hospital. They highlight the latest innovations and best practices, improving patient care.",
    rating: 5,
  },
  {
    id: "test-04",
    author: "Alan Jackson",
    location: "Houston, USA",
    content:
      "The reports on space mining prospects have fueled my passion for space exploration. They provide a comprehensive view.",
    rating: 2,
  },
  {
    id: "test-05",
    author: "Jessica Miller",
    location: "Boston, USA",
    content:
      "The research papers on genomic breakthroughs have been a goldmine of information. They've shaped the direction of my research in genomics.",
    rating: 2,
  },
  {
    id: "test-06",
    author: "Diego Lopez",
    location: "Barcelona, Spain",
    content:
      " The ebooks on renewable energy strategies have given me the insights I needed to pivot our startup toward sustainability.",
    rating: 2,
  },
];

const comment = (img, name, location, rating, content) => {
  let comm = `<div id="comment-card" class='${img}' >
          <div id="comment-profile" class='profile'>
            <img src="/ressources/comment-profile-${img}-pic.png" alt=""  id="commentAuthor-image">
            <span id="commentAuthor-name">${name}</span>
            <span id="commentAuthor-location">${location}</span>
          </div>
          <div id="comment" class='comment'>
            <div id="comment-rating">
            ${rating}
            </div>
            <p>${content}</p>
          </div>
        </div>`;
  return comm;
};

testimonials.forEach((test) => {
  const ratingHtml = (rating) => {
    let arr = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        arr.push(
          ` <img src="/ressources/comment-ratingStar-filled.png" alt="">`
        );
      } else {
        arr.push(
          ` <img src="/ressources/comment-ratingStar-empty.png" alt="">`
        );
      }
    }

    return arr.join(" ");
  };

  const html = comment(
    test.id,
    test.author,
    test.location,
    ratingHtml(test.rating),
    test.content
  );
  commentsContainer.insertAdjacentHTML("beforeend", html);
});

/////////////////////////OBSERVER API//////////////////////////////////////////////
const featuresSection = document.querySelector(".features");
const blogPostsSection = document.querySelector(".blog-posts");
const resourcesSection = document.querySelector(".resources");
const commentsSection = document.querySelector(".comments");
const revolutionSection = document.querySelector(".revolution");

const firstScreenLowerCards = [
  ...document.querySelectorAll(".screen01-lower-card"),
];

const titlesDivs = [...document.querySelectorAll(".title")];
const titleH2 = titlesDivs.map((a) => [...a.children].at(1));
const titleSpan = titlesDivs.map((a) => [...a.children].at(0));
const lastTitleSpan = document.querySelector(
  ".revolution .upper .container > span:first-of-type "
);
const lastTitleH2 = document.querySelector(".revolution .upper h2");

const featuresMainCard = [
  ...document.querySelectorAll(".feature-container > div"),
];
const featuresLeftCard = [
  ...document.querySelectorAll(".feature-main-card .left"),
];
const featuresRightCard = [
  ...document.querySelectorAll(".feature-main-card .right"),
];

const postBoxs = [
  ...document.querySelectorAll(".blog-posts .posts-container .post-box"),
];

const resourceCards = [
  ...document.querySelectorAll(".resources-container .resource > div "),
];

const commentsCards = [...document.querySelectorAll("#comment-card")];
const commentsProfileDiv = commentsCards.map((card) =>
  [...card.children].at(0)
);
const commentsCommentDiv = commentsCards.map((card) =>
  [...card.children].at(1)
);

const revolutionCards = [
  ...document.querySelectorAll(".revolution .lower .card"),
];

// console.log(commentsCards);
function observerFunc(entries, oberserver) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const className = [...entry.target.classList].at(0);
      const idName = entry.target.id;
      if (entry.intersectionRatio >= 0.5) {
        switch (idName) {
          case "revo-card1":
            revolutionCards.at(0).classList.add("revoCardActive");
            break;
          case "revo-card2":
            revolutionCards.at(1).classList.add("revoCardActive");
            break;
          case "revo-card3":
            revolutionCards.at(2).classList.add("revoCardActive");
            break;
          default:
            console.log("");
        }
        switch (className) {
          case "test-01":
            commentsProfileDiv.at(0).classList.add("commentCardDivsActive");
            commentsCommentDiv.at(0).classList.add("commentCardDivsActive");
            break;
          case "test-02":
            commentsProfileDiv.at(1).classList.add("commentCardDivsActive");
            commentsCommentDiv.at(1).classList.add("commentCardDivsActive");
            break;
          case "test-03":
            commentsProfileDiv.at(2).classList.add("commentCardDivsActive");
            commentsCommentDiv.at(2).classList.add("commentCardDivsActive");
            break;
          case "test-04":
            commentsProfileDiv.at(3).classList.add("commentCardDivsActive");
            commentsCommentDiv.at(3).classList.add("commentCardDivsActive");
            break;
          case "test-05":
            commentsProfileDiv.at(4).classList.add("commentCardDivsActive");
            commentsCommentDiv.at(4).classList.add("commentCardDivsActive");
            break;
          case "test-06":
            commentsProfileDiv.at(5).classList.add("commentCardDivsActive");
            commentsCommentDiv.at(5).classList.add("commentCardDivsActive");
            break;
          case "screen01-card-01":
            firstScreenLowerCards
              .at(0)
              .classList.add("screen01-lower-card-active");
            break;
          case "screen01-card-02":
            firstScreenLowerCards
              .at(1)
              .classList.add("screen01-lower-card-active");
            break;
          case "screen01-card-03":
            firstScreenLowerCards
              .at(2)
              .classList.add("screen01-lower-card-active");
            break;

          default:
            console.log("");
        }
      } else if (entry.intersectionRatio >= 0.3) {
        switch (className) {
          case "technology":
            featuresRightCard.at(0).classList.add("featureCardActive");
            featuresLeftCard.at(0).classList.add("featureCardActive");
            break;
          case "insights":
            featuresRightCard.at(1).classList.add("featureCardActive");
            featuresLeftCard.at(1).classList.add("featureCardActive");
            break;
          default:
            console.log("");
        }
        switch (idName) {
          case "title-01":
            titleH2.at(0).classList.add("titleH2Active");
            titleSpan.at(0).classList.add("titleSpanActive");
            break;
          case "title-02":
            titleH2.at(1).classList.add("titleH2Active");
            titleSpan.at(1).classList.add("titleSpanActive");
            break;
          case "title-03":
            titleH2.at(2).classList.add("titleH2Active");
            titleSpan.at(2).classList.add("titleSpanActive");
            break;
          case "title-04":
            titleH2.at(3).classList.add("titleH2Active");
            titleSpan.at(3).classList.add("titleSpanActive");
            break;
          case "title-05":
            lastTitleH2.classList.add("titleH2Active");
            lastTitleSpan.classList.add("titleSpanActive");
            break;
          case "post01":
            postBoxs.at(0).classList.add("postBoxActive");
            break;
          case "post02":
            postBoxs.at(1).classList.add("postBoxActive");
            break;
          case "post03":
            postBoxs.at(2).classList.add("postBoxActive");
            break;
          case "resource-card1-left":
            resourceCards.at(0).classList.add("resourceCardActive");
            break;
          case "resource-card1-right":
            resourceCards.at(1).classList.add("resourceCardActive");
            break;
          case "resource-card2-left":
            resourceCards.at(2).classList.add("resourceCardActive");
            break;
          case "resource-card2-right":
            resourceCards.at(3).classList.add("resourceCardActive");
            break;
          default:
            console.log("");
        }
      }
    }
  });
}

const observer = new IntersectionObserver(observerFunc, {
  root: null,
  threshold: [0.3, 0.5],
});

observer.observe(featuresSection);
observer.observe(blogPostsSection);
observer.observe(resourcesSection);
observer.observe(commentsSection);
observer.observe(revolutionSection);

// firstScreenLowerCards_anchor.forEach((a) => observer.observe(a));
// firstScreenLowerCards_image.forEach((a) => observer.observe(a));
// firstScreenLowerCards_span.forEach((a) => observer.observe(a));
firstScreenLowerCards.forEach((a) => observer.observe(a));

titlesDivs.forEach((a) => observer.observe(a));
observer.observe(lastTitleH2);
observer.observe(lastTitleSpan);

featuresMainCard.forEach((a) => observer.observe(a));

postBoxs.forEach((a) => observer.observe(a));

resourceCards.forEach((a) => observer.observe(a));

commentsCards.forEach((a) => observer.observe(a));

revolutionCards.forEach((a) => observer.observe(a));
