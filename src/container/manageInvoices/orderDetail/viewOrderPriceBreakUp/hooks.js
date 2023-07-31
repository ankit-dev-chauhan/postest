import React, { useState } from 'react'

export const useEditOrderPriceBreakUp = () => {
    const [showEditOrderPriceBreakUp, setShowEditOrderPriceBreakUp] = useState(false)
    const handleShowEditOrderPriceBreakUp = () => {
        setShowEditOrderPriceBreakUp(true)

    }
    const handleCloseEditOrderPriceBreakUp = () => {
        setShowEditOrderPriceBreakUp(false)
    }

    return {
        showEditOrderPriceBreakUp, setShowEditOrderPriceBreakUp, handleShowEditOrderPriceBreakUp, handleCloseEditOrderPriceBreakUp
    }
}