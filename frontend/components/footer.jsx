import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className=" footer container">
      <div className="row">
        <div className="col">
          <h6>About Pretty Little Things</h6>
          <ul>
            <li>
              <Link to="/aboutus">About Us</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="email-stuff">
        <div className="container">
          <div className="row">
            <div className="email-box col">
              <p>Sign up for Pretty Little Things email </p>
              <form>
                <input type="email" placeholder="email address" />
              </form>
            </div>
            <div className="right-col col">
              <a href="https://github.com/kscali">
                <img
                  className="github-icon"
                  src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
                  alt="github"
                />
              </a>
              <a href="https://www.linkedin.com/in/koy-saeteurn-98169a167">
                <img
                  className="linkedin-icon"
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAclBMVEX///8AAAAqKiqrq6v5+fmmpqZqamrk5OTb29v29vbJyck5OTnz8/Pw8PC7u7vU1NSMjIxRUVEmJiaysrIZGRkQEBDh4eGWlpahoaFKSkrq6urDw8ODg4NBQUEeHh4wMDBiYmJ7e3taWlo+Pj4TExNwcHAdPrJ0AAAElklEQVR4nO3c63aiMBQFYAPaeq0XrHgdter7v+Ks2s6a0YZkJ5BJDmvv/5TzVYFcDnaWRd7mFMtO1ml3MgrFh0L5oVB+KJQfCuWHQvmhUH4olB8K5YdC+aFQfiiUHwrlh0L5oVB+KJQfCuWHQvnxE26HxbpcF7tVt/GCGo+HcFturuo7l/MwRFVNxlm4elGP2SRudBR2S/Uz+0mo6pqIm3By0gCVGr0Gq69+nITboxao1HUVrsK6cRFOLhVApRbbgDXWi4tQ/xX9yjzZ54aDcG0AKlWGrLJOcOHru1GoUv2e4sK9GahuQev0DyycWIBKjcNW6htYmFuFedhKfQMLP6zCj7CV+gYVThZW4WIQuFa/oMKpFahUP3CtfkGFBSCcBq7VL6iwBwjfAtfqF1RoHtB8pQhcq1+a/AxlC98AYZqTfd5L/wR4HiY69m5wTHMJW6lvYKH9gTgLW6lvYOFY6GXoMD+cWYCJDrwdhLZ7Taorig7rNOYrsReyyjpxWWszrWOcA9ZYLy7C7kbcRdhxXPMeVBETBjruW4yfN56+ckt2Objjvrumm0WtA9XWTNz3D5+Hb5uEd2U+47EH3N//3YLKzmkuXfwTv3381bBXlmU+7Kd8AX6HvRjyQ6H8UCg/FMoPhfKTmnC1y/e30/yej5dz+Tas2zSXlHA6G/2cm10Ps1qjewfh+NUU3RxqvDIc8LwHMOlllYsk1xpTmMZ6opRmmmE8InvY9p+US/OfP/nubDkILVuIGqHxiNG/wh6w8TP3+xyTEE6rF/EeUvpMR1MQ6vqO9Tl4fIzxhVtTU+ePuHdDRBdOq++g2jj3lsUTHu/CnZtPua9dxhNmn72MSAPEcxz3gOIKfYCu12JUIdLgoYvTHTWicGDrq67M0WU0HvFOswWf85q4dFxHFN68gUrtJAhrZYSP34QKHR4ZUoUj+M0AqUJ89CZWOG+9EG4ykytEXyWTKzy0Xog27AoWglMMwcK9NOFitJnPL0d8vgE+L9IQZue8P77/gcF2WB7Ag7A5VArCQ/5Ya3c3h47DmrESEOrWeW0t1/dgU6jowqN+SQJZwcHmF7GFWdVXzf5WLvj6Q2Thonp0ebYejK1lRBYantpj63PjJEBo7H+3vqWD9V5HFS6NQ8uBbUcD+y2OqELLuMv2yBAgtDyy+5bDD8kLT7YzajozZAmt7w1bfmxkBP3EQUyhdVxpGdgcUxdurGe0vPOYvBCYwZrPmEGrwhGFwMDZfKtZpC4EfqDA3KaRvBCY3plvpktokh9RCDSqmUc1yQuB3Xhzt1TyQmCZpf1Cc8Nn6sJ34PV2s/AdWtePJ7wCn4D5lMj/KKYQ+Y6Zl6NSF/4ChOaFjDYIzZMLCuULsa38yP2lFFJIIYXRhUMKKYwqPLZeiKzJU0ghhRRSSCGFFFJIIYUUUkghhRRSSCGFFFJIIYUUUkghhRSKERobYJE3Xv6zcHd6MeSkERqP2ANvnvWNp7w13SMsNBTKD4XyQ6H8UCg/FMoPhfJDofxQKD8Uyg+F8kOh/FAoPxTKD4XyQ6H8UCg/FMoPhfKTdZZF3uYUy9+ifly0H7S/lwAAAABJRU5ErkJggg=="
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-p container">
        <p>
          Copyright © 2019 Pretty Little Things USA, Inc. All rights reserved.
          Terms of Use | Privacy Policy
        </p>
        <p className="center">
          Pretty Little Things is a Sephora inspired site.
        </p>
      </div>
    </div>
  );
};

export default Footer;
