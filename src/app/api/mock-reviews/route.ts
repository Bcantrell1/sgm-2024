// app/api/mock-reviews/route.ts
import { NextResponse } from 'next/server';

const mockGooglePlacesResponse = {
  html_attributions: [],
  result: {
    reviews: [
      {
        author_name: "John Doe",
        rating: 5,
        relative_time_description: "a month ago",
        text: "Great service! Highly recommended.",
        time: 1628097600
      },
      {
        author_name: "Jane Smith",
        rating: 4,
        relative_time_description: "2 months ago",
        text: "Very good experience overall. Would use again.",
        time: 1633046400
      },
      {
        author_name: "Mike Johnson",
        rating: 5,
        relative_time_description: "3 months ago",
        text: "Exceptional quality and customer service. A+++",
        time: 1638316800
      },
      {
        author_name: "Sarah Williams",
        rating: 4,
        relative_time_description: "4 months ago",
        text: "Professional and efficient. Minor room for improvement.",
        time: 1643673600
      },
      {
        author_name: "Chris Brown",
        rating: 5,
        relative_time_description: "5 months ago",
        text: "Absolutely fantastic! Exceeded all my expectations.",
        time: 1649635200
      }
    ]
  },
  status: "OK"
};

export async function GET() {
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 500));
  
  return NextResponse.json(mockGooglePlacesResponse);
}