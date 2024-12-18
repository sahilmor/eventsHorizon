import Sidebar from "@/components/Sidebar";
import FeaturedEvent from "@/components/FeaturedEvent";
import TrendingEvents from "@/components/TrendingEvents";
import ArtistsAndOrganizers from "@/components/ArtistsAndOrganizers";
import UpcomingConcerts from "@/components/UpcomingConcerts";

const Index = () => {
  return (
    <div className="min-h-screen flex bg-background">
      <Sidebar />
      <div className="flex-1 ml-16 p-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <TrendingEvents />
            <ArtistsAndOrganizers />
            <UpcomingConcerts />
          </div>
          <div className="md:col-span-1">
            <div className="sticky top-8">
              <FeaturedEvent />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;