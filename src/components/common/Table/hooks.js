import React, { useState } from "react";

export const useWalletTab = (props) => {
    const [tabView, setTabView] = useState("GL_WALLET");
    const [manageWallet, setManageWallet] = useState(false)
    const [manageTrackOrders, setManageTrackOrders] = useState(true)
    const [editShow, setEditShow] = useState(false);
    const handleEditClose = () => setEditShow(false);
    const handleEditShow = () => setEditShow(true);
    const handleShowWalletTab = (id, tabName) => {
        setTabView(tabName);
    };

    
    return {
        tabView,
        manageWallet,
        manageTrackOrders,
        handleShowWalletTab,
        setManageWallet,
        setManageTrackOrders,
        editShow,
        setEditShow,
        handleEditClose,
        handleEditShow,
    };
};