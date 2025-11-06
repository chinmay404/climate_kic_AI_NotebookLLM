import Link from "next/link";

export default function AuthFlowContainer({
  children,
  authState,
  footerContent,
}: {
  children: React.ReactNode;
  authState?: "signup" | "login" | "join";
  footerContent?: React.ReactNode;
}) {
  return (
    <div className="p-4 flex flex-col items-center justify-center min-h-screen bg-background">
      <div className="w-full max-w-md pt-8 pb-6 px-8 mx-4 gap-y-4 flex items-center flex-col rounded-xl shadow-lg border gap-y-2 bg-background-tint-02">
        <img 
          src="/climate-kic-logo.png" 
          alt="Climate KIC" 
          style={{ width: 70, height: 70, objectFit: "contain" }}
        />
        <div className="mt-4 w-full">{children}</div>
      </div>
      {authState === "login" && (
        <div className="text-sm mt-4 text-center w-full text-text-04 font-medium mx-auto">
          {footerContent ?? (
            <>
              Don&apos;t have an account?{" "}
              <Link
                href="/auth/signup"
                className="text-action-link-05 underline transition-colors duration-200"
              >
                Create one
              </Link>
            </>
          )}
        </div>
      )}
      {authState === "signup" && (
        <div className="text-sm mt-4 text-center w-full text-text-04 font-medium mx-auto">
          Already have an account?{" "}
          <Link
            href="/auth/login"
            className="text-action-link-05 underline transition-colors duration-200"
          >
            Log In
          </Link>
        </div>
      )}
    </div>
  );
}
