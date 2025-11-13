import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import memorialImage from "@/assets/memorial-grove.jpg";
import { Heart, Star, Shield } from "lucide-react";
import { toast } from "sonner";

const MemorialGrove = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    heroName: "",
    story: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.phone || !formData.heroName) {
      toast.error("Пожалуйста, заполните все обязательные поля");
      return;
    }

    toast.success("Заявка принята. Мы свяжемся с вами для уточнения деталей.");
    
    setFormData({
      name: "",
      email: "",
      phone: "",
      heroName: "",
      story: "",
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section 
          className="relative h-[600px] flex items-center justify-center text-center"
          style={{
            backgroundImage: `linear-gradient(135deg, rgba(24, 81, 45, 0.85), rgba(24, 81, 45, 0.75)), url(${memorialImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <Shield className="w-20 h-20 mx-auto mb-6 text-primary-foreground" />
            <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-6">
              Роща славы
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/95 max-w-3xl mx-auto leading-relaxed">
              Дерево, которое держит память
            </p>
          </div>
        </section>

        {/* Main Message */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                Есть вещи, которые словами не лечатся
              </h2>
              
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Когда отец на фронте. Когда его уже нет.
                </p>
                <p>
                  Мы создаём живой мемориал — место, где дети и мамы сажают деревья в честь своих защитников.
                </p>
                <p className="text-xl font-semibold text-foreground">
                  У каждого дерева — имя. У каждой семьи — место, куда можно вернуться.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-20 bg-muted">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <Card className="text-center">
                <CardContent className="pt-8">
                  <Heart className="w-12 h-12 mx-auto mb-4 text-primary" />
                  <h3 className="text-xl font-bold mb-3">Живая память</h3>
                  <p className="text-muted-foreground">
                    Каждое дерево растёт в честь конкретного человека, хранит его имя и историю
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="pt-8">
                  <Star className="w-12 h-12 mx-auto mb-4 text-primary" />
                  <h3 className="text-xl font-bold mb-3">Место силы</h3>
                  <p className="text-muted-foreground">
                    Роща становится местом, куда семья может приходить, вспоминать и чувствовать связь
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="pt-8">
                  <Shield className="w-12 h-12 mx-auto mb-4 text-primary" />
                  <h3 className="text-xl font-bold mb-3">Бесплатно</h3>
                  <p className="text-muted-foreground">
                    Участие в программе 'Роща славы' полностью бесплатно для семей защитников
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Как принять участие
            </h2>
            
            <div className="max-w-3xl mx-auto space-y-8">
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-xl">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Заполните заявку</h3>
                  <p className="text-muted-foreground">
                    Расскажите о человеке, в честь которого хотите посадить дерево
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-xl">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Получите приглашение</h3>
                  <p className="text-muted-foreground">
                    Мы свяжемся с вами и пригласим на ближайшую посадку в вашем городе
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-xl">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Посадите дерево</h3>
                  <p className="text-muted-foreground">
                    Вместе с организаторами и другими семьями посадите дерево памяти
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-xl">
                  4
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Возвращайтесь</h3>
                  <p className="text-muted-foreground">
                    У дерева будет табличка с именем. Вы всегда сможете вернуться к нему
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Application Form */}
        <section className="py-20 bg-muted">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
                Посадить дерево в Роще славы
              </h2>
              <p className="text-center text-muted-foreground mb-8">
                Заполните заявку, и мы свяжемся с вами
              </p>
              
              <Card>
                <CardContent className="pt-6">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Ваше имя *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Ваше имя"
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="memorial-email">Email *</Label>
                        <Input
                          id="memorial-email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="ivan@example.com"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="memorial-phone">Телефон *</Label>
                        <Input
                          id="memorial-phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+7 (999) 123-45-67"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="heroName">Имя защитника *</Label>
                      <Input
                        id="heroName"
                        value={formData.heroName}
                        onChange={(e) => setFormData({ ...formData, heroName: e.target.value })}
                        placeholder="Имя человека, в честь которого будет посажено дерево"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="story">История (необязательно)</Label>
                      <Textarea
                        id="story"
                        value={formData.story}
                        onChange={(e) => setFormData({ ...formData, story: e.target.value })}
                        placeholder="Расскажите о человеке, в честь которого хотите посадить дерево..."
                        rows={4}
                      />
                    </div>

                    <Button type="submit" className="w-full" size="lg">
                      Отправить заявку
                    </Button>
                    
                    <p className="text-sm text-center text-muted-foreground">
                      Участие в программе 'Роща славы' полностью бесплатно
                    </p>
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

export default MemorialGrove;
