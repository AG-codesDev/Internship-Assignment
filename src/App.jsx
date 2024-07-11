import Container from "./Components/Container";

function App() {
  return (
    <>
      {/* made this flex so that container gets easliy in center */}
      <div className="bg-gray-200 w-full h-screen flex items-center justify-center">
        <Container />
      </div>
    </>
  );
}

export default App;
