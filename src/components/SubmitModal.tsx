import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { useState } from "react";
import { CheckCircle2, Loader2 } from "lucide-react";

interface SubmitModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onConfirm: () => void;
}

const SubmitModal = ({ open, onOpenChange, onConfirm }: SubmitModalProps) => {
  const [agreed, setAgreed] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [uploadComplete, setUploadComplete] = useState(false);

  const handleConfirm = () => {
    setUploading(true);
    setUploadProgress(0);

    // Simulate upload progress
    const interval = setInterval(() => {
      setUploadProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setUploading(false);
          setUploadComplete(true);
          setTimeout(() => {
            onConfirm();
            handleClose();
          }, 1500);
          return 100;
        }
        return prev + 10;
      });
    }, 200);
  };

  const handleClose = () => {
    setAgreed(false);
    setUploading(false);
    setUploadProgress(0);
    setUploadComplete(false);
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-md bg-card border-border">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            Store Data in Crystal
          </DialogTitle>
          <DialogDescription className="text-muted-foreground">
            Please review and confirm your data storage settings
          </DialogDescription>
        </DialogHeader>

        {!uploading && !uploadComplete && (
          <>
            <div className="space-y-4 py-4">
              <div className="p-4 rounded-lg bg-muted/30 border border-border/30">
                <h4 className="font-medium text-foreground mb-2">Privacy Policy Summary</h4>
                <p className="text-sm text-muted-foreground">
                  Your data will be encoded using advanced crystalline structures and stored securely. 
                  We employ end-to-end encryption and comply with all relevant data protection regulations. 
                  You maintain full ownership and control of your data.
                </p>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-lg bg-primary/5 border border-primary/20">
                <Checkbox
                  id="consent"
                  checked={agreed}
                  onCheckedChange={(checked) => setAgreed(checked as boolean)}
                />
                <Label
                  htmlFor="consent"
                  className="text-sm cursor-pointer leading-relaxed"
                >
                  I have read and agree to the terms of service and privacy policy. 
                  I understand that my data will be stored using crystalline encoding methods.
                </Label>
              </div>
            </div>

            <DialogFooter className="gap-2">
              <Button variant="outline" onClick={handleClose}>
                Cancel
              </Button>
              <Button
                variant="crystal"
                onClick={handleConfirm}
                disabled={!agreed}
                className="min-w-[150px]"
              >
                Confirm & Store
              </Button>
            </DialogFooter>
          </>
        )}

        {uploading && (
          <div className="space-y-4 py-8">
            <div className="text-center">
              <Loader2 className="h-12 w-12 text-primary mx-auto mb-4 animate-spin" />
              <p className="text-lg font-medium text-foreground mb-2">
                Encoding data into crystal structure...
              </p>
              <p className="text-sm text-muted-foreground">
                {uploadProgress}% complete
              </p>
            </div>
            <Progress value={uploadProgress} className="w-full" />
          </div>
        )}

        {uploadComplete && (
          <div className="space-y-4 py-8 text-center">
            <CheckCircle2 className="h-16 w-16 text-primary mx-auto animate-pulse-glow" />
            <div>
              <p className="text-lg font-medium text-foreground mb-2">
                Data Successfully Stored!
              </p>
              <p className="text-sm text-muted-foreground">
                Your data has been encoded and stored in the crystal structure
              </p>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default SubmitModal;
