export const CERTIFICATE_COLUMN = [
  {
    title: "SR_NO",
    dataIndex: "SR_NO",
    key: "SR_NO",
    width: 100,
    height: 100,
  },

  {
    title: "SUMMARY_NO",
    dataIndex: "SUMMARY_NO",
    key: "SUMMARY_NO",
    width: 160,
  },
  {
    title: "DESIGN_NO",
    dataIndex: "DESIGN_NO",
    key: "DESIGN_NO",
    width: 100,
  },
  {
    title: "DESCRIPTION",
    dataIndex: "DESCRIPTION",
    key: "DESCRIPTION",
    width: 100,
  },
  {
    title: "SHAPE_CUT",
    dataIndex: "SHAPE_CUT",
    key: "SHAPE_CUT",
    width: 130,
  },
  {
    title: "GROSS_WEIGHT",
    dataIndex: "GROSS_WEIGHT",
    key: "GROSS_WEIGHT",
    width: 100,
  },
  {
    title: "NET_WEIGHT",
    dataIndex: "NET_WEIGHT",
    key: "NET_WEIGHT",
    width: 100,
  },
  {
    title: "DIAM_EST_WT",
    dataIndex: "DIAM_EST_WT",
    key: "DIAM_EST_WT",
    width: 100,
  },
  {
    title: "COLOR",
    dataIndex: "COLOR",
    key: "COLOR",
    width: 100,
  },
  {
    title: "CLARITY",
    dataIndex: "CLARITY",
    key: "CLARITY",
    width: 100,
  },
  {
    title: "KAROT",
    dataIndex: "KAROT",
    key: "KAROT",
    width: 100,
  },
  {
    title: "COMMENTS",
    dataIndex: "COMMENTS",
    key: "COMMENTS",
    width: 100,
  },
  {
    title: "LINK",
    dataIndex: "LINK",
    key: "LINK",
    width: 320,
  },
];
export const PRODUCTS_COLUMN = [
  {
    title: "SR_NO",
    dataIndex: "SR_NO",
    key: "SR_NO",
    width: 50,
    render(text, record) {
      return {
        props: {
          style: { background: "red" },
        },
        children: <div>{text}</div>,
      };
    },
  },
  {
    title: "PRODUCT_ID",
    dataIndex: "PRODUCT_ID",
    key: "PRODUCT_ID",
    width: 100,
    height: 100,
  },
  {
    title: "GL_DESIGN_NUMBER",
    dataIndex: "GL_DESIGN_NUMBER",
    key: "GL_DESIGN_NUMBER",
    width: 130,
  },
  {
    title: "PRODUCT_NAME",
    dataIndex: "PRODUCT_NAME",
    key: "PRODUCT_NAME",
    width: 110,
  },
  {
    title: "PRODUCT_TAGLINE",
    dataIndex: "PRODUCT_TAGLINE",
    key: "PRODUCT_TAGLINE",
    width: 130,
  },
  {
    title: "PRODUCT_CATEGORY",
    dataIndex: "PRODUCT_CATEGORY",
    key: "PRODUCT_CATEGORY",
    width: 140,
  },
  {
    title: "FOURTEEN_KAROT_WEIGHT",
    dataIndex: "FOURTEEN_KAROT_WEIGHT",
    key: "FOURTEEN_KAROT_WEIGHT",
    width: 160,
  },
  {
    title: "EIGHTEEN_KAROT_WEIGHT",
    dataIndex: "EIGHTEEN_KAROT_WEIGHT",
    key: "EIGHTEEN_KAROT_WEIGHT",
    width: 160,
  },
  // {
  //   title: "TWENTY_TWO_KAROT",
  //   dataIndex: "TWENTY_TWO_KAROT",
  //   key: "TWENTY_TWO_KAROT",
  //   width: 140,
  // },
  {
    title: "DIAMOND_WEIGHT",
    dataIndex: "DIAMOND_WEIGHT",
    key: "DIAMOND_WEIGHT",
    width: 120,
  },
  {
    title: "DIAMOND_PEICES",
    dataIndex: "DIAMOND_PEICES",
    key: "DIAMOND_PEICES",
    width: 110,
  },
  {
    title: "HEIGHT",
    dataIndex: "HEIGHT",
    key: "HEIGHT",
    width: 60,
  },
  {
    title: "WIDTH",
    dataIndex: "WIDTH",
    key: "WIDTH",
    width: 50,
  },
  {
    title: "KAROT_AVAILABILITY",
    dataIndex: "KAROT_AVAILABILITY",
    key: "KAROT_AVAILABILITY",
    width: 130,
  },
  {
    title: "METAL_COLOR_AVAILABLITY",
    dataIndex: "METAL_COLOR_AVAILABLITY",
    key: "METAL_COLOR_AVAILABLITY",
    width: 170,
  },
  {
    title: "DIAMOND_COLOR_AVAILABLITY",
    dataIndex: "DIAMOND_COLOR_AVAILABLITY",
    key: "DIAMOND_COLOR_AVAILABLITY",
    width: 190,
  },
  {
    title: "DIAMOND_SETTINGS",
    dataIndex: "DIAMOND_SETTINGS",
    key: "DIAMOND_SETTINGS",
    width: 150,
  },
  {
    title: "GENDER",
    dataIndex: "GENDER",
    key: "GENDER",
    width: 60,
  },

  {
    title: "COMPLETE_THE_LOOK",
    dataIndex: "COMPLETE_THE_LOOK",
    key: "COMPLETE_THE_LOOK",
    width: 140,
  },
  {
    title: "SELECT_MAKING_CHARGES_SET",
    dataIndex: "SELECT_MAKING_CHARGES_SET",
    key: "SELECT_MAKING_CHARGES_SET",
    width: 120,
  },
  {
    title: "ADD_MAKING_CHARGES_PER_GRAM",
    dataIndex: "ADD_MAKING_CHARGES_PER_GRAM",
    key: "ADD_MAKING_CHARGES_PER_GRAM",
    width: 210,
  },
  {
    title: "ADD_PREMIUM_PRICE",
    dataIndex: "ADD_PREMIUM_PRICE",
    key: "ADD_PREMIUM_PRICE",
    width: 130,
  },
  {
    title: "DISCOUNT",
    dataIndex: "DISCOUNT",
    key: "DISCOUNT",
    width: 70,
  },
  {
    title: "DELIVERY_DAYS",
    dataIndex: "DELIVERY_DAYS",
    key: "DELIVERY_DAYS",
    width: 100,
  },
  {
    title: "DONT_SHOW_RING_SIZER",
    dataIndex: "DONT_SHOW_RING_SIZER",
    key: "DONT_SHOW_RING_SIZER",
    width: 150,
  },
  {
    title: "NECK_CHAIN_DISPLAYED_IS_NOT_PART_OF_THE_PRODUCT",
    dataIndex: "NECK_CHAIN_DISPLAYED_IS_NOT_PART_OF_THE_PRODUCT",
    key: "NECK_CHAIN_DISPLAYED_IS_NOT_PART_OF_THE_PRODUCT",
    width: 330,
    height: 220,
  },

  {
    title: "MAX_QUANTITY",
    dataIndex: "MAX_QUANTITY",
    key: "MAX_QUANTITY *",
    width: 130,
  },
  {
    title: "LINK_COLLECTION",
    dataIndex: "LINK_COLLECTION",
    key: "LINK_COLLECTION",
    width: 120,
  },
  {
    title: "OCCASIONS",
    dataIndex: "OCCASIONS",
    key: "OCCASIONS",
    width: 80,
  },
  {
    title: "STYLES",
    dataIndex: "STYLES",
    key: "STYLES",
    width: 60,
  },
  {
    title: "GIFTS",
    dataIndex: "GIFTS",
    key: "GIFTS",
    width: 60,
  },
  {
    title: "CURATED_BY",
    dataIndex: "CURATED_BY",
    key: "CURATED_BY",
    width: 90,
  },
  {
    title: "IS_SOLITAIRE",
    dataIndex: "IS_SOLITAIRE",
    key: "IS_SOLITAIRE",
    width: 90,
  },
  {
    title: "SOLITAIRE_CODE",
    dataIndex: "SOLITAIRE_CODE",
    key: "SOLITAIRE_CODE",
    width: 90,
  },
  {
    title: "SOLITAIRE_WEIGHT",
    dataIndex: "SOLITAIRE_WEIGHT",
    key: "SOLITAIRE_WEIGHT",
    width: 90,
  },
  {
    title: "SOLITAIRE_QUANTITY",
    dataIndex: "SOLITAIRE_QUANTITY",
    key: "SOLITAIRE_QUANTITY",
    width: 90,
  },
  {
    title: "IS_STONE",
    dataIndex: "IS_STONE",
    key: "IS_STONE",
    width: 90,
  },
  {
    title: "STONE_CODE",
    dataIndex: "STONE_CODE",
    key: "STONE_CODE",
    width: 90,
  },
  {
    title: "STONE_WEIGHTS",
    dataIndex: "STONE_WEIGHTS",
    key: "STONE_WEIGHTS",
    width: 90,
  },
  {
    title: "STONE_QUANTITY",
    dataIndex: "STONE_QUANTITY",
    key: "STONE_QUANTITY",
    width: 90,
  },
  {
    title: "META_TITLE",
    dataIndex: "META_TITLE",
    key: "META_TITLE",
    width: 80,
  },
  {
    title: "META_DESCRIPTION",
    dataIndex: "META_DESCRIPTION",
    key: "META_DESCRIPTION",
    width: 130,
  },
  {
    title: "META_KEYWORDS",
    dataIndex: "META_KEYWORDS",
    key: "META_KEYWORDS",
    width: 120,
  },
  {
    title: "DONT_SHOW_PRICE_BREAKUP",
    dataIndex: "DONT_SHOW_PRICE_BREAKUP",
    key: "DONT_SHOW_PRICE_BREAKUP",
    width: 190,
  },
  {
    title: "PRODUCT_VISIBLITY",
    dataIndex: "PRODUCT_VISIBLITY",
    key: "PRODUCT_VISIBLITY",
    width: 130,
  },
  {
    title: "PRODUCT_TYPE",
    dataIndex: "PRODUCT_TYPE",
    key: "PRODUCT_TYPE",
    width: 130,
  },
    // {
  //   title: "BRAND_COLLECTION",
  //   dataIndex: "BRAND_COLLECTION",
  //   key: "BRAND_COLLECTION",
  //   width: 130,
  // },
];

export const GLS_COLUMN_NEW = [
  {
    title: "SR_NO",
    dataIndex: "SR_NO",
    key: "SR_NO",
    width: 50,
  },
  {
    title: "GLS_ID",
    dataIndex: "GLS_ID",
    key: "GLS_ID",
    width: 150,
  },
  {
    title: "GL_DESIGN_NUMBER",
    dataIndex: "GL_DESIGN_NUMBER",
    key: "GL_DESIGN_NUMBER",
    width: 130,
  },
  {
    title: "STOCK_ID",
    dataIndex: "STOCK_ID",
    key: "STOCK_ID",
    width: 130,
  },
  {
    title: "ORDER_ID",
    dataIndex: "ORDER_ID",
    key: "ORDER_ID",
    width: 100,
  },
  {
    title: "ORDER_TYPE",
    dataIndex: "ORDER_TYPE",
    key: "ORDER_TYPE",
    width: 100,
  },
  {
    title: "GROSS_WEIGHT",
    dataIndex: "GROSS_WEIGHT",
    key: "GROSS_WEIGHT",
    width: 100,
  },
  {
    title: "NET_WEIGHT",
    dataIndex: "NET_WEIGHT",
    key: "NET_WEIGHT",
    width: 100,
  },
  {
    title: "DIAMOND_WEIGHT",
    dataIndex: "DIAMOND_WEIGHT",
    key: "DIAMOND_WEIGHT",
    width: 100,
  },
  {
    title: "DIAMOND_PEICES",
    dataIndex: "DIAMOND_PEICES",
    key: "DIAMOND_PEICES",
    width: 100,
  },
  {
    title: "DIAMOND_CLARITY",
    dataIndex: "DIAMOND_CLARITY",
    key: "DIAMOND_CLARITY",
    width: 100,
  },
  {
    title: "KAROT_TYPE",
    dataIndex: "KAROT_TYPE",
    key: "KAROT_TYPE",
    width: 100,
  },
  {
    title: "METAL_COLOR",
    dataIndex: "METAL_COLOR",
    key: "METAL_COLOR",
    width: 100,
  },
  {
    title: "IS_SOLTIARE",
    dataIndex: "IS_SOLTIARE",
    key: "IS_SOLTIARE",
    width: 100,
  },
  {
    title: "SOLITAIRE_STOCK_ID",
    dataIndex: "SOLITAIRE_STOCK_ID",
    key: "SOLITAIRE_STOCK_ID",
    width: 100,
  },
  {
    title: "IS_STONE",
    dataIndex: "IS_STONE",
    key: "IS_STONE",
    width: 100,
  },
  {
    title: "STONE_CODE",
    dataIndex: "STONE_CODE",
    key: "STONE_CODE",
    width: 100,
  },
  {
    title: "STONE_WEIGHTS",
    dataIndex: "STONE_WEIGHTS",
    key: "STONE_WEIGHTS",
    width: 100,
  },
  {
    title: "STONE_QUANTITY",
    dataIndex: "STONE_QUANTITY",
    key: "STONE_QUANTITY",
    width: 100,
  },
  {
    title: "CERTIFIACATION_COMPANY",
    dataIndex: "CERTIFIACATION_COMPANY",
    key: "CERTIFIACATION_COMPANY",
    width: 100,
  },
  {
    title: "PRODUCT_CERTIFICATION_NUMBER",
    dataIndex: "PRODUCT_CERTIFICATION_NUMBER",
    key: "PRODUCT_CERTIFICATION_NUMBER",
    width: 100,
  },
  {
    title: "HUID_NUMBER",
    dataIndex: "HUID_NUMBER",
    key: "HUID_NUMBER",
    width: 100,
  },
  {
    title: "IS_SALEABLE",
    dataIndex: "IS_SALEABLE",
    key: "IS_SALEABLE",
    width: 100,
  },
  {
    title: "EMPLOYEE",
    dataIndex: "EMPLOYEE",
    key: "EMPLOYEE",
    width: 100,
  },
  {
    title: "STOCK_TYPE",
    dataIndex: "STOCK_TYPE",
    key: "STOCK_TYPE",
    width: 100,
  },
 
];
export const GLS_COLUMN = [
  {
    title: "SR_NO",
    dataIndex: "SR_NO",
    key: "SR_NO",
    width: 50,
    render(text, record) {
      return {
        props: {
          style: { background: "red" },
        },
        children: <div>{text}</div>,
      };
    },
  },

  {
    title: "GLS_ID",
    dataIndex: "GLS_ID",
    key: "GLS_ID",
    width: 130,
  },
  {
    title: "STOCK_ID",
    dataIndex: "STOCK_ID",
    key: "STOCK_ID",
    width: 130,
  },
  {
    title: "GL_DESIGN_NUMBER",
    dataIndex: "GL_DESIGN_NUMBER",
    key: "GL_DESIGN_NUMBER",
    width: 130,
  },
  {
    title: "ORDER_ID",
    dataIndex: "ORDER_ID",
    key: "ORDER_ID",
    width: 70,
  },
  {
    title: "ORDER_TYPE",
    dataIndex: "ORDER_TYPE",
    key: "ORDER_TYPE",
    width: 80,
  },
  {
    title: "GROSS_WEIGHT",
    dataIndex: "GROSS_WEIGHT",
    key: "GROSS_WEIGHT",
    width: 100,
  },
  {
    title: "NET_WEIGHT",
    dataIndex: "NET_WEIGHT",
    key: "NET_WEIGHT",
    width: 85,
  },
  {
    title: "DIAMOND_WEIGHT",
    dataIndex: "DIAMOND_WEIGHT",
    key: "DIAMOND_WEIGHT",
    width: 110,
  },
  {
    title: "DIAMOND_PEICES",
    dataIndex: "DIAMOND_PEICES",
    key: "DIAMOND_PEICES",
    width: 105,
  },
  {
    title: "DIAMOND_COLOR",
    dataIndex: "DIAMOND_COLOR",
    key: "DIAMOND_COLOR",
    width: 107,
  },
  {
    title: "DIAMOND_CLARITY",
    dataIndex: "DIAMOND_CLARITY",
    key: "DIAMOND_CLARITY",
    width: 110,
  },
  {
    title: "CHOOSE_SIZE",
    dataIndex: "CHOOSE_SIZE",
    key: "CHOOSE_SIZE",
    width: 90,
  },
  {
    title: "KAROT_TYPE",
    dataIndex: "KAROT_TYPE",
    key: "KAROT_TYPE",
    width: 80,
  },
  {
    title: "CHOOSE_METAL_COLOR",
    dataIndex: "CHOOSE_METAL_COLOR",
    key: "CHOOSE_METAL_COLOR",
    width: 150,
  },
  {
    title: "IS_SOLTIARE",
    dataIndex: "IS_SOLTIARE",
    key: "IS_SOLTIARE",
    width: 80,
  },
  {
    title: "SOLITAIRE_STOCK_ID",
    dataIndex: "SOLITAIRE_STOCK_ID",
    key: "SOLITAIRE_STOCK_ID",
    width: 125,
  },
  {
    title: "SOLITAIRE_TEMP_WEIGHT",
    dataIndex: "SOLITAIRE_TEMP_WEIGHT",
    key: "SOLITAIRE_TEMP_WEIGHT",
    width: 135,
  },
  {
    title: "IS_STONE",
    dataIndex: "IS_STONE",
    key: "IS_STONE",
    width: 70,
  },
  {
    title: "STONE_CODE",
    dataIndex: "STONE_CODE",
    key: "STONE_CODE",
    width: 110,
  },

  {
    title: "STONE_WEIGHTS",
    dataIndex: "STONE_WEIGHTS",
    key: "STONE_WEIGHTS",
    width: 110,
  },
  {
    title: "STONE_QUANTITY",
    dataIndex: "STONE_QUANTITY",
    key: "STONE_QUANTITY",
    width: 110,
  },

  {
    title: "CERTIFIACATION_COMPANY",
    dataIndex: "CERTIFIACATION_COMPANY",
    key: "CERTIFIACATION_COMPANY",
    width: 166,
  },
  {
    title: "PRODUCT_CERTIFICATION_NUMBER",
    dataIndex: "PRODUCT_CERTIFICATION_NUMBER",
    key: "PRODUCT_CERTIFICATION_NUMBER",
    width: 205,
  },
  {
    title: "HUID_NUMBER",
    dataIndex: "HUID_NUMBER",
    key: "HUID_NUMBER",
    width: 70,
  },
  {
    title: "IS_SALEABLE",
    dataIndex: "IS_SALEABLE",
    key: "IS_SALEABLE",
    width: 70,
  },
  {
    title: "EMPLOYEE",
    dataIndex: "EMPLOYEE",
    key: "EMPLOYEE",
    width: 70,
  },
  {
    title: "STOCK_TYPE",
    dataIndex: "STOCK_TYPE",
    key: "STOCK_TYPE",
    width: 100,
  },
];

export const SOLSTOCK_COLUMN = [
  {
    title: "SR_NO",
    dataIndex: "SR_NO",
    key: "SR_NO",
    width: 50,
    render(text, record) {
      return {
        props: {
          style: { background: "red" },
        },
        children: <div>{text}</div>,
      };
    },
  },

  {
    title: "SOLITAIRE_STOCK_ID",
    dataIndex: "SOLITAIRE_STOCK_ID",
    key: "SOLITAIRE_STOCK_ID",
    width: 130,
  },
  {
    title: "ASSIGNED_TO_GLS_ID",
    dataIndex: "ASSIGNED_TO_GLS_ID",
    key: "ASSIGNED_TO_GLS_ID",
    width: 150,
  },
  {
    title: "GL_DESIGN_NO",
    dataIndex: "GL_DESIGN_NO",
    key: "GL_DESIGN_NO",
    width: 110,
  },
  {
    title: "ORDER_TYPE",
    dataIndex: "ORDER_TYPE",
    key: "ORDER_TYPE",
    width: 80,
  },
  {
    title: "PRODUCT_CATEGORY",
    dataIndex: "PRODUCT_CATEGORY",
    key: "PRODUCT_CATEGORY",
    width: 150,
  },
  {
    title: "SOL_WEIGHT",
    dataIndex: "SOL_WEIGHT",
    key: "SOL_WEIGHT",
    width: 85,
  },
  {
    title: "SOL_COLOR",
    dataIndex: "SOL_COLOR",
    key: "SOL_COLOR",
    width: 90,
  },
  {
    title: "SOL_CLARITY",
    dataIndex: "SOL_CLARITY",
    key: "SOL_CLARITY",
    width: 90,
  },
  {
    title: "SHAPE",
    dataIndex: "SHAPE",
    key: "SHAPE",
    width: 80,
  },
  {
    title: "CUT",
    dataIndex: "CUT",
    key: "CUT",
    width: 50,
  },
  {
    title: "POLISH",
    dataIndex: "POLISH",
    key: "POLISH",
    width: 70,
  },
  {
    title: "SYMETRY",
    dataIndex: "SYMETRY",
    key: "SYMETRY",
    width: 80,
  },
  {
    title: "FLOURESCENCE",
    dataIndex: "FLOURESCENCE",
    key: "FLOURESCENCE",
    width: 130,
  },
  {
    title: "SOLITAIRE_CERTIFICATION",
    dataIndex: "SOLITAIRE_CERTIFICATION",
    key: "SOLITAIRE_CERTIFICATION",
    width: 160,
  },
  {
    title: "SOLITAIRE_CERTI_NUMBER",
    dataIndex: "SOLITAIRE_CERTI_NUMBER",
    key: "SOLITAIRE_CERTI_NUMBER",
    width: 160,
  },
  {
    title: "SOL_PURCHASED_PER_CT",
    dataIndex: "SOL_PURCHASED_PER_CT",
    key: "SOL_PURCHASED_PER_CT",
    width: 170,
  },
  {
    title: "SOL_PURCHASED_FINAL_AMOUNT",
    dataIndex: "SOL_PURCHASED_FINAL_AMOUNT",
    key: "SOL_PURCHASED_FINAL_AMOUNT",
    width: 200,
  },

  {
    title: "SALE_PRICE_PER_CT",
    dataIndex: "SALE_PRICE_PER_CT",
    key: "SALE_PRICE_PER_CT",
    width: 140,
  },
  {
    title: "SALE_PRICE_FINAL_AMOUNT",
    dataIndex: "SALE_PRICE_FINAL_AMOUNT",
    key: "SALE_PRICE_FINAL_AMOUNT",
    width: 200,
  },

  {
    title: "DISCOUNT",
    dataIndex: "DISCOUNT",
    key: "DISCOUNT",
    width: 90,
  },
  {
    title: "STORE_ID",
    dataIndex: "STORE_ID",
    key: "STORE_ID",
    width: 90,
  },
  {
    title: "IS_SALEABLE",
    dataIndex: "IS_SALEABLE",
    key: "IS_SALEABLE",
    width: 80,
  },
  {
    title: "CREATED_ON",
    dataIndex: "CREATED_ON",
    key: "CREATED_ON",
    width: 80,
  },
];
export const GLSRNO_COLUMN = [
  {
    title: "SR_NO",
    dataIndex: "SR_NO",
    key: "SR_NO",
    width: 50,
    render(text, record) {
      return {
        props: {
          style: { background: "red" },
        },
        children: <div>{text}</div>,
      };
    },
  },
  {
    title: "GL_DESIGN_NUMBER",
    dataIndex: "GL_DESIGN_NUMBER",
    key: "GL_DESIGN_NUMBER",
    width: 130,
    maxLength: 3,
  },
];
export const BARCODE_COLUMN = [
  {
    title: "SR_NO",
    dataIndex: "SR_NO",
    key: "SR_NO",
    width: 50,
  },
  {
    title: "GLS_ID",
    dataIndex: "GLS_ID",
    key: "GLS_ID",
    width: 250,
    maxLength: 3,
  },
  {
    title: "ITEM_CODE",
    dataIndex: "ITEM_CODE",
    key: "ITEM_CODE",
    width: 80,
    maxLength: 3,
  },
  {
    title: "APPROX_PRICE",
    dataIndex: "APPROX_PRICE",
    key: "APPROX_PRICE",
    width: 130,
    maxLength: 3,
  },
  {
    title: "GROSS_NET_WEIGHT",
    dataIndex: "GROSS_NET_WEIGHT",
    key: "GROSS_NET_WEIGHT",
    width: 130,
    maxLength: 3,
  },
  {
    title: "DIAM_WEIGHT",
    dataIndex: "DIAM_WEIGHT",
    key: "DIAM_WEIGHT",
    width: 130,
    maxLength: 3,
  },
  {
    title: "STONE_WEIGHT",
    dataIndex: "STONE_WEIGHT",
    key: "STONE_WEIGHT",
    width: 130,
    maxLength: 3,
  },
  {
    title: "SOL_WEIGHT",
    dataIndex: "SOL_WEIGHT",
    key: "SOL_WEIGHT",
    width: 130,
    maxLength: 3,
  },
  {
    title: "LABEL_PRINT",
    dataIndex: "LABEL_PRINT",
    key: "LABEL_PRINT",
    width: 130,
    maxLength: 3,
  },
];

export const RING_SIZER_COLUMN = [
  {
    title: "S_NO",
    dataIndex: "S_NO",
    key: "S_NO",
    width: 100,
  },

  {
    title: "Name",
    dataIndex: "Name",
    key: "Name",
    width: 120,
  },
  {
    title: "Request_Id",
    dataIndex: "Request_Id",
    key: "Request_Id",
    width: 100,
  },

  {
    title: "Email",
    dataIndex: "Email",
    key: "Email",
    width: 150,
  },
  {
    title: "Address",
    dataIndex: "Address",
    key: "Address",
    width: 100,
  },

  {
    title: "Pincode",
    dataIndex: "Pincode",
    key: "Pincode",
    width: 60,
  },
  {
    title: "Request_On",
    dataIndex: "Request_On",
    key: "Request_On",
    width: 100,
  },
];

export const META_TAGS_COLUMN = [
  {
    title: "SR_NO",
    dataIndex: "SR_NO",
    key: "SR_NO",
    width: 60,
  },

  {
    title: "PRODUCT_IMAGE",
    dataIndex: "PRODUCT_IMAGE",
    key: "PRODUCT_IMAGE",
    width: 120,
  },
  {
    title: "PRODUCT_NAME",
    dataIndex: "PRODUCT_NAME",
    key: "PRODUCT_NAME",
    width: 160,
  },

  {
    title: "GL_DESIGN_NUMBER",
    dataIndex: "GL_DESIGN_NUMBER",
    key: "GL_DESIGN_NUMBER",
    width: 150,
  },
  {
    title: "META_TITLE",
    dataIndex: "META_TITLE",
    key: "META_TITLE",
    width: 150,
  },
  {
    title: "META_DESCRIPTION",
    dataIndex: "META_DESCRIPTION",
    key: "META_DESCRIPTION",
    width: 150,
  },
  {
    title: "UPDATED_AT",
    dataIndex: "UPDATED_AT",
    key: "UPDATED_AT",
    width: 140,
  },
];

export const OCCASIONS_COLUMN = [
  {
    title: "SR_NO",
    dataIndex: "SR_NO",
    key: "SR_NO",
    width: 60,
  },

  {
    title: "OCCASIONS",
    dataIndex: "OCCASIONS",
    key: "OCCASIONS",
    width: 120,
  },
  {
    title: "TOTAL_PRODUCT",
    dataIndex: "TOTAL_PRODUCT",
    key: "TOTAL_PRODUCT",
    width: 160,
  },

  {
    title: "UPDATED_AT",
    dataIndex: "UPDATED_AT",
    key: "UPDATED_AT",
    width: 140,
  },
  {
    title: "ACTIVE",
    dataIndex: "ACTIVE",
    key: "ACTIVE",
    width: 140,
  },
];
export const STYLES_COLUMN = [
  {
    title: "SR_NO",
    dataIndex: "SR_NO",
    key: "SR_NO",
    width: 60,
  },

  {
    title: "STYLES",
    dataIndex: "STYLES",
    key: "STYLES",
    width: 120,
  },
  {
    title: "TOTAL_PRODUCT",
    dataIndex: "TOTAL_PRODUCT",
    key: "TOTAL_PRODUCT",
    width: 160,
  },
  {
    title: "STATUS",
    dataIndex: "CATEGORY",
    key: "CATEGORY",
    width: 160,
  },

  {
    title: "UPDATED_AT",
    dataIndex: "UPDATED_AT",
    key: "UPDATED_AT",
    width: 140,
  },
  {
    title: "ACTIVE",
    dataIndex: "ACTIVE",
    key: "ACTIVE",
    width: 140,
  },
];
export const GIFTS_COLUMN = [
  {
    title: "SR_NO",
    dataIndex: "SR_NO",
    key: "SR_NO",
    width: 60,
  },

  {
    title: "GIFTS",
    dataIndex: "GIFTS",
    key: "GIFTS",
    width: 120,
  },
  {
    title: "TOTAL_PRODUCT",
    dataIndex: "TOTAL_PRODUCT",
    key: "TOTAL_PRODUCT",
    width: 160,
  },

  {
    title: "UPDATED_AT",
    dataIndex: "UPDATED_AT",
    key: "UPDATED_AT",
    width: 140,
  },
  {
    title: "ACTIVE",
    dataIndex: "ACTIVE",
    key: "ACTIVE",
    width: 140,
  },
];
export const CURATED_BY_COLUMN = [
  {
    title: "SR_NO",
    dataIndex: "SR_NO",
    key: "SR_NO",
    width: 60,
  },

  {
    title: "CURATED_BY",
    dataIndex: "CURATED_BY",
    key: "CURATED_BY",
    width: 120,
  },
  {
    title: "TOTAL_PRODUCT",
    dataIndex: "TOTAL_PRODUCT",
    key: "TOTAL_PRODUCT",
    width: 160,
  },

  {
    title: "UPDATED_AT",
    dataIndex: "UPDATED_AT",
    key: "UPDATED_AT",
    width: 140,
  },
  {
    title: "ACTIVE",
    dataIndex: "ACTIVE",
    key: "ACTIVE",
    width: 140,
  },
];
export const SOLITIARES_COLUMN = [
  {
    title: "SR_NO",
    dataIndex: "SR_NO",
    key: "SR_NO",
    width: 60,
  },

  {
    title: "SOLITAIRE_CODE",
    dataIndex: "SOLITAIRE_CODE",
    key: "SOLITAIRE_CODE",
    width: 120,
  },
  {
    title: "SOLITAIRE_SIZE",
    dataIndex: "SOLITAIRE_SIZE",
    key: "SOLITAIRE_SIZE",
    width: 100,
  },
  {
    title: "COLOUR",
    dataIndex: "COLOUR",
    key: "COLOUR",
    width: 100,
  },
  {
    title: "CLARITY",
    dataIndex: "CLARITY",
    key: "CLARITY",
    width: 100,
  },
  {
    title: "SHAPE",
    dataIndex: "SHAPE",
    key: "SHAPE",
    width: 120,
  },
  {
    title: "CUT",
    dataIndex: "CUT",
    key: "CUT",
    width: 100,
  },
  {
    title: "PRICE",
    dataIndex: "PRICE",
    key: "PRICE",
    width: 100,
  },
  {
    title: "TOTAL_PEICES",
    dataIndex: "TOTAL_PEICES",
    key: "TOTAL_PEICES",
    width: 100,
  },
  {
    title: "UPDATED_AT",
    dataIndex: "UPDATED_AT",
    key: "UPDATED_AT",
    width: 140,
  },
];
export const STONES_COLUMN = [
  {
    title: "SR_NO",
    dataIndex: "SR_NO",
    key: "SR_NO",
    width: 60,
  },

  {
    title: "STONE_CODE",
    dataIndex: "STONE_CODE",
    key: "STONE_CODE",
    width: 120,
  },
  {
    title: "STONE_NAME",
    dataIndex: "STONE_NAME",
    key: "STONE_NAME",
    width: 100,
  },
  {
    title: "COLOUR",
    dataIndex: "COLOUR",
    key: "COLOUR",
    width: 100,
  },
  {
    title: "PRICE",
    dataIndex: "PRICE",
    key: "PRICE",
    width: 100,
  },

  {
    title: "UPDATED_AT",
    dataIndex: "UPDATED_AT",
    key: "UPDATED_AT",
    width: 140,
  },
];
export const DELIVERY_COLUMN = [
  {
    title: "SR_NO",
    dataIndex: "SR_NO",
    key: "SR_NO",
    width: 60,
  },

  {
    title: "PRODUCT_IMAGE",
    dataIndex: "PRODUCT_IMAGE",
    key: "PRODUCT_IMAGE",
    width: 110,
  },
  {
    title: "PRODUCT_NAME",
    dataIndex: "PRODUCT_NAME",
    key: "PRODUCT_NAME",
    width: 110,
  },
  {
    title: "DESIGN_NO",
    dataIndex: "DESIGN_NO",
    key: "DESIGN_NO",
    width: 100,
  },
  {
    title: "DELIVERY_DAYS",
    dataIndex: "DELIVERY_DAYS",
    key: "DELIVERY_DAYS",
    width: 100,
  },

  {
    title: "UPDATED_AT",
    dataIndex: "UPDATED_AT",
    key: "UPDATED_AT",
    width: 140,
  },
];
export const GLSIZES_COLUMN = [
  {
    title: "SR_NO",
    dataIndex: "SR_NO",
    key: "SR_NO",
    width: 60,
  },

  {
    title: "SIZE_NAME",
    dataIndex: "SIZE_NAME",
    key: "SIZE_NAME",
    width: 110,
  },

  {
    title: "GL_SIZE",
    dataIndex: "GL_SIZE",
    key: "GL_SIZE",
    width: 110,
  },
  {
    title: "CATEGORY_TYPE",
    dataIndex: "CATEGORY_TYPE",
    key: "CATEGORY_TYPE",
    width: 140,
  },

  {
    title: "CREATED_AT",
    dataIndex: "CREATED_AT",
    key: "CREATED_AT",
    width: 140,
  },

  {
    title: "CREATED_BY",
    dataIndex: "CREATED_BY",
    key: "CREATED_BY",
    width: 140,
  },
];
export const COLLECTIONS_COLUMN = [
  {
    title: "SR_NO",
    dataIndex: "SR_NO",
    key: "SR_NO",
    width: 60,
  },

  {
    title: "COLLECTIONS_NAME",
    dataIndex: "COLLECTIONS_NAME",
    key: "COLLECTIONS_NAME",
    width: 110,
  },

  {
    title: "COLLECTIONS_LINK",
    dataIndex: "COLLECTIONS_LINK",
    key: "COLLECTIONS_LINK",
    width: 200,
  },
  {
    title: "CREATED_AT",
    dataIndex: "CREATED_AT",
    key: "CREATED_AT",
    width: 150,
  },
  {
    title: "UPDATED_AT",
    dataIndex: "UPDATED_AT",
    key: "UPDATED_AT",
    width: 150,
  },

  {
    title: "ACTIVE",
    dataIndex: "ACTIVE",
    key: "ACTIVE",
    width: 140,
  },
];
export const ALLCUSTOMER_COLUMN = [
  {
    title: "SR_NO",
    dataIndex: "SR_NO",
    key: "SR_NO",
    width: 60,
  },

  {
    title: "CUSTOMER_IMAGE",
    dataIndex: "CUSTOMER_IMAGE",
    key: "CUSTOMER_IMAGE",
    width: 110,
  },

  {
    title: "CUSTOMER_NAME",
    dataIndex: "CUSTOMER_NAME",
    key: "CUSTOMER_NAME",
    width: 200,
  },
  {
    title: "CUSTOMER_ID",
    dataIndex: "CUSTOMER_ID",
    key: "CUSTOMER_ID",
    width: 150,
  },
  {
    title: "LOCATION",
    dataIndex: "LOCATION",
    key: "LOCATION",
    width: 140,
  },
  {
    title: "PIN_CODE",
    dataIndex: "PIN_CODE",
    key: "PIN_CODE",
    width: 140,
  },
  {
    title: "PREVIOUS_ORDER",
    dataIndex: "PREVIOUS_ORDER",
    key: "PREVIOUS_ORDER",
    width: 140,
  },
  {
    title: "CUSTOMER_TYPE",
    dataIndex: "CUSTOMER_TYPE",
    key: "CUSTOMER_TYPE",
    width: 140,
  },
  {
    title: "UPDATED_AT",
    dataIndex: "UPDATED_AT",
    key: "UPDATED_AT",
    width: 150,
  },
];
export const MANAGECUSTOMER_COLUMN = [
  {
    title: "SR_NO",
    dataIndex: "SR_NO",
    key: "SR_NO",
    width: 60,
  },

  {
    title: "CUSTOMER_IMAGE",
    dataIndex: "CUSTOMER_IMAGE",
    key: "CUSTOMER_IMAGE",
    width: 110,
  },

  {
    title: "CUSTOMER_NAME",
    dataIndex: "CUSTOMER_NAME",
    key: "CUSTOMER_NAME",
    width: 200,
  },
  {
    title: "CUSTOMER_ID",
    dataIndex: "CUSTOMER_ID",
    key: "CUSTOMER_ID",
    width: 150,
  },
  {
    title: "CITY",
    dataIndex: "CITY",
    key: "CITY",
    width: 140,
  },
  {
    title: "PIN_CODE",
    dataIndex: "PIN_CODE",
    key: "PIN_CODE",
    width: 140,
  },
  {
    title: "PREVIOUS_ORDER",
    dataIndex: "PREVIOUS_ORDER",
    key: "PREVIOUS_ORDER",
    width: 140,
  },
  {
    title: "CUSTOMER_TYPE",
    dataIndex: "CUSTOMER_TYPE",
    key: "CUSTOMER_TYPE",
    width: 140,
  },
  {
    title: "UPDATED_AT",
    dataIndex: "UPDATED_AT",
    key: "UPDATED_AT",
    width: 150,
  },
];
export const MANUFACTURER_COLUMN = [
  {
    title: "SR_NO",
    dataIndex: "SR_NO",
    key: "SR_NO",
    width: 60,
  },
  {
    title: "CUSTOMER_IMAGE",
    dataIndex: "CUSTOMER_IMAGE",
    key: "CUSTOMER_IMAGE",
    width: 110,
  },
  {
    title: "MANUFACTURER_NAME",
    dataIndex: "MANUFACTURER_NAME",
    key: "MANUFACTURER_NAME",
    width: 200,
  },
  {
    title: "MANUFACTURER_ID",
    dataIndex: "MANUFACTURER_ID",
    key: "MANUFACTURER_ID",
    width: 150,
  },
  {
    title: "DESIGN_SERIES",
    dataIndex: "DESIGN_SERIES",
    key: "DESIGN_SERIES",
    width: 140,
  },
  {
    title: "CREATED_AT",
    dataIndex: "CREATED_AT",
    key: "CREATED_AT",
    width: 140,
  },
  {
    title: "UPDATED_AT",
    dataIndex: "UPDATED_AT",
    key: "UPDATED_AT",
    width: 140,
  },
];
export const NEWORDER_COLUMN = [
  {
    title: "SR_NO",
    dataIndex: "SR_NO",
    key: "SR_NO",
    width: 60,
  },
  {
    title: "PRODUCT_IMAGE",
    dataIndex: "CUSTOMER_IMAGE",
    key: "CUSTOMER_IMAGE",
    width: 110,
  },
  {
    title: "DESIGN_NO",
    dataIndex: "DESIGN_NO",
    key: "DESIGN_NO",
    width: 200,
  },
  {
    title: "ORDER_ID",
    dataIndex: "ORDER_ID",
    key: "ORDER_ID",
    width: 150,
  },
  {
    title: "ORDER_CATEGORY",
    dataIndex: "ORDER_CATEGORY",
    key: "ORDER_CATEGORY",
    width: 140,
  },
  {
    title: "ORDER_TYPE",
    dataIndex: "ORDER_TYPE",
    key: "ORDER_TYPE",
    width: 150,
  },
  {
    title: "STORE_ID",
    dataIndex: "STORE_ID",
    key: "STORE_ID",
    width: 140,
  },
  {
    title: "ORDER_STATUS",
    dataIndex: "ORDER_STATUS",
    key: "ORDER_STATUS",
    width: 140,
  },
  {
    title: "DELIVERY_DATE",
    dataIndex: "DELIVERY_DATE",
    key: "DELIVERY_DATE",
    width: 140,
  },
  {
    title: "UPDATED_ON",
    dataIndex: "UPDATED_ON",
    key: "UPDATED_ON",
    width: 140,
  },
];
export const MANAGE_STORE_COLUMN = [
  {
    title: "SR_NO",
    dataIndex: "SR_NO",
    key: "SR_NO",
    width: 60,
  },
  {
    title: "STORE_IMAGE",
    dataIndex: "STORE_IMAGE",
    key: "STORE_IMAGE",
    width: 200,
  },
  {
    title: "LEGAL_FIRM_NAME",
    dataIndex: "LEGAL_FIRM_NAME",
    key: "LEGAL_FIRM_NAME",
    width: 110,
  },
  {
    title: "STORE_ID",
    dataIndex: "STORE_ID",
    key: "STORE_ID",
    width: 150,
  },
  {
    title: "USERNAME",
    dataIndex: "USERNAME",
    key: "USERNAME",
    width: 140,
  },
  {
    title: "STORE_TYPE",
    dataIndex: "STORE_TYPE",
    key: "STORE_TYPE",
    width: 150,
  },
  {
    title: "GST_DETAILS",
    dataIndex: "GST_DETAILS",
    key: "GST_DETAILS",
    width: 140,
  },
  {
    title: "EMAIL_ID",
    dataIndex: "EMAIL_ID",
    key: "EMAIL_ID",
    width: 140,
  },
  {
    title: "CREATED_AT",
    dataIndex: "CREATED_AT",
    key: "CREATED_AT",
    width: 140,
  },
  {
    title: "UPDATED_AT",
    dataIndex: "UPDATED_AT",
    key: "UPDATED_AT",
    width: 140,
  },
];
export const DAILY_WALKINS_COLUMN = [
  {
    title: "SR_NO",
    dataIndex: "SR_NO",
    key: "SR_NO",
    width: 60,
  },
  {
    title: "STORE_ID",
    dataIndex: "STORE_ID",
    key: "STORE_ID",
    width: 150,
  },
  {
    title: "STORE_NAME",
    dataIndex: "STORE_NAME",
    key: "STORE_NAME",
    width: 200,
  },

  {
    title: "NO_OF_WALKINS",
    dataIndex: "NO_OF_WALKINS",
    key: "NO_OF_WALKINS",
    width: 140,
  },

  {
    title: "CREATED_AT",
    dataIndex: "CREATED_AT",
    key: "CREATED_AT",
    width: 140,
  },
];
export const RETURN_REASON_COLUMN = [
  {
    title: "SR_NO",
    dataIndex: "SR_NO",
    key: "SR_NO",
    width: 60,
  },
  {
    title: "REASONS",
    dataIndex: "REASONS",
    key: "REASONS",
    width: 150,
  },
  {
    title: "UPDATED_AT",
    dataIndex: "UPDATED_AT",
    key: "UPDATED_AT",
    width: 200,
  },
  {
    title: "CREATED_AT",
    dataIndex: "CREATED_AT",
    key: "CREATED_AT",
    width: 140,
  },
  {
    title: "ACTIONS",
    dataIndex: "ACTIONS",
    key: "ACTIONS",
    width: 140,
  },
];
export const STORE_PAYMENT_DETAILS_COLUMN = [
  {
    title: "SR_NO",
    dataIndex: "SR_NO",
    key: "SR_NO",
    width: 60,
  },
  {
    title: "IMAGE",
    dataIndex: "IMAGE",
    key: "IMAGE",
    width: 150,
  },
  {
    title: "GLS",
    dataIndex: "GLS",
    key: "GLS",
    width: 200,
  },
  {
    title: "PRODUCT_ID",
    dataIndex: "PRODUCT_ID",
    key: "PRODUCT_ID",
    width: 140,
  },
  {
    title: "STORE_ID",
    dataIndex: "STORE_ID",
    key: "STORE_ID",
    width: 140,
  },
  {
    title: "ORDER_ID_PREFIX",
    dataIndex: "ORDER_ID_PREFIX",
    key: "ORDER_ID_PREFIX",
    width: 200,
  },
  {
    title: "PAYMENT_MODE",
    dataIndex: "PAYMENT_MODE",
    key: "PAYMENT_MODE",
    width: 140,
  },
  {
    title: "TXN_ID",
    dataIndex: "TXN_ID",
    key: "TXN_ID",
    width: 140,
  },
  {
    title: "TOTAL_PAID",
    dataIndex: "TOTAL_PAID",
    key: "TOTAL_PAID",
    width: 200,
  },
  {
    title: "REMAINING_BALANCE",
    dataIndex: "REMAINING_BALANCE",
    key: "REMAINING_BALANCE",
    width: 140,
  },
  {
    title: "CREATED_ON",
    dataIndex: "CREATED_ON",
    key: "CREATED_ON",
    width: 140,
  },
];
export const STOCK_TRANSFER_COLUMN = [
  {
    title: "SR_NO",
    dataIndex: "SR_NO",
    key: "SR_NO",
    width: 60,
  },
  {
    title: "IMAGE",
    dataIndex: "IMAGE",
    key: "IMAGE",
    width: 150,
  },
  {
    title: "GLS",
    dataIndex: "GLS",
    key: "GLS",
    width: 200,
  },
  {
    title: "PRODUCT_ID",
    dataIndex: "PRODUCT_ID",
    key: "PRODUCT_ID",
    width: 140,
  },
  {
    title: "STOCK_TRANSFER_ID",
    dataIndex: "STOCK_TRANSFER_ID",
    key: "STOCK_TRANSFER_ID",
    width: 140,
  },
  {
    title: "LOT_NUMBER",
    dataIndex: "LOT_NUMBER",
    key: "LOT_NUMBER",
    width: 200,
  },
  {
    title: "PRODUCT_TYPE",
    dataIndex: "PAYMENT_MODE",
    key: "PAYMENT_MODE",
    width: 140,
  },
  {
    title: "TRANSFERED_TO",
    dataIndex: "TRANSFERED_TO",
    key: "TRANSFERED_TO",
    width: 140,
  },
  {
    title: "TOTAL_PAID",
    dataIndex: "TOTAL_PAID",
    key: "TOTAL_PAID",
    width: 200,
  },
  {
    title: "DELIVERY_TYPE",
    dataIndex: "DELIVERY_TYPE",
    key: "DELIVERY_TYPE",
    width: 140,
  },
  {
    title: "RECIEVED_REQUEST_ON",
    dataIndex: "RECIEVED_REQUEST_ON",
    key: "RECIEVED_REQUEST_ON",
    width: 140,
  },
];
export const MANAGE_EMPLOYEE_COLUMN = [
  {
    title: "SR_NO",
    dataIndex: "SR_NO",
    key: "SR_NO",
    width: 60,
  },
  {
    title: "EMPLOYEE_NAME",
    dataIndex: "EMPLOYEE_NAME",
    key: "EMPLOYEE_NAME",
    width: 150,
  },
  {
    title: "EMPLOYEE_ID",
    dataIndex: "EMPLOYEE_ID",
    key: "EMPLOYEE_ID",
    width: 200,
  },
  {
    title: "STORE_ID",
    dataIndex: "STORE_ID",
    key: "STORE_ID",
    width: 140,
  },
  {
    title: "NO_OF_REQUEST_FETCHED",
    dataIndex: "NO_OF_REQUEST_FETCHED",
    key: "NO_OF_REQUEST_FETCHED",
    width: 140,
  },
  {
    title: "CREATED_AT",
    dataIndex: "CREATED_AT",
    key: "CREATED_AT",
    width: 200,
  },
  {
    title: "ACTION",
    dataIndex: "ACTION",
    key: "ACTION",
    width: 140,
  },
];
export const VERIFY_STOCK_COLUMN = [
  {
    title: "SR_NO",
    dataIndex: "SR_NO",
    key: "SR_NO",
    width: 60,
  },
  {
    title: "VERIFY_ID",
    dataIndex: "VERIFY_ID",
    key: "VERIFY_ID",
    width: 150,
  },
  {
    title: "VERIFY_REPORT",
    dataIndex: "VERIFY_REPORT",
    key: "VERIFY_REPORT",
    width: 200,
  },
  {
    title: "STORE_ID",
    dataIndex: "STORE_ID",
    key: "STORE_ID",
    width: 140,
  },
  {
    title: "TOTAL_STOCK",
    dataIndex: "TOTAL_STOCK",
    key: "TOTAL_STOCK",
    width: 140,
  },
  {
    title: "SCANNED_ITEM",
    dataIndex: "SCANNED_ITEM",
    key: "SCANNED_ITEM",
    width: 200,
  },
  {
    title: "VERIFIED_ON",
    dataIndex: "VERIFIED_ON",
    key: "VERIFIED_ON",
    width: 140,
  },
  {
    title: "UPDATED_ON",
    dataIndex: "UPDATED_ON",
    key: "UPDATED_ON",
    width: 140,
  },
];