import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
        <div className="container mx-auto px-6 py-4">
          <nav className="flex items-center justify-between">
            <div className="text-2xl font-bold text-primary">
              Purity Мерч
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="hover:text-primary transition-colors">Главная</a>
              <a href="#services" className="hover:text-primary transition-colors">Услуги</a>
              <a href="#contact" className="hover:text-primary transition-colors">Контакты</a>
              <a href="#order" className="hover:text-primary transition-colors">Заказать</a>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="pt-20 pb-16">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
            <div className="space-y-8">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                Корпоративный мерч 
                <span className="text-primary"> с вашим логотипом</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Создаём качественные худи, футболки и свитшоты с нанесением логотипа вашей компании. 
                Профессиональный подход к корпоративному брендингу.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="text-lg px-8 py-6">
                  <Icon name="ShoppingCart" className="mr-2" />
                  Сделать заказ
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                  <Icon name="Phone" className="mr-2" />
                  Консультация
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src="/img/b956394a-1eb2-4143-b762-641e4d4397ed.jpg" 
                alt="Корпоративный мерч"
                className="w-full h-auto rounded-lg shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-card">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Наши услуги</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Полный цикл производства корпоративного мерча с индивидуальным дизайном
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-background p-8 rounded-lg border border-border hover:border-primary transition-colors">
              <Icon name="Shirt" size={48} className="text-primary mb-6" />
              <h3 className="text-2xl font-semibold mb-4">Футболки</h3>
              <p className="text-muted-foreground mb-6">
                Качественные футболки из 100% хлопка с нанесением вашего логотипа методом шелкографии или термопечати
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center">
                  <Icon name="Check" size={16} className="text-primary mr-2" />
                  Размеры XS-5XL
                </li>
                <li className="flex items-center">
                  <Icon name="Check" size={16} className="text-primary mr-2" />
                  Различные цвета
                </li>
                <li className="flex items-center">
                  <Icon name="Check" size={16} className="text-primary mr-2" />
                  От 50 штук
                </li>
              </ul>
            </div>

            <div className="bg-background p-8 rounded-lg border border-border hover:border-primary transition-colors">
              <Icon name="ShirtIcon" size={48} className="text-primary mb-6" fallback="Shirt" />
              <h3 className="text-2xl font-semibold mb-4">Худи</h3>
              <p className="text-muted-foreground mb-6">
                Тёплые худи премиум качества с капюшоном. Идеально для корпоративных мероприятий и подарков
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center">
                  <Icon name="Check" size={16} className="text-primary mr-2" />
                  Плотность 320-380 г/м²
                </li>
                <li className="flex items-center">
                  <Icon name="Check" size={16} className="text-primary mr-2" />
                  Вышивка логотипа
                </li>
                <li className="flex items-center">
                  <Icon name="Check" size={16} className="text-primary mr-2" />
                  Минимальный заказ 30 шт
                </li>
              </ul>
            </div>

            <div className="bg-background p-8 rounded-lg border border-border hover:border-primary transition-colors">
              <Icon name="Shirt" size={48} className="text-primary mb-6" />
              <h3 className="text-2xl font-semibold mb-4">Свитшоты</h3>
              <p className="text-muted-foreground mb-6">
                Стильные свитшоты без капюшона. Отлично подходят для создания единого стиля команды
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center">
                  <Icon name="Check" size={16} className="text-primary mr-2" />
                  Французская махра
                </li>
                <li className="flex items-center">
                  <Icon name="Check" size={16} className="text-primary mr-2" />
                  Прямая печать
                </li>
                <li className="flex items-center">
                  <Icon name="Check" size={16} className="text-primary mr-2" />
                  Быстрое производство
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-16 bg-background p-8 rounded-lg border border-border">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-3xl font-bold mb-4">Процесс производства</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center font-bold">1</div>
                    <div>
                      <h4 className="font-semibold">Консультация и выбор продукции</h4>
                      <p className="text-muted-foreground text-sm">Помогаем выбрать подходящие изделия под ваши задачи</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center font-bold">2</div>
                    <div>
                      <h4 className="font-semibold">Подготовка макета</h4>
                      <p className="text-muted-foreground text-sm">Адаптируем ваш логотип под выбранный способ нанесения</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center font-bold">3</div>
                    <div>
                      <h4 className="font-semibold">Производство</h4>
                      <p className="text-muted-foreground text-sm">Нанесение логотипа с контролем качества на каждом этапе</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center font-bold">4</div>
                    <div>
                      <h4 className="font-semibold">Доставка</h4>
                      <p className="text-muted-foreground text-sm">Быстрая доставка по всей России или самовывоз</p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <img 
                  src="/img/ba384e5f-29e9-413b-a283-41307ea48020.jpg" 
                  alt="Процесс производства"
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Order Form */}      
      <section id="order" className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-6">Оформить заказ</h2>
              <p className="text-xl text-muted-foreground">
                Заполните форму, и мы свяжемся с вами в течение часа
              </p>
            </div>

            <form className="bg-card p-8 rounded-lg border border-border space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Имя *</label>
                  <Input placeholder="Ваше имя" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Телефон *</label>
                  <Input placeholder="+7 (999) 123-45-67" />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Email *</label>
                <Input type="email" placeholder="mail@company.ru" />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Компания</label>
                <Input placeholder="Название компании" />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Тип изделия *</label>
                  <select className="w-full bg-input border border-border rounded-md px-3 py-2">
                    <option>Выберите тип</option>
                    <option>Футболки</option>
                    <option>Худи</option>
                    <option>Свитшоты</option>
                    <option>Комплект</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Количество *</label>
                  <Input placeholder="50" type="number" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Дополнительные пожелания</label>
                <Textarea 
                  placeholder="Расскажите о ваших требованиях к дизайну, срокам, бюджету..."
                  rows={4}
                />
              </div>

              <Button size="lg" className="w-full text-lg py-6">
                <Icon name="Send" className="mr-2" />
                Отправить заявку
              </Button>

              <p className="text-xs text-muted-foreground text-center">
                Нажимая кнопку, вы соглашаетесь с обработкой персональных данных
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-card">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Контакты</h2>
            <p className="text-xl text-muted-foreground">
              Свяжитесь с нами удобным способом
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Phone" size={32} className="text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Телефон</h3>
              <p className="text-muted-foreground">+7 (999) 123-45-67</p>
              <p className="text-sm text-muted-foreground">Пн-Пт 9:00-18:00</p>
            </div>

            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Mail" size={32} className="text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Email</h3>
              <p className="text-muted-foreground">info@puritymerch.ru</p>
              <p className="text-sm text-muted-foreground">Ответим в течение часа</p>
            </div>

            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="MessageCircle" size={32} className="text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Telegram</h3>
              <p className="text-muted-foreground">@puritymerch_bot</p>
              <p className="text-sm text-muted-foreground">Быстрые ответы 24/7</p>
            </div>
          </div>

          <div className="mt-16 text-center">
            <div className="bg-background p-8 rounded-lg border border-border inline-block">
              <h3 className="text-2xl font-bold mb-4">Готовы начать?</h3>
              <p className="text-muted-foreground mb-6">
                Получите персональное предложение и расчёт стоимости
              </p>
              <Button size="lg" className="text-lg px-8">
                <Icon name="Calculator" className="mr-2" />
                Рассчитать стоимость
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-border">
        <div className="container mx-auto px-6">
          <div className="text-center text-muted-foreground">
            <p>&copy; 2024 Purity Мерч. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;