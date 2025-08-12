import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Target, Award, Lightbulb } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "الهدف",
      description: "خدمة المستخدمين وتسهيل حياتهم اليومية"
    },
    {
      icon: Lightbulb,
      title: "الابتكار",
      description: "نؤمن بقوة الابتكار والإبداع في تطوير حلول تقنية فريدة تلبي احتياجات العصر الرقمي"
    },
    {
      icon: Award,
      title: "الجودة",
      description: "نلتزم بأعلى معايير الجودة في كل مشروع نعمل عليه لضمان تحقيق أفضل النتائج"
    }
  ];

  const stats = [
    { number: "50+", label: "مشروع مكتمل" },
    { number: "25+", label: "عميل راضي" },
    { number: "5+", label: "سنوات خبرة" },
    { number: "10+", label: "خبير تقني" }
  ];

  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              <span className="text-ugc-blue">UGC 25</span>
            </h2>
            
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                شركة UGC 25 هي شركة رائدة في مجال تطوير التطبيقات والحلول التقنية، تأسست برؤية واضحة 
                لتكون الشريك المثالي للشركات والأفراد في رحلتهم نحو التحول الرقمي.
              </p>
              
              <p>
                نحن نجمع بين الخبرة التقنية العميقة والفهم الدقيق لاحتياجات السوق لنقدم حلولاً مبتكرة 
                تساعد عملاءنا على تحقيق أهدافهم وزيادة كفاءة أعمالهم.
              </p>
              
              <p>
                مع فريق من أفضل المطورين والمصممين، نستخدم أحدث التقنيات والأدوات لضمان تقديم منتجات 
                عالية الجودة تتميز بالأداء المتفوق والتصميم العصري.
              </p>
            </div>

          </div>

          {/* Values & Stats */}
          <div className="space-y-8">
            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <Card key={index} className="text-center p-6 hover:shadow-elegant transition-all duration-300">
                  <CardContent className="p-0">
                    <div className="text-3xl font-bold text-ugc-blue mb-2">{stat.number}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Values */}
            <div className="space-y-4">
              {values.map((value, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300 group">
                  <div className="flex items-start space-x-4 space-x-reverse">
                    <div className="w-12 h-12 bg-ugc-blue/10 rounded-xl flex items-center justify-center group-hover:bg-ugc-blue group-hover:scale-110 transition-all duration-300">
                      <value.icon className="w-6 h-6 text-ugc-blue group-hover:text-white transition-colors duration-300" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-2">{value.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;