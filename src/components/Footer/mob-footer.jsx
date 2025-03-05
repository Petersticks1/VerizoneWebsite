import { useState } from "react";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const MobFooter = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery("(max-width: 1024px)");
  const [isExpanded, setIsExpanded] = useState(false);

  if (!isMobile) return null;

  const handleAccordionChange = () => {
    setIsExpanded((prev) => !prev);
  };

  return (
    <footer className="bg-[#002b1f] text-white  p-6 font-sans">
      {/* Logo */}
      <div className="mb-4 flex justify-start">
        <div className="bg-white w-[155px] h-[47px] rounded-[6px] flex items-center justify-center">
          <img src="./Logo.png" alt="Verizone" className="w-[103.23px] " />
        </div>
      </div>

      {/* Contact Accordion */}
      <Accordion
        sx={{ backgroundColor: "#002b1f", color: "white" }}
        className="rounded-lg shadow-md my-2"
        expanded={isExpanded}
        onChange={handleAccordionChange}
      >
        <AccordionSummary
          expandIcon={
            isExpanded ? (
              <ExpandLessIcon sx={{ color: "white" }} />
            ) : (
              <ExpandMoreIcon sx={{ color: "white" }} />
            )
          }
          sx={{
            backgroundColor: "#002b1f",
            color: "white",
            fontWeight: "bold",
            paddingX: 1,
            paddingY: 1,
          }}
        >
          <span>CONTACT</span>
        </AccordionSummary>
        <AccordionDetails
          sx={{
            backgroundColor: "#004233",
            color: "white",
            paddingX: 2,
            paddingY: 2,
            borderRadius: "0 0 8px 8px",
          }}
        >
          <p>Email: info@verizone.com</p>
          <p>Phone: 0706 090 0928</p>
          <p>Address: 1, Agbomabiwon Rd Guzape, Abuja</p>
        </AccordionDetails>
      </Accordion>

      {/* Privacy Policy and Back to Top */}
      <div className="mt-4 space-y-2 font-semibold text-left">
        <p className="cursor-pointer">PRIVACY POLICY</p>
        <p className="cursor-pointer">BACK TO TOP</p>
      </div>

      {/* Newsletter Subscription */}
      <div className="mt-6 text-left">
        <p className="mb-2">Subscribe to our Newsletter</p>
        <form className="flex">
          <input
            type="email"
            placeholder="Email Address"
            className="p-2 w-full text-black rounded-l-lg border border-gray-300 focus:outline-none"
          />
          <button
            type="submit"
            className="p-2 bg-green-600 text-white rounded-r-lg hover:bg-green-700"
          >
            Subscribe
          </button>
        </form>
      </div>

      {/* Footer Bottom - Centered Content */}
      <div className="mt-6 border-t border-gray-400 pt-4 text-sm flex flex-col items-center">
        <p className="text-center">© 2024 Verizone</p>
        <div className="flex justify-center space-x-4 mt-2 text-green-500">
          <a href="#" aria-label="Facebook" className="hover:text-green-400">
            <FaFacebook size={24} />
          </a>
          <a href="#" aria-label="Twitter" className="hover:text-green-400">
            <FaTwitter size={24} />
          </a>
          <a href="#" aria-label="Instagram" className="hover:text-green-400">
            <FaInstagram size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default MobFooter;
