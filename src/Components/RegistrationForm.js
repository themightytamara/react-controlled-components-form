import React, {Component} from "react";

class RegistrationForm extends Component {

    render() {
return (

<div className="wrapper">
   <div className="form-wrapper">
<h1>Create Account</h1>

<form onSubmit={this.handleSubmit} noValidate>
<div className="name">
<label htmlFor="name">First Name</label>
<input type="text" classname="" placeholder="Type your name here." type="text" name="name" noValidate onChange={this.handleChsange} 
/>
</div>

<div className="password">
<label htmlFor="password">Password</label>
<input type="password" classname="" placeholder="Type your password here." type="password" name="password" noValidate onChange={this.handleChsange} 
/>
</div>
<div className="createAccount">
   <button type="submit">Create Account</button>

</div>
</form>
   </div>

</div>

);

}  
}


export default RegistrationForm