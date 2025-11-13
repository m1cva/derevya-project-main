import { Link } from "react-router-dom";
import { TreePine, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-forest-dark text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <TreePine className="h-8 w-8" />
              <span className="text-2xl font-bold">ДеревьЯ</span>
            </div>
            <p className="text-sm opacity-90">
              Покупай саженцы — сажай лес. Лес, в который можно вернуться.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Навигация</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm opacity-90 hover:opacity-100 transition-opacity">
                  Главная
                </Link>
              </li>
              <li>
                <Link to="/corporate" className="text-sm opacity-90 hover:opacity-100 transition-opacity">
                  Для компаний
                </Link>
              </li>
              <li>
                <Link to="/stories" className="text-sm opacity-90 hover:opacity-100 transition-opacity">
                  Истории
                </Link>
              </li>
              <li>
                <Link to="/memorial-grove" className="text-sm opacity-90 hover:opacity-100 transition-opacity">
                  Роща славы
                </Link>
              </li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="font-semibold mb-4">Программы</h3>
            <ul className="space-y-2">
              <li className="text-sm opacity-90">Посади дерево — стань мужчиной</li>
              <li className="text-sm opacity-90">Свадебное дерево</li>
              <li className="text-sm opacity-90">Роща славы</li>
              <li className="text-sm opacity-90">Корпоративное шефство</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Контакты</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm opacity-90">
                <Mail className="h-4 w-4" />
                <a href="mailto:info@derevya.ru" className="hover:opacity-100 transition-opacity">
                  info@derevya.ru
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm opacity-90">
                <Phone className="h-4 w-4" />
                <a href="tel:+79991234567" className="hover:opacity-100 transition-opacity">
                  +7 (999) 123-45-67
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm opacity-90">
                <MapPin className="h-4 w-4 mt-0.5" />
                <span>Москва, Россия</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-primary-foreground/20 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm opacity-75">© 2024 ДеревьЯ. Все права защищены.</p>
          <div className="flex gap-6">
            <Link to="/privacy" className="text-sm opacity-75 hover:opacity-100 transition-opacity">
              Политика конфиденциальности
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
