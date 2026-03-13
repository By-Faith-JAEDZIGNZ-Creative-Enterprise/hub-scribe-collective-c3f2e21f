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

  // ── EXTERNAL / CURATED NEWS ──
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

export const trendingStories = stories.filter(s => s.external).slice(0, 5);
export const featuredStories = stories.filter(s => s.featured);
