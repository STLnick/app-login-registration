import './Form.css'

export default () => `<form class="flex-col-align--center">
  <fieldset id="registration" class="flex-col-align--center">
    <div class="regField">
      <label class="screen-reader-text" for="email">Email</label>
      <input type="email" class="regInput" id="email" placeholder="Email" />
    </div>
    <div class="regField">
      <label class="screen-reader-text" for="phone">Phone</label>
      <input type="tel" class="regInput" id="phone" placeholder="Phone" />
    </div>
    <div class="regField">
      <label class="screen-reader-text" for="name">Name</label>
      <input type="text" class="regInput" id="name" placeholder="Name" />
    </div>
    <div class="regField">
      <label class="screen-reader-text" for="username">Username</label>
      <input type="text" class="regInput" id="username" placeholder="Username" />
    </div>
    <div class="regField">
      <label class="screen-reader-text" for="password">Password</label>
      <input type="password" class="regInput" id="password" placeholder="Password" />
    </div>
    <button id="regBtn" type="submit">Register</button>
  </fieldset>

  <fieldset id="login" class="flex-col-align--center">
    <h2>Already a user?</h2>
    <h3>Sign in</h3>
    <div class="user-login">
      <label for="user-login-input" class=".screen-reader-text"></label>
      <input type="text" id="user-login-input" placeholder="Username">
    </div>
    <div class="password-login">
      <label for="password-login-input" class=".screen-reader-text"></label>
      <input type="password" name="" id="password-login-input" placeholder="Password">
    </div>
    <button id="login-btn" type="submit">Login</button>
  </fieldset>
</form>`
