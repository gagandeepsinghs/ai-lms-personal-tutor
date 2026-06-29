import { SignIn } from "@clerk/nextjs";

export default function LoginPage() {
  return (
    <SignIn
      path="/login"
      routing="path"
      signUpUrl="/register"
      fallbackRedirectUrl="/dashboard"
      appearance={{
        elements: {
          formButtonPrimary:
            "bg-primary hover:bg-primary/90 text-primary-foreground",
          card: "bg-background",
          headerTitle: "text-foreground",
          headerSubtitle: "text-muted-foreground",
          socialButtonsBlockButton: 
            "bg-background border border-input hover:bg-accent hover:text-accent-foreground",
          socialButtonsBlockButtonText: "text-foreground font-semibold",
          dividerLine: "bg-border",
          dividerText: "text-muted-foreground",
          formFieldLabel: "text-foreground",
          formFieldInput: "bg-background border border-input text-foreground",
          footerActionText: "text-muted-foreground",
          footerActionLink: "text-primary hover:text-primary/90",
        },
      }}
    />
  );
}
