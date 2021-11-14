import './AuthComponent.css'
import React, { Component } from 'react';
class AuthComponent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      login: false,
      name: 'not login',
      email: 'not login',
      image: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/173024/img_bounce.png'
    }
  }

  /**
   * initialize google sso login command for show on top right side of store project
   */
  componentDidMount() {

    window.gapi.load('auth2', () => {
      window.gapi.auth2.init({
        client_id: '111414850905-eb4qqhlo48iou11tsr1k0jlcf9vo7imv.apps.googleusercontent.com'

      })
      console.log('api inited')

      window.gapi.load('signin2', () => {
        const params = {
          'scope': 'https://www.googleapis.com/auth/plus.login',
          // 'width': 200,
          // 'height': 50,
          'longtitle': true,
          'theme': 'Light',
          'onsuccess': this.onSignIn
        }
        window.gapi.signin2.render('loginButton', params)
      })
    })
  }
  /**
   * 
   * @param {*} googleUser 
   * 
   * an event when google logined and recieve date from google api.method get name,image url and email
   * for show on profile card
   */
  onSignIn = (googleUser) => {
    console.log("user signed in..", googleUser); // plus any other logic here
    var profile = googleUser.getBasicProfile();

    this.setState({
      login: true,
      name: profile.getName(),
      image: profile.getImageUrl(),
      email: profile.getEmail(),
    });
    console.log(this.state)
  }

  /**
   * 
   * @param {*} response 
   * 
   * when end user clicked on "Log Out" button,I set state like as first initialize
   */

  logout = (response) => {

    this.setState({
      login: false,
      name: 'not login',
      email: 'not login',
      image: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/173024/img_bounce.png'
    });

    const auth2 = window.gapi.auth2.getAuthInstance();

    if (auth2 != null) {
      auth2.signOut().then(
        auth2.disconnect().then(console.log('LOGOUT SUCCESSFUL'))
      )
    }


  }


  render() {
    return (
      <div className="demo">
        <div className="figure">


        </div>
        <div className="profile">
          <div className="contener" style={{ backgroundImage: `url(${this.state.image})` }}></div>
          <div className="contener_txt">
            <div className="name">{this.state.name}</div>
            <div className="email">{this.state.email}</div>
            {!this.state.login ? <div id="loginButton" type="button"></div> : null}
            {this.state.login ? <button type="button" className="google-button-logout" onClick={this.logout}>Logout</button> : null}
          </div>
        </div>

      </div>
    )
  }
}
export default AuthComponent;