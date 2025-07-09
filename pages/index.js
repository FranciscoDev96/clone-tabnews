import { useState, useEffect } from "react";

function Home() {
  const [hearts, setHearts] = useState([]);

  const addHeart = () => {
    const newHeart = {
      id: Date.now(),
      left: Math.random() * 100,
    };

    setHearts((prev) => [...prev, newHeart]);
  };

  useEffect(() => {
    if (hearts.length === 0) return;

    const timer = setTimeout(() => {
      setHearts((prev) => prev.slice(1));
    }, 3000);

    return () => clearTimeout(timer);
  }, [hearts]);

  return (
    <div
      style={{
        position: "relative",
        height: "100vh",
        overflow: "hidden",
        textAlign: "center",
        paddingTop: "50px",
      }}
    >
      <h1>Em construção. Um blog para conversarmos sobre paixões.</h1>

      <button
        onClick={addHeart}
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          borderRadius: "8px",
          border: "none",
          backgroundColor: rgb(51, 57, 125),
          color: "white",
          cursor: "pointer",
          marginTop: "20px",
        }}
      >
        Aperte aqui
      </button>

      {/* Frase adicional */}
      <p style={{ fontSize: "18px", marginTop: "20px", color: "#444" }}>
        Para amantes de uma boa conversa!
      </p>

      {/* Renderiza os corações */}
      {hearts.map(({ id, left }) => (
        <span
          key={id}
          style={{
            position: "absolute",
            top: 0,
            left: `${left}%`,
            fontSize: "24px",
            animation: "fall 3s linear forwards",
            pointerEvents: "none",
            userSelect: "none",
            color: "red",
          }}
        >
          🏀, 🎮, 🔬
        </span>
      ))}

      {/* Estilo da animação */}
      <style>{`
            @keyframes fall {
            to {
                transform: translateY(100vh);
                opacity: 0;
                }
            }        
        }`}</style>
    </div>
  );
}

export default Home;
