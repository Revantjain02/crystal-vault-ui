import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FileText, Calendar, Database } from "lucide-react";

interface DataSummaryProps {
  file: File | null;
  crystal: string;
  metadata: {
    name: string;
    organization: string;
    title: string;
    description: string;
    tags: string;
  };
}

const DataSummary = ({ file, crystal, metadata }: DataSummaryProps) => {
  if (!file) return null;

  const uploadDate = new Date().toLocaleDateString();

  return (
    <Card className="p-6 bg-gradient-card border-primary/30 shadow-crystal">
      <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
        <Database className="h-5 w-5 text-primary" />
        Data Summary
      </h3>

      <div className="space-y-4">
        <div className="flex items-start justify-between">
          <div className="space-y-1">
            <p className="text-sm text-muted-foreground">File Name</p>
            <p className="font-medium text-foreground">{file.name}</p>
          </div>
          <Badge variant="secondary" className="bg-primary/20 text-primary border-primary/30">
            {file.type || "Unknown type"}
          </Badge>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-1">
            <p className="text-sm text-muted-foreground flex items-center gap-1">
              <FileText className="h-3 w-3" />
              File Size
            </p>
            <p className="font-medium text-foreground">
              {(file.size / 1024 / 1024).toFixed(2)} MB
            </p>
          </div>

          <div className="space-y-1">
            <p className="text-sm text-muted-foreground flex items-center gap-1">
              <Calendar className="h-3 w-3" />
              Upload Date
            </p>
            <p className="font-medium text-foreground">{uploadDate}</p>
          </div>
        </div>

        <div className="space-y-1">
          <p className="text-sm text-muted-foreground">Crystal Structure</p>
          <p className="font-medium text-foreground capitalize">{crystal || "Not selected"}</p>
        </div>

        {metadata.title && (
          <div className="space-y-1">
            <p className="text-sm text-muted-foreground">Dataset Title</p>
            <p className="font-medium text-foreground">{metadata.title}</p>
          </div>
        )}

        {metadata.tags && (
          <div className="space-y-2">
            <p className="text-sm text-muted-foreground">Tags</p>
            <div className="flex flex-wrap gap-2">
              {metadata.tags.split(",").map((tag, index) => (
                <Badge key={index} variant="outline" className="border-primary/50">
                  {tag.trim()}
                </Badge>
              ))}
            </div>
          </div>
        )}
      </div>
    </Card>
  );
};

export default DataSummary;
