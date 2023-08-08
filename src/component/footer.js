import "./footer.css";

function Footer(){
    return(
        <div id="footer-part">
            <div id="footer-text-head">
                <p>
                    Contract
                </p>
            </div>
            <div className="foot-content">
                <div className="foot-icon">
                    <img src="/icon/phone-call 1.png" alt="call"/>
                </div>
                <div className="foot-text">
                    <p>
                        093-146-0269
                    </p>
                </div>
            </div>
            <div className="foot-content">
                <div className="foot-icon">
                    <img src="/icon/gmail-logo 1.png" alt="call"/>
                </div>
                <div className="foot-text">
                    <p>
                        Pratchayapos@gmail.com
                    </p>
                </div>
            </div>
            <div className="foot-content">
                <div className="foot-icon">
                    <img src="/icon/facebook 1.png" alt="call"/>
                </div>
                <div className="foot-text">
                    <p>
                        Pratchaya Posom
                    </p>
                </div>
            </div>
            <div className="foot-content">
                <div className="foot-icon">
                    <img src="/icon/instagram 1.png" alt="call"/>
                </div>
                <div className="foot-text">
                    <p>
                        Nokka_tent
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Footer;