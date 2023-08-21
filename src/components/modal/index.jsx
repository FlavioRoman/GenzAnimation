import logo from '../../assets/genz-logo.png'

function Modal() {
  return (
    <div className='modal'>
        <div className='box_circle'>
            <div className='circle'></div>
       </div>
       <img className='logo' src={logo} alt="genz-logo" />
       <div className='left_bg'></div>
       <div className='right_bg'></div>
    </div>
  )
}

export default Modal;
