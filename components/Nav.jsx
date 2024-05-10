"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";
import { usePathname } from "next/navigation";
import SearchIcon from "@mui/icons-material/Search";
import Button from "@mui/material/Button";

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
              <Button variant="outlined" color="secondary">
                View Projects
              </Button>
              <Button onClick={() => signOut()} variant="outlined" color="secondary">
                Sign Out{" "}
              </Button>
            </div>
          </>
        );
      }
      return (
        <>
          <Button onClick={() => signOut()} variant="outlined" color="secondary">
            Sign Out{" "}
          </Button>
        </>
      );
    }
    if (pathname === "/user") {
      return (
        <>
          <div className="user-btns">
            <Button variant="outlined" color="secondary">
              View Projects
            </Button>
            <Button onClick={() => signIn()} variant="outlined" color="secondary">
              Sign In{" "}
            </Button>
          </div>
        </>
      );
    }
    return (
      <>
        <div>
          <Button onClick={() => signIn()} variant="outlined" color="secondary">
            Sign In{" "}
          </Button>
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
