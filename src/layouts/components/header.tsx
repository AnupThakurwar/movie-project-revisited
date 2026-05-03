import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
// import PageThemeToggler from "../../Component/PageThemeToggler/pageThemeToggler";
import {
  Film,
  Heart,
  Info,
  ListVideo,
  Menu,
  TvMinimalPlay,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const MovieHeader = () => {
  // const classname = document.body.className;
  // const favoriteMovie = useSelector((state: RootState) => state.favMovie);
  const [showNav, setShowNav] = useState(false);
  const activeUrl = useLocation();

  // const [toggleTheme, setToggleTheme] = useState(classname);

  const navHandler = () => {
    setShowNav(!showNav);
  };

  // const toggleCallback = (theme) => {
  //   if (theme) {
  //     setToggleTheme(theme);
  //   }
  // };

  const navLinks = [
    { to: "/", label: "Movies", icon: <Film className="w-4 h-4 mr-2" /> },
    {
      to: "/tvshows",
      label: "Tv shows",
      icon: <TvMinimalPlay className="w-4 h-4 mr-2" />,
    },
    {
      to: "/favoritemovie",
      label: "Favorite",
      icon: <Heart className="w-4 h-4 mr-2" />,
      // count: favoriteMovie?.length,
    },
    {
      to: "/playlist",
      label: "Playlist",
      icon: <ListVideo className="w-4 h-4 mr-2" />,
    },
    {
      to: "/aboutus",
      label: "About Us",
      icon: <Info className="w-4 h-4 mr-2" />,
    },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/10">
      <div className="container flex h-16 items-center justify-between px-4">
        {/* Brand */}
        <section className="flex gap-4 items-center">
          <Link
            to="/"
            className="flex items-center space-x-2 font-bold text-xl tracking-tight text-primary"
          >
            <span className="bg-linear-90 from-purple-600 to-red-600 bg-clip-text text-transparent px-2 py-1 rounded-md">
              React Movies
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`transition-colors hover:text-white text-muted-foreground flex items-center relative ${link.to === activeUrl.pathname ? "text-white" : "text-muted-foreground"}`}
              >
                {link.label}
                {/* {link.count > 0 && (
                  <Badge
                    variant="destructive"
                    className="ml-1 px-1.5 py-0.5 text-[10px] h-4 min-w-4 flex items-center justify-center"
                  >
                    {link.count}
                  </Badge>
                )} */}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center">
            <Button
              variant="secondary"
              size="icon"
              onClick={() => navHandler()}
            >
              {showNav ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </section>
        {/* Profile */}
        <section>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="rounded-full">
                <Avatar>
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="shadcn"
                  />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-32">
              <DropdownMenuGroup>
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Billing</DropdownMenuItem>
                <DropdownMenuItem>Settings</DropdownMenuItem>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuItem variant="destructive">
                  Log out
                </DropdownMenuItem>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </section>
      </div>

      {/* Mobile Menu Overlay */}
      {showNav && (
        <div className="md:hidden border-t bg-background p-4 space-y-4 shadow-xl animate-in slide-in-from-top duration-300">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setShowNav(false)}
              className="flex items-center text-sm font-medium text-muted-foreground hover:text-primary py-2"
            >
              {link.icon}
              {link.label}
              {/* {link.count > 0 && (
                <Badge variant="destructive" className="ml-auto">
                  {link.count}
                </Badge>
              )} */}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
};

export default MovieHeader;
