import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Shield, Lock, Share2 } from "lucide-react";

interface PrivacyOptionsProps {
  options: {
    isPublic: boolean;
    encrypt: boolean;
    allowSharing: boolean;
  };
  onChange: (field: string, value: boolean) => void;
}

const PrivacyOptions = ({ options, onChange }: PrivacyOptionsProps) => {
  return (
    <div className="space-y-4 p-6 rounded-lg bg-gradient-card border border-border/50">
      <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">
        <Shield className="h-5 w-5 text-primary" />
        Privacy & Security Settings
      </h3>

      <div className="space-y-4">
        <div className="flex items-center justify-between p-4 rounded-lg bg-card/50 hover:bg-card transition-colors">
          <div className="flex items-start gap-3">
            <Shield className="h-5 w-5 text-primary mt-0.5" />
            <div>
              <Label htmlFor="public" className="cursor-pointer font-medium">
                Make Data Public
              </Label>
              <p className="text-sm text-muted-foreground">
                Allow anyone to view this dataset
              </p>
            </div>
          </div>
          <Switch
            id="public"
            checked={options.isPublic}
            onCheckedChange={(checked) => onChange("isPublic", checked)}
          />
        </div>

        <div className="flex items-center justify-between p-4 rounded-lg bg-card/50 hover:bg-card transition-colors">
          <div className="flex items-start gap-3">
            <Lock className="h-5 w-5 text-primary mt-0.5" />
            <div>
              <Label htmlFor="encrypt" className="cursor-pointer font-medium">
                Encrypt Before Upload
              </Label>
              <p className="text-sm text-muted-foreground">
                End-to-end encryption for maximum security
              </p>
            </div>
          </div>
          <Switch
            id="encrypt"
            checked={options.encrypt}
            onCheckedChange={(checked) => onChange("encrypt", checked)}
          />
        </div>

        <div className="flex items-center justify-between p-4 rounded-lg bg-card/50 hover:bg-card transition-colors">
          <div className="flex items-start gap-3">
            <Share2 className="h-5 w-5 text-primary mt-0.5" />
            <div>
              <Label htmlFor="sharing" className="cursor-pointer font-medium">
                Allow Research Partnerships
              </Label>
              <p className="text-sm text-muted-foreground">
                Enable collaboration with verified research partners
              </p>
            </div>
          </div>
          <Switch
            id="sharing"
            checked={options.allowSharing}
            onCheckedChange={(checked) => onChange("allowSharing", checked)}
          />
        </div>
      </div>

      <div className="mt-4 p-3 rounded-lg bg-muted/30 border border-border/30">
        <p className="text-xs text-muted-foreground">
          🔒 All data is stored using advanced crystalline encoding methods. Your privacy and security are our top priority.
        </p>
      </div>
    </div>
  );
};

export default PrivacyOptions;
