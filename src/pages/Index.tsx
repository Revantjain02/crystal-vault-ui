import { useState } from "react";
import Header from "@/components/Header";
import FileUpload from "@/components/FileUpload";
import CrystalSelector from "@/components/CrystalSelector";
import MetadataForm from "@/components/MetadataForm";
import PrivacyOptions from "@/components/PrivacyOptions";
import DataSummary from "@/components/DataSummary";
import SubmitModal from "@/components/SubmitModal";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { Sparkles } from "lucide-react";
import crystalBg from "@/assets/crystal-bg.jpg";

const Index = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [crystalType, setCrystalType] = useState("");
  const [showModal, setShowModal] = useState(false);
  
  const [metadata, setMetadata] = useState({
    name: "",
    organization: "",
    title: "",
    description: "",
    tags: "",
  });

  const [privacyOptions, setPrivacyOptions] = useState({
    isPublic: false,
    encrypt: true,
    allowSharing: false,
  });

  const handleMetadataChange = (field: string, value: string) => {
    setMetadata((prev) => ({ ...prev, [field]: value }));
  };

  const handlePrivacyChange = (field: string, value: boolean) => {
    setPrivacyOptions((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = () => {
    if (!selectedFile) {
      toast.error("Please upload a file");
      return;
    }
    if (!crystalType) {
      toast.error("Please select a crystal structure");
      return;
    }
    if (!metadata.name || !metadata.title) {
      toast.error("Please fill in all required fields");
      return;
    }

    setShowModal(true);
  };

  const handleConfirmSubmit = () => {
    toast.success("Data successfully stored in crystal!", {
      description: "Your data has been encoded and stored securely",
    });
    
    // Reset form
    setSelectedFile(null);
    setCrystalType("");
    setMetadata({
      name: "",
      organization: "",
      title: "",
      description: "",
      tags: "",
    });
    setPrivacyOptions({
      isPublic: false,
      encrypt: true,
      allowSharing: false,
    });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Background Image */}
      <div 
        className="fixed inset-0 z-0"
        style={{
          backgroundImage: `url(${crystalBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-background/90 backdrop-blur-sm" />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <Header />

        {/* Main Section */}
        <main className="container mx-auto px-4 pt-24 pb-16">
          {/* Hero Section */}
          <div className="text-center mb-12 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-card border border-primary/30 mb-6">
              <Sparkles className="h-4 w-4 text-primary animate-pulse-glow" />
              <span className="text-sm text-muted-foreground">
                Advanced Crystalline Data Storage
              </span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
              Store Your Data in Crystal
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Upload your research data and encode it using advanced crystalline structures 
              for secure, long-term storage
            </p>
          </div>

          {/* Upload Form */}
          <div className="max-w-5xl mx-auto space-y-8">
            {/* File Upload */}
            <div className="p-6 rounded-xl bg-gradient-card border border-border/50 shadow-crystal backdrop-blur-glass">
              <h3 className="text-xl font-semibold text-foreground mb-4">
                1. Upload Your Data
              </h3>
              <FileUpload 
                onFileSelect={setSelectedFile}
                selectedFile={selectedFile}
              />
            </div>

            {/* Crystal Selection */}
            <div className="p-6 rounded-xl bg-gradient-card border border-border/50 shadow-crystal backdrop-blur-glass">
              <h3 className="text-xl font-semibold text-foreground mb-4">
                2. Select Crystal Structure
              </h3>
              <CrystalSelector value={crystalType} onChange={setCrystalType} />
            </div>

            {/* Metadata Form */}
            <div className="p-6 rounded-xl bg-gradient-card border border-border/50 shadow-crystal backdrop-blur-glass">
              <h3 className="text-xl font-semibold text-foreground mb-4">
                3. Provide Dataset Information
              </h3>
              <MetadataForm metadata={metadata} onChange={handleMetadataChange} />
            </div>

            {/* Privacy Options */}
            <PrivacyOptions options={privacyOptions} onChange={handlePrivacyChange} />

            {/* Data Summary */}
            {selectedFile && (
              <DataSummary
                file={selectedFile}
                crystal={crystalType}
                metadata={metadata}
              />
            )}

            {/* Submit Button */}
            <div className="flex justify-center pt-4">
              <Button
                variant="crystal"
                size="lg"
                onClick={handleSubmit}
                className="text-lg px-12 py-6 h-auto animate-float"
              >
                <Sparkles className="mr-2 h-5 w-5" />
                Store Data in Crystal
              </Button>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="border-t border-border/50 bg-card/50 backdrop-blur-glass">
          <div className="container mx-auto px-4 py-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="text-center md:text-left">
                <p className="text-sm text-muted-foreground">
                  © 2025 CrystalStore Labs. All rights reserved.
                </p>
              </div>
              
              <div className="flex gap-6">
                <a href="#privacy" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Privacy Policy
                </a>
                <a href="#terms" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Terms of Service
                </a>
                <a href="#contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>

      {/* Submit Modal */}
      <SubmitModal
        open={showModal}
        onOpenChange={setShowModal}
        onConfirm={handleConfirmSubmit}
      />
    </div>
  );
};

export default Index;
