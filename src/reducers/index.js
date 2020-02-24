import { UPLOAD_IMAGE, UPLOAD_LOADING, CLEAR_IMAGE, UPDATE_TOKEN } from '../constants'
import { combineReducers } from 'redux'

/*const initialState = {
  value: 0,
  action: null,
  from: null,
  summaryItems: [
    {
      "qty": 21,
      "desc": "21 小計",
      "unit": "",
      "price": "0.000",
      "symbols": [
        "$"
      ],
      "discount": "0.000",
      "lineType": "SubTotal",
      "descClean": "小計",
      "lineTotal": "387.260",
      "productCode": "",
      "customFields": {}
    },
    {
      "qty": 0,
      "desc": "ROUNDING",
      "unit": "",
      "price": "0.000",
      "symbols": [
        "-",
        "$"
      ],
      "discount": "0.000",
      "lineType": "Rounding",
      "descClean": "ROUNDING",
      "lineTotal": "0.060",
      "productCode": "",
      "customFields": {}
    },
    {
      "qty": 0,
      "desc": "А1 і рауни",
      "unit": "",
      "price": "0.000",
      "symbols": [
        "$"
      ],
      "discount": "0.000",
      "lineType": "",
      "descClean": "А1 і рауни",
      "lineTotal": "387.200",
      "productCode": "",
      "customFields": {}
    },
    {
      "qty": 0,
      "desc": "找續",
      "unit": "",
      "price": "0.000",
      "symbols": [
        "$"
      ],
      "discount": "0.000",
      "lineType": "",
      "descClean": "找續",
      "lineTotal": "0.000",
      "productCode": "",
      "customFields": {}
    },
    {
      "qty": 0,
      "desc": "金額 ( AMOUNT )",
      "unit": "",
      "price": "0.000",
      "symbols": [],
      "discount": "0.000",
      "lineType": "",
      "descClean": "金額 ( AMOUNT )",
      "lineTotal": "387.200",
      "productCode": "",
      "customFields": {}
    },
    {
      "qty": 0,
      "desc": "電子印花結餘 ;",
      "unit": "",
      "price": "0.000",
      "symbols": [],
      "discount": "0.000",
      "lineType": "",
      "descClean": "電子印花結餘 ;",
      "lineTotal": "0.960",
      "productCode": "",
      "customFields": {}
    }
  ],
  data: {
    "establishment": "International",
    "validatedEstablishment": false,
    "date": "2020-02-16 16:26:58",
    "total": "387.260",
    "url": "parknshop.com/c",
    "phoneNumber": "9915001648",
    "paymentMethod": "ALIPAY",
    "address": " Pacifica Mall",
    "cash": "0.000",
    "change": "0.000",
    "validatedTotal": false,
    "subTotal": "387.260",
    "validatedSubTotal": false,
    "tax": "0.000",
    "tip": "0.000",
    "taxes": [],
    "serviceCharges": [],
    "discount": "0.000",
    "rounding": "0.060",
    "discounts": [],
    "subTotalConfidence": 0.6,
    "taxesConfidence": [],
    "serviceChargeConfidences": [],
    "discountConfidences": [],
    "totalConfidence": 0.3,
    "dateConfidence": 0.7,
    "establishmentConfidence": 0.8,
    "tipConfidence": 0,
    "cashConfidence": 0,
    "changeConfidence": 0,
    "roundingConfidence": 0.6,
    "customFields": {
      "URL": "parknshop.com/c",
      "Country": "",
      "StoreID": "",
      "Currency": "",
      "VATNumber": "",
      "ExpenseType": "",
      "PaymentMethod": "ALIPAY",
      "CardLast4Digits": ""
    },
    "documentType": "receipt",
    "currency": "",
    "barcodes": [],
    "dateISO": "2020-02-16T16:26:58",
    "addressNorm": {
      "city": "",
      "state": "",
      "number": "",
      "street": "",
      "suburb": "",
      "country": "",
      "building": "| Pacifica Mall",
      "postcode": ""
    },
    "expenseType": "None",
    "otherData": []
  },
  lineItems: [
    {
      "qty": 0,
      "desc": "易賞錢積分結餘",
      "unit": "",
      "price": "0.000",
      "symbols": [],
      "discount": "0.000",
      "lineType": "",
      "descClean": "卡號碼 : 9915001648 易賞錢積分結餘",
      "lineTotal": "1,003.000",
      "productCode": "",
      "customFields": {}
    },
    {
      "qty": 0,
      "desc": "今次購物已賺取積分",
      "unit": "",
      "price": "0.000",
      "symbols": [],
      "discount": "0.000",
      "lineType": "",
      "descClean": "今次購物已賺取積分 SWISS MISS DARK CHOC",
      "lineTotal": "0.920",
      "productCode": "369043",
      "customFields": {}
    },
    {
      "qty": 0,
      "desc": "開士小姐特濃朱古力咖啡即冲裝",
      "unit": "",
      "price": "0.000",
      "symbols": [],
      "discount": "0.000",
      "lineType": "",
      "descClean": "www.moneyback.com.hk 想知更多 ? 立即下載易賞金线APP或亂跳頁 開士小姐特濃朱古力咖啡即冲裝 P R BRIDGE KWANGTUNG",
      "lineTotal": "21.900",
      "productCode": "122294",
      "customFields": {}
    },
    {
      "qty": 0,
      "desc": "珠江橋牌廣東米酒 ( 中 )",
      "unit": "",
      "price": "0.000",
      "symbols": [],
      "discount": "0.000",
      "lineType": "",
      "descClean": "珠江橋牌廣東米酒 ( 中 ) BAKER ' S CHOICE WHOLE",
      "lineTotal": "9.900",
      "productCode": "022163",
      "customFields": {}
    },
    {
      "qty": 0,
      "desc": "全麥方包 ( 8片裝 )",
      "unit": "",
      "price": "0.000",
      "symbols": [],
      "discount": "0.000",
      "lineType": "",
      "descClean": "全麥方包 ( 8片裝 ) GARDEN HOT DOG BUN",
      "lineTotal": "9.900",
      "productCode": "120011",
      "customFields": {}
    },
    {
      "qty": 2,
      "desc": "數量 : 2",
      "unit": "",
      "price": "0.000",
      "symbols": [],
      "discount": "0.000",
      "lineType": "",
      "descClean": "嘉頓熱狗包 數量 GARDEN COCKTAIL BUN",
      "lineTotal": "25.800",
      "productCode": "124657",
      "customFields": {}
    },
    {
      "qty": 2,
      "desc": "數量 : 2",
      "unit": "",
      "price": "0.000",
      "symbols": [],
      "discount": "0.000",
      "lineType": "",
      "descClean": "嘉頓小餐包 數量 VINDA ULTRA STRONG P",
      "lineTotal": "25.600",
      "productCode": "386753",
      "customFields": {}
    },
    {
      "qty": 0,
      "desc": "維達超純滑衛生紙",
      "unit": "",
      "price": "0.000",
      "symbols": [],
      "discount": "0.000",
      "lineType": "",
      "descClean": "維達超純滑衛生紙 BROCCOLI ( CHINA )",
      "lineTotal": "34.900",
      "productCode": "045554",
      "customFields": {}
    },
    {
      "qty": 2,
      "desc": "數量 : 2",
      "unit": "",
      "price": "0.000",
      "symbols": [],
      "discount": "0.000",
      "lineType": "",
      "descClean": "西蘭花 ( 中國 ) 數量",
      "lineTotal": "7.800",
      "productCode": "",
      "customFields": {}
    },
    {
      "qty": 2,
      "desc": "Buy 2 Save $ 0.3",
      "unit": "",
      "price": "0.000",
      "symbols": [
        "-"
      ],
      "discount": "0.000",
      "lineType": "",
      "descClean": "Buy Save $ 0.3 AVONMORE PURE IRISH",
      "lineTotal": "-0.300",
      "productCode": "499770",
      "customFields": {}
    },
    {
      "qty": 0,
      "desc": "愛爾蘭無鹽牛油",
      "unit": "",
      "price": "0.000",
      "symbols": [],
      "discount": "0.000",
      "lineType": "",
      "descClean": "愛爾蘭無鹽牛油",
      "lineTotal": "39.900",
      "productCode": "",
      "customFields": {}
    },
    {
      "qty": 0,
      "desc": "包裝變形",
      "unit": "",
      "price": "0.000",
      "symbols": [
        "-"
      ],
      "discount": "0.000",
      "lineType": "",
      "descClean": "包裝變形 WHOLESOME CHOICE COI",
      "lineTotal": "-9.900",
      "productCode": "158373",
      "customFields": {}
    },
    {
      "qty": 0,
      "desc": "健康糧坊生意米",
      "unit": "",
      "price": "0.000",
      "symbols": [],
      "discount": "0.000",
      "lineType": "",
      "descClean": "健康糧坊生意米 SOYBEAN CURD SHEET",
      "lineTotal": "23.500",
      "productCode": "070311",
      "customFields": {}
    },
    {
      "qty": 0,
      "desc": "腐竹 ( 每包 )",
      "unit": "",
      "price": "0.000",
      "symbols": [],
      "discount": "0.000",
      "lineType": "",
      "descClean": "腐竹 ( 每包 ) FRESHMARKET MINCED B",
      "lineTotal": "22.900",
      "productCode": "080013",
      "customFields": {}
    },
    {
      "qty": 2,
      "desc": "數量 : 2",
      "unit": "",
      "price": "0.000",
      "symbols": [],
      "discount": "0.000",
      "lineType": "",
      "descClean": "百鮮佳免治牛肉 數量 FARMER CHINA CHILLED",
      "lineTotal": "59.800",
      "productCode": "019260",
      "customFields": {}
    },
    {
      "qty": 0,
      "desc": "農夫中國冰鮮特價免治豬肉",
      "unit": "",
      "price": "0.000",
      "symbols": [],
      "discount": "0.000",
      "lineType": "",
      "descClean": "農夫中國冰鮮特價免治豬肉 FARMER CHINA CHILLED",
      "lineTotal": "37.100",
      "productCode": "019281",
      "customFields": {}
    },
    {
      "qty": 0,
      "desc": "農夫中國冰鮮免治豬肉",
      "unit": "",
      "price": "0.000",
      "symbols": [],
      "discount": "0.000",
      "lineType": "",
      "descClean": "農夫中國冰鮮免治豬肉 BEST BUY PAPER PLATE",
      "lineTotal": "34.600",
      "productCode": "108271",
      "customFields": {}
    },
    {
      "qty": 2,
      "desc": "數量 : 2",
      "unit": "",
      "price": "0.000",
      "symbols": [],
      "discount": "0.000",
      "lineType": "",
      "descClean": "超值牌23厘米紙碟 數量 BEST BUY PLASTIC CUP",
      "lineTotal": "21.800",
      "productCode": "106967",
      "customFields": {}
    },
    {
      "qty": 2,
      "desc": "數量 : 2",
      "unit": "",
      "price": "0.000",
      "symbols": [],
      "discount": "0.000",
      "lineType": "",
      "descClean": "超值牌207毫升膠杯 數量",
      "lineTotal": "29.800",
      "productCode": "",
      "customFields": {}
    },
    {
      "qty": 25,
      "desc": "SELECT BB 25 - 15%",
      "unit": "",
      "price": "0.000",
      "symbols": [
        "-"
      ],
      "discount": "0.000",
      "lineType": "",
      "descClean": "SELECT BB - 15",
      "lineTotal": "-7.740",
      "productCode": "",
      "customFields": {}
    }
  ]
}*/

export const initialState = {
  action: null,
  summaryItems: [],
  data: {},
  lineItems: [],
  tokens: [],
}

export const upload = (state = initialState, action)  => {
  switch (action.type) {
    case UPLOAD_IMAGE:
      const { lineItems, summaryItems, ...data } = action.data;
      return {
        ...state,
        data,
        lineItems: lineItems || [],
        summaryItems: summaryItems || [],
        action: 'upload',
      }
    case CLEAR_IMAGE:
      return {
        ...state,
        data: {},
        lineItems: [],
        summaryItems: [],
        action: 'clear',
      }
    case UPLOAD_LOADING:
      return {
        ...state,
        isLoading: action.data,
        action: 'loading',
      }
    case UPDATE_TOKEN:
      return Object.assign({}, state, {
        tokens: [].concat(action.data, state.tokens)
      })
    default:
      return state
  }
}

export default combineReducers({
  upload,
})
