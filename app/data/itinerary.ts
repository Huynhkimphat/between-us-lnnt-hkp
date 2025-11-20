// TypeScript interfaces for itinerary data
export interface Activity {
  time: string;
  description: string;
  image: string;
  googleMapsLink?: string;
}

export interface DayItinerary {
  dayNumber: number;
  dayDisplay: string;
  activities: Activity[];
}

export interface ItineraryData {
  days: DayItinerary[];
}

// Itinerary data for Thailand Trip
export const itineraryData: ItineraryData = {
  days: [
    {
      dayNumber: 1,
      dayDisplay: "Thursday 27 Nov",
      activities: [
        {
          time: "15h30:",
          description: "Going to Tan Son Nhat Airport",
          image: "/banner.avif",
          googleMapsLink:
            "https://maps.google.com/?q=Tan+Son+Nhat+Airport+Ho+Chi+Minh",
        },
        {
          time: "18h40-20h15:",
          description: "HCM - Bangkok",
          image: "/banner.avif",
          googleMapsLink: "https://maps.google.com/?q=Bangkok+Thailand",
        },
        {
          time: "21h:",
          description: "Meet my girlfriend",
          image: "/banner.avif",
          googleMapsLink: "",
        },
        {
          time: "22h:",
          description: "Going to the Sitara",
          image: "/banner.avif",
          googleMapsLink: "https://maps.app.goo.gl/KHxqauh9r8R2USUv7",
        },
        {
          time: "22h30:",
          description: "Jodd Fair",
          image: "/banner.avif",
          googleMapsLink: "https://maps.app.goo.gl/M9CF9rH7mxQ4qSxF8",
        },
        {
          time: "23h30:",
          description: "Sleep together",
          image: "/banner.avif",
          googleMapsLink: "",
        },
      ],
    },
    {
      dayNumber: 2,
      dayDisplay: "Friday 28 Nov",
      activities: [
        {
          time: "9h:",
          description: "Breakfast at 711",
          image: "/banner.avif",
          googleMapsLink: "https://maps.app.goo.gl/WVRHq4bnkqjeioBF7",
        },
        {
          time: "9h30-10h30:",
          description: "Going to Siam Premium Outlets Bangkok",
          image: "/banner.avif",
          googleMapsLink: "https://maps.app.goo.gl/K48fAGC2P8PkgoSPA",
        },
        {
          time: "10h30-12h:",
          description: "Shopping at Siam Premium Outlets Bangkok",
          image: "/banner.avif",
          googleMapsLink: "",
        },
        {
          time: "12h-13h:",
          description: "Lunch at KFC",
          image: "/banner.avif",
          googleMapsLink: "https://maps.app.goo.gl/JXge2e7Mxw5e9Aqk8",
        },
        {
          time: "13h-15h30:",
          description: "Continue shopping at Siam Premium Outlets Bangkok",
          image: "/banner.avif",
          googleMapsLink: "",
        },
        {
          time: "16h-17h:",
          description: "Back to Sitara Hotel",
          image: "/banner.avif",
          googleMapsLink: "https://maps.app.goo.gl/KHxqauh9r8R2USUv7",
        },
        {
          time: "18h-18h30:",
          description: "Going to BanThat Thong Road",
          image: "/banner.avif",
          googleMapsLink: "https://maps.app.goo.gl/qVjnpFjM1Q1914pd6",
        },
        {
          time: "21h-22h:",
          description: "Back to Sitara Hotel",
          image: "/banner.avif",
          googleMapsLink: "https://maps.app.goo.gl/KHxqauh9r8R2USUv7",
        },
        {
          time: "22h30-0h:",
          description: "Poker and sleep together",
          image: "/banner.avif",
          googleMapsLink: "",
        },
      ],
    },
    {
      dayNumber: 3,
      dayDisplay: "Saturday 29 Nov",
      activities: [
        {
          time: "9h:",
          description: "Breakfast at เตี๋ยวต้มยำจัมโบ้ เจ๊.ขวัญ",
          image: "/banner.avif",
          googleMapsLink: "https://maps.app.goo.gl/2XPQpFvs24Q6T3Nj8",
        },
        {
          time: "10h-11h:",
          description: "Going to Wat Arun",
          image: "/banner.avif",
          googleMapsLink: "https://maps.app.goo.gl/uVJxJPtMmL3j2MUB6",
        },
        {
          time: "11h-13h:",
          description: "Wat Arun",
          image: "/banner.avif",
          googleMapsLink: "",
        },
        {
          time: "13h-14h:",
          description: "Going to Icon Siam",
          image: "/banner.avif",
          googleMapsLink: "https://maps.app.goo.gl/3FkVh7R8aAiB3LZD9",
        },
        {
          time: "14-15h:",
          description: "Lunch at Icon Siam",
          image: "/banner.avif",
          googleMapsLink: "",
        },
        {
          time: "15h-18h:",
          description: "Shopping at Icon Siam",
          image: "/banner.avif",
          googleMapsLink: "",
        },
        {
          time: "18h30-19h30:",
          description: "Vijit Chao Phraya Drone Show at Icon Siam",
          image: "/banner.avif",
          googleMapsLink: "",
        },
        {
          time: "19h30-20h30h:",
          description: "Going to Lotus",
          image: "/banner.avif",
          googleMapsLink: "",
        },
        {
          time: "20h30-21h30:",
          description: "Dinner at Lotus",
          image: "/banner.avif",
          googleMapsLink: "https://maps.app.goo.gl/6cpK3kjaRBXhyCkS6",
        },
        {
          time: "21h30-22h30:",
          description: "Back to Sitara Hotel and play cards",
          image: "/banner.avif",
          googleMapsLink: "",
        },
      ],
    },
    {
      dayNumber: 4,
      dayDisplay: "Sunday 30 Nov",
      activities: [
        {
          time: "9h:",
          description: "Breakfast at 711",
          image: "/banner.avif",
          googleMapsLink: "",
        },
        {
          time: "9h30-10h30:",
          description: "Going to Song Wat",
          image: "/banner.avif",
          googleMapsLink: "https://maps.app.goo.gl/PedY1ijeDbMX5gCJ8",
        },
        {
          time: "10h30-12h30:",
          description: "Song Wat Road",
          image: "/banner.avif",
          googleMapsLink: "",
        },
        {
          time: "13h-14h:",
          description: "Lunch at Nhong Rim Klong and Wattana Panich",
          image: "/banner.avif",
          googleMapsLink: "https://maps.app.goo.gl/gBfUyEp9dDotHDpp8",
        },
        {
          time: "14-15h:",
          description: "Lunch at Nhong Rim Klong and Wattana Panich",
          image: "/banner.avif",
          googleMapsLink: "https://maps.app.goo.gl/7m6dWeSe5D5g4CYy5",
        },
        {
          time: "15h-16h:",
          description: "Going to Chocolate Ville",
          image: "/banner.avif",
          googleMapsLink: "https://maps.app.goo.gl/JSTDFySN5s3Bw53EA",
        },
        {
          time: "16h-20h30:",
          description: "Chocolate Ville ",
          image: "/banner.avif",
          googleMapsLink: "",
        },
        {
          time: "21h-22h:",
          description: "Back to Sitara Hotel",
          image: "/banner.avif",
          googleMapsLink: "",
        },
      ],
    },
    {
      dayNumber: 5,
      dayDisplay: "Monday 1 Dec",
      activities: [
        {
          time: "8h30:",
          description: "Breakfast at 711",
          image: "/banner.avif",
          googleMapsLink: "",
        },
        {
          time: "9h-9h30:",
          description: "Going To OCC",
          image: "/banner.avif",
          googleMapsLink: "https://maps.app.goo.gl/zMK834bhAz5UHWFU8",
        },
        {
          time: "10h-12h:",
          description: "Central World And Siam Zones",
          image: "/banner.avif",
          googleMapsLink: "https://maps.app.goo.gl/mtWdx32dVUWd41uC6",
        },
        {
          time: "12h-13h:",
          description: "Lunch at Siam Zones",
          image: "/banner.avif",
          googleMapsLink: "",
        },
        {
          time: "13h-15h:",
          description: "MBK",
          image: "/banner.avif",
          googleMapsLink: "https://maps.app.goo.gl/7m6dWeSe5D5g4CYy5",
        },
        {
          time: "15h-18h:",
          description: "Platinum Plaza",
          image: "/banner.avif",
          googleMapsLink: "https://maps.app.goo.gl/gbgJKXRyk6sLNwhg8",
        },
        {
          time: "18h-18h30:",
          description: "Dinner at Big C",
          image: "/banner.avif",
          googleMapsLink: "",
        },
        {
          time: "19h-21h:",
          description: "Big C",
          image: "/banner.avif",
          googleMapsLink: "",
        },
        {
          time: "21h-22h:",
          description: "Back to Sitara Hotel",
          image: "/banner.avif",
          googleMapsLink: "",
        },
      ],
    },
    {
      dayNumber: 6,
      dayDisplay: "Tuesday 2 Dec",
      activities: [
        {
          time: "9h30:",
          description: "Breakfast at Baan Kuay Tiew Ruathong",
          image: "/banner.avif",
          googleMapsLink: "https://maps.app.goo.gl/oPxXJGGyQ7y1ZKjo8",
        },
        {
          time: "10h-11h:",
          description: "Going to Emsphere",
          image: "/banner.avif",
          googleMapsLink: "https://maps.app.goo.gl/RZuDeaNENtQgk3jj7",
        },
        {
          time: "11h-13h:",
          description: "Shopping Emsphere",
          image: "/banner.avif",
          googleMapsLink: "",
        },
        {
          time: "13h30-14h:",
          description: "Lunch at Terminal 21",
          image: "/banner.avif",
          googleMapsLink: "https://maps.app.goo.gl/2bjdViZvqkMEDsBZ8",
        },
        {
          time: "14h-16h:",
          description: "Shopping at Terminal 21",
          image: "/banner.avif",
          googleMapsLink: "",
        },
        {
          time: "17h-18h:",
          description: "Going to Suvarnabhumi Airport",
          image: "/banner.avif",
          googleMapsLink: "https://maps.app.goo.gl/zFc8qhYZg45W22zS9",
        },
      ],
    },
  ],
};
