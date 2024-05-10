"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";
import { usePathname } from "next/navigation";
import SearchIcon from "@mui/icons-material/Search";

const Nav = () => {
  const pathname = usePathname();
  const { data: session } = useSession();
  const [searchValue, setSearchValue] = useState("");
  const [providers, setProviders] = useState(null);

  useEffect(() => {
    const setUpProviders = async () => {
      const response = await getProviders();

      setProviders(response);
    };
    setUpProviders();
  }, []);
  const handleSearchChange = (e) => {
    setSearchText(e.target.value);
  };
  function AuthButton() {
    const { data: session } = useSession();
    if (session) {
      if (pathname === "/user") {
        return (
          <>
            <div className="user-btns">
              <form>
                <label htmlFor="nav-search">
                  <SearchIcon />
                </label>
                <input
                  type="text"
                  placeholder="Search"
                  className="nav-search"
                  name="nav-search"
                  value={searchValue}
                  onChange={handleSearchChange}
                />
              </form>
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
            <button className="black_btn">View Projects</button>
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
        <h3 className="logo_text">IssueNest</h3>
      </Link>
      <AuthButton />
    </nav>
  );
};

export default Nav;
