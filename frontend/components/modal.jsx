import React from 'react';
import SignUpForm from './form/sign_up_form';
import LogInForm from './form/login_form';

class Modal extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      formType: "",
      isOpen: false 
    }
  }



// When the user clicks on the button, open the modal 
// btn.onclick = function () {
//   modal.style.display = "block";
// }

// // When the user clicks on <span> (x), close the modal
// span.onclick = function () {
//   modal.style.display = "none";
// }

// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function (event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// }

  render() {
    return (
      <div id="myModal" class="modal">
        <div class="modal-content">
          <span class="close">&times;</span>
         { this.state.formType === "SignUp" ? <SignUpForm /> : <LogInForm />}
        </div>

      </div>
    )
  }

}


export default Modal; 