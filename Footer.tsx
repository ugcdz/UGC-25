import { Button } from "@/components/ui/button";
import { Facebook, Twitter, Instagram, Linkedin, Github, ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-ugc-dark text-white relative">
      {/* Back to top button */}
      <button 
        onClick={scrollToTop}
        className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-ugc-blue rounded-full flex items-center justify-center hover:bg-ugc-blue-dark transition-colors duration-300 shadow-glow"
      >
        <ArrowUp className="w-5 h-5" />
      </button>

      <div className="container mx-auto px-6 pt-16 pb-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 space-x-reverse mb-6">
              <img 
                src="/lovable-uploads/3659bf40-ba05-4e60-95b6-6df878171479.png" 
                alt="UGC 25 Logo" 
                className="w-12 h-12"
              />
              <span className="text-2xl font-bold">UGC 25</span>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
              نحن شركة رائدة في تطوير التطبيقات والحلول التقنية، نساعد الشركات على التحول الرقمي 
              وتحقيق النجاح في العصر التقني.
            </p>
            <div className="flex space-x-4 space-x-reverse">
              <Button 
                variant="ghost" 
                size="icon" 
                className="text-gray-300 hover:text-ugc-blue hover:bg-ugc-blue/10"
                onClick={() => window.open('https://www.facebook.com/profile.php?id=61576100030845', '_blank')}
              >
                <Facebook className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-300 hover:text-ugc-blue hover:bg-ugc-blue/10">
                <Twitter className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-300 hover:text-ugc-blue hover:bg-ugc-blue/10">
                <Instagram className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-300 hover:text-ugc-blue hover:bg-ugc-blue/10">
                <Linkedin className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-300 hover:text-ugc-blue hover:bg-ugc-blue/10">
                <Github className="w-5 h-5" />
              </Button>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2025 UGC 25. جميع الحقوق محفوظة.
          </p>
          <div className="flex space-x-6 space-x-reverse mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-ugc-blue text-sm transition-colors">
              سياسة الخصوصية
            </a>
            <a href="#" className="text-gray-400 hover:text-ugc-blue text-sm transition-colors">
              شروط الاستخدام
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;