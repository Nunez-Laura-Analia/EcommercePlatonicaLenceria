// importacion css
import "./Footer.css";
// importacion librerias
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';

const Footer = () => {
  return (
    <div className="footerContainer">
      <div className="divFooterTitle">
        <h5 className="footerTitle">SEGUINOS EN NUESTRAS REDES SOCIALES</h5>
      </div>
      <div className="divFooter">
        <p>WhatsApp <WhatsAppIcon/></p>
        <p>Instagram <InstagramIcon/></p>
        <p>Facebook <FacebookIcon/></p>
      </div>
    </div>
  );
};

export default Footer;
