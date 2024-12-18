import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const cities = ["NYC", "LA", "Chicago", "Miami", "Las Vegas", "Austin"];

const CitySelector = () => {
  return (
    <Select defaultValue="NYC">
      <SelectTrigger className="w-[180px] bg-card text-foreground">
        <SelectValue placeholder="Select city" />
      </SelectTrigger>
      <SelectContent>
        {cities.map((city) => (
          <SelectItem key={city} value={city}>
            {city}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default CitySelector;