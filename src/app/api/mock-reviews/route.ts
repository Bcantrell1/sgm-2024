// app/api/mock-reviews/route.ts
import { NextResponse } from 'next/server';

const mockGooglePlacesResponse = {
  html_attributions: [],
  result: {
    reviews: [
      {
        author_name: "Alanna Machado",
        rating: 5,
        relative_time_description: "this month",
        text: "I can not express how pleased I am with the outcome of the turf that Sammy and his crew installed, he was informative and knew what I would need with my pups not to mention got it done in one day. All around great experience and came out amazing!",
        time: 1628097600
      },
      {
        author_name: "JoAnn Wages",
        rating: 5,
        relative_time_description: "3 weeks ago",
        text: "Sam and his crew are amazing! I really appreciate Sammy as he came in and helped me with the design. Sammy explained everything perfectly so I could visualize it. The crew was excellent and they did such a great job. When I saw the finished product I was speechless (that’s rare). I thought I knew what it would look like but our backyard is SOOOOOOOO beautiful and I find myself spending more time outside now. Thank you Sammy!! Can’t wait to work with them again.",
        time: 1633046400
      },
      {
        author_name: "Nicholas Peppe",
        rating: 5,
        relative_time_description: "1 month ago",
        text: "Went through SGM Landscaping for our backyard and front yard upgrade. Could not be happier with how everything turned out! Sammy and his team are professional and got us a fair quote same day. The kids and dogs are loving all the turf to play on. The paved walkway and patio look amazing! Everything was done quickly and the quality speaks for itself. I highly recommend to anyone looking to upgrade their landscaping!!",
        time: 1638316800
      },
      {
        author_name: "Michael D'Amico",
        rating: 5,
        relative_time_description: "1 month ago",
        text: "We have used Sammy's service several times over the past 5 years, with each project getting more complicated. Sammy has a great eye for landscaping and paving design that we both love! This most recent job was a large paving project that included paving in our front concrete porch that blends in perfectly with our driveway paving. We are certainly going to take advantage of Sammy and his crew's master skills over the next few months to finish out our final 'retirement home'!!",
        time: 1643673600
      },
      {
        author_name: "Samantha Searle",
        rating: 5,
        relative_time_description: "13 weeks ago",
        text: "Absolutely loved the work Sammy and his team did. Sammy took the time to carefully design our backyard specifically with our child’s safety in mind and created such a beautiful play area with such a clean design. We couldn’t be more satisfied with the look, function, and cost of the project. To top it all off, his team worked efficiently to get the project done in one day and were very respectful and professional. I’ll be using them and recommending them on all our projects moving forward.",
        time: 1649635200
      },
			{
        author_name: "Jennifer Baggs",
        rating: 5,
        relative_time_description: "18 weeks ago",
        text: "We are highly satisfied with the turf done by Sammy and the SGM team. Sammy was easy to work with, responsive to our questions, and work was done within a day. We can’t wait to enjoy our backyard this summer.",
        time: 1651635200
      },
			{
        author_name: "Kyle Williams",
        rating: 5,
        relative_time_description: "19 weeks ago",
        text: "We have been working on our backyard for years and finally decided to finish our side yard with turf. Sammy from SGM Landscaping arrived, gave us some great input and ideas on how to accomplish the task, and gave us a great quote. Sammy worked us into his schedule and when it was all said and done, we had turf and a putting green just weeks after we started talking about completing our yard. Sammy is polite, professional and honest and SGM's turf and installation speaks for itself, it's beautiful.",
        time: 1651635200
      },
			{
        author_name: "Jesse Guzmans",
        rating: 5,
        relative_time_description: "20 weeks ago",
        text: "SGM did an amazing job for us. Sammy helped us with finding our design and bringing it to life. Work was completed in less than a week. The back yard looks great and exceeded our expectations. We can’t recommend SGM enough.",
        time: 1651635200
      },
    ]
  },
  status: "OK"
};

export async function GET() {
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 500));
  
  return NextResponse.json(mockGooglePlacesResponse);
}