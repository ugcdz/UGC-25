import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "اتصل بنا",
      content: "0554 59 77 19",
      subContent: "متاح 24/7"
    },
    {
      icon: Mail,
      title: "راسلنا",
      content: "ugc20021@gmail.com",
      subContent: "نرد خلال ساعتين"
    },
    {
      icon: MapPin,
      title: "موقعنا",
      content: "الرياض، المملكة العربية السعودية",
      subContent: "مركز الأعمال التقني"
    },
    {
      icon: Clock,
      title: "ساعات العمل",
      content: "الأحد - الخميس",
      subContent: "9:00 ص - 6:00 م"
    }
  ];

  return (
    <section id="contact" className="py-24 bg-ugc-gray-light">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-foreground">تواصل </span>
            <span className="text-ugc-blue">معنا</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            هل لديك فكرة مشروع أو تحتاج إلى إنشاء تطبيق أو حتى شكوى؟ نحن هنا لمساعدتك
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-1">
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <Card key={index} className="p-6 hover:shadow-elegant transition-all duration-300 group">
                  <div className="flex items-start space-x-4 space-x-reverse">
                    <div className="w-12 h-12 bg-ugc-blue/10 rounded-xl flex items-center justify-center group-hover:bg-ugc-blue group-hover:scale-110 transition-all duration-300">
                      <info.icon className="w-6 h-6 text-ugc-blue group-hover:text-white transition-colors duration-300" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-1">{info.title}</h3>
                      <p className="text-foreground font-medium">{info.content}</p>
                      <p className="text-sm text-muted-foreground">{info.subContent}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="p-8">
              <CardHeader className="p-0 mb-8">
                <CardTitle className="text-2xl">أرسل لنا رسالة</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">الاسم الكامل</label>
                      <Input placeholder="اكتب اسمك هنا" className="h-12" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">البريد الإلكتروني</label>
                      <Input type="email" placeholder="your@email.com" className="h-12" />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">رقم الهاتف</label>
                    <Input placeholder="0554 59 77 19" className="h-12" />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">مشاكلكم</label>
                    <Textarea 
                      placeholder="اكتب مشاكلكم هنا..."
                      className="min-h-32 resize-none"
                    />
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <input type="checkbox" id="privacy" className="rounded" />
                    <label htmlFor="privacy" className="text-sm text-muted-foreground">
                      أوافق على سياسة الخصوصية وشروط الاستخدام
                    </label>
                  </div>
                  
                  <Button variant="ugc" size="lg" className="w-full">
                    إرسال الرسالة
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;