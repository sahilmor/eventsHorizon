import { Card, CardContent } from "@/components/ui/card";

const ArtistsAndOrganizers = () => {
  const artists = [
    {
      name: "John Doe",
      role: "Artist",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      name: "Jane Smith",
      role: "Artist",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      name: "Mike Johnson",
      role: "Artist",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    }
  ];

  const organizer = {
    name: "EventPro Productions",
    description: "Leading event organization company with over 10 years of experience",
    image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
  };

  return (
    <div className="mb-12">
      <h2 className="text-2xl font-bold mb-6">Artists & Organizers</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex flex-col gap-4">
          {artists.map((artist, index) => (
            <Card key={index} className="card-hover">
              <CardContent className="p-4">
                <img
                  src={artist.image}
                  alt={artist.name}
                  className="w-full h-32 object-cover rounded-full mb-4"
                />
                <h3 className="font-semibold text-center">{artist.name}</h3>
                <p className="text-sm text-gray-400 text-center">{artist.role}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <Card className="card-hover">
          <CardContent className="p-6">
            <img
              src={organizer.image}
              alt={organizer.name}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">{organizer.name}</h3>
            <p className="text-gray-400">{organizer.description}</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ArtistsAndOrganizers;