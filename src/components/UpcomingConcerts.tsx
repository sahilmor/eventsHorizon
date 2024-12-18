import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const UpcomingConcerts = () => {
  const concerts = [
    {
      title: "Classical Night",
      artist: "NY Philharmonic",
      date: "July 1, 2024",
      venue: "Carnegie Hall",
      image: "https://images.unsplash.com/photo-1517147177326-b37599372b73?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      title: "Pop Extravaganza",
      artist: "Various Artists",
      date: "July 5, 2024",
      venue: "Radio City Music Hall",
      image: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      title: "Rock Festival",
      artist: "Multiple Bands",
      date: "July 10, 2024",
      venue: "Central Park",
      image: "https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    }
  ];

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Upcoming Concerts</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {concerts.map((concert, index) => (
          <Card key={index} className="card-hover">
            <CardContent className="p-4">
              <img
                src={concert.image}
                alt={concert.title}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="font-semibold mb-2">{concert.title}</h3>
              <p className="text-sm text-gray-400 mb-1">{concert.artist}</p>
              <p className="text-sm text-gray-400 mb-1">{concert.venue}</p>
              <p className="text-sm text-gray-400 mb-4">{concert.date}</p>
              <Button className="w-full bg-primary hover:bg-primary/90">
                Book Now
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default UpcomingConcerts;