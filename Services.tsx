import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Smartphone, Globe, Palette, Settings, Code, Users } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Smartphone,
      title: "تطوير تطبيقات الجوال",
      description: "نطور تطبيقات متطورة لنظامي iOS و Android بأحدث التقنيات والمعايير العالمية",
      features: ["React Native", "Flutter", "Swift", "Kotlin"]
    },
    {
      icon: Globe,
      title: "تطوير مواقع الويب",
      description: "نصمم ونطور مواقع ويب سريعة ومتجاوبة مع جميع الأجهزة والمتصفحات",
      features: ["React", "Next.js", "Node.js", "TypeScript"]
    },
    {
      icon: Palette,
      title: "تصميم واجهات المستخدم",
      description: "نصمم واجهات عصرية وسهلة الاستخدام تحقق أفضل تجربة للمستخدمين",
      features: ["Figma", "Adobe XD", "Sketch", "Prototyping"]
    },
    {
      icon: Settings,
      title: "حلول الذكاء الاصطناعي",
      description: "ندمج تقنيات الذكاء الاصطناعي في التطبيقات لتحسين الأداء والكفاءة",
      features: ["Machine Learning", "AI Integration", "Data Analysis"]
    },
    {
      icon: Users,
      title: "دعم وصيانة",
      description: "نوفر دعماً تقنياً مستمراً وصيانة دورية لضمان عمل التطبيقات بكفاءة",
      features: ["24/7 Support", "Updates", "Monitoring"]
    }
  ];

  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-foreground">خدماتنا </span>
            <span className="text-ugc-blue">المميزة</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            نقدم مجموعة شاملة من الخدمات التقنية المتطورة لتلبية جميع احتياجاتك في عالم التطبيقات والتقنية
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-elegant transition-all duration-300 transform hover:-translate-y-2 border-2 hover:border-ugc-blue/20"
            >
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-ugc-blue/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-ugc-blue group-hover:scale-110 transition-all duration-300">
                  <service.icon className="w-8 h-8 text-ugc-blue group-hover:text-white transition-colors duration-300" />
                </div>
                <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {service.features.map((feature, featureIndex) => (
                    <span 
                      key={featureIndex}
                      className="px-3 py-1 bg-ugc-blue/10 text-ugc-blue text-sm rounded-full font-medium"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;