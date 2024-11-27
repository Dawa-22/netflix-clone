import React from 'react';
import './footer.css'; // Your custom footer CSS file
import 'bootstrap/dist/css/bootstrap.min.css';

import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';

function Footer() {
  return (
    <footer className="footer bg-dark text-white py-4">
      <div className="container">
        <div className="row">
          <div className="col-md-4 mb-3">
            <h5>Company</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-white">About Us</a></li>
              <li><a href="#" className="text-white">Careers</a></li>
              <li><a href="#" className="text-white">Press</a></li>
            </ul>
          </div>
          <div className="col-md-4 mb-3">
            <h5>Support</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-white">Help Center</a></li>
              <li><a href="#" className="text-white">Terms & Conditions</a></li>
              <li><a href="#" className="text-white">Privacy Policy</a></li>
            </ul>
          </div>
          <div className="social col-md-4 mb-3">
            <h5>Social Media</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-white"><FacebookIcon/></a></li>
              <li><a href="#" className="text-white"><XIcon/></a></li>
              <li><a href="#" className="text-white"><InstagramIcon/></a></li>
            </ul>
          </div>
        </div>
        <div className="text-center">
          <p>&copy; 2024 Netflix. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
