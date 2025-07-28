import { assets } from '../assets/assets.tsx'
import '../styles/auth.css'
import Button from './Button.tsx'

function AuthPanel() {
  return (
    <div className="authOverlay">
      <div className="authModal">
        <div className="authPanel">
          <assets.Cake className='cake'/>
          <div className="authPanelText">
            <h2>Welcome to Bonique</h2>
            <p>Let's get you set up!</p>
            <form>
              <label>
                <span>Username</span>
                <input type="text" placeholder="Enter Your Username"/>
              </label>

              <label>
                <span>Email</span>
                <input type="text" placeholder="Enter your Email"/>
              </label>

              <label>
                <span>Password</span>
                <input type="password" id="password" placeholder="Enter your Password"/>
              </label>

            {/* later can add remember me checkbox */}
            </form>
            
          </div>
            { <Button text="Continue" /> }
        </div>
      </div>
    </div>
  )
}

export default AuthPanel