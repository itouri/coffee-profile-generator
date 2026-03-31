import { useState } from "react";
import { Header } from "./components/Header";
import "./App.css";

function App() {
  const [cardData, setCardData] = useState<CardData>({
    theme: "latte",
    profileImage: null,
    name: "",
    gender: "",
    ageGroup: "",
    coffeeHistory: "",
    snsId: "",
    roastLevel: "",
    brewMethod: "",
    favoriteShop: "",
    favoriteMill: "",
    favoriteKettle: "",
    favoriteDripper: "",
    prText: "",
  });

  return (
    <>
      <div className="app-container">
        <Header />
        {/* //? mainタグってなんだろう */}
        <main className="main-content">
          <FormSection cardData={cardData} setCardData={setCardData} />
          <PreviewSection cardData={cardData} />
        </main>
      </div>
    </>
  );
}

export default App;
