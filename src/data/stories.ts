export interface Story {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  date: string;
  image: string;
  slug: string;
  content?: string;
  featured?: boolean;
  external?: boolean;
  externalUrl?: string;
}

export const categories = [
  { name: "Community", slug: "community" },
  { name: "Business", slug: "business" },
  { name: "Culture", slug: "culture" },
  { name: "Sports", slug: "sports" },
  { name: "Opinion", slug: "opinion" },
];

export const stories: Story[] = [
  // ── COMMUNITY ──
  {
    id: "1",
    title: "Downtown Revitalization Project Breaks Ground This Spring",
    excerpt: "A $12 million investment is set to transform the heart of Hattiesburg's historic downtown corridor with new mixed-use developments, green spaces, and community gathering areas.",
    category: "community",
    author: "Marcus Williams",
    date: "Feb 28, 2026",
    image: "/featured-community.jpg",
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
    image: "/featured-community.jpg",
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
    image: "/featured-community.jpg",
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
    image: "/featured-community.jpg",
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
    image: "/featured-business.jpg",
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
    image: "/featured-business.jpg",
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
    image: "/featured-business.jpg",
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
    image: "/featured-business.jpg",
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
    image: "/featured-culture.jpg",
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
    image: "/featured-culture.jpg",
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
    image: "/featured-culture.jpg",
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
    image: "/featured-culture.jpg",
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
    image: "/featured-sports.jpg",
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
    image: "/featured-sports.jpg",
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
    image: "/featured-sports.jpg",
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
    image: "/featured-sports.jpg",
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
    image: "/featured-opinion.jpg",
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
    image: "/featured-opinion.jpg",
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
    image: "/featured-opinion.jpg",
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
    image: "/featured-opinion.jpg",
    slug: "support-local-journalism",
    content: "When was the last time you read a story about your neighborhood—your actual neighborhood—in a major news outlet? For most of us, the answer is never.\n\nThat's why local journalism matters. It's the only form of media that holds our city council accountable, covers our school board meetings, and tells the stories of the people who live next door."
  },
];

export const trendingStories = stories.slice(0, 5);
export const featuredStories = stories.filter(s => s.featured);
