export interface Story {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  date: string;
  image: string;
  images?: string[];
  /** Descriptive alt text per gallery image (same order as `images`) */
  imageAlts?: string[];
  /** Caption shown under each gallery image (same order as `images`) */
  imageCaptions?: string[];
  slug: string;
  content?: string;
  featured?: boolean;
  external?: boolean;
  externalUrl?: string;
  original?: boolean;
  /** Legacy free-form credit line (still supported) */
  photoCredit?: string;
  /** Structured attribution fields — preferred */
  photographer?: string;
  photoSource?: string;
  photoCaption?: string;
  photoLicense?: string;
}

export const categories = [
  { name: "Community", slug: "community" },
  { name: "Business", slug: "business" },
  { name: "Culture", slug: "culture" },
  { name: "Sports", slug: "sports" },
  { name: "Opinion", slug: "opinion" },
];

export const stories: Story[] = [
  // ── ORIGINAL FEATURE STORIES ──
  {
    id: "229",
    title: "Envisioning the Possibilities: “Night Off Broadway” to Showcase Future of Historic Hattiesburg Corridor",
    excerpt: "For one night, an old auto dealership will be transformed into a center of culture and family fun — and a preview of what the entire Broadway Drive corridor could become.",
    category: "community",
    author: "Hattiesburg Hub Staff",
    date: "August 24, 2026",
    image: "/story-night-off-broadway-hero.jpg",
    images: [
      "/story-night-off-broadway-hero.jpg",
      "/story-night-off-broadway-logo.jpg",
      "/story-right-down-broadway-plan.png",
    ],
    imageAlts: [
      "Illustrated banner of the “Night Off Broadway” street festival, with the event’s retro roadside sign rising above vendor tents, string lights and families at dusk",
      "Official “Night Off Broadway” event logo — a retro motel-style sign with an arrow reading “Night Off Broadway” against a maroon street-grid map",
      "Official logo for “Right Down Broadway: A Master Plan for the Broadway Drive – West Pine Corridor” featuring the plan’s red-and-slate roadside sign mark",
    ],
    imageCaptions: [
      "“Night Off Broadway” takes over the former Courtesy Ford building at 1410 W. Pine Street on Thursday, Aug. 27. Illustration adapted from City of Hattiesburg event artwork.",
      "The official “Night Off Broadway” event logo. Courtesy of the City of Hattiesburg.",
      "The official logo for “Right Down Broadway,” the city’s master plan for the Broadway Drive – West Pine corridor. Courtesy of the City of Hattiesburg.",
    ],
    slug: "night-off-broadway-corridor-showcase",
    featured: true,
    original: true,
    photoCaption: "Event and master plan artwork for “Night Off Broadway” and “Right Down Broadway”",
    photoSource: "City of Hattiesburg",
    photoLicense: "Used with permission; hero banner adapted from city artwork by Hattiesburg Hub",
    content: `For one night, an old auto dealership will be transformed into a center of culture and family fun and showcase the possibilities for an entire corridor.

On Thursday, Aug. 27 the former Courtesy Ford building at 1410 W. Pine Street will host the city’s “Night Off Broadway!”

The event will feature multiple activities, including carnival games and a pop-up splash pad from the Hattiesburg Fire Department. The evening will also include a community pep rally featuring the Hattiesburg High School band and football team as they begin the next football season.

City leaders touted the night on social media, telling residents to “get ready for a night of community, Tiger pride and possibilities for Broadway.”

Activities are designed to offer a glimpse of what could become of the Hollywood district. Once the heart of the city’s automotive dealerships, the area in recent years has become stagnant and in need of revival.

Much of the district once included motels and drive-thru restaurants, dealerships and a shopping mall. However, the dealerships moved further out of town and changed retail patterns brought increased vacant storefronts.

The city responded in 2024 by creating a “Right Down Broadway” master plan for the district to encourage economic development, improve transportation infrastructure and enhance the quality of life for residents and businesses in the area. The blueprint also identifies opportunities for public open space and parks.

The city council adopted the plan in Jan. 2025, beginning a significant step in redeveloping the corridor.

The Broadway Drive and West Pine Street corridors are critical connections from downtown Hattiesburg to US Highway 49 and Interstate 59. The area is also located near historic Hattiesburg neighborhoods and both the University of Southern Mississippi and William Carey University.

“Although the Broadway Drive corridor has long been known as ‘Hattiesburg’s Automotive Row,’ the departure of auto dealerships to other areas and aging suburban-style development has resulted in much of the corridor’s land being underutilized,” Hattiesburg city planners wrote in their description of the project. “The corridor’s location and available land provide an opportunity to improve residents’ quality of life as well as economic growth within Hattiesburg.”

Additionally, city planners noted that much of the land within the corridor is held in trust and leased to benefit the Hattiesburg Public School District.

The city in 2025 hired Texas-based Asakura Robinson planning, urban design, and landscape architecture firm as a consultant in developing the plan and engaging the community.

“Right Down Broadway outlines a long-term vision for transforming Hattiesburg’s Automotive Row into Hattiesburg’s Creators Corridor,” the firm wrote on its website outlining the project. “The Broadway Drive and West Pine Street corridors represent opportunities for the greater Hattiesburg community to revitalize a key gateway to the city.”

Asakura Robinson helped organize a previous “Night Off Broadway” event where the city created bike lanes, improved crosswalks and intersections to preview the possibilities for the area. Similar to the upcoming event, the previous event included the Hattiesburg High School football team, marching band and a pep rally.

Parks and recreation staff also set up pickleball, giant chess, and an outdoor movie featuring the hit cartoon “Cars” in a nod to the area's automotive history.`,
  },
  {
    id: "228",
    title: "Making the Final Push: Hattiesburg a Finalist for Nation’s Top Sports Host City",
    excerpt: "Hattiesburg could soon join the ranks of Wichita, Salt Lake City and Indianapolis with bragging rights as a national leader in sports events — and every vote counts before the Friday deadline.",
    category: "sports",
    author: "Hattiesburg Hub Staff",
    date: "August 24, 2026",
    image: "/story-best-sports-host-city.jpg",
    slug: "hattiesburg-finalist-best-sports-host-city",
    featured: true,
    original: true,
    photoCaption: "A championship trophy on the field of a ballpark at dusk, illustrating Hattiesburg’s campaign for national sports-hosting honors",
    photoSource: "Hattiesburg Hub",
    photoLicense: "Illustrative image",
    content: `Hattiesburg could soon join the ranks of cities such as Wichita, Salt Lake City and Indianapolis with bragging rights as a national leader in sports events.

To make it happen, Hattiesburg tourism leaders are in the final days of a campaign where every vote counts and the entire city can win.

The city is a finalist for national recognition as the nation’s Best Sports Host City Award for 2026. The annual competition is presented by SportsTravel, a sports-related industry publication and trade group.

Visit Hattiesburg, the area's tourism agency, is urging everyone to log on and cast their ballots for the Hub City.

“Voting for Hattiesburg takes less than 30 seconds, but the impact will last all year long! Help us claim the title of SportsTravel Best Sports Host City!” Visit Hattiesburg leaders wrote in a series of social media messages urging participation.

Voting ends Friday, Aug. 28. Winners will be celebrated in October during Teams ‘26, a national conference and expo held in Birmingham, Ala., this year.

“Now it's time to win this one together. We're competing against some of the country’s largest sports destinations, and every vote counts,” according to Visit Hattiesburg. “Help us show the world what Hattiesburg can do.”

The SportsTravel Awards honor events, venues and host cities. Wichita, Kansas won the coveted best city award in 2025.

Hattiesburg tourism leaders tout numerous events presented in the city including the 2026 Hattiesburg Half Marathon, which sold out with a record-breaking 1,750 participants.

The campaign for the national award is the latest effort to market Hattiesburg’s sports culture. "Hattiesburg 150 & Beyond," the draft comprehensive plan, envisions increasing the city’s sports dominance even further with the goal of attracting a minor league baseball team to the town within the next 10 to 15 years.

Sports planning in the city is long term. For example, the city in 2023 completed major improvements to Jaycee Park that were paid from Hattiesburg's 1 percent sales tax fund. The effort to create a high-quality athletic space recently paid off earlier this month when Hattiesburg was selected to host the 2027 Junior Boys World Series, which brings 13- and 14-year-old players from a dozen states.

“A sports city isn't built overnight. It's built by investing in championship-caliber facilities. It's built by attracting premier events. It's built by athletes, coaches, volunteers, partners, and fans who show up every time,” Hattiesburg tourism leaders wrote. “That's how Hattiesburg earned its place on the national stage.”`,
  },
  {
    id: "227",
    title: "London Calling: William Carey Students Immerse Themselves in Music and Culture",
    excerpt: "Members of the Carey Chorale traded Hattiesburg for England this summer, performing in Canterbury Cathedral, Rochester Cathedral and Trinity College Chapel at Cambridge University.",
    category: "culture",
    author: "Hattiesburg Hub Staff",
    date: "August 17, 2026",
    image: "/story-carey-chorale-london.jpg",
    slug: "william-carey-chorale-london-tour",
    featured: true,
    original: true,
    photoCaption: "A university choral ensemble performs inside a historic English cathedral, illustrating the Carey Chorale's summer tour of London-area churches",
    photoSource: "Hattiesburg Hub",
    photoLicense: "Illustrative image",
    content: `With the campus open and classes back in session, a select group of students is returning to William Carey University with stories of global travel, music and cultural exchange.

Earlier this summer, William Carey University voice students spent a week participating in workshops and performances at some of England's most well-known historic cathedrals and churches in London and surrounding areas.

Members of the Carey Chorale left Hattiesburg to London where they toured and performed at Canterbury Cathedral, Holy Trinity Church, Rochester Cathedral and Trinity College Chapel at Cambridge University.

"Each church was breathtaking. Walking through them felt like stepping back into history," said Lauren McElhenny, a member of the Carey Chorale. "I have never felt in such perfect sync and harmony with any choir. At our first concert, one of our directors put the experience in perspective when he said, 'Today your voices joined the voices of others who have sung praises to God for hundreds of years, and they will echo in these halls forever.'"

The Carey Chorale is the auditioned choral ensemble at the university. The ensemble throughout the year presents concerts and performs in schools and churches.

The trip was organized by Joel Dunlap, chair of choral activities and performance, and Brian Murphy, coordinator of piano studies. Murphy also performed in the concerts.

"We've talked about giving the Carey Chorale an experience like this, and it was great to see it happen," Dunlap said.

Several members of the Meistersingers of Mississippi, a Hattiesburg-based civic chorus, also traveled with the students.

The university collaborated with Vox Anima of London, a company specializing in providing performance and educational opportunities for visiting choirs. The tour included a master class with Neil Ferris, director of the famed BBC Symphony Chorus, a midday recital, and two performances with the Gesualdo Six, a group considered among the world's leading small vocal ensembles.

The weeklong cultural experience is one student Isiah Routon will always remember.

"On our first day, we took a short walk from our hotel to see Buckingham Palace, Westminster Abbey, Parliament Square and Big Ben," Routon said. "Our concerts in Rochester Cathedral and Trinity College Chapel will always be among the most surreal experiences of my life. Not only did I sing, I also played the historic 300-year-old organs housed at these churches."

The experience struck a similar chord with student Thomas Roper.

"I decided to go because I wanted to immerse myself in a different culture, see places I've only read about, and perform in beautiful and historic spaces," he said. "Each one had unique acoustics, and it was amazing to hear how our sound changed and filled each room. The most important thing I learned is how music can connect people across various cultures and backgrounds."`,
  },
  {

    id: "226",
    title: "History Alive: Southern Miss Professor Voices Netflix Series Showcasing America's Founding",
    excerpt: "Andrew Wiest, a University of Southern Mississippi distinguished professor of history, lends his voice to \"The American Experiment,\" a five-part Netflix series from Tom Hanks' Playtone marking the nation's 250th anniversary.",
    category: "culture",
    author: "Hattiesburg Hub Staff",
    date: "August 13, 2026",
    image: "/story-american-experiment-key-art.jpg",
    images: [
      "/story-american-experiment-key-art.jpg",
      "/story-andrew-wiest-portrait.jpg",
      "/story-american-experiment-still-1.jpg",
      "/story-american-experiment-still-2.jpg",
      "/story-american-experiment-still-3.jpg",
      "/story-american-experiment-still-4.jpg",
      "/story-american-experiment-still-5.jpg",
    ],
    imageAlts: [
      "Key art for the Netflix documentary series \"The American Experiment\"",
      "Andrew Wiest, distinguished professor of history at the University of Southern Mississippi",
      "Reenactors in Revolutionary War uniforms firing muskets at night, muzzle flashes and smoke lighting the dark sky",
      "A Black Continental soldier in a tricorn hat stands with a musket at a Revolutionary War encampment of white canvas tents",
      "Black-and-white archival photo of U.S. Marines in campaign hats advancing behind the American flag and a Marine Corps standard",
      "Former Vice President Mike Pence speaking during an on-camera interview for the series",
      "Painted portrait of Thomas Jefferson seated, Alexander Hamilton standing between them, and George Washington seated opposite",
    ],
    imageCaptions: [
      "Key art for \"The American Experiment,\" the five-part Netflix series produced by Playtone. Courtesy of Netflix Media Center. Used for editorial purposes.",
      "Andrew Wiest, distinguished professor of history at Southern Miss, recorded his segments at the Center for Oral History and Cultural Heritage. Courtesy of the University of Southern Mississippi. Used for editorial purposes.",
      "Episode 1: Revolutionary War reenactors fire a volley at night. Courtesy of Netflix Media Center. Used for editorial purposes.",
      "Episode 3: A Continental soldier at a wartime encampment. Courtesy of Netflix Media Center. Used for editorial purposes.",
      "Episode 4: Archival imagery of U.S. Marines on parade. Courtesy of Netflix Media Center. Used for editorial purposes.",
      "Episode 4: Former Vice President Mike Pence, one of several political figures interviewed for the series. Courtesy of Netflix Media Center. Used for editorial purposes.",
      "Episode 5: A period painting of Thomas Jefferson, Alexander Hamilton and George Washington. Courtesy of Netflix Media Center. Used for editorial purposes.",
    ],
    slug: "andrew-wiest-netflix-american-experiment",
    featured: true,
    original: true,
    photoCaption: "Key art and episodic stills from \"The American Experiment,\" plus Andrew Wiest, distinguished professor of history at the University of Southern Mississippi",
    photoSource: "Netflix Media Center (assetshare.netflixstudios.com) and the University of Southern Mississippi",
    photoLicense: "Used for editorial purposes",
    content: `A Hattiesburg historian is using his voice to bring America's history to life in a new documentary series marking the nation's 250th anniversary.

Andrew Wiest, University of Southern Mississippi distinguished professor of history, is a featured voice in "The American Experiment," a series on Netflix. The series tells the story of America's founding.

"It was a true honor to stand in as the voice for such important people and pieces of our history that would be seen by such a wide audience," he said. "The 250th anniversary of our country is a supremely important event, and it's humbling to look back on where we came from."

Wiest was given about seven pages of dialogue from the Declaration of Independence, the Constitution and the words of several historic figures read.

The series was produced by Playtone, a production company founded by actor Tom Hanks.

The Playtone team, including Sarah Huisenga of Luminant Media, one of the series' lead producers, directed him on how to add emphasis and feeling to the voiceovers.

"You would think reading a few lines from the Declaration of Independence would be easy," Wiest said. "Well, I can tell you that it wasn't."

Wiest joined a notable cast in the five-part series that includes American political figures, a former first lady, two former vice presidents and a U.S. senator.

Actor Martin Sheen is cast as the voice of George Washington. Sheen has plenty of practice portraying a president. He played the fictional president Josiah "Jed" Bartlet on The West Wing television series, which aired on NBC from 1999 to 2006.

Wiest recorded his segments on the Southern Miss campus at the Center for Oral History and Cultural Heritage.

The entire process was designed to bring history back to life and immerse viewers in pivotal moments of America's founding.

"We really need to know the history and intent of that time to understand the challenges we are facing to keep democracy alive and well in the modern world," Wiest said.

Film producers said they wanted strong historical experts as voices in the film.

Wiest is founding director of the Dale Center for the Study of War and Society at Southern Miss. He is also co-founder of the Southern Miss Center for the Study of the National Guard.

Wiest has previously been involved in historic productions.

His book "The Boys of '67" about the Vietnam War inspired the National Geographic documentary "Brothers in War." Wiest served as lead historian for the film, which was nominated for an Emmy.

Wiest was also chief historical consultant for the documentary "Vietnam in HD," which won the New York Film Festival's Gold World Medal.

Chris Winstead, dean of the College of Arts and Sciences, praised Wiest for his success in presenting history to a wider audience.

"To have his voice in a series produced by some of the biggest names in historical documentary filmmaking is just further evidence that Dr. Wiest continues setting the bar not only in his scholarship, but in his ability to engage the public in history," Winstead said.`,
  },
  {

    id: "225",
    title: "Chronicling a Legacy: New Biography Details the Life and Impact of Hattiesburg Philanthropist Oseola McCarty",
    excerpt: "More than 30 years after a Hattiesburg washerwoman stunned the world by donating $150,000 in scholarships, a new biography from the University Press of Mississippi revisits Oseola McCarty's quiet generosity and enduring legacy.",
    category: "community",
    author: "Hattiesburg Hub Staff",
    date: "August 4, 2026",
    image: "/story-oseola-mccarty-book-cover.jpg",
    slug: "oseola-mccarty-gift-of-a-lifetime-biography",
    featured: true,
    original: true,
    photoCaption: "Cover of \"Oseola McCarty and the Gift of a Lifetime\" by Philip D. Hearn and David Gerald Tisdale",
    photoSource: "University Press of Mississippi",
    photoLicense: "Used with permission",
    content: `It has been more than 30 years since a quiet, elderly woman inspired millions with her donation to provide a college education for deserving students.

An upcoming biography on Oseola McCarty will remind some of her generosity while introducing her to many others.

McCarty, who earned a living washing laundry by hand, silently saved and invested her modest income. When she was 87 years old, McCarty donated $150,000 in scholarships for rising students at the University of Southern Mississippi.

"Oseola McCarty and the Gift of a Lifetime" was written by Philip D. Hearn and David G. Tisdale. The book from the University Press of Mississippi will be released in February and is already available for pre-order.

"It's amazing her story still resonates today after three decades," said David Tisdale, who is senior writer in the Southern Miss Office of University Communications.

The book was the concept of Phil Hearn, who was an associate director for news and research writer for the Office of University Relations at the University of Southern Mississippi.

Tisdale took over the project when Hearn became ill and continued the book after Hearn's death in 2024. Before his passing, he requested that Tisdale complete the book.

"It was a bittersweet honor," Tisdale said of Hearn, his friend and former colleague. "I was honored he would ask me to wrap it up."

McCarty made headlines and inspired the world with her surprise gift given her simple lifestyle and small earnings.

While the school was close to her own house, for McCarty attending Southern Miss in her youth was only a pleasant dream that was denied both by the era in which she lived in Mississippi and by her own life's commitments.

Ronnie Agnew was managing editor of The Hattiesburg American when a news release about McCarty's donation came to the newsroom through a Southern Miss press release. It was written by former university PR writer Sharon Wertz.

It was on a weekend and Agnew knew the story was special and needed to go out. He called Wertz on a Saturday with excitement about the contents in the news release.

"The Oseola McCarty story remains one of my favorites," said Agnew, who soon wrote a version of the story for The American. After the newspaper published the university's news release, news of McCarty's gift quickly spread throughout the region, then the country, and eventually the world.

Rick Bragg, then a reporter for the New York Times, won a Pulitzer Prize in part for his version of McCarty's story.

"Ms. McCarty was a remarkable woman but was much too humble to realize the significance, both monetary and symbolic, of the funds she amassed and selflessly designated for scholarships," Agnew said. "She never gave it a second's thought. In her view, it was the right thing to do."

The Oseola McCarty Scholarship Endowment has benefited more than 140 students at Southern Miss. The endowment reached a milestone by reaching $1 million in 2025.

The new book discusses McCarty's life, the history of Southern Miss, and also looks forward 30 years at her legacy.

"My hope is for the book to bring renewed attention to the incredible gift she made and continued support for that scholarship fund," Tisdale said. "It is really an honor for me to be a part of this project."

Stephanie Bullock Ferguson was the first Oseola McCarty Scholar. Ferguson got to know McCarty well as she traveled with her to promote the scholarship and share her story.

"After I met her, she was a complete angel, one of the sweetest people I had ever met," Ferguson told the Hattiesburg Hub in an earlier story about McCarty's house becoming a museum. "She just became like another grandmother to me."

Tisdale also met McCarty and joined other university staff members during visits to her home.

Tisdale said McCarty, who left school early in life to help take care of an ill relative, dreamed of becoming a nurse. The woman who washed clothes for a living admired the white uniforms of the healthcare workers.

Years later, McCarty's generosity has helped others achieve their educational and career goals, including a recent student who majored in nursing, Tisdale said.

"That dream lives on in the students who benefited from her gift," he said. "Just the power of that gift, that even though she didn't get to do the things that she dreamed about, she helped someone else for it and that's an incredible testament to her."

McCarty's collection of honors included the Presidential Citizens Medal, which was awarded by President Bill Clinton during a White House ceremony. The honor is the second-highest civilian award in the United States.

McCarty also carried the 1996 Olympic Torch and pressed the switch to drop the New Year's Ball in Times Square.

Still the honors didn't change her. McCarty only bought an air conditioner to make it more comfortable for the growing number of visitors to her home following word of her donation.

"I just hope people will take the lesson of generosity and thinking about others and maybe at least emulate a little bit of her example," Tisdale said. "I think we would have a better world if we just looked to her as an example of how we should carry ourselves."`,
  },
  {
    id: "224",
    title: "'A New Beginning': Hattiesburg Residents Celebrate the Opening of New Neighborhood Community Center",
    excerpt: "What began as a suggestion during a town hall meeting eight years ago is now a reality with the opening of the $1.2 million Katie John Dabbs Community Center on Dabbs Street.",
    category: "community",
    author: "Hattiesburg Hub Staff",
    date: "July 20, 2026",
    image: "/story-dabbs-center-ribbon-cutting.jpg",
    images: [
      "/story-dabbs-center-ribbon-cutting.jpg",
      "/story-dabbs-center-barker.jpg",
      "/story-dabbs-center-green.jpg",
    ],
    slug: "katie-john-dabbs-community-center-opens",
    featured: true,
    original: true,
    photoCredit: "Photos courtesy of the City of Hattiesburg. Ribbon cutting at the new Katie John Dabbs Community Center; Mayor Toby Barker addresses the crowd; Robert Green, executive director of the Katie John Dabbs Street Neighborhood Association, speaks during the celebration. Dequandra Johnson, Hattiesburg community development division manager, also spoke at the event.",
    content: `What began as a suggestion during a town hall meeting eight years ago is now a reality with the opening of a long-awaited community center.

Hattiesburg residents joined with city, state and federal representatives to open the doors of the new Katie John Dabbs Community Center.

"It's a new beginning for this community," said Robert Green, executive director of the Katie John Dabbs Street Neighborhood Association. "It's a new opportunity, new services and unity that can happen in this community through this community center."

The $1.2 million initiative transformed the former Pathway Christian Fellowship Church building into a public amenity. The church congregation moved to a new facility in 2021. The city then bought the building to repurpose it for community use.

"This project represents the kind of meaningful investment that strengthens neighborhoods and creates spaces where people can come together," Mayor Toby Barker said during the July 15 celebration. "By giving this building a new purpose, we have preserved an important community asset while creating new opportunities for connection, programming and service."

Officials said the building at 1102 Dabbs Street will serve residents of the surrounding neighborhood and the broader Hattiesburg community.

Barker and others described a vision for the building as a gathering place for seniors, children and families.

"A community center is far more than a building. It is the heartbeat of a neighborhood," the mayor said. "Children will discover new opportunities. Seniors will pass along wisdom, and future leaders will find mentors who challenge them to dream bigger and serve others."

Barker said the project involved a "creative stacking" of federal, state and local funds.

The bulk of funding for the project came through a $950,000 federal Community Development Block Grant. An additional $250,000 was provided through state funding secured in 2022 by State Sen. Juan Barnett and State Rep. Percy Watson.

"You all expressed a need for a community center, not just anywhere, but right here in this neighborhood," said Dequandra Johnson, the city's community development division manager.

Johnson recalled her childhood in Hattiesburg and the various activities that were offered in community gathering places.

"That spirit remains alive today through the many programs and activities offered by our Parks and Recreation Department," she said. "It is my hope that the Katie John Dabbs Community Center becomes that same kind of place for this neighborhood."`,
  },
  {
    id: "223",
    title: "Hattiesburg Hits a Home Run: Junior Boys World Series Coming to the Hub City in 2027",
    excerpt: "Hundreds of young baseball players and thousands of fans will converge on Jaycee Park in 2027 as Hattiesburg was selected to host the Junior Boys World Series — a major event expected to pour millions into the local economy.",
    category: "sports",
    author: "Hattiesburg Hub Staff",
    date: "July 18, 2026",
    image: "/story-hattiesburg-parks-tournament-4.jpg",
    images: [
      "/story-hattiesburg-parks-tournament-4.jpg",
      "/story-hattiesburg-parks-tournament-5.jpg",
      "/story-hattiesburg-parks-tournament-1.jpg",
      "/story-hattiesburg-parks-tournament-2.jpg",
      "/story-hattiesburg-parks-tournament-3.jpg",
    ],
    slug: "hattiesburg-junior-boys-world-series-2027",
    featured: true,
    original: true,
    photoCredit: "All images are from the City of Hattiesburg.",
    content: `Hundreds of young baseball players and thousands of fans will converge on Jaycee Park as Hattiesburg brings another major sporting event to the Hub City.

Hattiesburg was selected to host the 2027 Junior Boys World Series, which brings 13- and 14-year-old players from a dozen states. The games are expected to pour millions into the local economy as visitors emanate from the park and visit Hattiesburg businesses.

"Baseball is part of Hattiesburg's identity, and this selection reflects both the strength of that tradition and the investments we continue to make in facilities for our young athletes," said Mayor Toby Barker. "We look forward to welcoming players and families from across the southeast and giving them a world series experience that reflects the hospitality, energy and community spirit of Hattiesburg."

The announcement was a highlight of the city's Parks and Recreation Week July 13-17. The days included several activities to spotlight greenspaces and amenities throughout the city. The week featured new playground equipment, community events and live music.

The Junior Boys World Series is another effort to solidify Hattiesburg's position as a hub for sports and family recreation and showcase its historic moniker of "Baseburg."

"This event will not only generate meaningful economic impact for our hotels, restaurants and local businesses, but it will also help position Hattiesburg for future tournaments, expanded partnerships and continued investment in our sports facilities," said Marlo Dorsey, executive director and CEO of VisitHATTIESBURG.

Jaycee Park reopened after major renovations in 2023 that were paid from Hattiesburg's 1% sales tax fund. City leaders said results of the investment are already evident with a high-quality space for local athletes that is also attractive to large-scale regional and national events.

The announcement of the games comes at the same time that city planners envision increasing Hattiesburg's sports dominance even further. "Hattiesburg 150 & Beyond," the city's draft comprehensive plan, includes an initiative to bring a minor league baseball team to town within the next 10 to 15 years.

This year's national theme of Parks and Recreation Week is "The Power Of." Working within that theme, activities in Hattiesburg were designed to highlight how parks and recreation amenities connect communities.

"Parks and recreation helps shape how people experience their community," Mayor Barker said. "It gives children places to grow, families places to gather and residents of every age opportunities to connect."

The city and residents in recent days also highlighted new playground improvements at Eastside Park, Jaycee Park and Oseola McCarty Park with a ribbon-cutting ceremony at Eastside.

"These improvements strengthen the neighborhood parks that families rely on throughout Hattiesburg," said Betsy Mercier, parks and recreation director. "The Eastside community build was a special part of this project, and we are thankful for everyone who volunteered their time to help make this new playground possible."`,
  },
  {
    id: "217",
    title: "Hattiesburg Athletic Leaders to Receive Top Coach of the Year Honors",
    excerpt: "After guiding their students to numerous sports championships, Hattiesburg Athletic Director Jermaine Brown and head track & field coach Charles Green will be honored by the Mississippi Association of Coaches.",
    category: "sports",
    author: "Hattiesburg Hub Staff",
    date: "June 27, 2026",
    image: "/story-coy-jermaine-brown.jpg",
    images: [
      "/story-coy-jermaine-brown.jpg",
      "/story-coy-charles-green.jpg",
      "/story-coy-hps-logo.jpg",
      "/story-coy-mac-logo.png",
    ],
    slug: "hattiesburg-coaches-of-the-year-2026",
    featured: true,
    original: true,
    photoCredit: "Photos of Jermaine Brown and Charles Green courtesy of Hattiesburg Public Schools. Hattiesburg Public Schools seal courtesy of Hattiesburg Public Schools. Mississippi Association of Coaches logo courtesy of the Mississippi Association of Coaches.",
    content: `After guiding their students to numerous sports championships, two Hattiesburg athletic leaders will receive their own awards for their years of mentorship and service in city schools.

Hattiesburg Athletic Director Jermaine Brown and Charles Green, head boys' and girls' cross country and track & field coach, are among the Coach of the Year honorees from the Mississippi Association of Coaches.

"This is quite an honor," said Johnny Mims, executive director of the Mississippi Association of Coaches, noting that just one coach is selected from each sporting category. "We bring in all the coaches that have won from every sport. Obviously their peers thought enough to vote for them because there were other champions and contenders from other classifications."

The Mississippi Association of Coaches is a membership organization that represents coaches throughout the state.

Brown, a native of Hattiesburg, has spent most of his 30-year career in the Hub City after previous posts in Meridian, Biloxi and Forrest County.

Brown, who was principal of Hattiesburg High School from 2013 to 2017, now serves as central office administrator for Hattiesburg Public Schools. He has been associated with 16 state championships at his schools.

Brown's accolades include the 2022 State Career and Technical Education Director of the Year and 2021-2022 District Administrator of the Year. Brown also served a term as president of the Mississippi Athletic Administrators Association.

The latest award adds to the list of accolades for both longtime coaches.

Coach Green took to social media to express his excitement at receiving the recognition as the girls track coach.

"This is truly an honor to be recognized as one of the best amongst my peers," he said on Facebook. "I wouldn't be where I am without having such a dedicated staff supporting me and a hardworking group of athletes performing the way that they do week after week, and a supportive family that allows me to do what I love."

Green in 2018 was named the Boys 5A Track Coach of the Year by the association.

Green, a graduate of Southern Miss, has spent his entire 23-year coaching career in Hattiesburg where he has guided the track teams to a middle school classic title and nine state championships. Those victories include five in boys track and four in girls track.

His 2026 boys and girls teams both won the Classic 6A State Championships. This was the third straight state championship for the girls squad.

Green was also a finalist for 2025 the National High School Athletic Coaches Association Coach of the Year.

Both coaches will be celebrated July 9 during a recognition ceremony presented at the Sheraton Refuge Hotel & Conference Center in Flowood.`,
  },


  {
    id: "216",
    title: "The Universal Language: Southern Miss Voices Showcase American Music to International Audiences",
    excerpt: "If music is the universal language, then student performers from Southern Miss are international ambassadors of good will. The Southern Chorale is in the midst of its international America 250 tour.",
    category: "culture",
    author: "Hattiesburg Hub Staff",
    date: "June 25, 2026",
    image: "/story-southern-miss-chorale.jpg",
    slug: "southern-miss-chorale-america-250-european-tour",
    featured: true,
    original: true,
    photoCredit: "Photo courtesy of The University of Southern Mississippi Southern Chorale.",
    content: `If music is the universal language, then student performers from Southern Miss are international ambassadors of good will.

The University of Southern Mississippi's Southern Chorale is in the midst of its international America 250 tour.

The tour includes venues in Hattiesburg and throughout Mississippi, to finally cross the Atlantic to perform in historic halls in Italy, France, Latvia and Estonia.

The goal is to place the choral ensemble on stages that have long served as a center for artistic exchange and cross culture collaboration.

"This choir is honored to sing regularly for national and international audiences that are equipped to listen with trained ears," conductor Gregory Fuller told the Hattiesburg Hub after landing in Europe just before a performance in Siena, Italy. "We are grateful for listeners that will know the level of preparation needed for the repertoire this choir performs."

The choir is performing an American program that showcases fine art music, gospel, spirituals, Mississippi blues and American popular music tailored for the Chorale by Southern Miss alumnus Jonathan Rodgers.

The performances are an eclectic mix, with the 50-voice group performing familiar pop culture theme songs such as the Love Boat TV series. It goes on to include instantly recognizable tunes from R&B legend Marvin Gaye, to the 1970s brother and sister duo, The Carpenters. The repertoire also includes songs by Mississippi artists and original compositions created for the chorus.

Beyond the perfection displayed on stage, the tour involves a grueling level of planning, practice and travel.

"This trip alone involves contracts with 11 hotels, 15 restaurants, reservations at about 10 attractions along the way, motor coach service and two flights within the tour," Fuller said.

"This is all in addition to concert venues, promotion, and ticket sales, much of which has been facilitated by our European partners and hosts."

Fuller is especially pleased that the tour is the result of previous European appearances that led to current invitations. One encounter fostered the next, he explained.

"These invitations, and other performances on this tour, arose from previous appearances in Europe over the last few years," he said. "The Chorale performed in Tallinn, Estonia in 2023 and was broadcast on Estonian Public Radio.

That performance ended up being the 9th most listened to broadcast of the entire 2023 year. Such popularity generated the invitation to the 'White Nights Festival' in Haapsalu. We are the only amateur ensemble performing at that festival, and we are the headliner on July 4."

The tour concludes at the "White Nights Festival" inside the medieval fortress at Haapsalu Cathedral.

Fuller, who is also a professor and director of choral activities at the Southern Miss School of Music, said some past students live and work in Europe after being strongly influenced by their travels.

"Many broaden their scope as they apply for jobs, some choose relevant research topics based on people and places they've encountered on these trips, and some just discover the importance of delivering a larger picture to the students they now teach," he said.

The Southern Chorale over the last 20 years has performed in Austria, Czech Republic, England, Estonia, France, Hungary, Jamaica, Italy, Latvia, Mexico, Norway, Romania, South Korea, Spain and Sweden, in addition to venues across the United States.

Fuller said the experience of international travel and performing creates lifetime memories for students and inspires them in their next level of professional development.

"I find that international travel, first and foremost, makes the world bigger for these students. Just their idea of what is possible in their future changes," Fuller said. "It is a powerful thing."`,
  },

  {
    id: "215",
    title: "A 'Field of Dreams' for Hattiesburg? City Planners Envision Recruiting Minor League Baseball to Town",
    excerpt: "It has been nearly a century since fans flocked to see the Hattiesburg Pinetoppers, but the city's draft comprehensive plan envisions bringing minor league baseball back to 'Baseburg' within the next 10 to 15 years.",
    category: "sports",
    author: "Hattiesburg Hub Staff",
    date: "June 16, 2026",
    image: "/story-baseburg-minor-league-vision.jpg",
    slug: "field-of-dreams-hattiesburg-minor-league-baseball",
    featured: true,
    original: true,
    photoCredit: "Stock illustration. Hattiesburg's draft 'Hattiesburg 150 & Beyond' comprehensive plan envisions attracting a minor league baseball team to the city within the next 10 to 15 years.",
    content: `It has been nearly a century since fans flocked to see the Hattiesburg Pinetoppers baseball team in action at Kamper Park.

Hattiesburg boasted its own minor league team from around 1905 to 1929. The city will once again be a center of athletics with fans flocking to the stands if a new vision becomes a reality.

"Hattiesburg 150 & Beyond," the city's draft comprehensive plan, includes plans to attract minor league baseball to town within the next 10 to 15 years.

"Hattiesburg has a strong baseball culture developed by the success of the University of Southern Mississippi's Baseball program over the years," according to the draft plan. "A minor league baseball team located in Hattiesburg would represent the culmination of the 'Baseburg' nickname and create a strong non-university cultural touchstone for the city."

'Baseburg' is a nickname that celebrates Hattiesburg's long historic connection to baseball.

The comprehensive plan envisions creating a taskforce to examine how other small metro areas such as Salisbury, MD; Rome, GA; Grand Chute, WI; Lancaster, PA; and Madison, AL have acquired minor league teams.

Recruiting any professional team requires planning, infrastructure and savvy, sports business experts say.

City leaders must consider the economics of attracting a minor league team, including incentives, tax breaks and needed facility upgrades, said Brennan K. Berg, professor and program director of sport management at the University of Mississippi.

"Ultimately, there needs to be public support and enthusiasm for bringing a team to Hattiesburg," he said. "Otherwise, it may be politically unpopular, particularly if incentives are utilized, and the team may not enjoy the consistent support it needs to remain viable long-term."

Hattiesburg's population of nearly 49,000 and a regional population of about 158,014 is a relatively small market. Therefore the team would have to draw fans from communities that extend through southern Mississippi and beyond, Berg explained.

"The challenge for a sport like baseball is the many games that are played each season," Berg said. "So, even for local residents who love the sport, it can be challenging to attend a lot of games and help fill in the seats."

Hattiesburg would need someone with a vision and "some serious financial backing" to champion the task of acquiring a franchise and bringing it to town, said Darin W. White, executive director of the Center for Sports Analytics at Samford University near Birmingham, AL.

The Birmingham region has long hosted the Birmingham Barons in various locations and facilities inside and outside the city.

It is possible, but White noted that the changing business landscape has made it more difficult.

For example, minor league teams have shrunk from 168 down to 120 today since a 2021 restructuring of Minor League Baseball.

While teams previously operated independently, White said Minor League Baseball has since created a consolidated structure where the corporation also handles sponsorship and media rights.

"It is a little more challenging now from a minor league standpoint," he said. "You're seeing the consolidation of the teams, all across sports and it's a more efficient way of being profitable and driving revenue. All that matters from the standpoint if you're Hattiesburg."

Additionally, there are more than 40 cities around the country who formerly hosted teams and likely are seeking to bring new play to their underused ballparks.

"So you're going to be competing with them," White said.

As Hattiesburg considers minor league baseball, both White and Berg said the city should factor its marketability when it comes to attracting other burgeoning sports.

As an alternative, Berg said the city should consider creating more small-scale events in which people participate in a sport activity, such as marathons, 5Ks, triathlons and youth sport tournaments.

Those events often use resources already in place and do not require a large public expenditure, Berg noted.

"These types of events, if marketed and managed well, can bring visitors throughout the year who will stay in Hattiesburg multiple days and spend money with several businesses," Berg said.

White recommends the city considers seeking new leagues such as lacrosse or women's volleyball that could be easier to recruit.

"A city like Hattiesburg would be probably best in trying to find an up and coming sport," White said. "There's a lot of innovation going on right now in sports. When you're a smaller city like Hattiesburg, you've got to be able to think outside the box."

Still, the possibility of bringing professional baseball to Hattiesburg and southern Mississippi could deliver a homerun for the community.

"If a team were attracted to Hattiesburg for the first time in almost a century, it would allow an opportunity for the city to brand itself and all that it has to offer in a new manner," Berg said.`,
  },

  {
    id: "214",
    title: "There She Is: Hattiesburg Native Crowned 2026 Miss Mississippi",
    excerpt: "Hattiesburg has something else to boast about as community native Jane Granberry travels the state as the newly crowned 2026 Miss Mississippi.",
    category: "community",
    author: "Hattiesburg Hub Staff",
    date: "June 14, 2026",
    image: "/story-miss-mississippi-granberry-crowning.jpg",
    images: [
      "/story-miss-mississippi-granberry-crowning.jpg",
      "/story-miss-mississippi-granberry-signing.jpg",
    ],
    slug: "hattiesburg-native-crowned-2026-miss-mississippi",
    featured: true,
    original: true,
    photoCredit: "Jane Granberry of Hattiesburg is crowned 2026 Miss Mississippi on June 13 in Vicksburg (top) and signs her official contract the following morning at the Miss Mississippi Organization headquarters (bottom). Photos courtesy of the Miss Mississippi Corporation.",
    content: `Hattiesburg has something else to boast about as a community native travels the state as the newly crowned 2026 Miss Mississippi.

Jane Granberry won the crown June 13 in Vicksburg.

"This morning was a dream come true," Granberry wrote on social media just a day after her crowning. "Surrounded by history of the Miss Mississippi Organization and photos of titleholders that came before me, I signed my official contract and connected with a few of the incredible journalists who serve our state."

Granberry competed as Miss Capital City. She was previously a finalist for the Miss Mississippi title in 2024 and 2025. Saturday was finally her day as Granberry walked across the stage cradling a bouquet of flowers as a sparkling crown topped her head and a sash declared her Miss Mississippi 2026.

"Thank you Lord for this opportunity to serve the state I love so dearly," Granberry said, ending her post. "Here we go!"

A graduate of the University of Mississippi, the 24-year-old earned a degree in integrated marketing and communications and a Master of Business Administration.

Granberry's community service initiative is "Literacy Without Limits." Her talent was jazz dancing.

Granberry in September will represent her state and compete for the Miss America 2027 title in West Palm Beach, Florida.`,
  },

  {
    id: "213",
    title: "Take a Closer Look: Art Exhibit Makes Art from Trash to Deliver a Lasting Message",
    excerpt: "A new interactive exhibit led by Southern Miss researchers and Gulf Coast artists turns discarded plastic into striking marine sculptures—urging visitors to rethink waste and its impact on oceans and human health.",
    category: "culture",
    author: "Hattiesburg Hub Staff",
    date: "May 31, 2026",
    image: "/story-plastics-exhibit-turtle.jpg",
    images: [
      "/story-plastics-exhibit-turtle.jpg",
      "/story-plastics-exhibit-alligator.jpg",
    ],
    slug: "toxic-beauty-plastics-hidden-cost-exhibit",
    featured: true,
    original: true,
    photoCredit: "Sculptures from 'Toxic Beauty: Plastic's Hidden Cost' on display at the Mississippi Aquarium in Gulfport. A life-sized sea turtle crafted from Mardi Gras beads collected during beach cleanups (top) and an alligator head made from an old sneaker (bottom) were created by Ocean Springs artist Demetrius 'MeatThaArtist' Gayden. Photos courtesy of the University of Southern Mississippi School of Ocean Science and Engineering.",
    content: `A new interactive art exhibit is designed to make viewers think twice about what they toss into the trash, where it ends up and what it could harm.

Organizers from the University of Southern Mississippi's School of Ocean Science and Engineering led a team to present "Toxic Beauty: Plastic's Hidden Cost" at the Mississippi Aquarium in Gulfport.

The initiative is led by Kristina Mojica, Southern Miss associate professor of marine science, and Rachel Lancaster, a marine science doctoral student. The exhibit, which runs through Labor Day Sept. 7, presents works of art from what was previously discarded trash. Displays include a pair of life-sized sea turtles created from foam and scrap cardboard and Mardi Gras beads found during beach cleanups.

"This new recycling art exhibit reflects the power of collaboration and creativity in addressing one of the most pressing challenges facing not only our oceans but also human health," said Jeff Gibula, interim chief executive officer of the Mississippi Aquarium.

The exhibit in Gulfport, 70 miles from the Hattiesburg campus, is intended to generate an impact that flows even further as visitors think about the display and its meaning.

The project assembled local artists, scientists and educators to highlight the impact of plastics on the environment and the animals affected.

Ocean Springs-based artist Demetrius Gayden, known as "MeatThaArtist," created several pieces including the sea turtles.

"This project pushed me outside of my usual medium of acrylics and canvas and into something completely new," Gayden said. "By transforming those materials into art, I hope it encourages people to see the value in repurposing and turning what might be considered trash into something meaningful and impactful."

Another display shows an alligator head lifting up from hiding. A closer look shows that the alligator is made from an old sneaker.

Students from Long Beach High School and Ocean Springs High School also created marine animals from material collected along the Gulf Coast. All materials were sterilized by the Southern Miss School of Ocean Science and Engineering.

Creators also urge visitors to take a survey to gauge the ability of the exhibit to encourage them to become stronger stewards of the environment by taking personal steps to reduce plastic pollution.

Performance art also accompanies the physical exhibit on select days. Through "Plastic, Drastic, Fantastic," Southern Miss dance students illustrate the consequences of misusing plastics as they interact with the audience visiting the exhibit.

"In this partnership with USM, we're not only showcasing innovative works made from reclaimed materials, but we are also inspiring our community to rethink waste, embrace sustainability, and see the beauty in giving new life to what was once discarded," Gibula said. "At Mississippi Aquarium, education and conservation go hand in hand, and this exhibit brings both to life in a truly meaningful way."`,
  },

  {
    id: "212",
    title: "Share Your Vision: Residents Still Have Time to Contribute to Hattiesburg '150 & Beyond' Long-Term Plan",
    excerpt: "Hattiesburg leaders are crafting a 20-year roadmap for the city's future, and residents have just a few more days to add their input through the 'Hattiesburg 150 & Beyond' comprehensive plan.",
    category: "community",
    author: "Hattiesburg Hub Staff",
    date: "May 29, 2026",
    image: "/story-comp-plan-session-1.jpg",
    images: [
      "/story-comp-plan-session-1.jpg",
      "/story-comp-plan-session-2.jpg",
      "/story-comp-plan-session-3.jpg",
    ],
    slug: "hattiesburg-150-beyond-comprehensive-plan-input",
    featured: true,
    original: true,
    photoCredit: "Residents review and contribute to the draft 'Hattiesburg 150 & Beyond' comprehensive plan during public input sessions hosted by the City of Hattiesburg. Photos courtesy of the City of Hattiesburg.",
    content: `Hattiesburg leaders are crafting a plan that will guide the city's development for the next 20 years, and residents have just a few more days to add their input.

The city is finalizing "Hattiesburg 150 & Beyond," the first major long-term comprehensive plan since 2008. The name is a nod to 150 years of the city's existence.

Sunday, May 31 is the final day to submit input through the online survey: https://www.hattiesburgplan150.com.

Planning officials for more than a year have hosted a series of public sessions throughout the city, in addition to creating online opportunities to submit input.

"This comprehensive plan serves as the compact between our city leaders, staff, residents, business owners, and community partners regarding the path we will follow to take Hattiesburg from being one of the best cities in Mississippi to becoming the premier city of the Gulf South," the draft plan reads.

Authors of Hattiesburg 150 & Beyond describe it as the city's roadmap for the future. The goal is to use the plan as a guide to develop policies that strengthen Hattiesburg as a hub for opportunity, lifestyle, innovation and culture.

"When Southerners imagine what a great city should be like, the first city they will think of is Hattiesburg—a great place to live, a great place to work, a great place to play, and a great place to visit for everyone," the document pledges.

The draft plan aims to address key priorities, including infrastructure, land use, housing, transportation, economic development and parks. Future development is intended to be aligned with supporting these core needs.

Goals are short-term and long-term aspirational. For example, planners envision a state-of-the-art indoor central recreation center in the earlier years and then recruiting a professional sports team to town within the next 10 to 15 years.

The plan also highlights the need to devote resources to downtown. That includes supporting existing businesses, while also encouraging further development in the city's core.

To do so, planners suggest controlling sprawl into the western section of town, which often leaves downtown with diminished population to sustain businesses.

"The city will prioritize limiting further retail and residential development on the west side of the city until vacant lots, structures, storefronts, and upper story units have been sufficiently filled such that the urban core is denser in terms of population of both residents and businesses per acre than any area in the Pinebelt outside the urban core," according to the plan. "This prioritization will allow the Pinebelt to retain its urban assets, attract new residents and retain current ones, and allow for efficient delivery of municipal services."

**Securing infrastructure for today and tomorrow**

While not as visible as buildings and parks, the Hattiesburg 150 & Beyond plan stresses the need to upgrade physical infrastructure to support its growth and development. Those improvements include maintaining reliable sewer and water service, and updating other infrastructure including roads and pedestrian pathways.

"Regular maintenance and upgrades of City infrastructure is essential if current levels of service are going to be maintained. The City will continue to upgrade and maintain infrastructure and facilities to provide a steadily improving quality of life to Hattiesburg residents," the plan details.

A federal consent agreement approved in January 2021 set the parameters for the city to improve its wastewater system and control sanitary sewage overflows. The central issue surrounds the city's aged sewerage system, which resulted in hundreds of sewage overflows that polluted the waterway.

The city since then began an aggressive 16-year initiative to improve city infrastructure and increase preventative maintenance related to the sewer system.

The comprehensive plan takes note of the ongoing drainage improvements. One goal includes developing "sponge" infrastructure to align the banks of the Leaf and Bouie Rivers to manage flooding. Sponge infrastructure is a term for land development practices that aid traditional stormwater systems to guide water saturation in the soil. They include linear parks, rain gardens, permeable pavement and even green roofs that support foliage on top of buildings.

**Ensuring housing availability and affordability**

Maintaining and creating adequate and affordable housing is also a major item in the city's long-term plan.

"While Hattiesburg is an affordable place to live relative to other parts of the country, many residents struggle to find a variety of reliable affordable housing options across the city," the draft plan explains. "Expanding the affordable housing supply in this community requires engaging with land use regulations, strengthening relationships with local developers, and educating the public about affordable housing support programs."

City planners recommend "pattern zones," that allow developers to bypass some approval processes by allowing pre-approved plans that are deemed appropriate for multi-purpose housing.

"These pre-approved plans can significantly accelerate construction timelines and remove some of the risk from the development process, which can serve as a significant incentive to build more," according to the draft plan.

Following resident suggestions and feedback made by May 31, the draft comprehensive plan will be finalized and presented to the city council for approval.`,
  },
  {
    id: "128",
    title: "\"Never Give Up:\" Johnny DuPree Reflects on 40 Years of Breaking Barriers and Making Mississippi History Again",
    excerpt: "From Hattiesburg's first Black mayor to newly elected state senator, Johnny DuPree reflects on four decades of public service, family, faith and the motto that has carried him through every campaign.",
    category: "community",
    author: "Hattiesburg Hub Staff",
    date: "May 18, 2026",
    image: "/story-johnny-dupree-public-safety-complex.jpg",
    images: ["/story-johnny-dupree-public-safety-complex.jpg"],
    slug: "johnny-dupree-never-give-up-mississippi-history",
    featured: true,
    original: true,
    photoCredit: "Former Hattiesburg Mayor and current Mississippi State Senator Johnny DuPree stands outside the Johnny L. DuPree Public Safety Complex, dedicated in his honor by the Hattiesburg City Council in 2024. Photo by Hattiesburg Hub.",
    content: `Some call him Senator, while a few call him Dr. DuPree, and still many more call him Mr. Mayor.

No matter the title, Johnny DuPree answers to each of them.

"People call me mayor and then they apologize and I say, 'being a father, a husband and mayor of the city of Hattiesburg are my greatest accomplishments, so I'll answer to that anytime,'" the former longtime mayor turned state senator said.

For nearly 40 years DuPree has been at the center of political and civic life in his hometown. And he made history and has broken barriers along the way.

It began in 1987 when he was appointed to the Hattiesburg school board, then an elected seat to the Forrest County Board of Supervisors.

In 2001 he was elected mayor of Hattiesburg, becoming the first Black person to lead the city and its longest serving. He served four terms, losing his bid for a fifth term in 2017. Still not ready to retire, DuPree dared to enter state politics.

DuPree also made history as the first Black person to run as a major party's candidate for governor of Mississippi since Reconstruction, a period shortly after the Civil War. He also ran for secretary of state and then for Congress.

DuPree lost those races yet remained undeterred. Finally in late 2025 he ran and won a seat as a Mississippi state senator, representing Hattiesburg and now its surrounding communities.

DuPree earned his bachelor's and master's degrees from the University of Southern Mississippi, then a PhD from Jackson State University.

As a state senator, DuPree said he brings experience from each of his offices as a mayor, school board member and county leader to the state capital.

"My motto is 'never give up.' That's our family's motto and we live by that," DuPree said. "You have to understand that all we've been able to accomplish has been by the grace of God."

His years as mayor brought unprecedented challenges. As mayor, DuPree led the city during two tornadoes, the devastation of Hurricane Katrina and a downturn in the economy.

The city under his leadership achieved an unemployment rate significantly lower than both national and state averages. DuPree is also credited with significant city infrastructure improvements.

The Hattiesburg City Council in 2024 dedicated the public safety complex in honor of the former mayor.

DuPree learned early on the value of work and the honor of keeping his commitments. His mother worked domestic jobs to support her family. Her young son was the oldest child and did what he could to help.

His first job was as a newspaper carrier for Ms. Lillie's Newspaper Stand, where he delivered the Hattiesburg American.

She told him that the papers must be delivered, rain or shine. There were no excuses.

Now 72, DuPree said the lesson learned decades ago has guided him throughout his professional life and personal life.

"It doesn't matter the circumstances," DuPree said. "It matters how you approach and deal with the circumstances. Or do you allow the circumstances to deal with you?"`,
  },
  {
    id: "127",
    title: "William Carey University Honors a Unique Past While Forging Advancements for the Present and Future",
    excerpt: "A new Heritage Plaza enshrines the legacy of Mississippi Woman's College as William Carey University presses forward with major advancements in medical education and primary care.",
    category: "community",
    author: "Hattiesburg Hub Staff",
    date: "May 15, 2026",
    image: "/story-wcu-heritage-plaza-ceremony.png",
    images: [
      "/story-wcu-heritage-plaza-ceremony.png",
      "/story-wcu-heritage-plaza-seal.png",
      "/story-wcu-heritage-plaza-burnett.png",
    ],
    slug: "william-carey-university-heritage-plaza-rededication",
    featured: true,
    original: true,
    photoCredit: "Photos courtesy of William Carey University. Top: Alumni and employees gather for the rededication ceremony for Mississippi Woman's College Heritage Plaza. Middle: A 400-pound marble replica of the Mississippi Woman's College official seal rests in the center of the new plaza. Bottom: College President Ben Burnett, Ph.D. officially rededicates the new Mississippi Woman's College Heritage Plaza.",
    content: `A 400-pound marble medallion at the entrance of an outdoor plaza harkens back to the earliest days of a longtime Hattiesburg institution.

While the name has changed and its student population has expanded in the last century, the memory and founding principles of the old Mississippi Woman's College remain enshrined at William Carey University.

A plaza was recently dedicated to honor the predecessor school to William Carey which stood in the same location at the present university. A replica of the school's official seal rests in the center of the Mississippi Woman's College Heritage Plaza.

"For generations, the legacy of Mississippi Woman's College has lived on through its graduates whose lives of faith, service, leadership and scholarship helped shape not only our institution but communities across Mississippi and beyond," said Karen Golson, William Carey University's director of advancement.

The Mississippi Woman's College operated from 1911 until 1940, when the campus closed and its facilities were used as housing for nearby Camp Shelby during World War II.

Following the war, the school reopened in 1946. The school became coeducational in 1954 and its name was changed to William Carey College in honor of the 18th century English missionary.

"Now, as William Carey University, we remain deeply grateful for the foundation built by Mississippi Woman's College and the women who carried its mission into the world," Golson said.

The first plaza honoring the school's history built in 2007 was destroyed by a tornado in 2017.

Both structures were constructed as a gift by the Gillespie family in honor of Margaret Lou Hemeter Gillespie, a 1931 graduate of Mississippi Woman's College.

William Carey honors its past while also continuing to advance with programs to meet present and future needs, particularly when it comes to healthcare.

The university's College of Osteopathic Medicine is consistently listed as a national leader in primary care. The college in April was ranked among the best graduate schools of medicine by U.S. News & World Report.

The medical school since opening in 2010 has graduated more than 1,300 physicians.

University leaders in April dedicated the second phase of the $20 million Charles W. Pickering Institute of Primary Care. The 70,000 square foot facility will further the college's mission to increase the number of primary care physicians in Mississippi and throughout the Gulf South.

"I am overjoyed at this news, and I believe that transformation for better healthcare is being kindled for Mississippi," said Dr. Italo Subbarao, dean of the College of Osteopathic Medicine. "This was the promise we made when this school was first started; that we would endeavor to be part of the solution for Mississippi's physician shortage."`,
  },
  {
    id: "126",
    title: "Southern Miss Delivers $1.3 Billion Statewide Economic Impact, New Report Shows",
    excerpt: "A newly released report from USM's Trent Lott National Center confirms the university generated $1.3 billion in statewide economic impact last year, supporting more than 10,000 jobs.",
    category: "business",
    author: "Hattiesburg Hub Staff",
    date: "May 15, 2026",
    image: "/story-usm-administration-building.jpg",
    images: [
      "/story-usm-administration-building.jpg",
      "/story-usm-economic-impact-cover.png",
    ],
    slug: "southern-miss-1-3-billion-economic-impact-report",
    featured: true,
    original: true,
    photoCredit: "Images courtesy of The University of Southern Mississippi",
    content: `The University of Southern Mississippi generated $1.3 billion in economic impact to the state last year, a newly released economic report confirms.

The analysis from USM's Trent Lott National Center for Economic Development and Entrepreneurship highlights the university's pivotal role as both an employer and center of economic growth.

Spending supported more than 10,000 jobs around the state and produced $438 million in labor income. Southern Miss itself employs 4,469 faculty and staff.

"Southern Miss is transforming lives through education while strengthening Mississippi's economy in tangible and lasting ways," Southern Miss President Joe Paul said. "This report highlights the impact our university has on communities throughout the state and reflects the collective contributions of our students, faculty, staff and alumni."

Dollars counted in the analysis included operations, student and visitor spending, capital investment and the "alumni dividend," the portion of increased labor income associated with a USM degree.

The report details economic impact in two metropolitan areas that anchor Southern Miss campuses in the Hattiesburg Metropolitan Statistical Area and the Gulfport–Biloxi Metropolitan Statistical Area.

The university's presence in the Hattiesburg area accounted for $853 million in total economic impact that supported 6,745 jobs and generated $283.7 million in labor income.

"Taken together, the findings underscore USM's role as a cornerstone institution for Mississippi, supporting high-quality employment, strengthening household incomes, and contributing to regional competitiveness through education, research, and workforce development," researchers concluded in their report. "The economic impacts described in this report occur annually and represent an ongoing contribution to the state's economy and quality of life."

The Gulfport–Biloxi area benefited with $227.3 million in total economic impact including supporting 1,820 jobs and generating $78.1 million in labor income.

Additionally Southern Miss contributed $48.9 million in state taxes and $23.4 million in local taxes last year.

"The findings demonstrate the university's broad economic footprint and its continued importance to the state's economy," said Brian Henson, director of the Trent Lott National Center. "Through its operations, research activity, students, visitors, and talent development, Southern Miss supports jobs, strengthens business activity, and serves as a powerful driver of economic growth and opportunity throughout Mississippi."`,
  },
  {
    id: "119",
    title: "Hattiesburg Continues Its $45 Million Plan to Overhaul Troubled Sewer System Five Years After Consent Order",
    excerpt: "More than five years after a federal judge approved a sweeping consent order, Hattiesburg presses on with a 16-year, $45 million overhaul of its aging wastewater system.",
    category: "community",
    author: "Joseph Bryant",
    date: "May 4, 2026",
    image: "/story-sewer-roadwork.jpg",
    images: [
      "/story-sewer-roadwork.jpg",
      "/story-sewer-creek.jpg",
      "/story-sewer-excavator.jpg",
    ],
    slug: "hattiesburg-sewer-overhaul-consent-order",
    featured: true,
    original: true,
    photoCredit: "Each of these images came from the City of Hattiesburg",
    content: `It has been more than five years since a federal judge officially approved an agreement to deliver sweeping upgrades to the beleaguered Hattiesburg wastewater system and solidify a commitment to improve environmental conditions.

The central issue surrounds the city's aged sewerage system, which resulted in hundreds of sewage overflows that polluted the waterway.

The city's own internal survey showed about 900 unreported sewage overflows between January 2012 and September 2016. Overflows occur during heavy rain that overwhelms the aged system.

An agreement between the city, the U.S. Environmental Protection Agency, and the Mississippi Department of Environmental Quality outlines a long-term $45 million plan of action to overhaul Hattiesburg's sewerage system.

Hattiesburg continues an aggressive 16-year overhaul plan that includes improvements to city infrastructure and preventative maintenance that extends from city facilities directly into neighborhoods.

Mayor Toby Barker has called improvements a "once in a generation opportunity to invest in aging infrastructure."

The consent agreement signed by U.S. District Court Senior Judge Keith Starrett in January 2021 concluded years of negotiation with federal regulators over how to improve the city's wastewater system and control sanitary sewage overflows.

Action to improve the city's system actually began several years earlier, in 2012, when the Gulf Restoration Network, an environmental advocacy organization now known as Healthy Gulf, sued the city for discharging pollutants into the Leaf and Bowie Rivers in violation of the federal Clean Water Act.

That lawsuit resulted in a consent agreement with the city before state and federal officials later lodged their own suit against the city, which resulted in the current consent agreement and long-term plan of action.

Improvements under the current consent agreement are designed to touch the larger infrastructure and reach into individual homes.

The city's largest water and sewerage initiative to date began in late 2023 with 18 months of major infrastructure projects that included replacing water and sewerage lines along Martin Luther King Avenue. The work was among nine projects funded by the American Rescue Plan Act and matched with state dollars.

The $4 million initiative includes replacing undersized and aging sewerage mains, water mains, and water service lines.

Ward 5 Councilman Nicholas Brown, who represents the area, told the Hattiesburg Hub the work continues to bring needed infrastructure improvements.

"The steps that have been taken are necessary and we are working closely with our water and sewer department to stay in compliance," he said. "The water and sewer projects that have been completed and are underway in Ward 5 since I took office were much needed and are very helpful in maintaining compliance."

The city in 2024 also launched its "Clean Start Initiative" to repair or replace deteriorated, broken, or improperly connected sewerage service lines in low to moderate-income homes. The program is limited, however, with just about $200,000.

"The goal of this program is to significantly reduce the inflow and infiltration of stormwater into the sewer system," Barker said at the time. "We believe this is a mutually beneficial opportunity for both our residents to improve sewer infrastructure issues they may be facing on their own properties and for the city to enhance its overall sewer treatment program."

The city estimates it will spend about $3 million a year on its long-term improvement plan.

The city in late 2025 announced more than $4 million in loan forgiveness from the state to aid in major sewer improvements along the North Main Street corridor.

The $5.48 million project includes replacing and repairing nearly 9,700 linear feet of sewerage lines across the North Main Street area.

Of that amount, $4 million will be forgiven by the Mississippi Department of Environmental Quality's Water Pollution Control Revolving Loan Fund. That means the city will only be responsible for $1.48 million.

These upgrades will improve reliability and enhance capacity within Hattiesburg's wastewater collection system.

Work is expected to be complete by 2028.`,
  },
  {
    id: "109",
    title: "A Hattiesburg Original: Veteran Sportscaster Finds Purpose Ministering to Athletes",
    excerpt: "After 27 years as a beloved WDAM sportscaster, Mitchell Williams walked away from the spotlight to answer a higher calling with the Fellowship of Christian Athletes.",
    category: "community",
    author: "Joseph Bryant",
    date: "April 14, 2026",
    image: "/story-williams-portrait.webp",
    images: [
      "/story-williams-portrait.webp",
      "/story-williams-team-prayer.webp",
    ],
    slug: "mitchell-williams-fca-profile",
    featured: true,
    original: true,
    photoCredit: "Contributed — Fellowship of Christian Athletes",
    content: `Mitchell Williams' name, image and likeness has been a staple around Hattiesburg and south Mississippi for decades.

For 27 years Williams was a trusted presence on television as sportscaster and director at WDAM TV where his voice was instantly recognized.

Then he walked away from it all to answer a calling to use his skills for an even greater purpose. Williams left his broadcast career to communicate another message with the Fellowship of Christian Athletes.

"I have always been in ministry since I was a young adult but my vocation was being a broadcaster," Williams said.

Was it hard to leave the spotlight?

"Absolutely not," Williams responded without hesitation. "I had nothing to do with it."

Today he is just as well known for his second career as Multi Area Director for the Southeast Mississippi Chapter of Fellowship of Christian Athletes and as football team pastor for the University of Southern Mississippi's Golden Eagles.

"I've always believed that God gives us a certain amount of influence, and how we use it will determine or widen whatever journey we are going," he said.

Williams said his decision to change careers was the result of a lingering desire to do more to impact the athletes he covered. As a sportscaster, he noticed a disturbing theme year after year.

"I would always ask questions in Mississippi. 'Where was the child last year who put up so many points?' And they would give me these answers that didn't make any sense, but were consistent. 'He's in jail or she's having her second child,'" Williams recalled.

Those answers continued to disturb him.

"I was struggling inwardly. You say you're a Christian and you're a hypocrite, because all these kids you are covering, you're not even sure of their eternity," he said.

A turning point began when he was asked to handle publicity for a summer camp presented by Steve McNair, the former NFL MVP and Hattiesburg native. When tragedy struck, McNair's mother asked Williams to lead her son's funeral when he was killed in 2009.

"His mother called me the night he was killed about 2 a.m. and asked us to put together his funeral," Williams said.

Williams tried to say no to the tall task, but Lucille McNair insisted that he coordinate the community memorial to the hometown athlete.

Thousands of people filled Reed Green Colosseum where celebrity athletes and well known singers paid tribute to the fallen player.

"The Lord was shaping all that into what I do now," Williams said.

The impact of the funeral never dissipated. Williams a little over a year later knew it was time to make a change.

"After the funeral it kept eating me up," he said.

Williams prayed and fasted to seek an answer. Eventually, he met Bill Buckner the then state FCA director who had an incurable case of leukemia. Buckner asked Williams about using his influence and working for the organization.

He then went back home, talked to his family and quit his broadcast job. It was not glamorous.

"I had to raise my own salary, we had no car, no budget, nothing," Williams said.

In the beginning there was $55,000 that needed to be raised to support the entire organization that served eight schools. And he had just one staff member.

Since then, FCA has grown to include 36 employees and a $3.2 million budget. Under Williams' watch, the organization serves 120 middle and high schools, five community colleges and six universities.

The impact continues to grow as individuals are touched one on one.

"We believe the Gospel of the Lord Jesus Christ is being shared from Meridian to the Coast at least once a day somewhere and we think it's over 20,000 hearing the Gospel through FCA right now."

Williams, a member of the Southern Miss M-Club Athletic Hall of Fame, remains a sought-after speaker at events from church gatherings to conferences.

After decades of success in the broadcast booth and on the sidelines with both a microphone and a Bible, Williams maintains a modest outlook.

With his list of accolades and titles, Williams said he remains guided by a simple mandate.

"I am a son, a husband, a father and most of all a servant," he said. "If I am anything other than that, I have failed."`,
  },
  {
    id: "108",
    title: "Unforgettable: Street Renamed to Honor Longtime Hattiesburg Education and Civic Icon Dr. Eddie Holloway",
    excerpt: "The City of Hattiesburg and the University of Southern Mississippi honored Dr. Eddie Holloway — retired dean of students, former city councilman, and lifelong community champion — with the newly christened 'Dr. Eddie Holloway Drive.'",
    category: "community",
    author: "Joseph Bryant",
    date: "April 13, 2026",
    image: "/story-holloway-unveiling.jpg",
    images: [
      "/story-holloway-unveiling.jpg",
      "/story-holloway-podium.jpg",
      "/story-holloway-handshake.jpg",
      "/story-holloway-barker-speaking.jpg",
      "/story-holloway-audience.jpg",
      "/story-holloway-crowd-closeup.jpg",
      "/story-holloway-street-sign.jpg",
    ],
    slug: "dr-eddie-holloway-street-dedication",
    featured: true,
    original: true,
    photoCredit: "Contributed — City of Hattiesburg",
    content: `The presence of Eddie Holloway at the University of Southern Mississippi is now forever enshrined after his 40 years of dedication to the institution and the students it serves.

"We did not know him by the many titles, organizations and boards he has served on in the city," said Mayor Toby Barker, himself a Southern Miss alum. "We knew him because he was Dr. Holloway, the dean of students, the man who treated you like a person, like family whose future he had genuine interest in cultivating."

Holloway, the retired longtime Southern Miss dean of students and former longtime Hattiesburg city councilman, was honored with the newly christened "Dr. Eddie Holloway Drive" spanning from North 40th Avenue to Golden Eagle Avenue.

He retired in 2019 after serving 40 years at the university as dean of students, associate vice president of student affairs and a professor of psychology.

Holloway also served four terms on the Hattiesburg City Council, becoming one of the first Black members elected to the dais. He currently serves on the Hattiesburg Public School District Board of Trustees.

"It's an awesome occasion when you can honor somebody's life work when they are still here to be honored," Southern Miss President Joe Paul said during the recent street dedication ceremony where the audience also saw the unveiling of a bronze plaque featuring Holloway's image.

Paul met Holloway more than 55 years ago in 1971 when Holloway checked him into his dorm as a freshman.

"Here's a man who has served his city so well, has served this university so well and has served his neighborhood so well for a lifetime," Paul said.

Holloway's association with Southern Miss began when he entered as an undergraduate student. He later earned each of his degrees there including two master's degrees and a doctorate.

Taking to the lectern, Holloway was not at a loss for words as he addressed a crowd gathered to celebrate his legacy.

But instead of highlighting his own years of civic and educational leadership, Holloway chose to honor the community and individuals who helped him find success in spite of early tragedy when his mother died while he was young.

"The entire neighborhood and that church and those schools filled every void that you could imagine," he said. "Never did I feel that there was not love in that Mobile Street neighborhood, and it propelled me to this point."

Accepting his honor, Holloway named several people who were influential in his life beginning in kindergarten and accelerating when he needed them the most.

"Church, school door and house door - wherever those three doors meet, success is just a step away," he said.

Holloway said he remained guided by early advice his father told him just after his mother died.

"He said, 'Son, we don't have any money. All I've got is my name, keep it clean,'" Holloway recalled so many years later. "I've tried to do that. But not without the help of all of you."

And throughout his travels, Holloway said he never forgot where home was and where home remains, in Hattiesburg.

"I've had the pleasure to travel the country but I've never been to a place where I was not eager to come back home," he said.`,
  },
  {
    id: "103",
    title: "From High School to Carnegie Hall: Hattiesburg Choral Students Showcase Their Talents on World-Famous Stage",
    excerpt: "Performers from the Hattiesburg High School Choir traveled to New York City where they performed at Carnegie Hall, just two years after the program was revived. The community rallied to raise more than $31,000 to fund the trip.",
    category: "culture",
    author: "Joseph Bryant",
    date: "Apr 8, 2026",
    image: "/story-carnegie-hall-outside.jpg",
    images: [
      "/story-carnegie-hall-outside.jpg",
      "/story-carnegie-hall-stage.jpg",
      "/story-carnegie-hall-marquee.jpg",
      "/story-carnegie-hall-backstage.jpg",
      "/story-carnegie-hall-mingling.jpg",
      "/story-carnegie-hall-times-square.jpg",
      "/story-carnegie-hall-empire-state.jpg",
    ],
    slug: "hattiesburg-high-school-carnegie-hall",
    featured: true,
    original: true,
    photoCredit: "Contributed — Hattiesburg Public Schools Choral Arts",
    content: `The melodic sounds from Hattiesburg High School have drifted down well past the music room to ascend onto the world's most famous stage at Carnegie Hall.

Performers from the Hattiesburg High School Choir recently traveled to New York City where they performed at the celebrated auditorium.

Gary McCullum, director of choral activities for the Hattiesburg Public School District, called his chorus a "beautiful secret" that he dreamed of sharing with everyone. And he did it in just two years since the program was revived after more than a decade.

"It is almost a dream come true from every aspect. I have kids who come from various walks of life, so there are a few students who have never left the state of Mississippi and some who have never flown on an airplane before, so there were a lot of firsts," he said. "We not only got a chance to perform on one of the best performing stages in the world but we also immersed ourselves in the culture."

The performance was on March 16th, where the group performed two pieces from Beethoven, "Hallelujah, from Christ on the Mount of Olives" and "Choral Fantasy." For the latter, the students had to learn German.

McCullum noted the significance of the young performers from Hattiesburg standing on the same stage as legends such as Duke Ellington, Leontyne Price and Frank Sinatra among others.

"They rose to the challenge and surpassed it with flying colors," he said.

The trip went far beyond music to expose students to sites and experiences that will inspire and remain with them forever. Among their Big Apple blitz, the students visited landmarks including the Empire State Building, 9/11 Memorial and Museum, Ellis Island, New York University and the Brooklyn Bridge.

"To be able to afford these opportunities for young scholars to have their eyes opened at such a young age is worth its weight in gold," McCullum said.

McCullum is guided by creating "perfect visibility" for his students. He has delivered. Every year has created increased opportunities for the students, McCullum said.

And the visit to New York and the performance at Carnegie Hall wasn't just for the students themselves.

McCullum said the performers on stage were ambassadors for Hattiesburg where the experience was a high mark, not only for the students, but also the community they represented.

They were supported by an entire community who rallied to make it possible, McCullum said. A campaign to fund the experience raised more than $31,000.

Hattiesburg Mayor Toby Barker even surprised the students by secretly making the trek to New York to see them perform on stage.

"I look up and it is our mayor who is sitting in a box above us," McCullum said. "He runs down and he hugs the kids. He actually left his meeting in D.C. and caught a three-hour train ride to be over just to support the kids in their efforts. That enough is going to be etched in the hearts of these kids for life."

McCullum also noted the support of Calvin Bogan, a Hattiesburg pastor who serves as the group's saxophone player and stage director, who helped craft a campaign to generate support through a unifying slogan. "Our Music Lives," became the hashtag and rallying cry that sent the students to New York.

"We wanted to let the community know that it wasn't just us going but we were taking the spirit of the community with us to New York."

McCullum also cited Hattiesburg Schools Superintendent Robert Williams for rallying support for the effort.

And there's still no time to rest, even after their major appearance in New York. The chorus just last week after New York traveled to Gatlinburg, Tenn. to participate in the Smoky Mountain Music Festival where their performances placed first and second in their competitions.

The performers April 25 will next bring their voices to the Mississippi Arts Experience Exhibit in Meridian where they will give a concert and also record for the first time.

And finally the group on May 16 will present a Disney Showcase where they will bring a piece of the Magic Kingdom home to Hattiesburg High School.

"We have Disney characters who walk around throughout the performance hugging kids and loving on them and taking pictures with them," McCullum said. "It's just an incredible time and an opportunity for us to serve our community in love."`
  },
  {
    id: "102",
    title: "Living History: Sixth Street Museum District Showcases Hattiesburg's Past, Inspires the Future",
    excerpt: "The Sixth Street Museum District in Hattiesburg's Mobile/Bouie Neighborhood showcases the city's historic African American center of culture and business, featuring the African American Military History Museum, Eureka School, Smith Drug Company, Oseola McCarty House and the forthcoming Moeller Military Vehicle Museum.",
    category: "culture",
    author: "Joseph Bryant",
    date: "Mar 30, 2026",
    image: "/story-sixth-street-smith-drug.jpg",
    images: [
      "/story-sixth-street-smith-drug.jpg",
      "/story-sixth-street-aamhm.jpg",
      "/story-sixth-street-smith-drug-malt.jpg",
      "/story-sixth-street-mccarty-museum.png",
    ],
    slug: "sixth-street-museum-district-hattiesburg",
    featured: true,
    original: true,
    photoCredit: "Photos courtesy of the Hattiesburg Sixth Street Museum District",
    content: `A drive down Sixth Street in Hattiesburg offers a glimpse of the past and displays a path leading to the restoration of a vibrant historic community.

The Sixth Street Museum District in the Mobile/Bouie Neighborhood showcases the city's historic African American center of culture and business that spans more than a century.

The district is among several attractions that generates interest locally and far beyond to bolster Hattiesburg's status as a hub for cultural tourism.

"In Hattiesburg we don't have a mountain, we don't have a beach and we don't have a mouse," said Rick Taylor, executive director of the Hattiesburg Convention Commission, referring to cities such as Orlando with major attractions such as Disney World. "So you've got to figure out what you have that attracts people. You've got to work all the angles, and that's what Hattiesburg has been very good at."

A blend of attractions has benefited the city. Visitors in 2024 contributed $582 million to the Hattiesburg economy from a variety of dining, shopping, hotel and cultural attractions.

The Convention Commission operates Hattiesburg's Sixth Street Museum District. The historic Eureka School was the first project for the burgeoning museum district in 2006. The commission acquired the property, which was threatened with demolition, and began the long process of renovation.

"We made a deal with the city and the public schools that said if you turn it over we'd renovate it," Taylor said.

The school opened in 1921 as a high school for African American students. The school was also built on the same site as the first school for African Americans in Hattiesburg. Renovations were completed in 2018.

Multiple projects began to take shape along Sixth Street.

The African American Military History Museum opened its doors in 2009. Through hundreds of artifacts, photos and displays, the museum housed in a former USO club building illustrates the contributions of African American soldiers from the American Revolution through today.

The facility preserves the stories of pioneers including Jesse L. Brown, a Hattiesburg native who became America's first Black naval aviator. The story of Ruth Bailey Earl, also of Hattiesburg, is honored as one of more than 500 nurses who served during World War II.

The USO building opened in 1942. The building was built as a gathering place for Black soldiers who were stationed at nearby Camp Shelby. The military base at one time was technically the largest city in Mississippi because of all the soldiers it housed.

The building after the war remained a hub of activity as a community center, a library and school. A local effort then began to convert the building into a military museum harkening to its original military use.

That project brought an unexpected reward. "In the process of renovating it and building a museum inside we discovered that it was the only USO of its style remaining in the United States," Taylor said. Taylor said that in fact, the largest and most rare relic of the museum is the building itself.

Further down the street sits the historic Smith Drug Company, a company with a century-old connection to the community. Pharmacist E. Hammond Smith operated his drugstore for 55 years before retiring in 1980 and selling the company to James A. Cohen.

The city of Hattiesburg bought the Smith Drug building, with the commission restoring it to its vintage look and reopening it in 2022.

"With lots of stories within its walls and a proud neighborhood as its backdrop, we believe that a building such as this with a rich history deserves an equally bright future," Mayor Toby Barker declared in 2020 as the city celebrated plans for the site.

The drug store established in 1925 is now a living museum where visitors on Saturdays can come look and observe the historic building and also taste its serving of old fashioned ice cream milkshakes, floats and malts.

The latest cultural jewel opened in March with the dedication of the Oseola McCarty House. McCarty made international headlines and was heralded as an example of generosity with her surprise donation to create scholarships to support students at the University of Southern Mississippi.

McCarty lived a simple life in her wood-framed home and diligently saved her earnings as a washerwoman until she amassed a small fortune. In her 80s, she gave it all away to help others, including $150,000 in scholarships for rising students. McCarty's story motivated others to contribute to the foundation which has now assisted 142 students.

McCarty's house was moved to the Sixth Street District, restored and opened as a memorial to her.

"It's just something we feel is important. It speaks to the south, it speaks to Mississippi in terms that we have a generous spirit and Ms. Oseola epitomizes that far beyond what she could have imagined," Taylor said. "It's a story that other people need to hear and think about in their own lives."

The district continues to grow, including the opening of the McCarty House and the forthcoming Moeller Military Vehicle Museum.

Each project has paved the way for the next. In fact, the military vehicle museum was inspired by a positive visit to the African American Military History Museum. Dr. Don Moeller from Georgia quietly toured the museum and returned with a major proposal to donate his collection of more than a dozen rare military vehicles.

The Hattiesburg Convention Commission already owned property across the street from the military museum, which makes the two exhibits natural companions, Taylor said.

Moeller had just two requirements, that the vehicles be kept inside and that they remained accessible to children, the most curious visitors.

"These vehicles have to be available for children to climb on," Taylor said. "I think that's fantastic. That's what people want to do."

The new museum facility is built, with design work ongoing for the inside layout.

"It's been that support from unexpected areas," Taylor said. "It has been great for us, great for our community and great for our future."`
  },
  {
    id: "101",
    title: "Surpassing Expectations: Hattiesburg Zoo Creates Model for Growth, Popularity and Stability",
    excerpt: "Now beginning its 76th year of operation, the Hattiesburg Zoo continues to evolve with its exhibits, programs and a financial model — including the Serengeti Springs water park — designed to ensure its success and stability.",
    category: "community",
    author: "Joseph Bryant",
    date: "Mar 30, 2026",
    image: "/story-zoo-giraffe-feeding.jpg",
    images: [
      "/story-zoo-giraffe-feeding.jpg",
      "/story-zoo-tiger-keeper.jpg",
      "/story-zoo-colobus.jpg",
      "/story-zoo-emu.jpg",
    ],
    slug: "hattiesburg-zoo-growth-model",
    featured: true,
    original: true,
    photoCredit: "Photos courtesy of the Hattiesburg Convention Commission",
    content: `There aren't many cities the size of Hattiesburg where residents can boast of being able to take a short stroll to visit the local flamingos, spot a rare Malayan tiger or even feed a giraffe.

Yet all that and more is found at the Hattiesburg Zoo. Now beginning its 76th year of operation, the zoo continues to evolve with its exhibits, programs and a financial model designed to ensure its success and stability.

"Our entire community recognizes that a city of our size typically doesn't have a zoo," said Rick Taylor, executive director of the Hattiesburg Convention Commission, the organization that manages the city-owned zoo.

The zoo in recent years has undergone a major $5.1 million expansion to include new giraffe and hyena exhibits. Those improvements were paid by the Convention Commission. Operators then stepped back to evaluate ways to secure the financial viability of the institution and ways to pay for future improvements.

"We said, 'How do we keep growing, and how do we keep expanding it,'" Taylor recalled. "Obviously all of these things cost, and costs go up every year."

The answer was the creation of the Serengeti Springs water park. The water park, which opened in 2024, was designed as a draw that would attract visitors and generate revenue to support the zoo. The water park sits at Kamper Park adjacent to the zoo.

"The goal of the water park is to save those profits and build it up to a multimillion dollar level," Taylor said. "What we're doing is saving the money we are earning from the water park for that next big step, that next big expansion."

Taylor said Serengeti Springs accomplishes two goals by providing a new amenity for residents and visitors while at the same time securing a strong revenue stream to support the zoo.

Serengeti Springs is a draw to both families with children and adults seeking fun in the water with a lazy river, water slides and other features. There's even an adults only area that features a swim up bar and a happy hour.

Serengeti Springs and the adjacent zoo are seemingly vastly different experiences with one focusing on leisurely waves and splashes, while the other offers a tour of nature and exotic animals large and small.

Nevertheless, there is an inseparable relationship between the two sites. The novel plan worked. And as a result, the Hattiesburg Zoo is one of just a few zoos to operate debt free.

Work is underway to create a new zoo grand entrance, a new gift shop and expanded educational space. Much of the $600,000 to 700,000 in new improvements will be financed by the Serengeti Springs revenue.

"The zoo itself operates in the black which is rare for zoos," Taylor said, noting that only 11 percent of zoos in the world have that distinction.

The scene was starkly different in 2010 when the zoo was as endangered as some of the animals who lived there. Financially, the zoo was a burden on the city and faced closure. The Convention Commission then took over operations in hopes of saving the animal park.

The commission then found new efficiencies to save the zoo and then expanded its potential by building Serengeti Springs. The zoo looks much different than it did when it opened in 1950, and Taylor said it has become a unified effort to continue to preserve and improve it.

"We knew that this was unique and important to the citizens of Hattiesburg to keep it and for their children and their children's children to have some of those same memories of a local zoo," Taylor said. "It's important to our community and we're passionate about it because of that."

Taylor said a master plan also calls for expanding the zoo to several more acres of available land. It is all part of a long-term vision.

"It is working and we foresee it continuing to work," he said. "That water park is not only going to keep the zoo solvent but it's going to keep the zoo being able to grow and get bigger and better. We've been very pleased with the results."`
  },

  {
    id: "100",
    title: "From Hand-Washing Clothes to Changing Lives: New Hattiesburg Museum Honors Legacy of Oseola McCarty",
    excerpt: "Oseola McCarty, a humble washerwoman who saved $280,000 over a lifetime of hand-washing laundry, donated $150,000 to fund scholarships at USM. Her restored home is now Hattiesburg's newest museum.",
    category: "culture",
    author: "Joseph Bryant",
    date: "Mar 17, 2026",
    image: "/story-mccarty-house-sign.jpg",
    images: [
      "/story-mccarty-house-sign.jpg",
      "/story-mccarty-ribbon-cutting.jpg",
      "/story-mccarty-exhibit-legacy.jpg",
      "/story-mccarty-exhibit-education.jpg",
      "/story-mccarty-guideposts.jpg",
      "/story-mccarty-statue.jpg",
      "/story-mccarty-porch-chairs.jpg",
      "/story-mccarty-porch-fountain.jpg",
      "/story-mccarty-exhibit-nurse.jpg",
    ],
    slug: "oseola-mccarty-house-museum-hattiesburg",
    featured: true,
    original: true,
    photoCredit: "Photos by Stephanie Bullock Ferguson, the first Oseola McCarty Scholar at The University of Southern Mississippi. Ferguson traveled with Ms. McCarty to promote the scholarship fund and remained close to Ms. McCarty for the rest of her life. Ferguson returned to Hattiesburg to mark the opening of the museum and celebrate her friend and academic patron.",
    content: `Stephanie Bullock Ferguson could hardly contain her emotion as she entered through the doors of the modest wood framed house.

It had been years since she was last there, and the photos, furnishing and fixtures all conveyed the spirit of Oseola McCarty, a tiny, soft voiced woman who called it her home for decades.

"When it walked it was like going back in time. Just absolute excellence," Ferguson said. "It was happy tears, but it was a lot to take in. I was overwhelmed with joy because she would have been so ticked that they had done that for her."

It was McCarty's thrifty nature and desire to positively impact others that created a legacy that continues to touch generations of students, families and communities.

And it all started in this house in Hattiesburg where McCarty lived and worked by taking in laundry. She washed the clothes by hand, continuing a tradition largely replaced by modern conveniences. Year after year McCarty silently saved and invested her money.

By the time she was in her 80s, McCarty's savings had reached $280,000, and it was time to deliver her greatest investment – about $150,000 in scholarships for rising students at the nearby University of Southern Mississippi.

Ferguson knows McCarty's impact firsthand as the first Oseola McCarty Scholar.

"After I met her, she was a complete angel, one of the sweetest people I had ever met," she said. "She just became like another grandmother to me."

McCarty's house originally sat near Hattiesburg High School. The University of Southern Mississippi and the Hattiesburg Convention Commission bought the house in 2016, then moved it to the Sixth Street Museum District.

It was restored and opened to the public in March as the latest amenity in the area devoted to history and culture.

Ferguson remembered the times she spent as a college student sitting on Ms. McCarty's front porch admiring the hydrangeas in front of them.

"I had no idea that somewhere down the line this little house that I'm hanging out in would become a museum," Ferguson said. "It is surreal."

Paul Laughlin, Retired Sr. Vice President & Trust Officer of Trustmark National Bank, recalled the meeting with McCarty that began her philanthropy in 1995. She was 87 years old.

"She said she wanted to leave her money to her church, three favorite cousins and that college out there on Hardy Street – The University of Southern Mississippi," Laughlin said during the ceremony.

At the bank Laughlin placed ten dimes on the table and asked McCarty how she wanted to divide her savings. She placed a dime for Friendship Baptist Church and one each for her cousin.

"She then looked up and said, 'My arthritis won't let me lift the rest, you put them there.'" Laughlin said.

"I placed the remaining dimes on the university's card, sixty percent of her life's savings, so that her scholarships could give others the educational opportunities she never had herself. Out of that simple act, a handful of dimes, grew a legacy of hope."

Ferguson said McCarty created a larger legacy than she ever imagined. She recalled traveling with McCarty to promote the scholarship and share her story, including a visit to New York City.

Through McCarty's gift, Ferguson said she received more than a scholarship. She also found a friend and bonus grandmother.

Beyond being known as the surprise philanthropist from Hattiesburg, Ferguson recalled McCarty as a fun person to be around.

"She was somebody who genuinely enjoyed life, so it didn't take a lot of things to make her happy," Ferguson said. "She was actually pretty funny. She was this little petite lady, but when she laughed, her whole body shook. She had a big smile and a big laugh to be so tiny."

The story of McCarty and her donation captured national and international headlines, inspiring others to also donate to her scholarship fund.

McCarty became an ambassador of goodwill and selflessness. Her collection of honors included the Presidential Citizens Medal, which was awarded by President Bill Clinton during a White House ceremony. The honor is the second-highest civilian award in the United States.

McCarty also pressed the switch to drop the New Years Ball in Times Square and carried the 1996 Olympic Torch.

Ferguson and McCarty appeared on the Today Show, then attended a black tie dinner in her honor. McCarty during the trip maintained her usual reserve, appreciating the visit, but comedically complaining to Ferguson that it was impossible to find grits in the Big Apple.

"She didn't get puffed up. She was still the same loving, Jesus first type person in all the years," Ferguson said.

Ferguson said McCarty also had unique food tastes.

"Nowadays, we'd call her a foodie," she said. "To be so tiny she liked food."

McCarty's favorite dessert was Bluebell ice cream mixed with Kellogg's Cornflakes. It was a treat McCarty passed on to her young friend.

McCarty remained fiercely independent. She never owned a car and walked everywhere. Later in life, managers at the grocery store gave her a shopping cart to make it easier to take her groceries home.

Ferguson said her college benefactor only bought an air conditioner to make it more comfortable for the growing number of visitors to her home following word of her donation.

In just over 30 years, The Oseola McCarty Scholarship Endowment at The University of Southern Mississippi has benefited 142 students. The endowment reached its $1 million mark in 2025.

Ferguson said the scholarship continues to impact her life. She was able to complete college debt free, which enabled her to buy her first home at age 23.

Ms. McCarty died in 1999 nearly a year after seeing Ferguson graduate.

Now an IT professional and small business owner, Ferguson said McCarty's life continues to sow lessons for herself and her family.

"I tell my kids now, do not despise small beginnings," Ferguson said. "Ms. Ola took pride in her work as a laundry lady. Until she retired, she still had people coming for her to handwash their clothes. We've got to have the degrees, of course, but Black excellence in southern Mississippi existed in those roles."`
  },

  // ── EXTERNAL / CURATED NEWS (NEWEST) ──
  {
    id: "222",
    title: "Katie John Dabbs Community Center Opens in Hattiesburg",
    excerpt: "Hattiesburg unveils the new Katie John Dabbs Community Center, a modern gathering space designed to serve residents with programs, events and recreation.",
    category: "community",
    author: "Hattiesburg American",
    date: "July 15, 2026",
    image: "/story-katie-john-dabbs-community-center.jpg",
    slug: "katie-john-dabbs-community-center-opens-hattiesburg",
    external: true,
    externalUrl: "https://www.hattiesburgamerican.com/story/news/local/hattiesburg/2026/07/15/katie-john-dabbs-community-center-opens-in-hattiesburg-mississippi/90926840007/",
    photoCredit: "Photo: AI-generated illustration",
  },
  {
    id: "221",
    title: "Miss Hospitality Contestants Give Back to Hattiesburg Community",
    excerpt: "Contestants from the Miss Hospitality pageant spent time serving in the Hub City, giving back through community service ahead of the competition.",
    category: "community",
    author: "WDAM",
    date: "July 15, 2026",
    image: "/story-miss-hospitality-community.jpg",
    slug: "miss-hospitality-contestants-give-back-hattiesburg-community",
    external: true,
    externalUrl: "https://www.wdam.com/2026/07/15/miss-hospitality-contestants-give-back-hattiesburg-community/",
    photoCredit: "Photo: AI-generated illustration",
  },
  {
    id: "220",
    title: "Mississippi Families Turn Grief Into Action in Fight Against Fentanyl",
    excerpt: "Mississippi families who have lost loved ones to fentanyl are channeling their grief into advocacy, working to raise awareness and prevent future tragedies.",
    category: "community",
    author: "MPB",
    date: "July 2026",
    image: "/story-mississippi-fentanyl-families.jpg",
    slug: "mississippi-families-turn-grief-into-action-fentanyl",
    external: true,
    externalUrl: "https://www.mpbonline.org/blogs/news/mississippi-families-turn-grief-into-action-in-fight-against-fentanyl/",
    photoCredit: "Photo: AI-generated illustration",
  },
  {
    id: "219",
    title: "USM and Mississippi State Partner for Adapted Swim Camp in Hattiesburg",
    excerpt: "The University of Southern Mississippi and Mississippi State University teamed up to host an adapted swim camp in Hattiesburg, offering inclusive water instruction.",
    category: "community",
    author: "WJTV",
    date: "July 2026",
    image: "/story-usm-adapted-swim-camp.jpg",
    slug: "usm-mississippi-state-adapted-swim-camp-hattiesburg",
    external: true,
    externalUrl: "https://www.wjtv.com/news/education/usm-mississippi-state-partner-for-adapted-swim-camp-in-hattiesburg/",
    photoCredit: "Photo: AI-generated illustration",
  },
  {
    id: "218",
    title: "Jamba Joloff Opens Downtown, Expands Hattiesburg Dining Scene",
    excerpt: "Jamba Joloff brings West African cuisine to downtown Hattiesburg, expanding the city's diverse dining scene with bold flavors and cultural flair.",
    category: "business",
    author: "Mississippi Free Press",
    date: "July 2026",
    image: "/story-jamba-joloff-downtown.jpg",
    slug: "jamba-joloff-opens-downtown-hattiesburg",
    external: true,
    externalUrl: "https://www.mississippifreepress.org/jamba-joloff-opens-downtown-expands-hattiesburg-dining-scene/",
    photoCredit: "Photo: AI-generated illustration",
  },
  {
    id: "210",
    title: "Hattiesburg Community Honors Fallen Service Members During Memorial Day Ceremony",
    excerpt: "Hattiesburg residents, veterans and local officials gathered to honor fallen U.S. service members with a solemn Memorial Day ceremony of remembrance and gratitude.",
    category: "community",
    author: "WDAM",
    date: "May 25, 2026",
    image: "/story-memorial-day-ceremony.jpg",
    slug: "hattiesburg-memorial-day-ceremony-fallen-service-members",
    external: true,
    externalUrl: "https://www.wdam.com/2026/05/25/hattiesburg-community-honors-fallen-service-members-during-memorial-day-ceremony/",
    photoCredit: "Photo: AI-generated illustration",
  },
  {
    id: "211",
    title: "Here's Who Will Play Hattiesburg Regionals",
    excerpt: "The field is set for the Hattiesburg Regionals as Southern Miss prepares to host visiting programs in this year's NCAA baseball tournament.",
    category: "sports",
    author: "WDAM",
    date: "May 25, 2026",
    image: "/story-hattiesburg-regional-baseball.jpg",
    slug: "hattiesburg-regionals-ncaa-baseball-field",
    external: true,
    externalUrl: "https://www.wdam.com/2026/05/25/heres-who-will-play-hattiesburg-regionals/",
    photoCredit: "Photo: AI-generated illustration",
  },
  {
    id: "209",
    title: "New Welcome Center Coming to Downtown Hattiesburg",
    excerpt: "A new welcome center is on the way to downtown Hattiesburg, set to serve as a hub for visitors exploring the Hub City's shops, restaurants and attractions.",
    category: "community",
    author: "WDAM",
    date: "May 21, 2026",
    image: "/story-downtown-welcome-center.jpg",
    slug: "new-welcome-center-downtown-hattiesburg",
    external: true,
    externalUrl: "https://www.wdam.com/2026/05/21/new-welcome-center-coming-downtown-hattiesburg/",
    photoCredit: "Photo: AI-generated illustration",
  },
  {
    id: "208",
    title: "WCU Students Brighten Pocket Alley With Vibrant Art",
    excerpt: "William Carey University students have transformed downtown Hattiesburg's Pocket Alley with bright, colorful murals that add new energy to the city's arts scene.",
    category: "community",
    author: "WJTV",
    date: "May 20, 2026",
    image: "/story-wcu-pocket-alley-art.jpg",
    slug: "wcu-students-brighten-pocket-alley-vibrant-art",
    external: true,
    externalUrl: "https://www.wjtv.com/news/pine-belt/wcu-students-brighten-pocket-alley-with-vibrant-art/",
    photoCredit: "Photo: AI-generated illustration",
  },
  {
    id: "206",
    title: "Hattiesburg Hundred Honors Sworn Officers at Annual Awards Banquet",
    excerpt: "The Hattiesburg Hundred recognized sworn law enforcement officers from across the Pine Belt at its annual awards banquet, honoring service, sacrifice and commitment to the community.",
    category: "community",
    author: "WDAM",
    date: "May 19, 2026",
    image: "/story-hattiesburg-hundred-officer-awards.jpg",
    slug: "hattiesburg-hundred-honors-sworn-officers-awards-banquet",
    external: true,
    externalUrl: "https://www.wdam.com/2026/05/20/hattiesburg-hundred-honors-sworn-officers-annual-awards-banquet/",
    photoCredit: "Photo: AI-generated illustration",
  },
  {
    id: "205",
    title: "Southern Miss Baseball Earns 2026 Sun Belt Conference Regular Season Title",
    excerpt: "The Southern Miss baseball team has captured the 2026 Sun Belt Conference regular season championship, cementing another standout campaign for the Golden Eagles.",
    category: "sports",
    author: "WJTV",
    date: "May 18, 2026",
    image: "/story-southern-miss-sun-belt-title.jpg",
    slug: "southern-miss-baseball-2026-sun-belt-regular-season-title",
    external: true,
    externalUrl: "https://www.wjtv.com/sports/baseball/southern-miss-baseball-earns-2026-sun-belt-conference-regular-season-title/",
    photoCredit: "Photo: AI-generated illustration",
  },
  {
    id: "204",
    title: "WCU Softball Season Ends in NAIA Opening Round Championship Game",
    excerpt: "William Carey University softball's season came to a close in the NAIA opening round championship game, capping a memorable run for the Crusaders.",
    category: "sports",
    author: "WDAM",
    date: "May 14, 2026",
    image: "/story-wcu-softball-naia.jpg",
    slug: "wcu-softball-naia-opening-round-championship",
    external: true,
    externalUrl: "https://www.wdam.com/2026/05/14/wcu-softball-season-ends-naia-opening-round-championship-game/",
    photoCredit: "Photo: AI-generated illustration",
  },
  {
    id: "203",
    title: "Hattiesburg Celebrates Opening of New Multi-Use Path",
    excerpt: "City leaders and residents gathered to celebrate the grand opening of Hattiesburg's newest multi-use path, expanding safe walking and cycling routes across the Hub City.",
    category: "community",
    author: "WJTV",
    date: "May 11, 2026",
    image: "/story-hattiesburg-multi-use-path.jpg",
    slug: "hattiesburg-celebrates-opening-new-multi-use-path",
    external: true,
    externalUrl: "https://www.wjtv.com/news/pine-belt/hattiesburg-celebrates-opening-of-new-multi-use-path/",
    photoCredit: "Photo: AI-generated illustration",
  },
  {
    id: "202",
    title: "Dozens Walk the Stage at WCU College of Osteopathic Medicine's Class of 2026 Commencement",
    excerpt: "William Carey University's College of Osteopathic Medicine celebrated its Class of 2026 as dozens of new physicians walked the stage and prepared to enter residency.",
    category: "community",
    author: "WDAM",
    date: "May 9, 2026",
    image: "/story-wcu-osteopathic-graduation.jpg",
    slug: "wcu-college-osteopathic-medicine-class-2026-graduation",
    external: true,
    externalUrl: "https://www.wdam.com/2026/05/10/dozens-walk-stage-wcu-college-osteopathic-medicines-class-2026/",
    photoCredit: "Photo: AI-generated illustration",
  },
  {
    id: "201",
    title: "Hattiesburg Cycles Hosts Annual Memorial Ride Honoring 2 HPD Officers",
    excerpt: "Hattiesburg Cycles hosted its annual memorial ride in honor of two Hattiesburg Police Department officers, with riders gathering to pay tribute and support their families.",
    category: "community",
    author: "WDAM",
    date: "May 9, 2026",
    image: "/story-hattiesburg-cycles-memorial-ride.jpg",
    slug: "hattiesburg-cycles-annual-memorial-ride-hpd-officers",
    external: true,
    externalUrl: "https://www.wdam.com/2026/05/10/hattiesburg-cycles-hosts-annual-memorial-ride-honoring-2-hpd-officers/",
    photoCredit: "Photo: AI-generated illustration",
  },
  {
    id: "200",
    title: "Hattiesburg High Seniors Recognized as They Announce College Plans",
    excerpt: "Hattiesburg High School seniors were celebrated at a special signing-style ceremony where they announced their college plans and next chapters after graduation.",
    category: "community",
    author: "WDAM",
    date: "May 8, 2026",
    image: "/story-hhs-seniors-college-signing.jpg",
    slug: "hattiesburg-high-seniors-announce-college-plans",
    external: true,
    externalUrl: "https://www.wdam.com/2026/05/08/hattiesburg-high-seniors-recognized-they-announce-college-plans/",
    photoCredit: "Photo: AI-generated illustration",
  },
  {
    id: "127",
    title: "Hattiesburg Zoo Announces Passing of Malayan Tiger Bunga",
    excerpt: "The Hattiesburg Zoo has announced the passing of beloved Malayan tiger Bunga, a treasured ambassador for one of the world's most endangered big cat species.",
    category: "community",
    author: "WDAM",
    date: "May 6, 2026",
    image: "/story-malayan-tiger-bunga-memorial.jpg",
    slug: "hattiesburg-zoo-malayan-tiger-bunga-passing",
    external: true,
    externalUrl: "https://www.wdam.com/2026/05/06/hattiesburg-zoo-announces-passing-malayan-tiger-bunga/",
  },
  {
    id: "126",
    title: "Visit Hattiesburg Reaches Record-Breaking Numbers in Tourism Growth",
    excerpt: "Visit Hattiesburg has announced record-breaking tourism numbers, signaling continued momentum and economic growth for the Hub City.",
    category: "business",
    author: "WDAM",
    date: "May 6, 2026",
    image: "/story-visit-hattiesburg-tourism.jpg",
    slug: "visit-hattiesburg-record-breaking-tourism-growth",
    external: true,
    externalUrl: "https://www.wdam.com/2026/05/06/visit-hattiesburg-reaches-record-breaking-numbers-tourism-growth/",
  },
  {
    id: "125",
    title: "Annual Parade of Champions Celebrates Hub City Students and Athletes",
    excerpt: "The annual Parade of Champions filled the streets of Hattiesburg to honor outstanding student athletes and academic standouts from across the Hub City.",
    category: "community",
    author: "WJTV",
    date: "May 4, 2026",
    image: "/story-parade-of-champions.jpg",
    slug: "annual-parade-champions-hub-city-students-athletes",
    external: true,
    externalUrl: "https://www.wdam.com/2026/05/05/annual-parade-champions-celebrates-hub-city-students-athletes/",
  },
  {
    id: "124",
    title: "Hattiesburg Zoo's Malayan Tiger Bunga Facing Health Battle",
    excerpt: "The Hattiesburg Zoo shares that beloved Malayan tiger Bunga is facing a serious health battle, drawing concern and support from the community.",
    category: "community",
    author: "WDAM",
    date: "May 4, 2026",
    image: "/story-malayan-tiger-bunga.jpg",
    slug: "hattiesburg-zoo-malayan-tiger-bunga-health-battle",
    external: true,
    externalUrl: "https://www.wdam.com/2026/05/04/hattiesburg-zoos-malayan-tiger-bunga-facing-health-battle/",
  },
  {
    id: "123",
    title: "Pitching Fuels No. 12 Southern Miss to Doubleheader Sweep vs. ULM",
    excerpt: "Dominant pitching powered the No. 12 Southern Miss baseball team to a doubleheader sweep over ULM, strengthening their postseason positioning.",
    category: "sports",
    author: "WJTV",
    date: "May 2, 2026",
    image: "/story-southern-miss-baseball-sweep.jpg",
    slug: "southern-miss-pitching-doubleheader-sweep-ulm",
    external: true,
    externalUrl: "https://www.wdam.com/2026/05/03/pitching-fuels-no-12-southern-miss-doubleheader-sweep-vs-ulm/",
  },
  {
    id: "122",
    title: "Pine Belt Students World Robotics Championship Bound After Winning Mississippi Title",
    excerpt: "A team of Pine Belt students is heading to the World Robotics Championship after capturing the Mississippi state title with their innovative robot design.",
    category: "community",
    author: "The Pinebelt News",
    date: "May 1, 2026",
    image: "/story-pine-belt-robotics-championship.jpg",
    slug: "pine-belt-students-world-robotics-championship-bound",
    external: true,
    externalUrl: "https://www.hubcityspokes.com/pine-belt-students-world-robotics-championship-bound-after-winning-mississippi-title",
  },
  {
    id: "121",
    title: "Hattiesburg Zoo Hosts Special Events for Endangered Species Day",
    excerpt: "The Hattiesburg Zoo is rolling out special events and educational activities in honor of Endangered Species Day, spotlighting wildlife conservation.",
    category: "community",
    author: "WJTV",
    date: "May 1, 2026",
    image: "/story-zoo-endangered-species-day.jpg",
    slug: "hattiesburg-zoo-endangered-species-day-events",
    external: true,
    externalUrl: "https://www.wjtv.com/news/pine-belt/hattiesburg-zoo-special-events-for-endangered-species-day/",
  },
  {
    id: "120",
    title: "Construction Underway on Hattiesburg's Fire Station No. 2",
    excerpt: "Construction is officially underway on Hattiesburg's new Fire Station No. 2, marking a major step forward for public safety infrastructure in the Hub City.",
    category: "community",
    author: "WJTV",
    date: "Apr 30, 2026",
    image: "/story-fire-station-2-construction.jpg",
    slug: "construction-underway-hattiesburg-fire-station-2",
    external: true,
    externalUrl: "https://www.wjtv.com/news/pine-belt/construction-underway-on-hattiesburgs-fire-station-no-2/",
  },
  {
    id: "118",
    title: "Lawmakers Secure $125 Million Upgrade for The Center at Forrest County, Add Emergency Staging Use",
    excerpt: "State lawmakers have secured $125 million to upgrade The Center at Forrest County, adding emergency staging capabilities for use during hurricanes and other disasters.",
    category: "community",
    author: "WDAM",
    date: "Apr 28, 2026",
    image: "/story-forrest-county-center-upgrade.jpg",
    slug: "forrest-county-center-125-million-upgrade-emergency-staging",
    external: true,
    externalUrl: "https://www.wdam.com/2026/04/29/lawmakers-secure-125-million-upgrade-center-forrest-county-add-emergency-staging-use/",
  },
  {
    id: "117",
    title: "Meet Rufus, the 2026 UKC Squirrel Hunt World Champion from Hattiesburg",
    excerpt: "A Hattiesburg-area hunting dog named Rufus has captured the title of 2026 UKC Squirrel Hunt World Champion, putting the Pine Belt on the map in the competitive hunting world.",
    category: "community",
    author: "WDAM",
    date: "Apr 28, 2026",
    image: "/story-rufus-squirrel-hunt-champion.jpg",
    slug: "rufus-2026-ukc-squirrel-hunt-world-champion-hattiesburg",
    external: true,
    externalUrl: "https://www.wdam.com/2026/04/29/meet-rufus-2026-ukc-squirrel-hunt-world-champion-hattiesburg/",
  },
  {
    id: "116",
    title: "USM Announces Spring 2026 Graduation Dates",
    excerpt: "The University of Southern Mississippi has announced the official dates for its Spring 2026 commencement ceremonies, marking a major milestone for hundreds of graduating students.",
    category: "community",
    author: "WJTV",
    date: "Apr 27, 2026",
    image: "/story-usm-spring-2026-graduation.jpg",
    slug: "usm-announces-spring-2026-graduation-dates",
    external: true,
    externalUrl: "https://www.wjtv.com/news/education/usm-announces-spring-2026-graduation-dates/",
  },
  {
    id: "115",
    title: "Hattiesburg Teen Cellist Selected for National Youth Orchestra, Set to Perform at Carnegie Hall",
    excerpt: "A talented Hattiesburg teen cellist has been selected to join the National Youth Orchestra and will take the stage at the iconic Carnegie Hall in New York City.",
    category: "culture",
    author: "WDAM",
    date: "Apr 21, 2026",
    image: "/story-teen-cellist-nyo.jpg",
    slug: "hattiesburg-teen-cellist-national-youth-orchestra-carnegie-hall",
    external: true,
    externalUrl: "https://www.wdam.com/2026/04/11/hattiesburg-teen-cellist-selected-national-youth-orchestra-set-perform-carnegie-hall/",
  },
  {
    id: "114",
    title: "Southern Miss vs Texas State: Live Updates from Game 3",
    excerpt: "Live coverage and updates as the Southern Miss Golden Eagles take on Texas State in the rubber match of their three-game series.",
    category: "sports",
    author: "Hattiesburg American",
    date: "Apr 21, 2026",
    image: "/story-southern-miss-baseball-tx-state.jpg",
    slug: "southern-miss-texas-state-baseball-game-3",
    external: true,
    externalUrl: "https://www.hattiesburgamerican.com/story/sports/college/southern-miss/2026/04/19/southern-miss-texas-state-score-live-updates-game-3/89553183007/",
  },
  {
    id: "113",
    title: "New Pavement on U.S. Highway 49: What Drivers Should Know",
    excerpt: "A fresh layer of asphalt is rolling out along U.S. Highway 49 — here's what drivers should expect during the resurfacing project and how to navigate the work zones safely.",
    category: "community",
    author: "The Hattiesburg News",
    date: "Apr 21, 2026",
    image: "/story-us49-new-pavement.jpg",
    slug: "us-highway-49-new-pavement-drivers",
    external: true,
    externalUrl: "https://www.gethattiesburgnews.com/post/new-pavement-on-u-s-highway-49-what-drivers-should-know",
  },
  {
    id: "112",
    title: "History Makers, Future Shapers: Evening of Appreciation Celebrates Hattiesburg-Area Educators",
    excerpt: "Hattiesburg-area educators were celebrated as history makers and future shapers at a special evening of appreciation honoring their lasting impact on students and the community.",
    category: "community",
    author: "The PineBelt News",
    date: "Apr 21, 2026",
    image: "/story-educators-appreciation.jpg",
    slug: "history-makers-future-shapers-educators-appreciation",
    external: true,
    externalUrl: "https://www.hubcityspokes.com/history-makers-future-shapers-evening-appreciation-celebrates-hattiesburg-area-educators",
  },
  {
    id: "111",
    title: "All 11 Area Teams in Action: Pine Belt Playoff Schedule Ramps Up This Week",
    excerpt: "All 11 Pine Belt-area teams are in action this week as the high school playoff schedule ramps up across south Mississippi.",
    category: "sports",
    author: "The PineBelt News",
    date: "Apr 21, 2026",
    image: "/story-pine-belt-playoffs.jpg",
    slug: "pine-belt-playoff-schedule-11-teams",
    external: true,
    externalUrl: "https://www.hubcityspokes.com/all-11-area-teams-action-pine-belt-playoff-schedule-ramps-week",
  },
  {
    id: "110",
    title: "Meet Cider, Holly and Juniper, the Hattiesburg Zoo's Newest Residents",
    excerpt: "The Hattiesburg Zoo has welcomed three baby spider monkeys — Cider, Holly and Juniper — who will be housed in an indoor viewing area at the Asbury Discovery Center until they are ready to be introduced to the zoo's larger spider monkey enclosure.",
    category: "community",
    author: "WDAM",
    date: "Apr 20, 2026",
    image: "/story-zoo-spider-monkeys-trio.jpg",
    slug: "hattiesburg-zoo-spider-monkeys-cider-holly-juniper",
    external: true,
    externalUrl: "https://www.wdam.com/2026/04/20/meet-cider-holly-juniper-hattiesburg-zoos-newest-residents/",
    content: "The Hattiesburg Zoo has welcomed three baby spider monkeys, named Cider, Holly and Juniper, to the zoo family.\n\nThey will be living in an indoor viewing area at the Asbury Discovery Center until they are ready to be introduced into the zoo's outdoor spider monkey enclosure.\n\nThe monkeys are part of the broader spider monkey group that first arrived in the city in 2025 after being rescued from an illegal pet trade smuggling attempt. Zookeepers say the new arrivals are adjusting well and are expected to acclimate to the busy zoo environment in the coming weeks."
  },
  {
    id: "104",
    title: "William Carey Announces Hiring of Longtime Assistant Phillip McCray as New Men's Basketball Head Coach",
    excerpt: "William Carey University has named Phillip McCray as the new head coach of its men's basketball program. McCray brings years of assistant coaching experience to the role.",
    category: "sports",
    author: "The PineBelt News",
    date: "Apr 9, 2026",
    image: "/story-mccray-basketball-coach.jpg",
    slug: "william-carey-mccray-basketball-coach",
    external: true,
    externalUrl: "https://www.hubcityspokes.com/william-carey-announces-hiring-longtime-assistant-phillip-mccray-new-mens-basketball-head-coach",
  },
  {
    id: "105",
    title: "Delta Sigma Theta Inc. Hosts Mental Health Seminar for Parents and Teenagers",
    excerpt: "The Hattiesburg Alumnae Chapter of Delta Sigma Theta Inc. hosted a mental health seminar promoting emotional awareness, resilience and healthy communication between teenagers and their parents.",
    category: "community",
    author: "WDAM",
    date: "Apr 10, 2026",
    image: "/story-delta-sigma-mental-health.jpg",
    slug: "delta-sigma-theta-mental-health-seminar",
    external: true,
    externalUrl: "https://www.wdam.com/2026/04/09/delta-sigma-theta-inc-hosts-mental-health-seminar-parents-teenagers/",
    content: "The Hattiesburg Alumnae Chapter of Delta Sigma Theta Inc. hosted a mental health seminar for parents and teenagers.\n\nParents and their kids were given the opportunity to learn about mental health, coping mechanisms and community-like resources for those who need a listening ear.\n\nOne of the goals of the seminar was to promote emotional awareness, resilience and healthy communication between teenagers and their parents.\n\n\"It's going to be a great path for people who need to establish and say 'Hey, this is what I need to do about taking responsibility today for my mental health and its well-being,'\" Real Life Church Pastor Robert Johnson said.\n\nThe seminar was available to anybody who wanted to attend, free of charge."
  },
  {
    id: "106",
    title: "History Happened Here: Hattiesburg's Historic Home Walking Tour Showcases Its Architectural Heritage",
    excerpt: "The Hattiesburg Historic Home Walking Tour features 31 stops highlighting homes built in different eras and reflecting architectural styles including Colonial, Tudor and Classical Revival designs.",
    category: "culture",
    author: "WDAM",
    date: "Apr 10, 2026",
    image: "/story-historic-home-walking-tour.jpg",
    slug: "hattiesburg-historic-home-walking-tour",
    external: true,
    externalUrl: "https://www.wdam.com/2026/04/07/history-happened-here-hattiesburgs-historic-home-walking-tour-showcases-its-architectural-heritage/",
    content: "Hattiesburg is home to generations of influential residents who built and lived in some of the city's most striking houses.\n\nTo help visitors and locals learn more about that legacy, the city offers the Hattiesburg Historic Home Walking Tour, a route designed to showcase the history and architecture of prominent residences across town.\n\nThe tour includes 31 stops, highlighting homes built in different eras and reflecting a range of architectural styles, including Colonial, Tudor and Classical Revival designs.\n\nAt about halfway through the tour, you'll run into stop number 14 — the Ross Mansion, built in 1903 by prominent physician T.E. Ross for $3,500. The 7,200-square-foot home has been converted into a bed-and-breakfast.\n\nThe tour ends at the Tally House, a 13,000-square-foot Colonial Revival home built in 1907 for former judge J.R. Tally."
  },
  {
    id: "107",
    title: "AKA Alpha Beta Theta Omega Hosting Community Maternal Baby Shower",
    excerpt: "Mothers are invited to a Community Maternal Baby Shower hosted by Alpha Kappa Alpha Alpha Beta Theta Omega on April 11 at Sawmill Square Mall, offering free diapers, wipes, clothes and pre- and postnatal resources.",
    category: "community",
    author: "WDAM",
    date: "Apr 10, 2026",
    image: "/story-aka-baby-shower.jpg",
    slug: "aka-community-maternal-baby-shower",
    external: true,
    externalUrl: "https://www.wdam.com/2026/04/08/aka-alpha-beta-theta-omega-hosting-community-maternal-baby-shower/",
    content: "Mothers, you aren't alone.\n\nOn Saturday, April 11, mothers are invited to come to a Community Maternal Baby Shower hosted by the Alpha Kappa Alpha Alpha Beta Theta Omega.\n\nThere will be free diapers, wipes, clothes, and more. The event provides pre- and postnatal resources and information for parents.\n\nThe event will be at the Sawmill Square Mall from 11:00 a.m. to 3:00 p.m."
  },

  // ── COMMUNITY ──
  {
    id: "1",
    title: "Downtown Revitalization Project Breaks Ground This Spring",
    excerpt: "A $12 million investment is set to transform the heart of Hattiesburg's historic downtown corridor with new mixed-use developments, green spaces, and community gathering areas.",
    category: "community",
    author: "Marcus Williams",
    date: "Feb 28, 2026",
    image: "/story-downtown-revitalization.jpg",
    slug: "downtown-revitalization-project",
    featured: true,
    content: "The City of Hattiesburg officially broke ground on its ambitious downtown revitalization project this week, marking the beginning of a transformation that city officials say will redefine the urban core for decades to come.\n\nThe $12 million investment includes new mixed-use buildings, expanded green spaces along the Leaf River corridor, and modernized infrastructure that will support both pedestrian and cycling traffic.\n\n\"This is more than a construction project,\" Mayor Thompson said at the groundbreaking ceremony. \"This is a statement about who we are as a community and where we're headed.\"\n\nThe project is expected to create over 200 construction jobs and attract an estimated 50 new businesses to the downtown area over the next five years."
  },
  {
    id: "6",
    title: "New Community Health Center Opens on Mobile Street",
    excerpt: "The federally-funded clinic will provide primary care, dental, and mental health services to underserved neighborhoods in South Hattiesburg.",
    category: "community",
    author: "Marcus Williams",
    date: "Feb 15, 2026",
    image: "/story-health-center.jpg",
    slug: "community-health-center-opens",
    content: "A new community health center opened its doors on Mobile Street this week, bringing much-needed primary care, dental services, and mental health support to South Hattiesburg neighborhoods that have historically lacked access to affordable healthcare."
  },
  {
    id: "7",
    title: "Volunteers Plant 500 Trees Along Longleaf Trace",
    excerpt: "A weekend initiative by the Hattiesburg Green Alliance transforms a two-mile stretch of the popular trail with native longleaf pines and hardwoods.",
    category: "community",
    author: "Tanya Ford",
    date: "Feb 10, 2026",
    image: "/story-tree-planting.jpg",
    slug: "longleaf-trace-tree-planting",
    content: "Over 200 volunteers gathered Saturday morning along the Longleaf Trace to plant 500 native trees as part of the Hattiesburg Green Alliance's 'Roots for the Future' campaign.\n\nThe initiative, funded by a $150,000 state conservation grant, targets a two-mile stretch between downtown and the university district. Organizers chose native longleaf pines and hardwoods to restore the corridor's ecological heritage.\n\n\"This trail is the spine of our city,\" said Green Alliance director Tamika Reed. \"Making it greener makes the whole community healthier.\""
  },
  {
    id: "8",
    title: "Hattiesburg Public Library Launches Free Tech Literacy Program",
    excerpt: "The 12-week digital skills course aims to bridge the technology gap for seniors and low-income residents across the Pine Belt.",
    category: "community",
    author: "Marcus Williams",
    date: "Feb 5, 2026",
    image: "/story-tech-literacy.jpg",
    slug: "library-tech-literacy-program",
    content: "The Hattiesburg Public Library announced a new free technology literacy program designed to help seniors and underserved residents build essential digital skills.\n\nThe 12-week course covers everything from basic computer navigation and email to online banking safety and telehealth appointments. Classes will be held at the main branch and two satellite locations."
  },

  // ── BUSINESS ──
  {
    id: "2",
    title: "Local Tech Startup Secures $5M in Series A Funding",
    excerpt: "Pine Belt Innovations, founded by USM graduates, closes major funding round to expand their agricultural technology platform across the Southeast.",
    category: "business",
    author: "Sarah Chen",
    date: "Feb 25, 2026",
    image: "/story-tech-startup.jpg",
    slug: "local-tech-startup-funding",
    featured: true,
    content: "Pine Belt Innovations, a Hattiesburg-based agricultural technology startup, announced today that it has successfully closed a $5 million Series A funding round led by Southern Ventures Capital.\n\nThe company, founded in 2023 by University of Southern Mississippi graduates David Torres and Lisa Ngozi, has developed an AI-powered platform that helps small and mid-size farmers optimize crop yields while reducing water usage.\n\nThe funding will be used to expand the platform across the Southeast, hire 30 new employees at the Hattiesburg headquarters, and develop new features for sustainable farming practices."
  },
  {
    id: "9",
    title: "Hardy Street Corridor Sees Record New Business Openings",
    excerpt: "Fourteen new businesses opened along the iconic Hardy Street stretch in Q1 2026, from specialty coffee shops to co-working spaces.",
    category: "business",
    author: "Sarah Chen",
    date: "Feb 12, 2026",
    image: "/story-hardy-street.jpg",
    slug: "hardy-street-new-businesses",
    content: "The Hardy Street corridor is experiencing a commercial renaissance, with fourteen new businesses opening their doors in the first quarter of 2026 alone—a record for the historic stretch.\n\nNew arrivals include Groundwork Coffee Roasters, a specialty café sourcing beans from Mississippi farms; HubSpace, a co-working facility with 80 desks; and Revival Goods, a locally-sourced home décor shop.\n\n\"Hardy Street has always been the heartbeat of Hattiesburg commerce,\" said Chamber of Commerce president Diane Okafor. \"What we're seeing now is a new generation of entrepreneurs betting on this city.\""
  },
  {
    id: "10",
    title: "Pine Belt Credit Union Launches Small Business Micro-Loan Program",
    excerpt: "The new initiative offers loans up to $25,000 with reduced interest rates to support minority-owned and first-time businesses in Forrest County.",
    category: "business",
    author: "James Holliday",
    date: "Feb 8, 2026",
    image: "/story-micro-loans.jpg",
    slug: "credit-union-micro-loans",
    content: "Pine Belt Credit Union has introduced a micro-loan program specifically designed for minority-owned and first-time small businesses in Forrest County.\n\nThe program offers loans between $5,000 and $25,000 at interest rates 2% below market average, with flexible repayment schedules and free business mentorship through a partnership with USM's College of Business."
  },
  {
    id: "11",
    title: "Hattiesburg Named Among Top 10 Emerging Tech Hubs in the South",
    excerpt: "A national report highlights the city's growing startup ecosystem, university talent pipeline, and affordable cost of living as key advantages.",
    category: "business",
    author: "Sarah Chen",
    date: "Jan 30, 2026",
    image: "/story-tech-hub.jpg",
    slug: "emerging-tech-hub-ranking",
    content: "Hattiesburg has been named one of the top 10 emerging technology hubs in the American South by TechForward Magazine's annual rankings.\n\nThe report cited the city's growing startup ecosystem, the University of Southern Mississippi's computer science and engineering programs, and an affordable cost of living that's attracting remote workers and entrepreneurs from larger metros."
  },

  // ── CULTURE ──
  {
    id: "3",
    title: "Hub City Music Festival Announces 2026 Lineup",
    excerpt: "The annual celebration of Southern music and culture returns with an expanded three-day format, featuring over 40 artists across multiple stages in historic downtown.",
    category: "culture",
    author: "Jordan Blake",
    date: "Feb 22, 2026",
    image: "/story-music-festival.jpg",
    slug: "hub-city-music-festival-lineup",
    featured: true,
    content: "The Hub City Music Festival, now in its eighth year, has announced an expanded format for 2026 that will transform downtown Hattiesburg into a three-day celebration of Southern music, art, and culinary culture.\n\nThe festival, running June 12-14, will feature over 40 artists across four stages, including headliners from blues, gospel, R&B, and Southern rock genres.\n\nNew additions for 2026 include a culinary village featuring local restaurants, a spoken word and poetry stage, and a youth artist showcase."
  },
  {
    id: "12",
    title: "Hattiesburg Arts Council Unveils New Mural Trail",
    excerpt: "Twelve large-scale murals by local and regional artists now span a walking route through downtown, celebrating the city's history and diversity.",
    category: "culture",
    author: "Jordan Blake",
    date: "Feb 14, 2026",
    image: "/story-mural-trail.jpg",
    slug: "mural-trail-unveiling",
    content: "The Hattiesburg Arts Council has officially unveiled a new downtown mural trail featuring twelve large-scale works by local and regional artists.\n\nThe self-guided walking route stretches from Town Square Park to the Saenger Theater district, with each mural exploring a different facet of Hattiesburg's identity—from its railroad heritage to its vibrant music scene.\n\n\"Public art changes the way people experience a city,\" said Arts Council director Ava Simmons. \"These walls now tell our story.\""
  },
  {
    id: "13",
    title: "Southern Miss Theatre Opens Season with August Wilson's 'Fences'",
    excerpt: "The university's acclaimed theatre program kicks off its spring season with a powerful production of the Pulitzer Prize-winning drama.",
    category: "culture",
    author: "Nina Cortez",
    date: "Feb 6, 2026",
    image: "/story-theatre-fences.jpg",
    slug: "southern-miss-fences-production",
    content: "The University of Southern Mississippi's Department of Theatre opens its spring season with August Wilson's 'Fences,' running February 20 through March 1 at the Mannoni Performing Arts Center.\n\nDirector Professor Charles Banks has assembled a cast that blends experienced upperclassmen with standout freshmen in what he calls 'one of the most important American plays ever written.'"
  },
  {
    id: "14",
    title: "Local Author's Debut Novel Earns National Book Award Nomination",
    excerpt: "Hattiesburg native Ciara Jennings' 'Red Clay Lullabies' draws on Pine Belt roots to tell a multigenerational story of resilience.",
    category: "culture",
    author: "Jordan Blake",
    date: "Jan 28, 2026",
    image: "/story-book-award.jpg",
    slug: "local-author-book-award",
    content: "Hattiesburg native Ciara Jennings has been nominated for the National Book Award for her debut novel 'Red Clay Lullabies,' a sweeping multigenerational saga set in the Pine Belt region of Mississippi.\n\nJennings, a graduate of Hattiesburg High School and USM's creative writing program, drew on family stories and local history to craft the novel."
  },

  // ── SPORTS ──
  {
    id: "4",
    title: "Golden Eagles Football: New Season, New Expectations",
    excerpt: "With a stellar recruiting class and returning starters, USM football enters 2026 with conference championship aspirations and renewed community energy.",
    category: "sports",
    author: "DeShawn Porter",
    date: "Feb 20, 2026",
    image: "/story-golden-eagles.jpg",
    slug: "golden-eagles-football-preview",
    featured: true,
    content: "The University of Southern Mississippi Golden Eagles are generating buzz heading into the 2026 football season, with what analysts are calling the program's best recruiting class in over a decade.\n\nHead Coach Williams has brought in a wave of talented athletes, including four-star recruits from across the Southeast, while retaining key returning starters on both sides of the ball."
  },
  {
    id: "15",
    title: "Hattiesburg High Tigers Win State Basketball Championship",
    excerpt: "The Tigers cap an undefeated season with a thrilling overtime victory in Jackson, bringing home the school's first title in 15 years.",
    category: "sports",
    author: "DeShawn Porter",
    date: "Feb 17, 2026",
    image: "/story-basketball-champs.jpg",
    slug: "tigers-state-championship",
    content: "The Hattiesburg High Tigers are state champions. In a dramatic overtime finish at the Mississippi Coliseum in Jackson, the Tigers defeated Meridian High 68-65 to claim the 6A boys basketball title—the school's first state championship in 15 years.\n\nSenior guard Jaylen Carter scored 28 points, including the go-ahead three-pointer with 12 seconds remaining in overtime."
  },
  {
    id: "16",
    title: "USM Women's Soccer Program Adds New Training Facility",
    excerpt: "A $3.2 million indoor facility will give the Golden Eagles a competitive edge in recruiting and year-round development.",
    category: "sports",
    author: "Carla Simmons",
    date: "Feb 9, 2026",
    image: "/story-soccer-facility.jpg",
    slug: "usm-soccer-facility",
    content: "The University of Southern Mississippi has broken ground on a $3.2 million indoor training facility for the women's soccer program.\n\nThe 15,000-square-foot building will include a full-size turf field, film room, sports medicine suite, and player lounge. Head Coach Ramirez called it 'a game-changer for our program and our ability to recruit top talent.'"
  },
  {
    id: "17",
    title: "Hattiesburg Youth League Expands to Include Flag Football",
    excerpt: "The Parks & Recreation department adds flag football divisions for ages 6-14, responding to growing parent demand for safer youth sports options.",
    category: "sports",
    author: "DeShawn Porter",
    date: "Jan 25, 2026",
    image: "/story-flag-football.jpg",
    slug: "youth-flag-football-league",
    content: "Hattiesburg Parks & Recreation has announced the addition of flag football to its youth sports lineup, offering divisions for ages 6-14 starting this spring.\n\nThe move comes in response to growing demand from parents seeking safer alternatives to tackle football. Registration is already at 60% capacity."
  },

  // ── OPINION ──
  {
    id: "5",
    title: "Why Hattiesburg's Next Chapter Belongs to Its Young Leaders",
    excerpt: "An op-ed on how a new generation of civic-minded entrepreneurs and community organizers are reshaping the future of the Hub City.",
    category: "opinion",
    author: "Rev. Patricia Dawson",
    date: "Feb 18, 2026",
    image: "/story-young-leaders.jpg",
    slug: "hattiesburgs-young-leaders",
    content: "I've lived in Hattiesburg for over 40 years, and I've never seen anything quite like what's happening now. A new generation of leaders is emerging—not from the traditional power structures, but from the streets, the campuses, and the community organizations that have always been the true backbone of this city.\n\nThese young people are starting businesses, organizing neighborhood cleanups, running for local office, and most importantly, they're staying."
  },
  {
    id: "18",
    title: "It's Time to Rethink How We Fund Public Schools in Forrest County",
    excerpt: "A local educator argues that Mississippi's funding formula shortchanges districts like Hattiesburg and calls for community-driven reform.",
    category: "opinion",
    author: "Dr. Leonard Graves",
    date: "Feb 11, 2026",
    image: "/story-school-funding.jpg",
    slug: "rethink-school-funding",
    content: "Every year, Mississippi's education funding formula leaves districts like Hattiesburg scrambling to do more with less. As an educator who has spent 25 years in Forrest County classrooms, I've watched this pattern repeat itself while our students pay the price.\n\nIt's time for a community-driven conversation about equitable school funding—one that puts students, not politics, at the center."
  },
  {
    id: "19",
    title: "The Longleaf Trace Is Our Greatest Asset. Let's Treat It That Way.",
    excerpt: "A resident calls for increased investment in trail maintenance, safety, and expansion to protect Hattiesburg's most beloved public space.",
    category: "opinion",
    author: "Angela Harris",
    date: "Feb 3, 2026",
    image: "/story-longleaf-trace.jpg",
    slug: "invest-in-longleaf-trace",
    content: "The Longleaf Trace is more than a trail—it's where Hattiesburg comes together. Runners, cyclists, families, and dog-walkers share this 44-mile corridor every single day.\n\nBut the truth is, we're not investing enough in its upkeep. Sections are deteriorating, lighting is inadequate, and the northern extensions remain unpaved. If we truly value this asset, our budget should reflect it."
  },
  {
    id: "20",
    title: "Supporting Local Journalism Is an Act of Civic Duty",
    excerpt: "In an era of information overload, investing in local news coverage is essential to keeping our community informed and accountable.",
    category: "opinion",
    author: "Rev. Patricia Dawson",
    date: "Jan 22, 2026",
    image: "/story-local-journalism.jpg",
    slug: "support-local-journalism",
    content: "When was the last time you read a story about your neighborhood—your actual neighborhood—in a major news outlet? For most of us, the answer is never.\n\nThat's why local journalism matters. It's the only form of media that holds our city council accountable, covers our school board meetings, and tells the stories of the people who live next door."
  },

  // ── EXTERNAL / CURATED NEWS ──
  {
    id: "34",
    title: "Traveling Choir Brings Palm Sunday Concert Back to Hattiesburg",
    excerpt: "Road Trip Manager Demetrius 'MeMe' Marsalis and the Benjamin Cone III & Worship Choir return to the Pine Belt for their fourth annual Palm Sunday Concert.",
    category: "culture",
    author: "Hailey Lanham, WDAM",
    date: "Mar 26, 2026",
    image: "/story-palm-sunday-choir.jpg",
    slug: "palm-sunday-concert-hattiesburg",
    external: true,
    externalUrl: "https://www.wdam.com/2026/03/26/traveling-choir-brings-palm-sunday-concert-back-hattiesburg/",
    content: "Road Trip Manager Demetrius 'MeMe' Marsalis and choir member Ramone Shelby join WDAM 7's Hailey Lanham to talk about the Benjamin Cone III & Worship Choir's upcoming Palm Sunday Concert IV in the Pine Belt."
  },
  {
    id: "35",
    title: "Work Starts on Asbury Hospice House Expansion in Hattiesburg",
    excerpt: "A groundbreaking ceremony was held for the Asbury Hospice House expansion, a $3 million project that will add family areas, children's play spaces, a pavilion, and a larger pharmacy.",
    category: "community",
    author: "Sethanie Smith, WJTV",
    date: "Mar 25, 2026",
    image: "/story-asbury-hospice.jpg",
    slug: "asbury-hospice-house-expansion-hattiesburg",
    external: true,
    externalUrl: "https://www.wjtv.com/living-local/focused-on-health/work-starts-on-asbury-hospice-house-expansion-in-hattiesburg/",
    content: "A groundbreaking ceremony was held on Wednesday for the expansions on the Asbury Hospice House in Hattiesburg.\n\nAccording to the Forrest Health Foundation, the additions to the South 40th Avenue facility will include a larger family area, children's play areas, pavilion for special family occasions and a larger onsite pharmacy.\n\n'We are proud to have reached the point where we can begin construction on this next phase at Asbury,' said Martha Dearman, executive director for the Foundation. 'Every family deserves a peaceful, supportive environment during end-of-life care.'\n\nOfficials said $3 million was raised for the project, which got underway about three weeks ago. It's slated for completion in the spring of 2027."
  },
  {
    id: "36",
    title: "Local Businesses Gear Up for HUBFEST Weekend",
    excerpt: "After more than three decades, HUBFEST continues to bring big crowds and big business to downtown Hattiesburg, with an estimated 25,000-30,000 people expected and a $1.5 million economic impact.",
    category: "business",
    author: "WDAM",
    date: "Mar 25, 2026",
    image: "/story-hubfest-businesses.jpg",
    slug: "local-businesses-hubfest-weekend",
    external: true,
    externalUrl: "https://www.wdam.com/2026/03/25/local-businesses-gear-up-hubfest-weekend/",
    content: "After more than three decades, HUBFEST continues to bring big crowds and big business to downtown Hattiesburg, and this year is expected to be no different.\n\n'We see anywhere from 25 to 30,000 people coming,' Area Development Partnership Hattiesburg's (ADP) Director of Communications and Events, Vanessa Henson, said.\n\nBeyond live music, food, and nearly 200 vendors, it delivers a major economic boost. ADP estimates this weekend could generate a $1.5 million impact for Hattiesburg.\n\nLocal business owners like Southern Prohibition Brewing owner Ben Green and newcomers Wax Fantastic Records and eYrthbeat Coffee Company say they're gearing up for what promises to be a big weekend.\n\nAfter last year's cancellation, the ADP says they're ready to welcome everyone back."
  },
  {
    id: "37",
    title: "Fleetwood Mac Tribute Band to Perform at Hattiesburg's Saenger Theater",
    excerpt: "Rumours ATL: A Fleetwood Mac Tribute will bring the sounds of the legendary band to the Saenger Theater in Hattiesburg on October 9, 2026.",
    category: "culture",
    author: "Sethanie Smith, WJTV",
    date: "Mar 24, 2026",
    image: "/story-fleetwood-mac-tribute.jpg",
    slug: "fleetwood-mac-tribute-saenger-hattiesburg",
    external: true,
    externalUrl: "https://www.wjtv.com/entertainment-news/fleetwood-mac-tribute-band-to-perform-in-hattiesburg/",
    content: "Fans of Fleetwood Mac won't want to miss this! Rumours ATL: A Fleetwood Mac Tribute will come to the Saenger Theater in Hattiesburg on October 9, 2026.\n\nThe Atlanta-based tribute band has built a reputation for recreating the sound and stage presence of Fleetwood Mac's golden era. Audiences can expect hits like 'Rhiannon,' 'Songbird,' and 'Go Your Own Way,' performed with the same harmonies and energy that made the originals legendary.\n\nTickets for the show are on sale on Ticketmaster."
  },
  {
    id: "38",
    title: "Hattiesburg Native Returns to Hometown on Band's National Tour",
    excerpt: "Brandon Miller, lead singer and guitarist for A Foreigner's Journey to Boston, brings his music back to Hattiesburg with a concert at Brewsky's on March 28.",
    category: "culture",
    author: "WDAM",
    date: "Mar 24, 2026",
    image: "/story-brandon-miller-concert.jpg",
    slug: "hattiesburg-native-band-national-tour",
    external: true,
    externalUrl: "https://www.wdam.com/2026/03/24/hattiesburg-native-returns-hometown-bands-national-tour/",
    content: "Brandon Miller, lead singer and guitarist for A Foreigner's Journey to Boston, brings his music back to his home town with a concert at Brewsky's March 28.\n\nMiller, a Hattiesburg native, is touring nationally with the band and made sure to include a hometown stop on the tour."
  },
  {
    id: "29",
    title: "Tatum Park Welcomes Hundreds of Kids for Hattiesburg Diamond Youth Baseball Opener",
    excerpt: "Hattiesburg Diamond Youth Baseball kicked off its 2026 season at Tatum Park with more than 350 kids participating across five age-group teams, from Tee-ball to Majors.",
    category: "sports",
    author: "WDAM",
    date: "Mar 21, 2026",
    image: "/story-tatum-park-baseball.jpg",
    slug: "tatum-park-youth-baseball-opener",
    external: true,
    externalUrl: "https://www.wdam.com/2026/03/21/tatum-park-welcomes-hundreds-kids-hattiesburg-diamond-youth-baseball-opener/",
    content: "Hattiesburg Diamond Youth Baseball has kicked off its 2026 season on March 21 at Tatum Park with more than 350 kids participating.\n\nThe group welcomes children ages 4 to 12 and divides them into five teams by age: Tee-ball for ages 4 and 5, 'Midgets' for ages 5 and 6, 'Peewees' for ages 7 and 8, 'Minors' for ages 9 and 10, and 'Majors' for ages 11 and 12.\n\nLatrell Crosby, a player for the 'Majors' team, says he will always remember his time in youth baseball as he prepares to take his career to the next level. 'Basically, all my life I been playing in Tatum, and I been having a lot of fun,' Crosby said."
  },
  {
    id: "30",
    title: "Nighttime Closures on U.S. 49 in Hattiesburg Begin March 23 for Railroad Repairs",
    excerpt: "Drivers should prepare for overnight closures on U.S. Highway 49 starting March 23, as Norfolk Southern begins railroad bridge repairs expected to last about a month.",
    category: "community",
    author: "WDAM",
    date: "Mar 19, 2026",
    image: "/story-us49-closures.jpg",
    slug: "us49-nighttime-closures-hattiesburg",
    external: true,
    externalUrl: "https://www.wdam.com/2026/03/19/nighttime-closures-us-49-hattiesburg-begin-march-23-railroad-repairs/",
    content: "Drivers in Hattiesburg should prepare for overnight traffic changes starting next week, as crews begin work that will impact part of U.S. Highway 49 for about a month.\n\nThe Mississippi Department of Transportation says the closures are tied to railroad bridge repairs by Norfolk Southern. The project will require closing U.S. 49 in both directions between West Pine Street and Country Club Road.\n\nMotorists can expect these closures to take place each night from Monday to Thursday, from 9 p.m. to 6 a.m. The repairs are anticipated to take about one month."
  },
  {
    id: "31",
    title: "Southern Miss Routs Troy 12-4 at Pete Taylor Park",
    excerpt: "The Golden Eagles improved to 19-5 on the season with a dominant 12-4 victory over the Troy Trojans at Pete Taylor Park in Hattiesburg.",
    category: "sports",
    author: "ESPN",
    date: "Mar 22, 2026",
    image: "/story-usm-troy-baseball.jpg",
    slug: "southern-miss-troy-baseball",
    external: true,
    externalUrl: "https://www.espn.com/college-baseball/game/_/gameId/401853423"
  },
  {
    id: "32",
    title: "Mississippi's Dr. Daniel Edney Under Consideration to Lead CDC",
    excerpt: "Mississippi State Health Officer Dr. Daniel Edney, a vaccine proponent who has led the state's health department since 2022, is under serious consideration to become the new director of the CDC.",
    category: "community",
    author: "Nick Judin, MS Free Press",
    date: "Mar 22, 2026",
    image: "/story-edney-cdc.jpg",
    slug: "edney-cdc-director-consideration",
    external: true,
    externalUrl: "https://www.mississippifreepress.org/mississippi-state-health-officer-dr-daniel-edney-a-vaccine-proponent-is-under-consideration-to-lead-the-cdc/",
    photoCredit: "MFP Photo by Heather Harrison",
    content: "Dr. Daniel P. Edney, Mississippi's state health officer and head of the Mississippi State Department of Health, is now under serious consideration to lead the U.S. Centers for Disease Control as its new director, The Washington Post reported.\n\nEdney has served in the role of MSDH chief since 2022. During his tenure, Mississippi's overall health ranking improved from the bottom of the pack to No. 48.\n\nAs state health officer, Edney has long championed vaccines and supported robust immunization mandates for children. If selected, he would report directly to HHS Secretary Robert F. Kennedy Jr."
  },
  {
    id: "33",
    title: "Mississippi State Baseball Completes Commanding SEC Sweep of Vanderbilt",
    excerpt: "The No. 6 Bulldogs swept Vanderbilt for the first time since 2000, capped by a 17-7 run-rule victory, drawing two of the largest on-campus crowds in NCAA history.",
    category: "sports",
    author: "Sam Sklar, Clarion Ledger",
    date: "Mar 22, 2026",
    image: "/story-msstate-vandy-sweep.jpg",
    slug: "mississippi-state-vanderbilt-sweep",
    external: true,
    externalUrl: "https://www.clarionledger.com/story/sports/college/mississippi-state/2026/03/22/mississippi-state-baseball-vanderbilt-sec-series-ryan-mcpherson/89124641007/",
    content: "Mississippi State baseball swept Vanderbilt for the first time since 2000, culminating in a 17-7 run-rule victory. The No. 6 Bulldogs (20-4, 4-2 SEC) defeated Vanderbilt on March 20 (4-2), March 21 (7-2), and March 22 (17-7).\n\nThe bullpen allowed just two runs in 10 innings all series. Tomas Valincius struck out a career-high 14 batters in seven innings in Game 2.\n\nThe first two games drew two of the largest crowds in NCAA history for an on-campus game, with attendances of 14,649 and 14,834. The Bulldogs are 16-0 at Dudy Noble Field in 2026 and have won 18 straight at home."
  },
  {
    id: "21",
    title: "Cheapest Gas Stations in Hattiesburg",
    excerpt: "CheapInsurance.com compiled a list of the cheapest gas stations in Hattiesburg, helping local drivers find the best fuel prices across the Hub City.",
    category: "business",
    author: "Laurel Leader-Call",
    date: "Mar 13, 2026",
    image: "/story-gas-stations.jpg",
    slug: "cheapest-gas-stations-hattiesburg",
    external: true,
    externalUrl: "https://www.leader-call.com/news/state/cheapest-gas-stations-in-hattiesburg/article_a6d4b79d-b997-54ed-abfb-04f015edc2be.html"
  },
  {
    id: "22",
    title: "Hattiesburg Pharmacy Owner Pleads Guilty to Tax Offense",
    excerpt: "Duke Kimbrell Rodgers, 68, of Rodgers Family Pharmacy pled guilty to failing to remit over $1.5 million in employee tax withholdings to the IRS over seven years, agreeing to pay more than $2 million in restitution.",
    category: "community",
    author: "Sethanie Smith, WJTV",
    date: "Mar 10, 2026",
    image: "/story-pharmacy-tax.jpg",
    slug: "hattiesburg-pharmacy-owner-tax-offense",
    external: true,
    externalUrl: "https://www.wjtv.com/news/pine-belt/hattiesburg-pharmacy-owner-pleads-guilty-to-tax-offense/",
    content: "A Hattiesburg man pled guilty to failing to pay over funds that were withheld from employee paychecks.\n\nAccording to court documents, Duke Kimbrell Rodgers, 68, conducted a business under the name Rodgers Family Pharmacy. From 2013 to 2020, prosecutors said Rodgers withheld more than $1,500,828.73 from his employees' pay for trust fund taxes. However, he failed to remit those funds to the government.\n\nIn addition, because of those withholdings and his failure to remit withholdings from his own paycheck, prosecutors said Rodgers submitted fraudulent personal tax forms that resulted in additional $629,831.00 loss.\n\nAs part of his plea, Rodgers agreed to pay restitution of more than $2 million to the Internal Revenue Service (IRS). Rodgers is scheduled to be sentenced on June 18, 2026. He faces a statutory maximum of five years imprisonment."
  },
  {
    id: "23",
    title: "One Dead, Thousands Without Power in Mississippi After Storms",
    excerpt: "More than 50,000 were left without electricity after storms damaged power lines across Mississippi. One fatality and three injuries were reported in Lawrence County, with another cold front expected to bring freezing temperatures and possible snow.",
    category: "community",
    author: "Brian Broom, Clarion Ledger",
    date: "Mar 12, 2026",
    image: "/story-storms-power.jpg",
    slug: "thousands-without-power-mississippi-storms",
    external: true,
    externalUrl: "https://www.clarionledger.com/story/weather/2026/03/12/thousands-without-power-in-ms-after-storms-snow-possible-next-week-mississippi/89114402007/",
    content: "As storms moved out of the state overnight, one person is dead and thousands in Mississippi were left without power Thursday morning, March 12, and another cold front is expected to drop temperatures below freezing next week and bring a chance of snow to parts of the state.\n\nThere was one fatality and three injuries reported in Lawrence County, according Gov. Tate Reeves. 'Mississippi is praying for the family of the lost and for a speedy recovery of those injured,' Reeves wrote in a statement.\n\nAccording to PowerOutage.com, 53,200 tracked customers in Mississippi were without power as of 3:45 a.m. Thursday. Counties with the highest number of reported outages included Hinds County (6,686), Pike County (6,641), Lincoln County (4,465), Amite County (4,022), Lawrence County (2,539), and Jefferson Davis County (2,294)."
  },
  {
    id: "24",
    title: "Sixth Street District Opens Oseola McCarty House Museum",
    excerpt: "The newest museum in Hattiesburg's Sixth Street Museum District honors Oseola McCarty, the humble washerwoman who donated most of her life savings for scholarships at the University of Southern Mississippi.",
    category: "culture",
    author: "WDAM",
    date: "Mar 8, 2026",
    image: "/story-mccarty-house.jpg",
    slug: "mccarty-house-museum-opening",
    external: true,
    externalUrl: "https://www.wdam.com/2026/03/08/sixth-street-district-honors-hattiesburg-philanthropist-by-opening-mccarty-house/",
    content: "The newest museum in the Sixth Street Museum District has opened, honoring a local woman who gained international fame for her philanthropic efforts.\n\nA ribbon was cut Saturday morning, March 7, to officially open the Oseola McCarty House. It tells the story of Oseola McCarty, the humble Hattiesburg washerwoman who donated most of her life savings for scholarships at the University of Southern Mississippi.\n\nThe house was McCarty's actual home on Miller Street until she died in 1999. The house was bought in 2017 by the Hattiesburg Convention Commission and moved to East Sixth Street in 2019. March 7, 2026, is McCarty's 118th birthday.\n\nThe museum depicts many aspects of McCarty's life and features photographs, storyboards, cast sculptures and holograms. The McCarty House is open by appointment from 10 a.m. to 4 p.m. Wednesday through Friday and from noon to 4 p.m. on Saturdays."
  },
  {
    id: "25",
    title: "Mississippi Could See Tornadoes Sunday and Snow on Monday",
    excerpt: "Mississippi faces a wide range of weather conditions including severe storms with possible tornadoes Sunday night and below-freezing temperatures with snow possible in northern parts of the state Monday.",
    category: "community",
    author: "Brian Broom, Clarion Ledger",
    date: "Mar 13, 2026",
    image: "/story-tornadoes-weather.jpg",
    slug: "mississippi-tornadoes-snow-forecast",
    external: true,
    externalUrl: "https://www.clarionledger.com/story/weather/2026/03/13/weather-forecast-storms-tornadoes-possible-in-mississippi-sunday-march-15-2026-snow-monday-march-16/89135017007/",
    content: "Parts of Mississippi are still recovering from storms earlier this week that killed one and left thousands without power and now more storms are in the forecast along with freezing temperatures, possible severe weather with tornadoes and in extreme North Mississippi, possible snow.\n\nAccording to the National Weather Service, Mississippi faces the possibility of severe weather Sunday night, March 15. Roughly from the Interstate 20 corridor and north, there is a Slight Risk warning of severe storms. The primary risk is damaging wind with gusts up to 60 mph, but tornadoes can't be ruled out.\n\nTemperatures in much of the state are expected to fall below freezing on Monday night into Tuesday morning. Hattiesburg is forecast to stay above freezing at 33 degrees."
  },
  {
    id: "26",
    title: "What to Expect in Mississippi's State Primaries",
    excerpt: "Mississippi voters choose nominees for Congress in a state primary Tuesday. Republican Sen. Cindy Hyde-Smith faces a primary challenge, and the entire U.S. House delegation is up for reelection.",
    category: "opinion",
    author: "Robert Yoon, Associated Press",
    date: "Mar 10, 2026",
    image: "/story-ms-primaries.jpg",
    slug: "mississippi-state-primaries-2026",
    external: true,
    externalUrl: "https://www.pbs.org/newshour/politics/what-to-expect-in-mississippis-state-primaries",
    content: "Mississippi voters will choose nominees for Congress in a state primary Tuesday. The state's junior Republican U.S. senator and the entire U.S. House delegation are up for reelection, and all but one have drawn multiple challengers from one or both major political parties hoping to replace them.\n\nRepublicans hold slim majorities on Capitol Hill, but control of either chamber in November likely won't come down to Mississippi, where no federal office has changed party hands since 2010.\n\nAt the top of the ballot, Republican U.S. Sen. Cindy Hyde-Smith faces a primary challenge in her bid for a second full term from physician and novelist Sarah Adlakha. The Democratic primary field includes Scott Colom, a state district attorney covering Clay, Lowndes, Noxubee and Oktibbeha counties."
  },
  {
    id: "27",
    title: "Mississippi House Passes Bill to Bypass ABC Warehouse Amid Alcohol Backlog",
    excerpt: "The House passed the 'Emergency Alcohol Distribution Act' in a bipartisan 112-2 vote, allowing licensed permit holders to buy directly from manufacturers for two years while the state's ABC warehouse struggles with a software failure.",
    category: "business",
    author: "J.T. Mitchell, SuperTalk MS",
    date: "Mar 13, 2026",
    image: "/story-abc-alcohol.jpg",
    slug: "mississippi-abc-alcohol-backlog-bill",
    external: true,
    externalUrl: "https://www.supertalk.fm/mississippi-house-passes-bill-to-bypass-abc-warehouse-amid-alcohol-backlog/",
    content: "With less than a month remaining in Mississippi's legislative session, access to alcohol — or the lack thereof — has moved to the forefront at the capitol as the state battles what one lawmaker calls a 'total mess' of a backlog in wine and spirits.\n\nLocal liquor store owners, members of the state's hospitality industry, and restaurants have reported shortages in alcohol due to a conveyor belt software failure at the Mississippi Alcoholic Beverage Control's warehouse in Gluckstadt.\n\nUnder the plan, licensed alcohol permit holders would be allowed to buy alcohol directly from manufacturers or other authorized sellers — rather than going through ABC — for the next two years. The House passed the Emergency Alcohol Distribution Act in a bipartisan 112-2 vote."
  },
  {
    id: "28",
    title: "$6,000 Teacher Pay Raise Gains Mississippi Senate's Approval",
    excerpt: "A surprise $6,000 teacher pay raise gained approval in the Mississippi Senate, raising salaries over three years for regular teachers, special education educators, assistant teachers, and college professors.",
    category: "community",
    author: "Heather Harrison, MS Free Press",
    date: "Mar 11, 2026",
    image: "/story-teacher-pay.jpg",
    slug: "teacher-pay-raise-mississippi-senate",
    external: true,
    externalUrl: "https://www.mississippifreepress.org/6000-teacher-pay-raise-gains-mississippi-senates-approval/",
    content: "A surprise $6,000 teacher pay raise gained approval in the Mississippi Senate on Wednesday after the chamber amended a bill that originally dealt with the sale or lease of unused school property.\n\nSenate Education Committee Chairman Sen. Dennis DeBar, R-Leakesville, presented an amendment to House Bill 1395 that adds language to raise salaries over the next three years by $6,000 for regular teachers, $2,000 for assistant teachers, $6,000 for licensed special education educators teaching special education classes — plus an additional $3,000 supplement — and $2,000 for college and university educators.\n\n'Today's a good day for teachers, teacher assistants, professors and special education teachers as well,' DeBar told reporters Wednesday after the Senate passed the pay raise. The Senate unanimously passed H.B. 1395."
  },
];

// Sort helper: newest dates first
const parseDate = (d: string) => new Date(d.replace(/^(\w+)\s(\d+),\s(\d+)$/, '$1 $2, $3')).getTime();
export const byDateDesc = (a: Story, b: Story) => parseDate(b.date) - parseDate(a.date);

// Sort all stories by date so newest always float to top
stories.sort(byDateDesc);

export const trendingStories = stories.filter(s => s.external).slice(0, 5);
export const featuredStories = [
  ...stories.filter(s => s.featured && s.original),
  ...stories.filter(s => s.featured && !s.original),
];
