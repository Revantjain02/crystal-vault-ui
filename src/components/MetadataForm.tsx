import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { User, FileText, Tag } from "lucide-react";

interface MetadataFormProps {
  metadata: {
    name: string;
    organization: string;
    title: string;
    description: string;
    tags: string;
  };
  onChange: (field: string, value: string) => void;
}

const MetadataForm = ({ metadata, onChange }: MetadataFormProps) => {
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="name" className="flex items-center gap-2">
            <User className="h-4 w-4 text-primary" />
            Name
          </Label>
          <Input
            id="name"
            value={metadata.name}
            onChange={(e) => onChange("name", e.target.value)}
            placeholder="Your name"
            className="bg-card border-border focus:border-primary"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="organization" className="flex items-center gap-2">
            <User className="h-4 w-4 text-primary" />
            Organization
          </Label>
          <Input
            id="organization"
            value={metadata.organization}
            onChange={(e) => onChange("organization", e.target.value)}
            placeholder="Organization name"
            className="bg-card border-border focus:border-primary"
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="title" className="flex items-center gap-2">
          <FileText className="h-4 w-4 text-primary" />
          Dataset Title
        </Label>
        <Input
          id="title"
          value={metadata.title}
          onChange={(e) => onChange("title", e.target.value)}
          placeholder="Give your dataset a title"
          className="bg-card border-border focus:border-primary"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="description" className="flex items-center gap-2">
          <FileText className="h-4 w-4 text-primary" />
          Description
        </Label>
        <Textarea
          id="description"
          value={metadata.description}
          onChange={(e) => onChange("description", e.target.value)}
          placeholder="Describe your dataset"
          className="bg-card border-border focus:border-primary min-h-[100px]"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="tags" className="flex items-center gap-2">
          <Tag className="h-4 w-4 text-primary" />
          Tags / Keywords
        </Label>
        <Input
          id="tags"
          value={metadata.tags}
          onChange={(e) => onChange("tags", e.target.value)}
          placeholder="e.g., research, quantum, materials"
          className="bg-card border-border focus:border-primary"
        />
      </div>
    </div>
  );
};

export default MetadataForm;
