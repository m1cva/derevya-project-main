import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ParticipationForm from "@/components/ParticipationForm";
import heroImage from "@/assets/hero-planting.jpg";
import fatherSonImage from "@/assets/father-son-tree.jpg";
import weddingImage from "@/assets/wedding-tree.jpg";
import memorialImage from "@/assets/memorial-grove.jpg";
import { TreePine, Users, Heart, Award, ArrowRight } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section 
          className="relative h-[600px] flex items-center justify-center text-center"
          style={{
            backgroundImage: `linear-gradient(135deg, rgba(24, 81, 45, 0.8), rgba(24, 81, 45, 0.6)), url(${heroImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-6">
              Покупай саженцы — сажай лес
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              Лес, в который можно вернуться
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" asChild>
                <a href="#participation">Выбрать город и посадку</a>
              </Button>
              <Button size="lg" variant="secondary" asChild>
                <Link to="/corporate">Для компаний</Link>
              </Button>
              <Button size="lg" variant="secondary" asChild>
                <Link to="/memorial-grove">Роща славы</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Special Programs */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Специальные программы
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {/* Program 1 */}
              <Card className="overflow-hidden">
                <div 
                  className="h-64 bg-cover bg-center"
                  style={{ backgroundImage: `url(${fatherSonImage})` }}
                />
                <CardHeader>
                  <CardTitle>Посади дерево. Стань мужчиной.</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    Мужчина — это не про бороду. Это про ответственность. Один мальчик сажает одно дерево — и в этот момент у него появляется что-то своё: живое, растущее, зависимое от него.
                  </p>
                  <p className="text-muted-foreground">
                    Раз в год мы проводим ритуал посвящения в мужчины. Отец и сын выходят на землю, берут лопаты и сажают дерево.
                  </p>
                  <div className="flex items-center justify-between pt-4">
                    <span className="text-lg font-semibold">5 000 ₽</span>
                    <Button asChild>
                      <a href="#participation">Записаться</a>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Program 2 */}
              <Card className="overflow-hidden">
                <div 
                  className="h-64 bg-cover bg-center"
                  style={{ backgroundImage: `url(${weddingImage})` }}
                />
                <CardHeader>
                  <CardTitle>Свадебное дерево</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    Свадьба заканчивается, фото блекнут, торт съеден. Но если в день росписи вы сажаете своё дерево — память становится живой.
                  </p>
                  <p className="text-muted-foreground">
                    Оно растёт вместе с вами, переживая ветра и морозы. Как и семья: главное — не бросать.
                  </p>
                  <div className="flex items-center justify-between pt-4">
                    <span className="text-lg font-semibold">5 000 ₽</span>
                    <Button asChild>
                      <a href="#participation">Посадить</a>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Program 3 */}
              <Card className="overflow-hidden">
                <div 
                  className="h-64 bg-cover bg-center"
                  style={{ backgroundImage: `url(${memorialImage})` }}
                />
                <CardHeader>
                  <CardTitle>Роща славы</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    Есть вещи, которые словами не лечатся. Когда отец на фронте. Когда его уже нет.
                  </p>
                  <p className="text-muted-foreground">
                    Мы создаём живой мемориал — место, где дети и мамы сажают деревья в честь своих защитников. У каждого дерева — имя.
                  </p>
                  <div className="flex items-center justify-between pt-4">
                    <span className="text-lg font-semibold">Бесплатно</span>
                    <Button asChild variant="secondary">
                      <Link to="/memorial-grove">Подробнее</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-20 bg-muted">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Как это работает
            </h2>
            
            <div className="grid md:grid-cols-5 gap-6 max-w-5xl mx-auto">
              {[
                { step: "1", title: "Выбираете город", icon: TreePine },
                { step: "2", title: "Оплачиваете", icon: Award },
                { step: "3", title: "Получаете приглашение", icon: Heart },
                { step: "4", title: "Приезжаете и сажаете", icon: Users },
                { step: "5", title: "Получаете сертификат", icon: Award },
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                    {item.step}
                  </div>
                  <item.icon className="w-8 h-8 mx-auto mb-2 text-primary" />
                  <p className="font-medium">{item.title}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Participation Form */}
        <section id="participation" className="py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Участвовать в посадке
            </h2>
            <ParticipationForm />
          </div>
        </section>

        {/* Corporate Section */}
        <section className="py-20 bg-muted">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Корпоративное шефство
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Три уровня участия для компаний: от 1 до 100 гектаров леса
            </p>
            <Button size="lg" asChild>
              <Link to="/corporate">
                Узнать подробнее <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </section>

        {/* Statistics */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Почему это важно
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-5xl font-bold mb-2">1.5 млн</div>
                <p className="text-lg opacity-90">гектаров леса теряется в России ежегодно</p>
              </div>
              <div>
                <div className="text-5xl font-bold mb-2">10 лет</div>
                <p className="text-lg opacity-90">нужно, чтобы дерево стало полноценным</p>
              </div>
              <div>
                <div className="text-5xl font-bold mb-2">100+</div>
                <p className="text-lg opacity-90">семей уже участвуют в проекте</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Не лайкайте — сажайте
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Каждое дерево — это реальное действие, которое изменит будущее
            </p>
            <Button size="lg" asChild>
              <a href="#participation">Начать прямо сейчас</a>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
