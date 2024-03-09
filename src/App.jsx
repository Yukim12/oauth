import FormsFirebase from "./page/Formsfirebase";
import { AuthProvider } from "./context/authContext";
function App() {
  return (
    <div>
      <AuthProvider>
        <h1>oauth</h1>
        <FormsFirebase />
      </AuthProvider>
    </div>
  );
}

export default App;