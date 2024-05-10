"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";
import { usePathname } from "next/navigation";

const Nav = () => {
  const pathname = usePathname();
  const { data: session } = useSession();
  const [providers, setProviders] = useState(null);

  useEffect(() => {
    const setUpProviders = async () => {
      const response = await getProviders();

      setProviders(response);
    };
    setUpProviders();
  }, []);
  function AuthButton() {
    const { data: session } = useSession();
    if (session) {
      if (pathname === "/user") {
        return (
          <>
            <div className="user-btns">
              <button className="black_btn">View Projects</button>
              <button onClick={() => signOut()} className="black_btn">
                Sign Out{" "}
              </button>
            </div>
          </>
        );
      }
      return (
        <>
          <button onClick={() => signOut()} className="black_btn">
            Sign Out{" "}
          </button>
        </>
      );
    }
    if (pathname === "/user") {
      return (
        <>
          <div className="user-btns">
            <button className="black_btn">Create Issue</button>
            <button onClick={() => signIn()} className="black_btn">
              Sign In{" "}
            </button>
          </div>
        </>
      );
    }
    return (
      <>
        <div>
          <button onClick={() => signIn()} className="black_btn">
            Sign In{" "}
          </button>
        </div>
      </>
    );
  }

  return (
    <nav className="nav">
      <Link href="/" className="flex gap-2 flex-center">
        <h4 className="logo_text">IssueNest</h4>
      </Link>
      <AuthButton />
    </nav>
  );
};

export default Nav;
