import React from 'react'
import Backdrop from '../../components/BackDrop/Backdrop'
import CheckoutForm from '../../components/CheckoutForm/CheckoutForm'

const CheckoutContainer = ({ onClickedBack }) => {
    return (
        <div>
            <CheckoutForm />
            <Backdrop onClickedBack={ onClickedBack } />
        </div>
    )
}

export default CheckoutContainer
