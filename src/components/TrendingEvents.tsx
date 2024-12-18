import { Card, CardContent } from "@/components/ui/card";
import CitySelector from "./CitySelector";

const TrendingEvents = () => {
  const events = [
    {
      title: "Rock the City",
      venue: "Madison Square Garden",
      date: "June 20, 2024",
      image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      title: "Jazz Night",
      venue: "Blue Note",
      date: "June 22, 2024",
      image: "https://images.unsplash.com/photo-1511192336575-5a79af67a629?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      title: "EDM Festival",
      venue: "Barclays Center",
      date: "June 25, 2024",
      image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    }
  ];

  return (
    <div className="mb-12">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Trending this week in <CitySelector /></h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {events.map((event, index) => (
          <Card key={index} className="card-hover">
            <CardContent className="p-4">
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="font-semibold mb-2">{event.title}</h3>
              <p className="text-sm text-gray-400">{event.venue}</p>
              <p className="text-sm text-gray-400">{event.date}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default TrendingEvents;