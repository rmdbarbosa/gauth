import { GoogleOAuthProvider } from "@react-oauth/google";

type Props = {
  children: React.ReactNode;
};

export const AuthProvider = ({ children }: Props) => {
  return (
    <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>
      {children}
    </GoogleOAuthProvider>
  );
};
