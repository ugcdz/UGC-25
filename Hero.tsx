import { Button } from "@/components/ui/button";
import { ArrowDown, Smartphone, Laptop, Tablet } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center bg-gradient-subtle relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-10 w-20 h-20 bg-ugc-blue/10 rounded-full animate-float"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-ugc-blue/20 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-32 left-1/4 w-12 h-12 bg-ugc-blue/15 rounded-full animate-float" style={{animationDelay: '4s'}}></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-right animate-fade-in">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              <span className="text-foreground">نطور </span>
              <span className="text-ugc-blue">التطبيقات</span>
              <br />
              <span className="text-foreground">التي تصنع </span>
              <span className="text-ugc-blue">الفرق</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0">
              من أجل مستقبل أفضل
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button variant="hero" size="lg" className="text-lg px-8 py-6" onClick={() => window.location.href = '/apps'}>
                اكتشف تطبيقاتنا
              </Button>
            </div>
            
            <div className="flex items-center justify-center lg:justify-start gap-8 mt-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-ugc-blue">50+</div>
                <div className="text-sm text-muted-foreground">تطبيق مكتمل</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-ugc-blue">25+</div>
                <div className="text-sm text-muted-foreground">عميل راضي</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-ugc-blue">5+</div>
                <div className="text-sm text-muted-foreground">سنوات خبرة</div>
              </div>
            </div>
          </div>
          
          {/* Visual Elements */}
          <div className="relative animate-slide-up">
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-6">
                <div className="bg-card p-6 rounded-2xl shadow-elegant border border-border transform hover:scale-105 transition-all duration-300">
                  <Smartphone className="w-12 h-12 text-ugc-blue mb-4" />
                  <h3 className="font-semibold mb-2">تطبيقات الجوال</h3>
                  <p className="text-sm text-muted-foreground">iOS & Android</p>
                </div>
                <div className="bg-card p-6 rounded-2xl shadow-elegant border border-border transform hover:scale-105 transition-all duration-300">
                  <Laptop className="w-12 h-12 text-ugc-blue mb-4" />
                  <h3 className="font-semibold mb-2">تطبيقات الويب</h3>
                  <p className="text-sm text-muted-foreground">حلول متطورة</p>
                </div>
              </div>
              <div className="space-y-6 mt-12">
                <div className="bg-card p-6 rounded-2xl shadow-elegant border border-border transform hover:scale-105 transition-all duration-300">
                  <Tablet className="w-12 h-12 text-ugc-blue mb-4" />
                  <h3 className="font-semibold mb-2">واجهات مستخدم</h3>
                  <p className="text-sm text-muted-foreground">تصاميم عصرية</p>
                </div>
                <div className="bg-card p-6 rounded-2xl shadow-elegant border border-border transform hover:scale-105 transition-all duration-300">
                  <div className="w-12 h-12 bg-ugc-blue rounded-lg flex items-center justify-center mb-4">
                    <span className="text-white font-bold text-xl">M</span>
                  </div>
                  <h3 className="font-semibold mb-2">حلول مخصصة</h3>
                  <p className="text-sm text-muted-foreground">حسب احتياجاتك</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-6 h-6 text-ugc-blue" />
      </div>
    </section>
  );
};

export default Hero;