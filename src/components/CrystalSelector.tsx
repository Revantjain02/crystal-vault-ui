import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Gem } from "lucide-react";

interface CrystalSelectorProps {
  value: string;
  onChange: (value: string) => void;
}

const crystalTypes = [
  { value: "diamond", label: "Diamond", description: "Maximum durability and clarity" },
  { value: "graphene", label: "Graphene", description: "Ultra-high conductivity" },
  { value: "quartz", label: "Quartz", description: "Stable frequency resonance" },
  { value: "silicon", label: "Silicon", description: "Optimal for digital encoding" },
  { value: "sapphire", label: "Sapphire", description: "High thermal resistance" },
  { value: "custom", label: "Custom", description: "Define your own structure" },
];

const CrystalSelector = ({ value, onChange }: CrystalSelectorProps) => {
  return (
    <div className="space-y-2">
      <label className="text-sm font-medium text-foreground flex items-center gap-2">
        <Gem className="h-4 w-4 text-primary" />
        Reference Crystal Structure
      </label>
      
      <Select value={value} onValueChange={onChange}>
        <SelectTrigger className="w-full bg-card border-border hover:border-primary/50 transition-colors">
          <SelectValue placeholder="Select a crystal type" />
        </SelectTrigger>
        <SelectContent className="bg-popover border-border">
          {crystalTypes.map((crystal) => (
            <SelectItem 
              key={crystal.value} 
              value={crystal.value}
              className="hover:bg-primary/10 cursor-pointer"
            >
              <div className="flex flex-col">
                <span className="font-medium">{crystal.label}</span>
                <span className="text-xs text-muted-foreground">{crystal.description}</span>
              </div>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default CrystalSelector;
