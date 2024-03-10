const Footer = () => {
  return (
    <>
      <div className="w-full bg-gray-200 h-80">
        <div className="flex flex-row justify-around w-full p-5 pt-10">
          <div>
            <h3 className="text-red-600 font-bold text-lg tracking-wider">
              NEED HELP
            </h3>
            <ul className="flex flex-col mt-4 gap-4">
              <li className="font-bold text-gray-600 text-sm hover:text-red-600">
                Contact Us
              </li>
              <li className="font-bold text-gray-600 text-sm hover:text-red-600">
                Track Orders
              </li>
              <li className="font-bold text-gray-600 text-sm hover:text-red-600">
                Return & Refunds
              </li>
              <li className="font-bold text-gray-600 text-sm hover:text-red-600">
                FAQs
              </li>
              <li className="font-bold text-gray-600 text-sm hover:text-red-600">
                My Acounts
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-red-600 font-bold text-lg tracking-wider">
              COMPANY
            </h3>
            <ul className="flex flex-col mt-4 gap-4">
              <li className="font-bold text-gray-600 text-sm hover:text-red-600">
                About Us
              </li>
              <li className="font-bold text-gray-600 text-sm hover:text-red-600">
                Careers
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-red-600 font-bold text-lg tracking-wider">
              MORE INFO
            </h3>
            <ul className="flex flex-col mt-4 gap-4">
              <li className="font-bold text-gray-600 text-sm hover:text-red-600">
                T&C
              </li>
              <li className="font-bold text-gray-600 text-sm hover:text-red-600">
                Privacy Policy
              </li>
              <li className="font-bold text-gray-600 text-sm hover:text-red-600">
                Site Map
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-red-600 font-bold text-lg tracking-wider">
              STORE NEAR ME
            </h3>
            <ul className="flex flex-col mt-4 gap-4">
              <li className="flex gap-1 font-bold text-gray-600 text-sm hover:text-red-600">
                Kottayam
                <span>
                  <p className="text-gray-400">comming soon...</p>
                </span>
              </li>
              <li className="flex gap-1 font-bold text-gray-600 text-sm hover:text-red-600">
                Calicut
                <span>
                  <p className="text-gray-400">comming soon...</p>
                </span>
              </li>
              <li className="flex gap-1 font-bold text-gray-600 text-sm hover:text-red-600">
                Bangalore
                <span>
                  <p className="text-gray-400">comming soon...</p>
                </span>
              </li>
              <li className="flex gap-1 font-bold text-gray-600 text-sm hover:text-red-600">
                Mumbai
                <span>
                  <p className="text-gray-400">comming soon...</p>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
