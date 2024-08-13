import Logo from "/logo.svg";
import Banner from "/banner.png";
import { useState } from "react";

const brandDetails = [
  {
    id: 1,
    text: "Sign in with Google",
    url: "/google.svg",
  },
  {
    id: 2,
    text: "Continue with Facebook",
    url: "/facebook.svg",
  },
  {
    id: 3,
    text: "Continue with Linkedin",
    url: "/linkedin.svg",
  },
  {
    id: 4,
    text: "Continue with Apple",
    url: "/apple.svg",
  },
  {
    id: 5,
    text: "Continue with WeChat",
    url: "/wechat.svg",
  },
];

function App() {
  const [emal, setEmal] = useState("");
  const [passwrd, setPasswrd] = useState("");
  const [display, setDisplay] = useState(false);

  return (
    <>
      <main>
        <div className="logoCtn">
          <div>
            <img src={Logo} alt="Banner Image" />
          </div>

          <select name="" id="">
            <option value="en">English</option>
            <option value="ch">中國</option>
            <option value="fr">français</option>
          </select>
        </div>

        <div className="formArea">
          <div className="bannerCtn">
            <img src={Banner} alt="Banner Image" />
          </div>
          <div className="form">
            <form>
              <div className="formControl">
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                  autoComplete="off"
                  value={emal}
                  onChange={(e)=> setEmal(e.target.value)}
                  />
              </div>
              {
                display && 
                  <div className="formControl">
                    <input
                      type="password"
                      name="password"
                      id="password"
                      placeholder="Please enter your password"
                      autoComplete="off"
                      value={passwrd}
                      onChange={(e)=> setPasswrd(e.target.value)}
                    />
                  </div>
                }

                  <div className="texts">
                    <ul>
                      <li>Forgot Password</li>
                      <li>New User Join Free</li>
                      <li>Stay logged in for one week</li>
                    </ul>
                  </div>
                

              {display ? (
                <button type="submit">Login</button>
              ) : (
                <button onClick={(e)=> {
                  e.preventDefault()
                  if(emal) setDisplay(true)
                  if(!emal) alert("Input domain email address")
                }}>Next</button>
              )}
            </form>

            <div className="brands">
              {brandDetails.map((brands) => {
                return (
                  <div className="brand" key={brands.id}>
                    <div className="imgCtn">
                      <img src={brands.url} alt="" />
                    </div>
                    <p>{brands.text}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <footer>
          <div>
            <p>About ECHEMI</p>
            <p>Common Questions</p>
            <p>For Suppliers</p>
            <p>For Buyers</p>
            <p className="diff">Contact Us</p>
            <p>Terms of Use</p>
            <p>Privacy Notice</p>
          </div>
          <div>
            <p>
              鲁ICP备16009155号-1 | Copyright@Qingdao ECHEMI Digital Technology
              Co., Ltd.
            </p>
          </div>
        </footer>
      </main>
    </>
  );
}

export default App;
