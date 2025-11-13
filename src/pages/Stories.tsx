import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import heroImage from "@/assets/hero-planting.jpg";
import fatherSonImage from "@/assets/father-son-tree.jpg";
import weddingImage from "@/assets/wedding-tree.jpg";
import corporateImage from "@/assets/corporate-planting.jpg";

const Stories = () => {
  const stories = [
    {
      id: 1,
      title: "Семья Ивановых: дерево для сына",
      image: fatherSonImage,
      date: "Август 2024",
      description: "Отец и 10-летний сын Максим посадили дуб в рамках программы 'Посади дерево — стань мужчиной'. 'Это был особенный момент для нас обоих', — говорит отец. Теперь они планируют приезжать каждый год, чтобы увидеть, как растёт их дерево.",
      participants: "2 человека",
      trees: "1 дерево",
    },
    {
      id: 2,
      title: "Свадьба Анны и Дмитрия",
      image: weddingImage,
      date: "Июнь 2024",
      description: "Молодожёны решили начать семейную жизнь с посадки кедра. 'Вместо того, чтобы купить очередной букет, который завянет через неделю, мы создали живую память', — рассказывает Анна. Пара планирует привести сюда своих будущих детей.",
      participants: "2 человека",
      trees: "1 дерево",
    },
    {
      id: 3,
      title: "ООО 'ТехноГрупп': корпоративный лес",
      image: corporateImage,
      date: "Сентябрь 2024",
      description: "Компания из 50 сотрудников взяла шефство над 10 гектарами леса. Весь коллектив выехал на посадку, создав незабываемое командное мероприятие. 'Это не просто корпоратив, это наш вклад в будущее', — делится директор компании.",
      participants: "50 человек",
      trees: "10 000 деревьев",
    },
    {
      id: 4,
      title: "Школа №15: экологический урок",
      image: heroImage,
      date: "Май 2024",
      description: "Выпускники 11 класса вместе с учителями посадили берёзовую аллею в честь окончания школы. Каждый ученик посадил своё дерево. Теперь это место стало традицией — каждый выпуск будет сажать свою аллею.",
      participants: "32 человека",
      trees: "32 дерева",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Истории посадок
            </h1>
            <p className="text-xl md:text-2xl opacity-90 max-w-2xl mx-auto">
              Реальные люди, реальные деревья, реальные истории
            </p>
          </div>
        </section>

        {/* Stats */}
        <section className="py-12 bg-muted">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-4xl font-bold text-primary mb-2">150+</div>
                <p className="text-muted-foreground">Участников</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">12 000+</div>
                <p className="text-muted-foreground">Посаженных деревьев</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">15</div>
                <p className="text-muted-foreground">Гектаров леса</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">8</div>
                <p className="text-muted-foreground">Городов</p>
              </div>
            </div>
          </div>
        </section>

        {/* Stories Grid */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-8">
              {stories.map((story) => (
                <Card key={story.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div 
                    className="h-64 bg-cover bg-center"
                    style={{ backgroundImage: `url(${story.image})` }}
                  />
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm text-muted-foreground">{story.date}</span>
                      <div className="flex gap-4 text-sm">
                        <span className="text-muted-foreground">{story.participants}</span>
                        <span className="text-primary font-medium">{story.trees}</span>
                      </div>
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-3">{story.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {story.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Video Section */}
        <section className="py-20 bg-muted">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Видео с посадок
            </h2>
            
            <div className="max-w-4xl mx-auto">
              <div className="aspect-video bg-forest-dark rounded-lg overflow-hidden">
                <div className="w-full h-full flex items-center justify-center text-primary-foreground">
                  <div className="text-center">
                    <p className="text-xl mb-2">Видео с квадрокоптера</p>
                    <p className="text-sm opacity-75">Съёмки наших посадок с высоты птичьего полёта</p>
                  </div>
                </div>
              </div>
              
              <p className="text-center text-muted-foreground mt-6">
                Каждая посадка документируется фото и видео материалами. Участники получают полный отчёт о мероприятии.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Станьте частью истории
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Каждое дерево — это ваша личная история, которая будет жить десятилетиями
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Stories;
