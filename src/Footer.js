import './App.css';
import label from "./assets/label-text.png";

function Footer() {
    return (
      <section className="Footer">
        <div class="last-line">
                <div class="last-text">
                    <p>Credits: photos from <a href="http://ww25.upsplash.com">Upsplash.com</a>. icons from <a href="https://icons8.ru/">Icons8</a>, graphics from <a href="https://craftwork.design/">craftwork.design</a>.</p>
                </div>
            </div>
            <div class="nFactlorial">
                <img src={label} />
            </div>     
      </section>
    );
  }
  
  export default Footer;