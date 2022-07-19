// Import resources
import React from "react";

// Import custom files
import tw from "../styles/twStyles";

// Component
function UserNavLinks() {
  // Define nav links arr
  const navLinksArr = [
    {
      title: "My Ads",
      link: "/cms/my-ads",
      eventKey: "ads",
      icon: <FaPlusCircle className="icon me-1" />,
    },
    {
      title: "My Gigs",
      link: "/cms/my-gigs",
      eventKey: "gigs",
      icon: <FaBriefcase className="icon me-1" />,
    },
    {
      // Sample dropdown
      name: "Sample Dropdown",
      icon: <FaWallet className="icon me-1" />,
      isDropdown: true,
      options: [
        { name: "Fund Wallet", link: "/cms/fund-wallet" },
        { name: "Transactions", link: "/cms/wallet-tranx" },
      ],
    },
  ];

  // Debug
  //console.log("Debug userNavLinks: ",)

  // Return component
  return (
    <div>
      <p>Content goes here</p>
    </div>
  ); // close return
} // close component

// Export
export default UserNavLinks;
