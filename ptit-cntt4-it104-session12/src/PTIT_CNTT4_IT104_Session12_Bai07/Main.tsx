import Cart from "./cart";

const Main = () => {
  return (
    <main style={{ flex: 1, display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "10px", padding: "10px" }}>
      {Array.from({ length: 12 }).map((_, i) => (
        <Cart key={i} />
      ))}
    </main>
  );
};

export default Main;
