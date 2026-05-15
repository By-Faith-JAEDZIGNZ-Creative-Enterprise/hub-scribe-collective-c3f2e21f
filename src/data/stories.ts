export interface Story {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  date: string;
  image: string;
  images?: string[];
  slug: string;
  content?: string;
  featured?: boolean;
  external?: boolean;
  externalUrl?: string;
  original?: boolean;
  photoCredit?: string;
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
