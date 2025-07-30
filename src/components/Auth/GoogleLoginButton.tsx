import { GoogleLogin, type CredentialResponse } from "@react-oauth/google";

type GoogleLoginButtonProps = {
  onLoginSuccess: (token: string) => void;
  onLoginError?: () => void;
};

export const GoogleLoginButton = ({
  onLoginSuccess,
  onLoginError,
}: GoogleLoginButtonProps) => {
  return (
    <GoogleLogin
      onSuccess={(response: CredentialResponse) => {
        console.log("Google Login Success", response);
        if (response.credential) {
          onLoginSuccess(response.credential);
        } else {
          console.warn("No credential returned");
          onLoginError?.();
        }
      }}
      onError={() => {
        console.error("Google Login Failed");
        onLoginError?.();
      }}
      useOneTap={false}
    />
  );
};
