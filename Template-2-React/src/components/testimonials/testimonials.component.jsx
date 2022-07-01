import React, { useState } from "react";
import "./testimonials.styles.css";
import arr from "../../assets/HelperMethods/testimonials";

const Testimonials = () => {
  const [current, setCurrent] = useState(2);

  return (
    <div class="testimonials">
      <h3>Testimonials</h3>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
        veritatis molestiae voluptatum ullam voluptas obcaecati odio. Harum
        doloremque cum numquam.
      </p>
      {arr[current].map((el) => {
        console.log(el.image);
        return (
          <div key={el.id} class="content">
            <img src={el.image} alt="" />
            <div class="text">
              {el.p}
              <p>{el.name}</p>
            </div>
          </div>
        );
      })}
      <ul class="bullets">
        <li
          onClick={() => setCurrent(0)}
          className={current === 0 ? "active" : ""}
        ></li>
        <li
          onClick={() => setCurrent(1)}
          className={current === 1 ? "active" : ""}
        ></li>
        <li
          onClick={() => setCurrent(2)}
          className={current === 2 ? "active" : ""}
        ></li>
      </ul>
    </div>
  );
};
export default Testimonials;
