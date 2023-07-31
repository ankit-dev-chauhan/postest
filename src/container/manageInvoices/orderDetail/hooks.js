import React, { useState } from 'react'

export const useOrdersDetail = (props) => {
    const [showOrderDetailForm, setShowOrdersDetails] = useState(false)
    const handleShowOrderDetailForm = () => {
        setShowOrdersDetails(true)

    }
    const handleCloseOrderDetailForm = () => {
        setShowOrdersDetails(false)

    }
    const handleOpenOrderDetailForm = () => {
        setShowOrdersDetails(true)

    }
    return {
        handleOpenOrderDetailForm, showOrderDetailForm, setShowOrdersDetails, handleShowOrderDetailForm, handleCloseOrderDetailForm
    }

}