import React, { useEffect } from 'react';

//import aos foe scroll effects
import AOS from 'aos';
import 'aos/dist/aos.css';

import Photo1 from '../../../assets/images/hair-photo-1-2-x.jpg';
import Photo2 from '../../../assets/images/sex-photo-1-2-x.jpg';
import './style.scss';

const Panel = ({ reverse, children }) => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <>
      <div data-aos="fade-up-right" className="panel__parent">
        <div className="panel__img-parent">
          <img src={Photo1} alt="photo1" />
        </div>
        <div className="panel__content-parent">
          <h2>01</h2>
          <h6>HAIR LOSS</h6>
          <h5>Hair loss needn’t be irreversible. We can help!</h5>
          <p>
            Hair loss needn’t be irreversible. There’s a scientifically proven
            way that’s most effective in keeping and regrowing your hair. It’s
            all to do with blocking a pesky hormone called DHT. That’s the bad
            guy behind hair loss. And you can keep him at bay. The choice is
            yours.
          </p>
        </div>
      </div>

      <div data-aos="fade-down-right" className="second__parent">
        <div className="second__content-parent">
          <h2>02</h2>
          <h6>Erectile Dysfunction</h6>
          <h5>Erections can be a tricky thing. But no need to feel down!</h5>
          <p>
            There are plenty of reasons why you might be having difficulty in
            the erection department. We can help you figure out possible reasons
            why. And prescribe a pill if needed.
          </p>
        </div>

        <div className="second__img-parent">
          <img src={Photo2} alt="photo2" />
        </div>
      </div>
    </>
  );
};

export default Panel;
