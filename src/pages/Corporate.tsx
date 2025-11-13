import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import corporateImage from "@/assets/corporate-planting.jpg";
import { Check, Building2, Trophy, Users } from "lucide-react";
import { toast } from "sonner";

const Corporate = () => {
  const [formData, setFormData] = useState({
    company: "",
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.company || !formData.name || !formData.email || !formData.phone) {
      toast.error("Пожалуйста, заполните все обязательные поля");
      return;
    }

    toast.success("Заявка отправлена! Наш менеджер свяжется с вами в течение 24 часов.");
    
    setFormData({
      company: "",
      name: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  const packages = [
    {
      name: "Стартовый",
      area: "1 гектар",
      price: "от 250 000 ₽",
      trees: "~1000 деревьев",
      icon: Building2,
      features: [
        "Посадка 1 гектара леса",
        "Сертификат шефства",
        "Координаты участка",
        "Фотоотчёт посадки",
        "Упоминание в соцсетях",
      ],
    },
    {
      name: "Профессиональный",
      area: "10 гектаров",
      price: "от 2 200 000 ₽",
      trees: "~10 000 деревьев",
      icon: Trophy,
      features: [
        "Всё из пакета 'Стартовый'",
        "Табличка с названием компании",
        "Видеоотчёт с квадрокоптера",
        "Корпоративный день посадки",
        "Персональный менеджер проекта",
        "PR-материалы для СМИ",
      ],
    },
    {
      name: "Корпоративный",
      area: "100 гектаров",
      price: "от 20 000 000 ₽",
      trees: "~100 000 деревьев",
      icon: Users,
      features: [
        "Всё из пакета 'Профессиональный'",
        "Именной корпоративный лес",
        "Ежеквартальные отчёты роста",
        "Организация мероприятий на территории",
        "Создание экологической тропы",
        "Документы для ESG-отчётности",
        "Эксклюзивное медиа-освещение",
      ],
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section 
          className="relative h-[500px] flex items-center justify-center text-center"
          style={{
            backgroundImage: `linear-gradient(135deg, rgba(24, 81, 45, 0.8), rgba(24, 81, 45, 0.6)), url(${corporateImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-6">
              Корпоративное шефство
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-2xl mx-auto">
              Сделайте вклад в будущее вместе со своей командой
            </p>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Преимущества участия
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <Card>
                <CardHeader>
                  <CardTitle>Имидж компании</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Демонстрируйте реальную социальную ответственность бизнеса через конкретные действия
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Команда</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Укрепите корпоративный дух через совместную деятельность на природе
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>ESG-отчётность</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Получите документы для экологической отчётности и устойчивого развития
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Packages */}
        <section className="py-20 bg-muted">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
              Пакеты участия
            </h2>
            <p className="text-center text-muted-foreground mb-12 text-lg">
              Выберите формат, который подходит вашей компании
            </p>
            
            <div className="grid md:grid-cols-3 gap-8">
              {packages.map((pkg, index) => (
                <Card key={index} className={index === 1 ? "border-primary shadow-lg scale-105" : ""}>
                  <CardHeader>
                    <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center mb-4">
                      <pkg.icon className="w-6 h-6" />
                    </div>
                    <CardTitle>{pkg.name}</CardTitle>
                    <CardDescription className="text-2xl font-bold text-foreground mt-2">
                      {pkg.price}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="pb-4 border-b">
                      <p className="font-semibold text-lg">{pkg.area}</p>
                      <p className="text-sm text-muted-foreground">{pkg.trees}</p>
                    </div>
                    
                    <ul className="space-y-3">
                      {pkg.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <Button className="w-full mt-6" variant={index === 1 ? "default" : "secondary"} asChild>
                      <a href="#contact-form">Оставить заявку</a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section id="contact-form" className="py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
                Оставьте заявку
              </h2>
              <p className="text-center text-muted-foreground mb-8">
                Наш менеджер свяжется с вами в течение 24 часов
              </p>
              
              <Card>
                <CardContent className="pt-6">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="company">Название компании *</Label>
                      <Input
                        id="company"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="ООО 'Компания'"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="corp-name">Контактное лицо *</Label>
                      <Input
                        id="corp-name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Иван Иванов"
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="corp-email">Email *</Label>
                        <Input
                          id="corp-email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="ivan@company.ru"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="corp-phone">Телефон *</Label>
                        <Input
                          id="corp-phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+7 (999) 123-45-67"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Сообщение (необязательно)</Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Расскажите о вашей компании и интересующем формате участия..."
                        rows={4}
                      />
                    </div>

                    <Button type="submit" className="w-full" size="lg">
                      Отправить заявку
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Corporate;
