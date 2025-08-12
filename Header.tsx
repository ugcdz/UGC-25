import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border z-50">
      <div className="container mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img 
              src="/lovable-uploads/3659bf40-ba05-4e60-95b6-6df878171479.png" 
              alt="UGC 25 Logo" 
              className="w-12 h-12"
            />
            <span className="text-2xl font-bold text-foreground">UGC 25</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-foreground hover:text-primary transition-colors">
              الرئيسية
            </a>
            <a href="#services" className="text-foreground hover:text-primary transition-colors">
              خدماتنا
            </a>
            <a href="#about" className="text-foreground hover:text-primary transition-colors">
              عن الشركة
            </a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors">
              تواصل معنا
            </a>
          </div>
          
        </nav>
      </div>
    </header>
  );
};

export default Header;