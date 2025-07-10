
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { 
  Download, 
  Settings, 
  CheckCircle, 
  Code, 
  Play, 
  Trash2,
  Cloud,
  Server,
  BookOpen,
  User,
  GraduationCap,
  Hash,
  Sun,
  Moon,
  Eye,
  Shield,
  Key,
  Database,
  Menu,
  X
} from "lucide-react";

const Index = () => {
  const [activeStep, setActiveStep] = useState("definition");
  const [activeTask, setActiveTask] = useState("task1");
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  const task1Steps = [
    { id: "definition", title: "What is Terraform?", icon: BookOpen },
    { id: "download", title: "Download & Install", icon: Download },
    { id: "setup", title: "Environment Setup", icon: Settings },
    { id: "verify", title: "Verify Installation", icon: CheckCircle },
    { id: "configure", title: "AWS Configuration", icon: Cloud },
    { id: "code", title: "Terraform Code", icon: Code },
    { id: "commands", title: "Terraform Commands", icon: Play },
    { id: "cleanup", title: "Cleanup", icon: Trash2 }
  ];

  const task2Steps = [
    { id: "task2-overview", title: "Task 2 Overview", icon: Shield },
    { id: "task2-code", title: "Ubuntu EC2 Code", icon: Code },
    { id: "task2-commands", title: "Execute Commands", icon: Play },
    { id: "task2-results", title: "Results & Verification", icon: CheckCircle },
    { id: "task2-cleanup", title: "Cleanup Resources", icon: Trash2 }
  ];

  const currentSteps = activeTask === "task1" ? task1Steps : task2Steps;

  const StepCard = ({ children, title, icon: Icon }) => (
    <Card className={`mb-4 md:mb-6 border-l-4 border-l-blue-500 shadow-lg ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white'}`}>
      <CardHeader className="pb-2 md:pb-3">
        <CardTitle className={`flex items-center gap-2 text-lg md:text-xl ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
          <Icon className="h-5 w-5 md:h-6 md:w-6 text-blue-600 flex-shrink-0" />
          <span className="break-words">{title}</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="text-sm md:text-base">{children}</CardContent>
    </Card>
  );

  const CodeBlock = ({ children, title }: { children: React.ReactNode; title?: string }) => (
    <div className="bg-gray-900 text-green-400 p-3 md:p-4 rounded-lg font-mono text-xs md:text-sm overflow-x-auto">
      {title && <div className="text-gray-400 mb-2 text-xs md:text-sm"># {title}</div>}
      <pre className="whitespace-pre-wrap break-all md:break-normal">{children}</pre>
    </div>
  );

  const ImageCard = ({ src, alt, title }) => (
    <div className={`rounded-lg shadow-md overflow-hidden border ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`}>
      <div className={`px-3 md:px-4 py-2 border-b flex items-center justify-between ${isDarkMode ? 'bg-gray-700 border-gray-600' : 'bg-gray-50 border-gray-200'}`}>
        <h4 className={`font-semibold text-sm md:text-base truncate pr-2 ${isDarkMode ? 'text-gray-200' : 'text-gray-800'}`}>{title}</h4>
        <div className="flex gap-1 md:gap-2 flex-shrink-0">
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline" size="sm" className="h-7 md:h-8 px-2 md:px-3 text-xs md:text-sm">
                <Eye className="h-3 w-3 md:h-4 md:w-4 mr-1" />
                <span className="hidden sm:inline">Preview</span>
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-[95vw] md:max-w-6xl max-h-[90vh] overflow-auto">
              <div className="p-2 md:p-4">
                <h3 className="text-base md:text-lg font-semibold mb-2 md:mb-4">{title}</h3>
                <img src={src} alt={alt} className="w-full rounded border" />
              </div>
            </DialogContent>
          </Dialog>
          <Button 
            variant="outline" 
            size="sm" 
            className="h-7 md:h-8 px-2 md:px-3 text-xs md:text-sm"
            onClick={() => {
              const link = document.createElement('a');
              link.href = src;
              link.download = `${title.replace(/\s+/g, '_')}.png`;
              link.click();
            }}
          >
            <Download className="h-3 w-3 md:h-4 md:w-4 mr-1" />
            <span className="hidden sm:inline">Download</span>
          </Button>
        </div>
      </div>
      <div className="p-3 md:p-4">
        <img src={src} alt={alt} className="w-full rounded border cursor-pointer hover:opacity-90 transition-opacity" />
      </div>
    </div>
  );

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDarkMode ? 'bg-gray-900' : 'bg-gradient-to-br from-blue-50 to-indigo-100'}`}>
      {/* Header */}
      <header className={`shadow-lg border-b-4 border-blue-500 ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white'}`}>
        <div className="container mx-auto px-4 py-4 md:py-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div className="flex-1">
              <h1 className={`text-xl md:text-3xl font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Terraform AWS EC2 Tutorial - Complete Tasks
              </h1>
              <div className={`flex flex-wrap gap-2 md:gap-4 text-xs md:text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                <div className="flex items-center gap-1">
                  <User className="h-3 w-3 md:h-4 md:w-4" />
                  <span>By: <strong>Shyam Gupta</strong></span>
                </div>
                <div className="flex items-center gap-1">
                  <Hash className="h-3 w-3 md:h-4 md:w-4" />
                  <span>Registration: <strong>12207063</strong></span>
                </div>
                <div className="flex items-center gap-1">
                  <GraduationCap className="h-3 w-3 md:h-4 md:w-4" />
                  <span>Section: <strong>007</strong></span>
                </div>
              </div>
            </div>
            <Button
              onClick={toggleTheme}
              variant="outline"
              size="sm"
              className="mt-3 md:mt-0 self-start md:self-auto"
            >
              {isDarkMode ? <Sun className="h-4 w-4 mr-2" /> : <Moon className="h-4 w-4 mr-2" />}
              <span className="text-xs md:text-sm">{isDarkMode ? 'Light Mode' : 'Dark Mode'}</span>
            </Button>
          </div>
        </div>
      </header>

      {/* Task Selection */}
      <div className={`border-b sticky top-0 z-50 shadow-sm ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`}>
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row gap-2 md:gap-4 py-3 md:py-4">
            <Button
              variant={activeTask === "task1" ? "default" : "outline"}
              onClick={() => {
                setActiveTask("task1");
                setActiveStep("definition");
                setIsMobileMenuOpen(false);
              }}
              className="flex items-center gap-2 text-sm md:text-base"
            >
              <Server className="h-4 w-4" />
              <span>Task 1: Basic EC2 Instance</span>
            </Button>
            <Button
              variant={activeTask === "task2" ? "default" : "outline"}
              onClick={() => {
                setActiveTask("task2");
                setActiveStep("task2-overview");
                setIsMobileMenuOpen(false);
              }}
              className="flex items-center gap-2 text-sm md:text-base"
            >
              <Shield className="h-4 w-4" />
              <span>Task 2: Secure Ubuntu EC2</span>
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Toggle */}
      <div className={`md:hidden border-b sticky top-16 z-40 ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`}>
        <div className="container mx-auto px-4">
          <Button
            variant="ghost"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="w-full justify-between py-3 text-sm"
          >
            <span>Navigation Steps</span>
            {isMobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </Button>
        </div>
      </div>

      {/* Navigation - Mobile Dropdown */}
      {isMobileMenuOpen && (
        <nav className={`md:hidden border-b sticky top-28 z-40 shadow-sm ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`}>
          <div className="container mx-auto px-4 py-3">
            <div className="grid grid-cols-1 gap-2">
              {currentSteps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <Button
                    key={step.id}
                    variant={activeStep === step.id ? "default" : "outline"}
                    size="sm"
                    onClick={() => {
                      setActiveStep(step.id);
                      setIsMobileMenuOpen(false);
                    }}
                    className="flex items-center gap-2 justify-start text-sm"
                  >
                    <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full flex-shrink-0">
                      {index + 1}
                    </span>
                    <Icon className="h-4 w-4 flex-shrink-0" />
                    <span className="truncate">{step.title}</span>
                  </Button>
                );
              })}
            </div>
          </div>
        </nav>
      )}

      {/* Navigation - Desktop */}
      <nav className={`hidden md:block border-b sticky top-16 z-40 shadow-sm ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`}>
        <div className="container mx-auto px-4">
          <div className="flex overflow-x-auto py-4 gap-2">
            {currentSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <Button
                  key={step.id}
                  variant={activeStep === step.id ? "default" : "outline"}
                  size="sm"
                  onClick={() => setActiveStep(step.id)}
                  className="flex items-center gap-2 whitespace-nowrap"
                >
                  <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                    {index + 1}
                  </span>
                  <Icon className="h-4 w-4" />
                  {step.title}
                </Button>
              );
            })}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-4 md:py-8">
        <Tabs value={activeStep} onValueChange={setActiveStep}>
          {/* Task 1 Content */}
          {activeTask === "task1" && (
            <>
              {/* Definition */}
              <TabsContent value="definition">
                <StepCard title="What is Terraform?" icon={BookOpen}>
                  <div className="space-y-4">
                    <p className={`text-base md:text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      Terraform is an <strong>Infrastructure as Code (IaC)</strong> tool that allows you to build, change, and version infrastructure safely and efficiently.
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                      <div className={`p-4 rounded-lg ${isDarkMode ? 'bg-blue-900/20 text-blue-200' : 'bg-blue-50 text-blue-900'}`}>
                        <h3 className="font-semibold mb-2 text-sm md:text-base">Key Benefits:</h3>
                        <ul className="space-y-1 text-xs md:text-sm">
                          <li>• Automate infrastructure provisioning</li>
                          <li>• Version control your infrastructure</li>
                          <li>• Reduce human errors</li>
                          <li>• Consistent deployments</li>
                          <li>• Cost-effective resource management</li>
                        </ul>
                      </div>
                      
                      <div className={`p-4 rounded-lg ${isDarkMode ? 'bg-green-900/20 text-green-200' : 'bg-green-50 text-green-900'}`}>
                        <h3 className="font-semibold mb-2 text-sm md:text-base">What You'll Learn:</h3>
                        <ul className="space-y-1 text-xs md:text-sm">
                          <li>• Install Terraform on Windows</li>
                          <li>• Configure AWS credentials</li>
                          <li>• Write your first Terraform configuration</li>
                          <li>• Launch an EC2 instance</li>
                          <li>• Manage infrastructure lifecycle</li>
                        </ul>
                      </div>
                    </div>

                    <div className={`border-l-4 border-yellow-500 p-4 ${isDarkMode ? 'bg-yellow-900/20 text-yellow-200' : 'bg-yellow-50 text-yellow-900'}`}>
                      <h3 className="font-semibold mb-2 text-sm md:text-base">Prerequisites:</h3>
                      <ul className="text-xs md:text-sm">
                        <li>• Windows computer with administrator access</li>
                        <li>• AWS account (free tier is sufficient)</li>
                        <li>• Basic understanding of cloud concepts</li>
                        <li>• Command line familiarity (we'll guide you!)</li>
                      </ul>
                    </div>
                  </div>
                </StepCard>
              </TabsContent>

              {/* Download */}
              <TabsContent value="download">
                <StepCard title="Step 1: Download Terraform" icon={Download}>
                  <div className="space-y-4">
                    <div className={`p-4 rounded-lg ${isDarkMode ? 'bg-blue-900/20 text-blue-200' : 'bg-blue-50 text-blue-900'}`}>
                      <h3 className="font-semibold mb-2 text-sm md:text-base">Download Instructions:</h3>
                      <ol className="space-y-2 text-xs md:text-sm">
                        <li><strong>1.</strong> Go to <a href="https://developer.hashicorp.com/terraform/downloads" className="text-blue-600 underline break-all" target="_blank" rel="noopener noreferrer">https://developer.hashicorp.com/terraform/downloads</a></li>
                        <li><strong>2.</strong> Download the <strong>Windows AMD64</strong> zip file</li>
                        <li><strong>3.</strong> Extract the zip file to a folder (e.g., <code className="bg-gray-200 px-2 py-1 rounded text-xs">C:\terraform</code>)</li>
                      </ol>
                    </div>

                    <ImageCard 
                      src="/images/terraform-download.png"
                      alt="Terraform Download Page"
                      title="Terraform Download from Official Website"
                    />

                    <div className={`border-l-4 border-yellow-500 p-4 ${isDarkMode ? 'bg-yellow-900/20 text-yellow-200' : 'bg-yellow-50 text-yellow-900'}`}>
                      <h3 className="font-semibold mb-2 text-sm md:text-base">💡 Pro Tip:</h3>
                      <p className="text-xs md:text-sm">
                        Create a dedicated folder like <code className="bg-gray-200 px-2 py-1 rounded text-xs">C:\terraform</code> to keep your installation organized. 
                        This makes it easier to manage and reference later.
                      </p>
                    </div>
                  </div>
                </StepCard>
              </TabsContent>

              {/* Setup */}
              <TabsContent value="setup">
                <StepCard title="Step 2: Add to PATH Environment Variable" icon={Settings}>
                  <div className="space-y-4">
                    <div className={`p-4 rounded-lg ${isDarkMode ? 'bg-green-900/20 text-green-200' : 'bg-green-50 text-green-900'}`}>
                      <h3 className="font-semibold mb-2 text-sm md:text-base">Step-by-Step Instructions:</h3>
                      <ol className="space-y-2 text-xs md:text-sm">
                        <li><strong>1.</strong> Press <kbd className="bg-gray-200 px-2 py-1 rounded text-xs">Windows + R</kbd> to open Run dialog</li>
                        <li><strong>2.</strong> Type <code className="bg-gray-200 px-2 py-1 rounded text-xs">sysdm.cpl</code> and press Enter</li>
                        <li><strong>3.</strong> Click <strong>"Environment Variables"</strong> button</li>
                        <li><strong>4.</strong> Under <strong>"System Variables"</strong>, find and select <strong>"Path"</strong></li>
                        <li><strong>5.</strong> Click <strong>"Edit"</strong></li>
                        <li><strong>6.</strong> Click <strong>"New"</strong></li>
                        <li><strong>7.</strong> Add the path where you extracted Terraform (e.g., <code className="bg-gray-200 px-2 py-1 rounded text-xs">C:\terraform</code>)</li>
                        <li><strong>8.</strong> Click <strong>"OK"</strong> on all dialogs</li>
                      </ol>
                    </div>

                    <ImageCard 
                      src="/images/environment-variables.png"
                      alt="Environment Variables Configuration"
                      title="Setting up PATH Environment Variable"
                    />

                    <ImageCard 
                      src="/images/system-properties.png"
                      alt="System Properties Dialog"
                      title="System Properties - Environment Variables Access"
                    />

                    <div className={`p-4 rounded-lg ${isDarkMode ? 'bg-blue-900/20 text-blue-200' : 'bg-blue-50 text-blue-900'}`}>
                      <h3 className="font-semibold mb-2 text-sm md:text-base">Why is this important?</h3>
                      <p className={`text-xs md:text-sm ${isDarkMode ? 'text-gray-300' : 'text-blue-800'}`}>
                        Adding Terraform to your PATH allows you to run <code className="bg-gray-200 px-2 py-1 rounded text-xs">terraform</code> commands 
                        from any directory in your command prompt, making it much more convenient to use.
                      </p>
                    </div>

                    <div className={`p-4 rounded-lg ${isDarkMode ? 'bg-red-900/20 text-red-200' : 'bg-red-50 text-red-900'}`}>
                      <h3 className="font-semibold mb-2 text-sm md:text-base">⚠️ Important:</h3>
                      <p className={`text-xs md:text-sm ${isDarkMode ? 'text-gray-300' : 'text-red-800'}`}>
                        You may need to restart your command prompt or computer for the PATH changes to take effect.
                      </p>
                    </div>
                  </div>
                </StepCard>
              </TabsContent>

              {/* Verify */}
              <TabsContent value="verify">
                <StepCard title="Step 3: Verify Installation" icon={CheckCircle}>
                  <div className="space-y-4">
                    <div className={`p-4 rounded-lg ${isDarkMode ? 'bg-green-900/20 text-green-200' : 'bg-green-50 text-green-900'}`}>
                      <h3 className="font-semibold mb-2 text-sm md:text-base">Verification Steps:</h3>
                      <ol className="space-y-2 text-xs md:text-sm">
                        <li><strong>1.</strong> Open Command Prompt or PowerShell</li>
                        <li><strong>2.</strong> Run the following command:</li>
                      </ol>
                    </div>

                    <CodeBlock title="Verify Terraform Installation">
terraform --version
                    </CodeBlock>

                    <ImageCard 
                      src="/images/terraform-version.png"
                      alt="Terraform Version Command Output"
                      title="Terraform Version Verification in Command Prompt"
                    />

                    <div className={`border-l-4 border-blue-500 p-4 ${isDarkMode ? 'bg-blue-900/20 text-blue-200' : 'bg-blue-50 text-blue-900'}`}>
                      <h3 className="font-semibold mb-2 text-sm md:text-base">Expected Output:</h3>
                      <p className={`text-xs md:text-sm ${isDarkMode ? 'text-gray-300' : 'text-blue-800'}`}>
                        You should see something like:
                      </p>
                      <div className="bg-gray-900 text-green-400 p-3 rounded font-mono text-xs md:text-sm">
                        Terraform v1.6.4<br/>
                        on windows_amd64
                      </div>
                    </div>

                    <div className={`border-l-4 border-yellow-500 p-4 ${isDarkMode ? 'bg-yellow-900/20 text-yellow-200' : 'bg-yellow-50 text-yellow-900'}`}>
                      <h3 className="font-semibold mb-2 text-sm md:text-base">Troubleshooting:</h3>
                      <ul className="text-xs md:text-sm space-y-1">
                        <li>• If you get "command not found", check your PATH variable</li>
                        <li>• Restart your command prompt after setting PATH</li>
                        <li>• Make sure you extracted terraform.exe to the correct folder</li>
                      </ul>
                    </div>
                  </div>
                </StepCard>
              </TabsContent>

              {/* Configure */}
              <TabsContent value="configure">
                <StepCard title="Step 4: AWS Configuration" icon={Cloud}>
                  <div className="space-y-4">
                    <div className={`p-4 rounded-lg ${isDarkMode ? 'bg-blue-900/20 text-blue-200' : 'bg-blue-50 text-blue-900'}`}>
                      <h3 className="font-semibold mb-2 text-sm md:text-base">AWS Provider Configuration:</h3>
                      <p className="text-xs md:text-sm mb-2">
                        Create a new file called <code className="bg-gray-200 px-2 py-1 rounded text-xs">main.tf</code> with the following content:
                      </p>
                    </div>

                    <CodeBlock title="main.tf - AWS Provider Configuration">
{`provider "aws" {
  region     = "us-east-1"
  access_key = "YOUR_ACCESS_KEY_HERE"
  secret_key = "YOUR_SECRET_KEY_HERE"
}

resource "aws_instance" "first-server" {
  ami           = "ami-05ffe3c48a9991133"
  instance_type = "t2.micro"
  
  tags = {
    Name = "amazon_linux"
  }
}`}
                    </CodeBlock>

                    <ImageCard 
                      src="/images/terraform-config.png"
                      alt="Terraform Configuration File"
                      title="main.tf Configuration in VS Code"
                    />

                    <ImageCard 
                      src="/images/terraform-file-structure.png"
                      alt="Terraform File Structure"
                      title="Terraform Project File Structure"
                    />

                    <div className={`border-l-4 border-red-500 p-4 ${isDarkMode ? 'bg-red-900/20 text-red-200' : 'bg-red-50 text-red-900'}`}>
                      <h3 className="font-semibold mb-2 text-sm md:text-base">🔐 Security Warning:</h3>
                      <p className="text-xs md:text-sm">
                        <strong>Never commit your actual AWS credentials to version control!</strong> 
                        Replace "YOUR_ACCESS_KEY_HERE" and "YOUR_SECRET_KEY_HERE" with your actual AWS credentials.
                      </p>
                    </div>

                    <div className={`p-4 rounded-lg ${isDarkMode ? 'bg-green-900/20 text-green-200' : 'bg-green-50 text-green-900'}`}>
                      <h3 className="font-semibold mb-2 text-sm md:text-base">Getting AWS Credentials:</h3>
                      <ol className="space-y-1 text-xs md:text-sm">
                        <li><strong>1.</strong> Log in to AWS Console</li>
                        <li><strong>2.</strong> Go to IAM → Users → Your User</li>
                        <li><strong>3.</strong> Click "Security credentials" tab</li>
                        <li><strong>4.</strong> Click "Create access key"</li>
                        <li><strong>5.</strong> Download and save the credentials securely</li>
                      </ol>
                    </div>

                    <div className={`p-4 rounded-lg ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-gray-50 border-gray-200'} border`}>
                      <h3 className={`font-semibold mb-2 text-sm md:text-base ${isDarkMode ? 'text-gray-200' : 'text-gray-900'}`}>What this configuration does:</h3>
                      <ul className="text-xs md:text-sm space-y-1">
                        <li>• <strong>Provider:</strong> Configures AWS as the cloud provider</li>
                        <li>• <strong>Region:</strong> Specifies us-east-1 (N. Virginia)</li>
                        <li>• <strong>AMI:</strong> Amazon Linux 2 image ID</li>
                        <li>• <strong>Instance Type:</strong> t2.micro (free tier eligible)</li>
                        <li>• <strong>Tags:</strong> Assigns a name to your instance</li>
                      </ul>
                    </div>
                  </div>
                </StepCard>
              </TabsContent>

              {/* Code */}
              <TabsContent value="code">
                <StepCard title="Understanding the Terraform Code" icon={Code}>
                  <div className="space-y-4">
                    <div className={`p-4 rounded-lg ${isDarkMode ? 'bg-blue-900/20 text-blue-200' : 'bg-blue-50 text-blue-900'}`}>
                      <h3 className="font-semibold mb-2 text-sm md:text-base">Code Breakdown:</h3>
                      <div className="space-y-3">
                        <div className={`p-3 rounded border ${isDarkMode ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-200'}`}>
                          <h4 className={`font-medium mb-1 text-sm md:text-base ${isDarkMode ? 'text-blue-400' : 'text-blue-900'}`}>Provider Block:</h4>
                          <CodeBlock>
{`provider "aws" {
  region     = "us-east-1"
  access_key = "YOUR_ACCESS_KEY"
  secret_key = "YOUR_SECRET_KEY"
}`}
                          </CodeBlock>
                          <p className={`text-xs md:text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                            Configures the AWS provider with credentials and region.
                          </p>
                        </div>

                        <div className={`p-3 rounded border ${isDarkMode ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-200'}`}>
                          <h4 className={`font-medium mb-1 text-sm md:text-base ${isDarkMode ? 'text-blue-400' : 'text-blue-900'}`}>Resource Block:</h4>
                          <CodeBlock>
{`resource "aws_instance" "first-server" {
  ami           = "ami-05ffe3c48a9991133"
  instance_type = "t2.micro"
  
  tags = {
    Name = "amazon_linux"
  }
}`}
                          </CodeBlock>
                          <p className={`text-xs md:text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                            Defines an EC2 instance with specific AMI, instance type, and tags.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className={`p-4 rounded-lg ${isDarkMode ? 'bg-green-900/20 text-green-200' : 'bg-green-50 text-green-900'}`}>
                        <h3 className="font-semibold mb-2 text-sm md:text-base">Key Components:</h3>
                        <ul className="text-xs md:text-sm space-y-1">
                          <li>• <strong>AMI:</strong> Amazon Machine Image (OS)</li>
                          <li>• <strong>Instance Type:</strong> Hardware specification</li>
                          <li>• <strong>Tags:</strong> Metadata for organization</li>
                          <li>• <strong>Region:</strong> Geographic location</li>
                        </ul>
                      </div>

                      <div className={`p-4 rounded-lg ${isDarkMode ? 'bg-yellow-900/20 text-yellow-200' : 'bg-yellow-50 text-yellow-900'}`}>
                        <h3 className="font-semibold mb-2 text-sm md:text-base">AMI Explained:</h3>
                        <p className="text-xs md:text-sm">
                          <code className="bg-gray-200 px-2 py-1 rounded text-xs">ami-05ffe3c48a9991133</code> 
                          is an Amazon Linux 2 image. AMI IDs are region-specific and may change over time.
                        </p>
                      </div>
                    </div>
                  </div>
                </StepCard>
              </TabsContent>

              {/* Commands */}
              <TabsContent value="commands">
                <StepCard title="Step 5: Terraform Commands" icon={Play}>
                  <div className="space-y-4 md:space-y-6">
                    <div className={`p-4 rounded-lg ${isDarkMode ? 'bg-blue-900/20 text-blue-200' : 'bg-blue-50 text-blue-900'}`}>
                      <h3 className="font-semibold mb-2 text-sm md:text-base">Execute these commands in order:</h3>
                      <p className="text-xs md:text-sm">
                        Run these commands in your terminal from the directory containing your <code className="bg-gray-200 px-2 py-1 rounded text-xs">main.tf</code> file.
                      </p>
                    </div>

                    <div className="space-y-4">
                      <div className={`p-4 rounded-lg border-l-4 border-blue-500 ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
                        <h4 className={`font-semibold mb-2 text-sm md:text-base ${isDarkMode ? 'text-blue-400' : 'text-blue-900'}`}>1. Initialize Terraform</h4>
                        <CodeBlock>terraform init</CodeBlock>
                        <p className={`text-xs md:text-sm mt-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                          Downloads the AWS provider and initializes the working directory.
                        </p>
                        <div className="mt-4">
                          <ImageCard 
                            src="/images/terraform-init.png"
                            alt="Terraform Init Command Output"
                            title="terraform init - Successful Initialization"
                          />
                        </div>
                      </div>

                      <div className={`p-4 rounded-lg border-l-4 border-green-500 ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
                        <h4 className={`font-semibold mb-2 text-sm md:text-base ${isDarkMode ? 'text-green-400' : 'text-green-900'}`}>2. Validate Configuration</h4>
                        <CodeBlock>terraform validate</CodeBlock>
                        <p className={`text-xs md:text-sm mt-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                          Checks if your configuration is syntactically valid.
                        </p>
                        <div className="mt-4">
                          <ImageCard 
                            src="/images/terraform-validate.png"
                            alt="Terraform Validate Command Output"
                            title="terraform validate - Configuration Valid"
                          />
                        </div>
                      </div>

                      <div className={`p-4 rounded-lg border-l-4 border-yellow-500 ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
                        <h4 className={`font-semibold mb-2 text-sm md:text-base ${isDarkMode ? 'text-yellow-400' : 'text-yellow-900'}`}>3. Plan Infrastructure</h4>
                        <CodeBlock>terraform plan</CodeBlock>
                        <p className={`text-xs md:text-sm mt-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                          Shows what changes Terraform will make without actually applying them.
                        </p>
                        <div className="mt-4 space-y-4">
                          <ImageCard 
                            src="/images/terraform-plan-part1.png"
                            alt="Terraform Plan Command Output - Part 1"
                            title="terraform plan - Execution Plan (Part 1)"
                          />
                          <ImageCard 
                            src="/images/terraform-plan-part2.png"
                            alt="Terraform Plan Command Output - Part 2"
                            title="terraform plan - Execution Plan (Part 2)"
                          />
                        </div>
                      </div>

                      <div className={`p-4 rounded-lg border-l-4 border-red-500 ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
                        <h4 className={`font-semibold mb-2 text-sm md:text-base ${isDarkMode ? 'text-red-400' : 'text-red-900'}`}>4. Apply Configuration</h4>
                        <CodeBlock>terraform apply</CodeBlock>
                        <p className={`text-xs md:text-sm mt-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                          Creates the actual AWS resources. Type "yes" when prompted.
                        </p>
                        <div className="mt-4 space-y-4">
                          <ImageCard 
                            src="/images/terraform-apply.png"
                            alt="Terraform Apply Command Output"
                            title="terraform apply - Resource Creation Complete"
                          />
                          <ImageCard 
                            src="/images/aws-ec2-instance.png"
                            alt="AWS EC2 Instance Created"
                            title="AWS Console - EC2 Instance Successfully Created"
                          />
                          <ImageCard 
                            src="/images/aws-ec2-instance-details.png"
                            alt="AWS EC2 Instance Details"
                            title="EC2 Instance Details in AWS Console"
                          />
                        </div>
                      </div>
                    </div>

                    <div className={`p-4 rounded-lg ${isDarkMode ? 'bg-green-900/20 text-green-200' : 'bg-green-50 text-green-900'}`}>
                      <h3 className="font-semibold mb-2 text-sm md:text-base">✅ Success!</h3>
                      <p className="text-xs md:text-sm">
                        After running <code className="bg-gray-200 px-2 py-1 rounded text-xs">terraform apply</code>, 
                        you can see the newly created EC2 instance in your AWS Console as shown in the screenshots above!
                      </p>
                    </div>
                  </div>
                </StepCard>
              </TabsContent>

              {/* Cleanup */}
              <TabsContent value="cleanup">
                <StepCard title="Step 6: Cleanup Resources" icon={Trash2}>
                  <div className="space-y-4">
                    <div className={`p-4 rounded-lg ${isDarkMode ? 'bg-red-900/20 text-red-200' : 'bg-red-50 text-red-900'}`}>
                      <h3 className="font-semibold mb-2 text-sm md:text-base">Important: Clean up to avoid charges</h3>
                      <p className="text-xs md:text-sm">
                        Always destroy resources when you're done experimenting to avoid unexpected AWS charges.
                      </p>
                    </div>

                    <div className={`p-4 rounded-lg border-l-4 border-red-500 ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
                      <h4 className={`font-semibold mb-2 text-sm md:text-base ${isDarkMode ? 'text-red-400' : 'text-red-900'}`}>Destroy Infrastructure</h4>
                      <CodeBlock>terraform destroy</CodeBlock>
                      <p className={`text-xs md:text-sm mt-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                        Removes all resources created by Terraform. Type "yes" when prompted.
                      </p>
                      <div className="mt-4 space-y-4">
                        <ImageCard 
                          src="/images/terraform-destroy-part1.png"
                          alt="Terraform Destroy Command Output - Part 1"
                          title="terraform destroy - Destruction Plan"
                        />
                        <ImageCard 
                          src="/images/terraform-destroy-part2.png"
                          alt="Terraform Destroy Command Output - Part 2"
                          title="terraform destroy - Resources Destroyed Successfully"
                        />
                      </div>
                    </div>

                    <div className={`border-l-4 border-yellow-500 p-4 ${isDarkMode ? 'bg-yellow-900/20 text-yellow-200' : 'bg-yellow-50 text-yellow-900'}`}>
                      <h3 className="font-semibold mb-2 text-sm md:text-base">💡 Best Practices:</h3>
                      <ul className="text-xs md:text-sm space-y-1">
                        <li>• Always run <code className="bg-gray-200 px-2 py-1 rounded text-xs">terraform plan</code> before <code className="bg-gray-200 px-2 py-1 rounded text-xs">apply</code></li>
                        <li>• Use version control for your Terraform files</li>
                        <li>• Never hardcode sensitive information</li>
                        <li>• Clean up resources when done</li>
                        <li>• Use meaningful names and tags</li>
                      </ul>
                    </div>

                    <div className={`p-4 rounded-lg ${isDarkMode ? 'bg-blue-900/20 text-blue-200' : 'bg-blue-50 text-blue-900'}`}>
                      <h3 className="font-semibold mb-2 text-sm md:text-base">🎉 Congratulations!</h3>
                      <p className={`text-xs md:text-sm ${isDarkMode ? 'text-gray-300' : 'text-blue-800'}`}>
                        You've successfully completed the Terraform AWS EC2 tutorial! 
                        All screenshots above demonstrate the successful execution of all Terraform commands and the complete lifecycle of AWS resource management.
                      </p>
                    </div>
                  </div>
                </StepCard>
              </TabsContent>
            </>
          )}

          {/* Task 2 Content */}
          {activeTask === "task2" && (
            <>
              {/* Task 2 Overview */}
              <TabsContent value="task2-overview">
                <StepCard title="Task 2: Secure Ubuntu EC2 Instance" icon={Shield}>
                  <div className="space-y-4">
                    <p className={`text-base md:text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      In this task, we'll launch a <strong>secure Ubuntu EC2 instance</strong> with SSH and HTTPS access using the default VPC and latest official Ubuntu AMI.
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                      <div className={`p-4 rounded-lg ${isDarkMode ? 'bg-purple-900/20 text-purple-200' : 'bg-purple-50 text-purple-900'}`}>
                        <h3 className="font-semibold mb-2 text-sm md:text-base">Key Features:</h3>
                        <ul className="space-y-1 text-xs md:text-sm">
                          <li>• Latest Ubuntu 22.04 LTS AMI</li>
                          <li>• SSH access (Port 22)</li>
                          <li>• HTTPS access (Port 443)</li>
                          <li>• Default VPC configuration</li>
                          <li>• Security group with proper rules</li>
                          <li>• Public IP assignment</li>
                        </ul>
                      </div>
                      
                      <div className={`p-4 rounded-lg ${isDarkMode ? 'bg-orange-900/20 text-orange-200' : 'bg-orange-50 text-orange-900'}`}>
                        <h3 className="font-semibold mb-2 text-sm md:text-base">Security Components:</h3>
                        <ul className="space-y-1 text-xs md:text-sm">
                          <li>• SSH key pair authentication</li>
                          <li>• Restricted security group rules</li>
                          <li>• VPC-based networking</li>
                          <li>• Ingress/egress rule management</li>
                          <li>• IPv4 and IPv6 support</li>
                        </ul>
                      </div>
                    </div>

                    <div className={`border-l-4 border-blue-500 p-4 ${isDarkMode ? 'bg-blue-900/20 text-blue-200' : 'bg-blue-50 text-blue-900'}`}>
                      <h3 className="font-semibold mb-2 text-sm md:text-base">What's Different from Task 1:</h3>
                      <ul className="text-xs md:text-sm space-y-1">
                        <li>• Uses data sources to fetch latest Ubuntu AMI</li>
                        <li>• Implements comprehensive security groups</li>
                        <li>• Configures both SSH and HTTPS access</li>
                        <li>• Uses variables for better configuration management</li>
                        <li>• Demonstrates advanced Terraform features</li>
                      </ul>
                    </div>
                  </div>
                </StepCard>
              </TabsContent>

              {/* Task 2 Code */}
              <TabsContent value="task2-code">
                <StepCard title="Ubuntu EC2 Configuration Code" icon={Code}>
                  <div className="space-y-4">
                    <div className={`p-4 rounded-lg ${isDarkMode ? 'bg-green-900/20 text-green-200' : 'bg-green-50 text-green-900'}`}>
                      <h3 className="font-semibold mb-2 text-sm md:text-base">Complete Terraform Configuration:</h3>
                      <p className="text-xs md:text-sm">
                        Create a new file called <code className="bg-gray-200 px-2 py-1 rounded text-xs">main.tf</code> with the following comprehensive configuration:
                      </p>
                    </div>

                    <CodeBlock title="main.tf - Secure Ubuntu EC2 Configuration">
{`provider "aws" {
  region = "us-east-1"
  secret_key = ""
  access_key = ""
}

data "aws_ami" "ubuntu" {
  most_recent = true
  filter {
    name   = "name"
    values = ["ubuntu/images/hvm-ssd/ubuntu-jammy-22.04-amd64-server-*"]
  }
  filter {
    name   = "virtualization-type"
    values = ["hvm"]
  }
  owners = ["099720109477"]
}

resource "aws_instance" "Sample_demo" {
  count                       = 1
  ami                        = data.aws_ami.ubuntu.id
  instance_type              = "t2.micro"
  key_name                   = var.key_name
  vpc_security_group_ids     = [aws_security_group.allow_tls.id]
  associate_public_ip_address = true
  
  tags = {
    Name = "EC2_Without_AMI"
  }
}

# Use the default VPC
data "aws_vpc" "default" {
  default = true
}

resource "aws_security_group" "allow_tls" {
  name        = "allow_tls"
  description = "Allow TLS inbound traffic and all outbound traffic"
  vpc_id      = data.aws_vpc.default.id
  
  tags = {
    Name = "allow_tls"
  }
}

# Ingress Rule for IPv4 - HTTPS traffic within the VPC
resource "aws_vpc_security_group_ingress_rule" "allow_tls_ipv4" {
  security_group_id = aws_security_group.allow_tls.id
  cidr_ipv4         = data.aws_vpc.default.cidr_block
  from_port         = 443
  ip_protocol       = "tcp"
  to_port           = 443
}

# Ingress Rule for IPv6 - HTTPS traffic within the VPC
resource "aws_vpc_security_group_ingress_rule" "allow_tls_ipv6" {
  security_group_id = aws_security_group.allow_tls.id
  cidr_ipv6         = "::/0"
  from_port         = 443
  ip_protocol       = "tcp"
  to_port           = 443
}

# Egress Rule - Allow all outbound IPv4 traffic
resource "aws_vpc_security_group_egress_rule" "allow_all_traffic_ipv4" {
  security_group_id = aws_security_group.allow_tls.id
  cidr_ipv4         = "0.0.0.0/0"
  ip_protocol       = "-1"
}

resource "aws_vpc_security_group_egress_rule" "allow_all_traffic_ipv6" {
  security_group_id = aws_security_group.allow_tls.id
  cidr_ipv6         = "::/0"
  ip_protocol       = "-1"
}

# Ingress Rule for SSH Access (Port 22)
resource "aws_vpc_security_group_ingress_rule" "allow_ssh_ipv4" {
  security_group_id = aws_security_group.allow_tls.id
  cidr_ipv4         = "0.0.0.0/0"
  from_port         = 22
  ip_protocol       = "tcp"
  to_port           = 22
}

# Variable for Key Pair
variable "key_name" {
  description = "Name of the AWS key pair for SSH access"
  type        = string
  default     = "kp1"
}`}
                    </CodeBlock>

                    <div className={`p-4 rounded-lg ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-gray-50 border-gray-200'} border`}>
                      <h3 className={`font-semibold mb-2 text-sm md:text-base ${isDarkMode ? 'text-gray-200' : 'text-gray-900'}`}>Code Explanation:</h3>
                      <div className="space-y-3">
                        <div className={`p-3 rounded border ${isDarkMode ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-200'}`}>
                          <h4 className={`font-medium mb-1 text-sm md:text-base ${isDarkMode ? 'text-blue-400' : 'text-blue-900'}`}>Data Source - Ubuntu AMI:</h4>
                          <p className={`text-xs md:text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                            Automatically fetches the latest Ubuntu 22.04 LTS AMI from Canonical.
                          </p>
                        </div>

                        <div className={`p-3 rounded border ${isDarkMode ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-200'}`}>
                          <h4 className={`font-medium mb-1 text-sm md:text-base ${isDarkMode ? 'text-blue-400' : 'text-blue-900'}`}>Security Group:</h4>
                          <p className={`text-xs md:text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                            Creates comprehensive security rules for SSH (22) and HTTPS (443) access.
                          </p>
                        </div>

                        <div className={`p-3 rounded border ${isDarkMode ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-200'}`}>
                          <h4 className={`font-medium mb-1 text-sm md:text-base ${isDarkMode ? 'text-blue-400' : 'text-blue-900'}`}>Variables:</h4>
                          <p className={`text-xs md:text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                            Uses Terraform variables for flexible key pair configuration.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </StepCard>
              </TabsContent>

              {/* Task 2 Commands */}
              <TabsContent value="task2-commands">
                <StepCard title="Execute Terraform Commands for Task 2" icon={Play}>
                  <div className="space-y-4 md:space-y-6">
                    <div className={`p-4 rounded-lg ${isDarkMode ? 'bg-blue-900/20 text-blue-200' : 'bg-blue-50 text-blue-900'}`}>
                      <h3 className="font-semibold mb-2 text-sm md:text-base">Execute these commands in order:</h3>
                      <p className="text-xs md:text-sm">
                        Run these commands in your terminal from the directory containing your <code className="bg-gray-200 px-2 py-1 rounded text-xs">main.tf</code> file for Task 2.
                      </p>
                    </div>

                    <div className="space-y-4">
                      <div className={`p-4 rounded-lg border-l-4 border-blue-500 ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
                        <h4 className={`font-semibold mb-2 text-sm md:text-base ${isDarkMode ? 'text-blue-400' : 'text-blue-900'}`}>1. Initialize Terraform</h4>
                        <CodeBlock>terraform init</CodeBlock>
                        <p className={`text-xs md:text-sm mt-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                          Downloads the AWS provider and initializes the working directory.
                        </p>
                        <div className="mt-4">
                          <ImageCard 
                            src="/images/terraform-init-task2.png"
                            alt="Terraform Init Command for Task 2"
                            title="terraform init - Task 2 Initialization"
                          />
                        </div>
                      </div>

                      <div className={`p-4 rounded-lg border-l-4 border-green-500 ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
                        <h4 className={`font-semibold mb-2 text-sm md:text-base ${isDarkMode ? 'text-green-400' : 'text-green-900'}`}>2. Validate Configuration</h4>
                        <CodeBlock>terraform validate</CodeBlock>
                        <p className={`text-xs md:text-sm mt-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                          Checks if your configuration is syntactically valid.
                        </p>
                        <div className="mt-4">
                          <ImageCard 
                            src="/images/terraform-validate-task2.png"
                            alt="Terraform Validate Command for Task 2"
                            title="terraform validate - Task 2 Configuration Valid"
                          />
                        </div>
                      </div>

                      <div className={`p-4 rounded-lg border-l-4 border-yellow-500 ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
                        <h4 className={`font-semibold mb-2 text-sm md:text-base ${isDarkMode ? 'text-yellow-400' : 'text-yellow-900'}`}>3. Plan Infrastructure</h4>
                        <CodeBlock>terraform plan</CodeBlock>
                        <p className={`text-xs md:text-sm mt-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                          Shows what changes Terraform will make without actually applying them.
                        </p>
                        <div className="mt-4 space-y-4">
                          <ImageCard 
                            src="/images/terraform-plan-task2-part1.png"
                            alt="Terraform Plan Command for Task 2 - Part 1"
                            title="terraform plan - Task 2 Execution Plan (Part 1)"
                          />
                          <ImageCard 
                            src="/images/terraform-plan-task2-part2.png"
                            alt="Terraform Plan Command for Task 2 - Part 2"
                            title="terraform plan - Task 2 Execution Plan (Part 2)"
                          />
                        </div>
                      </div>

                      <div className={`p-4 rounded-lg border-l-4 border-red-500 ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
                        <h4 className={`font-semibold mb-2 text-sm md:text-base ${isDarkMode ? 'text-red-400' : 'text-red-900'}`}>4. Apply Configuration</h4>
                        <CodeBlock>terraform apply</CodeBlock>
                        <p className={`text-xs md:text-sm mt-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                          Creates the actual AWS resources. Type "yes" when prompted.
                        </p>
                        <div className="mt-4">
                          <ImageCard 
                            src="/images/terraform-apply-task2.png"
                            alt="Terraform Apply Command for Task 2"
                            title="terraform apply - Task 2 Resource Creation"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </StepCard>
              </TabsContent>

              {/* Task 2 Results */}
              <TabsContent value="task2-results">
                <StepCard title="Task 2 Results & Verification" icon={CheckCircle}>
                  <div className="space-y-4">
                    <div className={`p-4 rounded-lg ${isDarkMode ? 'bg-green-900/20 text-green-200' : 'bg-green-50 text-green-900'}`}>
                      <h3 className="font-semibold mb-2 text-sm md:text-base">✅ Task 2 Completed Successfully!</h3>
                      <p className="text-xs md:text-sm">
                        Your secure Ubuntu EC2 instance has been created with proper security configurations.
                        Below are the verification screenshots from AWS Console.
                      </p>
                    </div>

                    <div className="space-y-4">
                      <ImageCard 
                        src="/images/aws-ec2-instances-task2.png"
                        alt="AWS EC2 Instances List - Task 2"
                        title="AWS Console - EC2 Instances Dashboard"
                      />
                      
                      <ImageCard 
                        src="/images/aws-ec2-instance-details-task2.png"
                        alt="EC2 Instance Details - Task 2"
                        title="EC2 Instance Summary - Security Configuration"
                      />

                      <ImageCard 
                        src="/images/terraform-apply-success-task2.png"
                        alt="Terraform Apply Success - Task 2"
                        title="Terraform Apply Success - All Resources Created"
                      />
                    </div>

                    <div className={`border-l-4 border-blue-500 p-4 ${isDarkMode ? 'bg-blue-900/20 text-blue-200' : 'bg-blue-50 text-blue-900'}`}>
                      <h3 className="font-semibold mb-2 text-sm md:text-base">Instance Details Verified:</h3>
                      <ul className="text-xs md:text-sm space-y-1">
                        <li>• ✅ Ubuntu 22.04 LTS AMI successfully deployed</li>
                        <li>• ✅ Security group with SSH (22) and HTTPS (443) access</li>
                        <li>• ✅ Public IP address assigned</li>
                        <li>• ✅ Default VPC configuration applied</li>
                        <li>• ✅ Key pair authentication enabled</li>
                        <li>• ✅ All ingress and egress rules properly configured</li>
                      </ul>
                    </div>
                  </div>
                </StepCard>
              </TabsContent>

              {/* Task 2 Cleanup */}
              <TabsContent value="task2-cleanup">
                <StepCard title="Cleanup Task 2 Resources" icon={Trash2}>
                  <div className="space-y-4">
                    <div className={`p-4 rounded-lg ${isDarkMode ? 'bg-red-900/20 text-red-200' : 'bg-red-50 text-red-900'}`}>
                      <h3 className="font-semibold mb-2 text-sm md:text-base">Important: Clean up to avoid charges</h3>
                      <p className="text-xs md:text-sm">
                        Always destroy resources when you're done experimenting to avoid unexpected AWS charges.
                      </p>
                    </div>

                    <div className={`p-4 rounded-lg border-l-4 border-red-500 ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
                      <h4 className={`font-semibold mb-2 text-sm md:text-base ${isDarkMode ? 'text-red-400' : 'text-red-900'}`}>Destroy Infrastructure</h4>
                      <CodeBlock>terraform destroy</CodeBlock>
                      <p className={`text-xs md:text-sm mt-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                        Removes all resources created by Terraform. Type "yes" when prompted.
                      </p>
                      <div className="mt-4 space-y-4">
                        <ImageCard 
                          src="/images/terraform-destroy-task2-part1.png"
                          alt="Terraform Destroy Command - Task 2 Plan"
                          title="terraform destroy - Task 2 Destruction Plan"
                        />
                        <ImageCard 
                          src="/images/terraform-destroy-task2-part2.png"
                          alt="Terraform Destroy Complete - Task 2"
                          title="terraform destroy - Task 2 Resources Destroyed Successfully"
                        />
                      </div>
                    </div>

                    <div className={`border-l-4 border-green-500 p-4 ${isDarkMode ? 'bg-green-900/20 text-green-200' : 'bg-green-50 text-green-900'}`}>
                      <h3 className="font-semibold mb-2 text-sm md:text-base">🎉 Both Tasks Completed Successfully!</h3>
                      <p className="text-xs md:text-sm">
                        You have successfully completed both Terraform tasks:
                      </p>
                      <ul className="text-xs md:text-sm mt-2 space-y-1">
                        <li>• ✅ Task 1: Basic EC2 instance deployment</li>
                        <li>• ✅ Task 2: Secure Ubuntu EC2 with advanced configuration</li>
                        <li>• ✅ All resources properly created and destroyed</li>
                        <li>• ✅ Complete infrastructure lifecycle management demonstrated</li>
                      </ul>
                    </div>
                  </div>
                </StepCard>
              </TabsContent>
            </>
          )}
        </Tabs>
      </main>

      {/* Footer */}
      <footer className={`py-6 md:py-8 mt-8 md:mt-12 ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-gray-900 text-white'}`}>
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h3 className="text-lg md:text-xl font-bold mb-2">All Tasks Completed Successfully!</h3>
            <p className="text-sm md:text-base text-gray-300 mb-4">
              Created by <strong>Shyam Gupta</strong> | Registration: <strong>12207063</strong> | Section: <strong>007</strong>
            </p>
            <div className="flex flex-wrap justify-center gap-2 md:gap-4 text-xs md:text-sm text-gray-400">
              <span>Infrastructure as Code</span>
              <span>•</span>
              <span>AWS EC2</span>
              <span>•</span>
              <span>Terraform</span>
              <span>•</span>
              <span>Tasks 1 & 2 Completed</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
