import { AuthProvider } from "./components/Auth/AuthProvider";
import { GoogleLoginButton } from "./components/Auth/GoogleLoginButton";

const App = () => {
  const handleGoogleLogin = async (idToken: string) => {
    console.log("Received token:", idToken);

    try {
      const response = await fetch(import.meta.env.VITE_GOOGLE_AUTH_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id_token: idToken }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Login failed");
      }

      console.log("User data from backend:", data);
    } catch (err) {
      console.error("Google login error:", err);
    }
  };

  return (
    <AuthProvider>
      <div className="flex justify-center mt-20">
        <GoogleLoginButton onLoginSuccess={handleGoogleLogin} />
      </div>
    </AuthProvider>
  );
};

export default App;
