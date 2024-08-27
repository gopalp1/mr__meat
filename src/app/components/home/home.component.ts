import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  features = [
    {
      title: "We will sell only the meat that we would eat ourselves.",
      description: "At Licious, we’re big meat-lovers. And by big, we mean huge. So when it comes to the meat we put on your plate, we’re extremely picky. Every single product is handpicked by a team with years of experience."
    },
    {
      title: "If it’s not fresh, we won’t sell it",
      description: "For meat to stay fresh and retain its natural juices, it needs to be stored at a temperature between 0° and 4°C. We maintain this temperature from the time we procure the product to cleaning, cutting and storing it, until it leaves for delivery. And even when it’s out for delivery, we keep it chilled right up to your doorstep. Did we mention that we’re obsessed?"
    },
    {
      title: "We will charge only for what you buy",
      description: "Doesn’t everyone do this? Not really. Most other places first weigh the meat, then cut up the pieces, and throw out the parts which aren’t fit to eat, such as offal, gizzard, wingtips, etc. But you still pay based on the original weight even though what you finally get is 10% to 30% less."
    }
  ];
  cities = [
    'Bengaluru', 'NCR', 'Hyderabad', 'Chandigarh', 'Panchkula', 'Mohali',
    'Mumbai', 'Pune', 'Chennai', 'Coimbatore', 'Jaipur', 'Cochin',
    'Vijayawada', 'Visakhapatnam', 'Kolkata', 'Lucknow', 'Kanpur', 'Nagpur'
  ];
}
