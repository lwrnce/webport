import './Social.css';

function Social() {
    return (
        <div className="smbox">
            <h2 className="social">Social Media</h2>
            <ul className="sm">
                <li className="smlink">
                    <a className="hvr-pulse-grow" href="facebook.com"><i className="fab fa-facebook"></i></a>
                </li>
                <li className="smlink">
                    <a className="hvr-pulse-grow" href="github.com"><i className="fab fa-github"></i></a>
                </li>
                
                <li className="smlink"> 
                    <a className="hvr-pulse-grow instalink" href="instagram.com"><i className="fab fa-instagram"></i></a>
                </li>
                <li className="smlink">
                    <a className="hvr-pulse-grow" href="linkedin.com"><i className="fab fa-linkedin"></i></a>
                </li>
            </ul>
        </div>
    );
}

export default Social;