import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const FeaturedEvent = () => {
  return (
    <Card className="h-full bg-card text-card-foreground">
      <CardContent className="p-6 flex flex-col h-full">
        <div className="relative h-2/3 mb-6">
          <img
            src="https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
            alt="Featured Event"
            className="w-full h-full object-cover rounded-lg"
          />
          <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black to-transparent">
            <h2 className="text-3xl font-bold mb-2">Summer Music Festival 2024</h2>
            <p className="text-gray-300">Central Park, NYC</p>
          </div>
        </div>
        <div className="flex-1">
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-2">Featured Artists</h3>
            <p className="text-gray-300">Taylor Swift, Ed Sheeran, The Weeknd</p>
          </div>
          <div className="flex justify-between items-center">
            <div>
              <p className="text-sm text-gray-400">Date</p>
              <p className="font-semibold">July 15-17, 2024</p>
            </div>
            <Button className="bg-primary hover:bg-primary/90">Get Tickets</Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default FeaturedEvent;