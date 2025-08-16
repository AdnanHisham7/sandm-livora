import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { getCategoriesByBrand } from "../api";

interface NavbarProps {
  isHome: boolean;
}

function Navbar({ isHome }: NavbarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isShopHovered, setIsShopHovered] = useState(false);
  const [isShopMobileOpen, setIsShopMobileOpen] = useState(false);
  const [categories, setCategories] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const brandName = "livora";
        const categoriesData = await getCategoriesByBrand(brandName);
        setCategories(categoriesData);
      } catch (err) {
        console.error("Failed to fetch categories:", err);
      }
    };
    fetchCategories();
  }, []);

  const menuItems = [
    { label: "Home", path: "/" },
    { label: "Shop", path: "#" }, // No navigation, just toggles dropdown
    { label: "About Us", path: "/about" },
    { label: "Contact", path: "/contact" },
  ];

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/livora-catalogue.pdf";
    link.download = "livora-catalogue.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const isActive = (path: string) => {
    if (path === "#") {
      return location.pathname.startsWith("/category/");
    }
    return location.pathname === path;
  };

  return (
    <nav className="field top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-livera-green/20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/">
            <motion.img
              src="/livora-logo.svg"
              alt="Livora Logo"
              className="h-10 \"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <div
                key={item.path}
                className="relative"
                onMouseEnter={() =>
                  item.label === "Shop" && setIsShopHovered(true)
                }
                onMouseLeave={() =>
                  item.label === "Shop" && setIsShopHovered(false)
                }
              >
                {item.label === "Shop" ? (
                  <motion.div
                    className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 cursor-pointer ${
                      isActive(item.path)
                        ? "text-livera-green"
                        : "text-gray-600 hover:text-livera-green"
                    } group`}
                  >
                    {item.label}
                    <span
                      className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-livera-green to-emerald-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ${
                        isActive(item.path) ? "scale-x-100" : ""
                      }`}
                    ></span>
                  </motion.div>
                ) : (
                  <Link
                    to={item.path}
                    className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 ${
                      isActive(item.path)
                        ? "text-livera-green"
                        : "text-gray-600 hover:text-livera-green"
                    } group`}
                  >
                    {item.label}
                    <span
                      className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-livera-green to-emerald-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ${
                        isActive(item.path) ? "scale-x-100" : ""
                      }`}
                    ></span>
                  </Link>
                )}
                {item.label === "Shop" && isShopHovered && (
                  <motion.div
                    className="absolute top-full left-0 bg-white/95 backdrop-blur-md border border-livera-green/20 rounded-lg shadow-lg py-2 min-w-[200px] z-50"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                  >
                    {categories.map(
                      (category: { _id: string; name: string }) => (
                        <Link
                          key={category._id}
                          to={`/category/${category._id}`}
                          className="block px-4 py-2 text-sm text-gray-600 hover:text-livera-green hover:bg-gray-100 transition-colors duration-200"
                          onClick={() => setIsShopHovered(false)}
                        >
                          {category.name}
                        </Link>
                      )
                    )}
                  </motion.div>
                )}
              </div>
            ))}
          </div>

          {/* Desktop Right Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <motion.button
              onClick={handleDownload}
              className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-livera-green transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Download Catalogue
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-gray-600 hover:text-livera-green transition-colors duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            className="md:hidden absolute top-16 left-0 right-0 bg-white/95 backdrop-blur-md border-b border-livera-green/20"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col space-y-4 p-4">
              {menuItems.map((item) => (
                <div key={item.path}>
                  {item.label === "Shop" ? (
                    <motion.div
                      className={`text-left py-2 text-sm font-medium transition-colors duration-300 cursor-pointer ${
                        isActive(item.path)
                          ? "text-livera-green"
                          : "text-gray-600 hover:text-livera-green"
                      }`}
                      onClick={() => setIsShopMobileOpen(!isShopMobileOpen)}
                    >
                      {item.label}
                    </motion.div>
                  ) : (
                    <Link
                      to={item.path}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`text-left py-2 text-sm font-medium transition-colors duration-300 ${
                        isActive(item.path)
                          ? "text-livera-green"
                          : "text-gray-600 hover:text-livera-green"
                      }`}
                    >
                      {item.label}
                    </Link>
                  )}
                  {item.label === "Shop" && isShopMobileOpen && (
                    <div className="pl-4 pt-2 flex flex-col space-y-2">
                      {categories.map(
                        (category: { _id: string; name: string }) => (
                          <Link
                            key={category._id}
                            to={`/category/${category._id}`}
                            onClick={() => {
                              setIsMobileMenuOpen(false);
                              setIsShopMobileOpen(false);
                            }}
                            className="text-left py-2 text-sm text-gray-600 hover:text-livera-green transition-colors duration-300"
                          >
                            {category.name}
                          </Link>
                        )
                      )}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-4 border-t border-gray-300 space-y-2">
                <motion.button
                  onClick={() => {
                    handleDownload();
                    setIsMobileMenuOpen(false);
                  }}
                  className="w-full text-left py-2 text-sm font-medium text-gray-600 hover:text-livera-green transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Download Catalogue
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
