export interface HubEvent {
  id: string;
  title: string;
  category: "community" | "culture" | "sports" | "business" | "government";
  startDate: string; // ISO yyyy-mm-dd
  endDate?: string;  // ISO yyyy-mm-dd (for multi-day)
  startTime?: string; // human readable
  endTime?: string;
  location?: string;
  url: string;
  description?: string;
}

export const events: HubEvent[] = [
  {
    id: "evt-forrest-fair",
    title: "The Great Forrest County Fair",
    category: "community",
    startDate: "2026-04-20",
    endDate: "2026-04-25",
    startTime: "5:00 PM",
    endTime: "10:00 PM",
    location: "The Center at Forrest County",
    url: "https://www.visithburg.org/events/the-great-forrest-county-fair-2/",
    description: "A week-long celebration with rides, food, livestock, and family entertainment at The Center at Forrest County.",
  },
  {
    id: "evt-little-women",
    title: "Theatre Presents: Little Women, the Musical",
    category: "culture",
    startDate: "2026-04-23",
    startTime: "7:00 PM",
    endTime: "8:00 PM",
    location: "Joe and Virginia Tatum Theatre",
    url: "https://www.visithburg.org/events/theatre-presents-little-women-the-musical/",
  },
  {
    id: "evt-marty-stuart",
    title: "Marty Stuart and His Fabulous Superlatives",
    category: "culture",
    startDate: "2026-04-24",
    startTime: "7:30 PM",
    endTime: "10:30 PM",
    location: "Hattiesburg Saenger Theater",
    url: "https://www.visithburg.org/events/marty-stuart-and-his-fabulous-superlatives/",
  },
  {
    id: "evt-glenn-miller",
    title: "Glenn Miller Orchestra",
    category: "culture",
    startDate: "2026-04-26",
    startTime: "1:00 PM",
    endTime: "4:00 PM",
    location: "Hattiesburg Saenger Theater",
    url: "https://www.facebook.com/events/1863861244221932/",
  },
  {
    id: "evt-concert-band-spring",
    title: "Hattiesburg Concert Band Spring Concert",
    category: "culture",
    startDate: "2026-04-26",
    startTime: "3:00 PM",
    endTime: "4:00 PM",
    location: "Thomas V. Fraschillo Stage @ Mannoni Performing Arts Center",
    url: "https://www.hattiesburgms.com/event/hattiesburg-concert-band-spring-concert/",
  },
  {
    id: "evt-city-council-may4",
    title: "City Council Meeting",
    category: "government",
    startDate: "2026-05-04",
    startTime: "4:00 PM",
    location: "Hattiesburg City Hall",
    url: "https://www.hattiesburgms.com/council/",
  },
  {
    id: "evt-city-council-may5",
    title: "City Council Meeting",
    category: "government",
    startDate: "2026-05-05",
    startTime: "5:00 PM",
    location: "Hattiesburg City Hall",
    url: "https://www.hattiesburgms.com/council/",
  },
  {
    id: "evt-planning-commission-may6",
    title: "Planning Commission",
    category: "government",
    startDate: "2026-05-06",
    startTime: "1:00 PM",
    location: "Hattiesburg City Hall",
    url: "https://www.hattiesburgms.com/council/",
  },
  {
    id: "evt-moe-born-to-fly",
    title: "moe. — Born to Fly Tour",
    category: "culture",
    startDate: "2026-05-15",
    startTime: "8:00 PM",
    endTime: "11:00 PM",
    location: "Hattiesburg Saenger Theater",
    url: "https://www.visithburg.org/events/moe-born-to-fly-tour/",
  },
  {
    id: "evt-vetfest-2026",
    title: "VetFest 2026",
    category: "community",
    startDate: "2026-05-16",
    startTime: "10:00 AM",
    endTime: "2:00 PM",
    location: "Town Square Park",
    url: "https://www.visithburg.org/events/vetfest-2026/",
  },
  {
    id: "evt-arena-rock-show",
    title: "That Arena Rock Show",
    category: "community",
    startDate: "2026-05-29",
    startTime: "7:30 PM",
    endTime: "10:30 PM",
    location: "Hattiesburg Saenger Theater",
    url: "https://www.visithburg.org/events/that-arena-rock-show/",
  },
];

export const categoryStyles: Record<HubEvent["category"], { label: string; classes: string }> = {
  community: { label: "Community", classes: "bg-primary/15 text-primary border-primary/30" },
  culture: { label: "Culture", classes: "bg-hub-purple/15 text-secondary border-secondary/30" },
  sports: { label: "Sports", classes: "bg-hub-electric-glow/15 text-hub-electric-glow border-hub-electric-glow/30" },
  business: { label: "Business", classes: "bg-hub-cyan/15 text-hub-cyan border-hub-cyan/30" },
  government: { label: "Government", classes: "bg-muted text-muted-foreground border-border" },
};
