import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { toast } from "sonner";

const Contacts = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Пожалуйста, заполните все обязательные поля");
      return;
    }

    toast.success("Сообщение отправлено! Мы ответим в ближайшее время.");
    
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Контакты
            </h1>
            <p className="text-xl md:text-2xl opacity-90 max-w-2xl mx-auto">
              Свяжитесь с нами любым удобным способом
            </p>
          </div>
        </section>

        {/* Contact Info */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              <Card>
                <CardContent className="pt-8 text-center">
                  <Mail className="w-12 h-12 mx-auto mb-4 text-primary" />
                  <h3 className="font-bold mb-2">Email</h3>
                  <a 
                    href="mailto:info@derevya.ru" 
                    className="text-primary hover:underline"
                  >
                    info@derevya.ru
                  </a>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-8 text-center">
                  <Phone className="w-12 h-12 mx-auto mb-4 text-primary" />
                  <h3 className="font-bold mb-2">Телефон</h3>
                  <a 
                    href="tel:+79991234567" 
                    className="text-primary hover:underline"
                  >
                    +7 (999) 123-45-67
                  </a>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-8 text-center">
                  <MapPin className="w-12 h-12 mx-auto mb-4 text-primary" />
                  <h3 className="font-bold mb-2">Адрес</h3>
                  <p className="text-muted-foreground">
                    Москва, Россия
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-8 text-center">
                  <Clock className="w-12 h-12 mx-auto mb-4 text-primary" />
                  <h3 className="font-bold mb-2">Режим работы</h3>
                  <p className="text-muted-foreground">
                    Пн-Пт: 9:00 - 18:00
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div className="max-w-2xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-8">
                Напишите нам
              </h2>
              
              <Card>
                <CardContent className="pt-6">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="contact-name">Ваше имя *</Label>
                      <Input
                        id="contact-name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Иван Иванов"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="contact-email">Email *</Label>
                      <Input
                        id="contact-email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="ivan@example.com"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject">Тема</Label>
                      <Input
                        id="subject"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        placeholder="Тема сообщения"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="contact-message">Сообщение *</Label>
                      <Textarea
                        id="contact-message"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Ваше сообщение..."
                        rows={6}
                      />
                    </div>

                    <Button type="submit" className="w-full" size="lg">
                      Отправить сообщение
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-muted">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">
              Часто задаваемые вопросы
            </h2>
            
            <div className="max-w-3xl mx-auto space-y-6">
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-bold mb-3">В каких городах проходят посадки?</h3>
                  <p className="text-muted-foreground">
                    На данный момент мы организуем посадки в Москве, Санкт-Петербурге, Казани, 
                    Екатеринбурге, Новосибирске и Краснодаре. Список городов постоянно расширяется.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-bold mb-3">Когда проходят посадки?</h3>
                  <p className="text-muted-foreground">
                    Основной сезон посадок — весна (апрель-май) и осень (сентябрь-октябрь). 
                    Точные даты зависят от климатической зоны и погодных условий.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-bold mb-3">Как происходит оплата?</h3>
                  <p className="text-muted-foreground">
                    После заполнения заявки мы отправляем счёт на оплату. Оплатить можно банковской 
                    картой или по реквизитам для юридических лиц.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-bold mb-3">Можно ли приехать посмотреть на своё дерево потом?</h3>
                  <p className="text-muted-foreground">
                    Конечно! Вы получите точные координаты участка и сможете приезжать в любое время, 
                    чтобы увидеть, как растёт ваше дерево.
                  </p>
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

export default Contacts;
