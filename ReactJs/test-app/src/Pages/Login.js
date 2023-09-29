import React from "react";
import modelGirl from "../asset/images/image1.jpeg";
import modelGirl2 from "../asset/images/image1.jpeg";
import modelGirl4 from "../asset/images/image1.jpeg";
import modelGirl5 from "../asset/images/image1.jpeg";

const images = [modelGirl, modelGirl2, modelGirl4, modelGirl5];

function Login() {
  return (
    <div>
      <h2>Login page</h2>
      <div>
        {images.map((item) => {
          return (
            <>
              <div>
                <img src={item} width={400} />
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
}

export default Login;
