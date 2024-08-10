import Header from "./components/Header";
import ProductList from "./components/ProductList";
import "./index.css";

const App = () => {
  return (
    <>
      <Header />
      <section>
        <ProductList
          id={0}
          price={10935000}
          title="گوشی موبایل شیائومی مدل Redmi Note 13 4G دو سیم کارت ظرفیت 256 گیگابایت و رم 8 گیگابایت"
          rate={4.4}
          isFreeShipping={true}
          count={100}
          isSpecialSale={true}
          discountPercent={3}
          imgSrc="./phoneImages/1.webp"
        />
        <ProductList
          id={1}
          price={7999000}
          title="گوشی موبایل سامسونگ مدل Galaxy A15 دو سیم کارت ظرفیت 128 گیگابایت و رم 4 گیگابایت - ویتنام"
          rate={4.4}
          isFreeShipping={true}
          count={200}
          isSpecialSale={false}
          discountPercent={0}
          imgSrc="./phoneImages/2.webp"
        />
        <ProductList
          id={2}
          price={5199000}
          title="گوشی موبایل شیائومی مدل Redmi A3 دو سیم کارت ظرفیت 128 گیگابایت و رم 4 گیگابایت"
          rate={4.1}
          isFreeShipping={true}
          count={5}
          isSpecialSale={true}
          discountPercent={3}
          imgSrc="./phoneImages/3.webp"
        />
        <ProductList
          id={3}
          price={8340000}
          title="گوشی موبایل شیائومی مدل Redmi 12 دو سیم کارت ظرفیت 256 گیگابایت و رم 8 گیگابایت به همراه شارژر - گلوبال"
          rate={4.2}
          isFreeShipping={false}
          count={80}
          isSpecialSale={true}
          discountPercent={4}
          imgSrc="./phoneImages/4.webp"
        />
        <ProductList
          id={4}
          price={45000000}
          title="گوشی موبایل اپل مدل iPhone 13 CH دو سیم‌ کارت ظرفیت 256 گیگابایت و رم 4 گیگابایت - نات اکتیو"
          rate={4.5}
          isFreeShipping={true}
          count={100}
          isSpecialSale={false}
          discountPercent={0}
          imgSrc="./phoneImages/5.webp"
        />
        <ProductList
          id={5}
          price={32000000}
          title="گوشی موبایل اپل مدل iPhone 11 تک سیم‌ کارت ظرفیت 64 گیگابایت و رم 4 گیگابایت - نات اکتیو"
          rate={4.4}
          isFreeShipping={false}
          count={120}
          isSpecialSale={true}
          discountPercent={5}
          imgSrc="./phoneImages/6.webp"
        />
        <ProductList
          id={6}
          price={85000000}
          title="گوشی موبایل اپل مدل iPhone 13 Pro تک سیم‌ کارت ظرفیت 1ترابایت و رم 6 گیگابایت - نات اکتیو ریفربیش پارت نامبر F"
          rate={5}
          isFreeShipping={true}
          count={3}
          isSpecialSale={false}
          discountPercent={0}
          imgSrc="./phoneImages/7.webp"
        />
        <ProductList
          id={7}
          price={92000000}
          title="گوشی موبایل اپل مدل iPhone 13 Pro Max CH دو سیم‌ کارت ظرفیت 512 گیگابایت و رم 6 گیگابایت - نات اکتیو"
          rate={4.9}
          isFreeShipping={false}
          count={1}
          isSpecialSale={true}
          discountPercent={2}
          imgSrc="./phoneImages/8.webp"
        />
      </section>
    </>
  );
};

export default App;
