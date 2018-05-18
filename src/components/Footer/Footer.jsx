import React, { PureComponent } from 'react';

class Footer extends PureComponent {
    render() {

        return(
            <div className="Footer fixed-bottom">
                <footer className="py-5 bg-dark">
                    <div className="container">
                        <p className="m-0 text-center text-white">Copyright © Your Website 2018</p>
                    </div>
                </footer>
            </div>
        )
    }
}

export default Footer;