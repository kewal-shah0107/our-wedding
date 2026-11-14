/**
 * ============================================================
 *  YOUR WEDDING DETAILS
 * ============================================================
 *  This is the ONLY file you need to change to make the website yours.
 *
 *  Rules for editing by hand:
 *   - Only change the text inside the quotes "like this".
 *   - Keep every quote mark, comma and bracket where it is.
 *   - Photos, video and music go in the "public" folder. Then write
 *     their path here starting with a slash, for example "/images/couple.jpg".
 *   - To hide something optional, set it to "" (empty quotes).
 *
 *  Easier option: ask Claude to do it for you. See GUIDE.md.
 * ============================================================
 */

export const wedding = {
  // ---------- The couple ----------
  couple: {
    partner1: "Kewal",
    partner2: "Bhumi",
  },

  // ---------- Date ----------
  // Short date shown on the big welcome screen and in the footer.
  date: "February 12, 2027",
  // Full date shown above the timeline.
  dateWithDay: "Friday, February 12, 2027",

  // ---------- Welcome screen (top of the page) ----------
  hero: {
    // A small blessing or greeting shown above your names. Use "" to hide it.
    blessing: "",
    // A short quote shown below the date. Use "" to hide it.
    quote: "",
    // Background video (MP4, under 5 MB is best). Use "" to show the image below instead.
    video: "",
    // Background image, used when there is no video.
    image: "/images/hero.svg",
  },

  // ---------- Logo (top left corner) ----------
  // Use "" to show the couple's initials automatically.
  logo: "",

  // ---------- Events timeline ----------
  // Add or remove events by copying or deleting a whole { ... } block.
  events: [
    {
      name: "Wedding",
      time: "10:30 AM",
      description: "Baarat Aagman",
      image: "/images/event-1.svg",
    },
    {
      name: "Vidai",
      time: "4:00 PM",
      description: "",
      image: "/images/event-2.svg",
    },
  ],

  // ---------- Families ----------
  families: {
    sectionIntro: "With blessings from",
    // Add or remove family cards the same way as events.
    groups: [
      {
        title: "Groom's Parents",
        names: "S/O Sheth Sri Dhiren Ashokkumar Shah & Smt. Parul Dhiren Shah",
        message: "You are welcome to the wedding of our Beloved Son.",
        // Optional extra line inside the card, such as siblings. Use "" for both to hide it.
        extraTitle: "",
        extraNames: "",
      },
      {
        title: "Bride's Parents",
        names: "D/O Sheth Sri Dattaprasad Mahadeo Kawale & Smt. Smita Dattaprasad Kawale",
        message: "Please do come to wedding of our daughter and give your blessings",
        extraTitle: "Bride's Brother",
        extraNames: "Manthan",
      },
    ],
    // Optional tribute to elders, with a photo. Set "names" to [] to hide this box.
    elders: {
      heading: "With eternal blessings from",
      names: [],
      photo: "/images/elders.svg",
    },
  },

  // ---------- Venue ----------
  venue: {
    name: "Padmavati Banquets",
    addressLine1: "Diamond Hall, 1st Floor, Samarth Complex",
    addressLine2: "Bolinj Rd, near Parag Medical, Gokul Twp, Virar West",
    // What to search on Google Maps to find the venue.
    // Tip: copy the exact venue name and city from Google Maps.
    mapSearch: "padmavati banquet hall virar",
  },

  // ---------- Footer (bottom of the page) ----------
  footer: {
    // Short line under the address. Use "" to hide it.
    blessingLine: "",
  },

  // ---------- Background music ----------
  music: {
    // MP3 file in public/audio. Use "" to turn music off completely.
    file: "/audio/wedding.mp3",
    // Volume from 0 (silent) to 1 (full).
    volume: 0.3,
    // Android phones block music until the guest taps. This welcome box asks them to tap.
    welcomeTitle: "Welcome to Kewal & Bhumi's Wedding",
    welcomeMessage: "Step into our world of love, laughter, and forever.",
    welcomeButton: "Enter the Celebration",
  },

  // ---------- Link preview (WhatsApp, iMessage, social media) ----------
  share: {
    title: "Kewal & Bhumi | Wedding Celebration",
    description:
      "Join us in celebrating the wedding of Kewal & Bhumi on February 12, 2027 in Virar.",
    // Image shown in the link preview. A 1200 x 630 JPG works best.
    image: "/images/share-preview.jpg",
  },
};

export type WeddingConfig = typeof wedding;
