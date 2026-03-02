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
    content: "The City of Hattiesburg officially broke ground on its ambitious downtown revitalization project this week, marking the beginning of a transformation that city officials say will redefine the urban core for decades to come.\n\nThe $12 million investment includes new mixed-use buildings, expanded green spaces along the Leaf River corridor, and modernized infrastructure that will support both pedestrian and cycling traffic.\n\n\"This is more than a construction project,\" Mayor Thompson said at the groundbreaking ceremony. \"This is a statement about who we are as a community and where we're headed.\"\n\nThe project is expected to create over 200 construction jobs and attract an estimated 50 new businesses to the downtown area over the next five years. Local business owners have expressed overwhelming support for the initiative.\n\n\"We've been waiting for something like this for years,\" said Angela Harris, owner of a Hardy Street boutique. \"The energy downtown is already changing, and construction hasn't even started yet.\"\n\nThe first phase of construction is expected to be completed by fall 2026, with the full project wrapping up in early 2028."
  },
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
    content: "Pine Belt Innovations, a Hattiesburg-based agricultural technology startup, announced today that it has successfully closed a $5 million Series A funding round led by Southern Ventures Capital.\n\nThe company, founded in 2023 by University of Southern Mississippi graduates David Torres and Lisa Ngozi, has developed an AI-powered platform that helps small and mid-size farmers optimize crop yields while reducing water usage.\n\n\"Hattiesburg gave us everything we needed to build this company,\" Torres said. \"The talent from USM, the supportive business community, and the proximity to the agricultural heartland of Mississippi.\"\n\nThe funding will be used to expand the platform across the Southeast, hire 30 new employees at the Hattiesburg headquarters, and develop new features for sustainable farming practices."
  },
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
    content: "The Hub City Music Festival, now in its eighth year, has announced an expanded format for 2026 that will transform downtown Hattiesburg into a three-day celebration of Southern music, art, and culinary culture.\n\nThe festival, running June 12-14, will feature over 40 artists across four stages, including headliners from blues, gospel, R&B, and Southern rock genres.\n\n\"This festival has become the heartbeat of our cultural identity,\" said festival director Keisha Monroe. \"Every year it grows because the community shows up and makes it something special.\"\n\nNew additions for 2026 include a culinary village featuring local restaurants, a spoken word and poetry stage, and a youth artist showcase."
  },
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
    content: "The University of Southern Mississippi Golden Eagles are generating buzz heading into the 2026 football season, with what analysts are calling the program's best recruiting class in over a decade.\n\nHead Coach Williams has brought in a wave of talented athletes, including four-star recruits from across the Southeast, while retaining key returning starters on both sides of the ball.\n\n\"The culture we're building here is special,\" Williams said during spring practice. \"These young men believe in Hattiesburg, they believe in this program, and they believe in each other.\""
  },
  {
    id: "5",
    title: "Why Hattiesburg's Next Chapter Belongs to Its Young Leaders",
    excerpt: "An op-ed on how a new generation of civic-minded entrepreneurs and community organizers are reshaping the future of the Hub City.",
    category: "opinion",
    author: "Rev. Patricia Dawson",
    date: "Feb 18, 2026",
    image: "/featured-opinion.jpg",
    slug: "hattiesburgs-young-leaders",
    content: "I've lived in Hattiesburg for over 40 years, and I've never seen anything quite like what's happening now. A new generation of leaders is emerging—not from the traditional power structures, but from the streets, the campuses, and the community organizations that have always been the true backbone of this city.\n\nThese young people are starting businesses, organizing neighborhood cleanups, running for local office, and most importantly, they're staying. They're choosing Hattiesburg not as a fallback, but as a first choice."
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
];

export const trendingStories = stories.slice(0, 5);
export const featuredStories = stories.filter(s => s.featured);
