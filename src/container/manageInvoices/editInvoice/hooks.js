import React, { useState } from 'react'

export const useEditInvoices = () => {
    const [showEditInvoiceForm, setShowEditInvoiceForm] = useState(false)
    const handleShowOEditInvoice = () => {
        setShowEditInvoiceForm(true)
    }
    const handleCloseEditInvoice = () => {
        setShowEditInvoiceForm(false)
    }

    return {
        showEditInvoiceForm, setShowEditInvoiceForm, handleShowOEditInvoice, handleCloseEditInvoice
    }
}