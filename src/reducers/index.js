import {
  EKLE,
  EKLE2,
  HANDLE,
  ISARETLE,
  ISARETLE2,
  TEMIZLE,
  TEMIZLE2,
} from "../actions/actionTypes";
import * as CryptoJS from "crypto-js";

const INITIAL_STATE = {
  liste: [
    { id: 1, baslik: "THE-REK", tamamlandi: false },
    { id: 2, baslik: "TURKEY", tamamlandi: true },
  ],
  liste2: [
    { id: 1, baslik: "TURKEY", tamamlandi: false },
    { id: 2, baslik: "THE-REK", tamamlandi: true },
  ],
  forms: { generator: "", id: "" },
};

export const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case HANDLE:
      return {
        ...state,
        forms: {
          ...state.forms,
          generator: action.payload.target.value,
          id: action.payload.target.value,
        },
      };
    case EKLE:
      if (state.forms.generator === "RC4") {
        return {
          ...state,
          liste: [
            ...state.liste,
            {
              id: state.liste.length + 1,
              baslik: CryptoJS.RC4.encrypt(
                action.payload,
                "THE-REK"
              ).toString(CryptoJS.enc.HEX),
              tamamlandi: false,
            },
          ],
        };
      } else if (state.forms.generator === "Rabbit") {
        return {
          ...state,
          liste: [
            ...state.liste,
            {
              id: state.liste.length + 1,
              baslik: CryptoJS.Rabbit.encrypt(
                action.payload,
                "THE-REK"
              ).toString(CryptoJS.enc.HEX),
              tamamlandi: false,
            },
          ],
        };
        
      } else if (state.forms.generator === "AES") {
        return {
          ...state,
          liste: [
            ...state.liste,
            {
              id: state.liste.length + 1,
              baslik: CryptoJS.AES.encrypt(
                action.payload,
                "THE-REK"
              ).toString(CryptoJS.enc.HEX),
              tamamlandi: false,
            },
          ],
        };
      } else if (state.forms.generator === "DES") {
        return {
          ...state,
          liste: [
            ...state.liste,
            {
              id: state.liste.length + 1,
              baslik: CryptoJS.DES.encrypt(
                action.payload,
                "THE-REK"
              ).toString(CryptoJS.enc.HEX),
              tamamlandi: false,
            },
          ],
        };
      } else if (state.forms.generator === "TripleDES") {
        return {
          ...state,
          liste: [
            ...state.liste,
            {
              id: state.liste.length + 1,
              baslik: CryptoJS.TripleDES.encrypt(
                action.payload,
                "THE-REK"
              ).toString(CryptoJS.enc.HEX),
              tamamlandi: false,
            },
          ],
        };
      } else if (state.forms.generator === "RC4drop") {
        return {
          ...state,
          liste: [
            ...state.liste,
            {
              id: state.liste.length + 1,
              baslik: CryptoJS.RC4Drop.encrypt(
                action.payload,
                "THE-REK"
              ).toString(CryptoJS.enc.HEX),
              tamamlandi: false,
            },
          ],
        };
      }
      break;

    case ISARETLE:
      return {
        ...state,
        liste: state.liste.map((item) =>
          item.id === action.payload
            ? { ...item, tamamlandi: !item.tamamlandi }
            : item
        ),
      };
    case TEMIZLE:
      return {
        ...state,
        liste: state.liste.filter((item) => item.tamamlandi === false),
      };

    case EKLE2:
      if (state.forms.generator === "RC4") {
        return {
          ...state,
          liste2: [
            ...state.liste2,
            {
              id: state.liste2.length + 1,
              baslik: CryptoJS.RC4.decrypt(
                action.payload,
                "THE-REK" //PASSPHRASE WORD...
              ).toString(CryptoJS.enc.Latin1),
              tamamlandi: false,
            },
          ],
        };
       
      } else if (state.forms.generator === "Rabbit") {
        return {
          ...state,
          liste2: [
            ...state.liste2,
            {
              id: state.liste2.length + 1,
              baslik: CryptoJS.Rabbit.decrypt(
                action.payload,
                "THE-REK" //PASSPHRASE WORD...
              ).toString(CryptoJS.enc.Latin1),
              tamamlandi: false,
            },
          ],
        };
      } else if (state.forms.generator === "RC4drop") {
        return {
          ...state,
          liste2: [
            ...state.liste2,
            {
              id: state.liste2.length + 1,
              baslik: CryptoJS.RC4Drop.decrypt(
                action.payload,
                "THE-REK" //PASSPHRASE WORD...
              ).toString(CryptoJS.enc.Latin1),
              tamamlandi: false,
            },
          ],
        };
      } else if (state.forms.generator === "AES") {
        return {
          ...state,
          liste2: [
            ...state.liste2,
            {
              id: state.liste2.length + 1,
              baslik: CryptoJS.AES.decrypt(
                action.payload,
                "THE-REK" //PASSPHRASE WORD...
              ).toString(CryptoJS.enc.Latin1),
              tamamlandi: false,
            },
          ],
        };
      } else if (state.forms.generator === "DES") {
        return {
          ...state,
          liste2: [
            ...state.liste2,
            {
              id: state.liste2.length + 1,
              baslik: CryptoJS.DES.decrypt(
                action.payload,
                "THE-REK" //PASSPHRASE WORD...
              ).toString(CryptoJS.enc.Latin1),
              tamamlandi: false,
            },
          ],
        };
      } else if (state.forms.generator === "TripleDES") {
        return {
          ...state,
          liste2: [
            ...state.liste2,
            {
              id: state.liste2.length + 1,
              baslik: CryptoJS.TripleDES.decrypt(
                action.payload,
                "THE-REK" //PASSPHRASE WORD...
              ).toString(CryptoJS.enc.Latin1),
              tamamlandi: false,
            },
          ],
        };
      }

      break;
    case ISARETLE2:
      return {
        ...state,
        liste2: state.liste2.map((item) =>
          item.id === action.payload
            ? { ...item, tamamlandi: !item.tamamlandi }
            : item
        ),
      };
    case TEMIZLE2:
      return {
        ...state,
        liste2: state.liste2.filter((item) => item.tamamlandi === false),
      };

    default:
      return state;
  }
};
