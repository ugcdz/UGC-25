import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, Star, Users, Smartphone, Home } from "lucide-react";

const Apps = () => {
  const apps = [
    {
      id: 1,
      name: "تطبيق إدارة المهام",
      description: "تطبيق ذكي لإدارة المهام اليومية وتنظيم الوقت بطريقة فعالة",
      icon: "📝",
      rating: 4.8,
      downloads: "10K+",
      size: "12 MB",
      downloadUrl: "#"
    },
    {
      id: 2,
      name: "تطبيق التجارة الإلكترونية",
      description: "منصة شاملة للتسوق الإلكتروني مع واجهة سهلة ومرنة",
      icon: "🛒",
      rating: 4.9,
      downloads: "25K+",
      size: "18 MB",
      downloadUrl: "#"
    },
    {
      id: 3,
      name: "تطبيق الصحة واللياقة",
      description: "تطبيق متكامل لمتابعة اللياقة البدنية والعادات الصحية",
      icon: "💪",
      rating: 4.7,
      downloads: "8K+",
      size: "15 MB",
      downloadUrl: "#"
    },
    {
      id: 4,
      name: "تطبيق التعلم الإلكتروني",
      description: "منصة تعليمية تفاعلية مع محتوى تعليمي متنوع",
      icon: "📚",
      rating: 4.6,
      downloads: "15K+",
      size: "22 MB",
      downloadUrl: "#"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-hero">
        <div className="container mx-auto px-6 text-center">
          <Button 
            variant="hero" 
            size="lg" 
            className="mb-8 text-lg px-8 py-6"
            onClick={() => window.location.href = '/'}
          >
            <Home className="w-5 h-5 ml-2" />
            قائمة رئيسية
          </Button>
          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            اكتشف تطبيقاتنا
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            مجموعة من التطبيقات المتطورة والمبتكرة التي طورناها لتلبية احتياجاتكم المختلفة
          </p>
        </div>
      </section>

      {/* Apps Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {apps.map((app) => (
              <Card key={app.id} className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-2">
                <CardHeader className="text-center pb-4">
                  <div className="text-6xl mb-4">{app.icon}</div>
                  <CardTitle className="text-xl mb-2">{app.name}</CardTitle>
                  <div className="flex items-center justify-center space-x-4 space-x-reverse text-sm text-muted-foreground">
                    <div className="flex items-center space-x-1 space-x-reverse">
                      <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                      <span>{app.rating}</span>
                    </div>
                    <div className="flex items-center space-x-1 space-x-reverse">
                      <Users className="w-4 h-4" />
                      <span>{app.downloads}</span>
                    </div>
                    <div className="flex items-center space-x-1 space-x-reverse">
                      <Smartphone className="w-4 h-4" />
                      <span>{app.size}</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-muted-foreground text-center mb-6 leading-relaxed">
                    {app.description}
                  </p>
                  <Button 
                    variant="ugc" 
                    className="w-full group"
                    onClick={() => window.open(app.downloadUrl, '_blank')}
                  >
                    <Download className="w-4 h-4 ml-2 group-hover:translate-y-1 transition-transform" />
                    تحميل التطبيق
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Apps;