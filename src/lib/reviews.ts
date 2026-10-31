export interface Review {
  name: string;
  service: string | null;
  rating: number;
  quote: string;
}

// Real 5-star reviews from Cliff's Google Business Profile. Quotes are
// verbatim apart from spelling fixes; "…" marks a trimmed sentence.
export const reviews: Review[] = [
  {
    name: "Robert T.",
    service: null,
    rating: 5,
    quote:
      "Very happy. My car broke down downtown … Price quoted on the phone was the price charged, no games. The driver, Parrvinder was very nice and professional. Would recommend.",
  },
  {
    name: "YEG Closets & Glass",
    service: "Car towing",
    rating: 5,
    quote:
      "We used Cliffs to tow one of our work vehicles. There was a minor issue, but with one call and email to the office it was handled quick and professional. Will be using Cliffs again for any towing needs we have.",
  },
  {
    name: "Dan Can Traveller",
    service: "Car towing",
    rating: 5,
    quote:
      "Excellent, professional and definitely went above and beyond. I highly recommend Brian and Dean. We needed a disabled car towed from a challenging spot in a very low parkade - which is tough to exit at the best of times. Brian came and sussed out the situation and called for an additional driver (Dean). Both drivers were diligent and had to expend a bit of energy to get the car moved. Great experience. Thanks guys - you rocked it!",
  },
  {
    name: "Mari S.",
    service: "Special vehicle towing",
    rating: 5,
    quote:
      "I had a very tricky underground parkade tow that needed to be completed by a certain time, and operator Scotty was marvellous and a professional about the whole affair. He tried jumping the car, and made me feel very at ease with the process. … Cliffs offered the exact service I required, and within a decent time frame for a reasonable price. Thanks guys!",
  },
  {
    name: "Rachel",
    service: null,
    rating: 5,
    quote:
      "I was impressed with Cliff's Towing's professionalism. Over the phone with the dispatcher and with those who came in person. There was great communication about the process. They were helpful and informative. I will be calling them again if and when I need such services.",
  },
];
