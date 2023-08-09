import { Link } from "react-router-dom";
import aboutImage from "../../assets/headshot.jpg"

export default function About() {
  return (
    <section>
      <div>
        <h2>About Me</h2>
        <img src={aboutImage} alt="photo" className="image-style-1"/>
        <p className="paragraph">
          Helvetica put a bird on it church-key Blue Bottle banjo bespoke brunch
          Etsy authentic Marfa quinoa typewriter plaid direct trade small batch
          wayfarers bicycle rights cliche craft beer gastropub single-origin
          coffee Godard Carles you probably haven't heard of them irony pickled
          kitsch synth sriracha gentrify literally heirloom blog Truffaut paleo
          scenester
        </p>
        </div>
    </section>
  );
}
