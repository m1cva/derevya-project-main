import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";

const ParticipationForm = () => {
  const [city, setCity] = useState("");
  const [format, setFormat] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const cities = [
    "Москва",
    "Санкт-Петербург",
    "Казань",
    "Екатеринбург",
    "Новосибирск",
    "Краснодар",
  ];

  const formats = [
    { value: "individual", label: "Частное лицо", price: 500 },
    { value: "become-man", label: "Посади дерево — стань мужчиной", price: 5000 },
    { value: "wedding", label: "Свадебное дерево", price: 5000 },
    { value: "memorial", label: "Роща славы", price: 5000 },
  ];

  const calculateTotal = () => {
    const selectedFormat = formats.find((f) => f.value === format);
    return selectedFormat ? selectedFormat.price * quantity : 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!city || !format || !name || !email || !phone) {
      toast.error("Пожалуйста, заполните все поля");
      return;
    }

    toast.success("Заявка отправлена! Мы свяжемся с вами в ближайшее время.");
    
    // Reset form
    setCity("");
    setFormat("");
    setQuantity(1);
    setName("");
    setEmail("");
    setPhone("");
  };

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>Заявка на участие</CardTitle>
        <CardDescription>Выберите город и формат участия в посадке леса</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="city">Город проведения</Label>
            <Select value={city} onValueChange={setCity}>
              <SelectTrigger id="city">
                <SelectValue placeholder="Выберите город" />
              </SelectTrigger>
              <SelectContent>
                {cities.map((cityName) => (
                  <SelectItem key={cityName} value={cityName}>
                    {cityName}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="format">Формат участия</Label>
            <Select value={format} onValueChange={setFormat}>
              <SelectTrigger id="format">
                <SelectValue placeholder="Выберите формат" />
              </SelectTrigger>
              <SelectContent>
                {formats.map((formatOption) => (
                  <SelectItem key={formatOption.value} value={formatOption.value}>
                    {formatOption.label} — {formatOption.price} ₽
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="quantity">Количество саженцев</Label>
            <Input
              id="quantity"
              type="number"
              min="1"
              value={quantity}
              onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
            />
          </div>

          {format && (
            <div className="p-4 bg-accent rounded-lg">
              <p className="text-lg font-semibold">
                Итого: {calculateTotal().toLocaleString()} ₽
              </p>
            </div>
          )}

          <div className="space-y-4 pt-4 border-t">
            <div className="space-y-2">
              <Label htmlFor="name">Ваше имя</Label>
              <Input
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Иван Иванов"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="ivan@example.com"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Телефон</Label>
              <Input
                id="phone"
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="+7 (999) 123-45-67"
              />
            </div>
          </div>

          <Button type="submit" className="w-full" size="lg">
            Отправить заявку
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default ParticipationForm;
