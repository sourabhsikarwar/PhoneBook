import Login from "./pages/Login";

function App() {
  return (
    <div>
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-xl text-red-500 font-bold">
          Hello, This is a Contact List App
        </h1>
        <Login />
      </div>
    </div>
  );
}

export default App;
