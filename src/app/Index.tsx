import Sidebar from "@/components/Sidebar";
import FeaturedEvent from "@/components/FeaturedEvent";
import TrendingEvents from "@/components/TrendingEvents";
import ArtistsAndOrganizers from "@/components/ArtistsAndOrganizers";
import UpcomingConcerts from "@/components/UpcomingConcerts";
import MainWrapper from "@/components/mainWrapper/mainWrapper";

const Index = () => {
  return (
    <>
      {/* <Sidebar /> */}
      <MainWrapper 
        name = "Home"
        parentWrapper={{
          className : "flex flex-col sm:gap-4 sm:py-4 sm:pl-14 h-full"
        }} mainWrapper={{
          className : "grid flex-1 items-start gap-4 p-2 sm:px-6 sm:py-0 md:gap-8 h-full w-full"
        }}
      >
      <div className="flex-1 ml-16 p-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <TrendingEvents />
            <ArtistsAndOrganizers />
            <UpcomingConcerts />
          </div>
          <div className="md:col-span-1 h-[calc(100vh-4rem)] sticky top-8">
            <FeaturedEvent />
          </div>
        </div>
      </div>
      </MainWrapper>
    </>
  );
};

export default Index;