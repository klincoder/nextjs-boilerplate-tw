// Import resources
import moment from "moment";
import axios from "axios";

// Import custom files
import { fileExtensions, currSymbol } from "./data";

// FUNCTIONS
// HANDLE USER EMAIL
export const handleUserEmail = async (toName, toEmail, msg, api, fromEmail) => {
  // If empty args, return
  if (!toName || !toEmail || !msg || !api) return;
  // Return and await response
  return await axios({
    method: "POST",
    url: `${baseURL}/api/${api}`,
    data: {
      data: {
        toName: toName,
        toEmail: toEmail,
        msg: msg,
        fromName: "Bulkahia",
        fromEmail: fromEmail || "noreply@bulkahia.com",
        footerName: "Bulkahia Team",
      },
    },
  })
    .then((apiRes) => {
      // Define resData
      const resData = apiRes?.data;
      //console.log("Debug fxnUserEmail: ", resData);
      return resData;
    })
    .catch((err) => {
      console.log("Error fxnUserEmail: ", err.message);
    });
}; // close fxn

// HANDLE ADMIN EMAIL
export const handleAdminEmail = async (msg, api, fromEmail) => {
  // If empty args, return
  if (!msg || !api) return;
  // Return and await response
  return await axios({
    method: "POST",
    url: `${baseURL}/api/${api}`,
    data: {
      data: {
        toName: "Bulkahia Admin",
        toEmail: "bulkahiaonline@gmail.com",
        msg: msg,
        fromName: "Bulkahia",
        fromEmail: fromEmail || "noreply@bulkahia.com",
        footerName: "Bulkahia Team",
      },
    },
  })
    .then((apiRes) => {
      // Define resData
      const resData = apiRes?.data;
      //console.log("Debug fxnAdminEmail: ", resData);
      return resData;
    })
    .catch((err) => {
      console.log("Error fxnAdminEmail: ", err.message);
    });
}; // close fxn

// HANDLE UPPERCASE FIRST
export const handleUppercaseFirst = (stringInput) => {
  // If stringInput is not a string
  if (!stringInput || typeof stringInput != "string") return;
  // Return
  return stringInput.charAt(0).toUpperCase() + stringInput.slice(1);
}; // close fxn

// HANDLE SLICE STRING
export const handleSliceString = (strInput, sliceFrom, sliceTo) => {
  // If !strInput
  if (!strInput || !sliceTo) return;
  // Define variables
  let result;
  // If strInput
  if (strInput?.length > sliceTo) {
    result = strInput?.slice(sliceFrom, sliceTo) + "...";
  } else {
    result = strInput;
  } // close if
  // Return
  return result;
}; // close fxn

// HANDLE GENERATE USERNAME FROM EMAIL ADDRESS
export const handleGenUsername = (email) => {
  // If data type is string
  if (!email || typeof email === "string") {
    return email?.split("@")[0];
  } else {
    return null;
  } // close if
}; // close fxn

// HANDLE STATUS COLOR
export const handleStatusColor = (status) => {
  // If empty args, return
  if (!status || typeof status != "string") return "";
  // Define variable
  let color;
  // Switch status
  switch (status) {
    case "active":
      color = "bg-success";
      break;
    case "success":
      color = "bg-success";
      break;
    case "approved":
      color = "bg-success";
      break;
    case "paid":
      color = "bg-success";
      break;
    case "pending":
      color = "bg-secondary";
      break;
    case "processing":
      color = "bg-secondary";
      break;
    case "completed":
      color = "bg-dark";
      break;
    default:
      color = "bg-danger";
      break;
  } // close switch
  // Return
  return color;
}; // close fxn

// HANDLE REMOVE OBJ PROP - SINGLE
export const handleRemoveObjProp = (
  propKey,
  { [propKey]: propValue, ...rest }
) => rest;

// HANDLE REMOVE OBJ PROP - BULK
export const handleRemoveObjPropBulk = (obj, ...keys) =>
  keys?.length
    ? handleRemoveObjPropBulk(handleRemoveObjProp(keys?.pop(), obj), ...keys)
    : obj;

// HANDLE IS EMPTY FORM
export const handleIsEmptyForm = (obj, propsToRemove) => {
  // if typeof obj !== object, return
  if (typeof obj !== "object" || !propsToRemove) return;
  // Define variables
  let isEmpty, test;
  // Define newObj - remove propsToRemove properties
  const newObj = handleRemoveObjPropBulk(obj, ...propsToRemove);
  // Define objVal - get values from obj
  const objVal = Object.values(newObj);
  // Check if any objVal is empty
  isEmpty = objVal.includes("");
  test = newObj;
  // Return
  return isEmpty;
}; // close fxn

// HANDLE GENERATE OTP CODE
export const handleGenOtpCode = () => {
  const code = Math.floor(1000 + Math.random() * 9000); //Math.floor(Math.random() * 999999 + 1);
  return code.toString();
}; // close fxn

// HANDLE TITLE CASE
export const handleTitleCase = (strVal) => {
  // If !strVal return
  if (!strVal) return;
  // Convert strVal to lowercase and split each word
  const finalStrVal = strVal?.toLowerCase()?.split(" ");
  // Loop finalStrVal and capitalize each word
  for (var i = 0; i < finalStrVal?.length; i++) {
    finalStrVal[i] =
      finalStrVal[i].charAt(0).toUpperCase() + finalStrVal[i].slice(1);
  } // close loop
  // Return
  return finalStrVal?.join(" ");
}; // close fxn

// HANDLE SHOW CURRENCY SYMBOL
export const handleShowCurrSymbol = (slug) => {
  // If !slug, return
  if (!slug) return;
  // Switch slug
  switch (slug) {
    case "wallet-bal":
      return true;
    case "earnings-bal":
      return true;
    case "paid-earnings":
      return true;
    case "pending-earnings":
      return true;
    case "transactions":
      return true;
    default:
      return false;
  } // close switch
}; // close fxn

// HANDLE SPLIT BY CHARACTER
export const handleSplitByChar = (stringInput, splitChar) => {
  // If !stringInput
  if (!stringInput || !splitChar) return;
  // Define result
  const result = stringInput?.split(splitChar);
  const first = result[0];
  const last = result[1];
  // Return
  return { first, last };
}; // close fxn

// HANDLE GENERATE OBJECT ARRAY
export const handleGenObjArr = (x) => {
  // If !x return
  if (!x) return;
  let obj = { key: "", value: "" };
  return [...Array(x).keys()].map(() => obj);
}; // close fxn

// HANDLE NUMBER TO STRING
export function handleNumToString(num) {
  // If !num, return
  if (!num || typeof num !== "number") return;
  // Convert num to string
  num = num?.toString()?.replace(/[^0-9.]/g, "");
  // If num < 1000
  if (num < 1000) {
    return num;
  } // close if
  // Define stringIntArr
  let si = [
    { v: 1e3, s: "K" },
    { v: 1e6, s: "M" },
    { v: 1e9, s: "B" },
    { v: 1e12, s: "T" },
    { v: 1e15, s: "P" },
    { v: 1e18, s: "E" },
  ];
  // Define index
  let index;
  // Loop
  for (index = si.length - 1; index > 0; index--) {
    if (num >= si[index].v) {
      break;
    } // close if
  } // close if
  // Define result
  const result =
    (num / si[index].v).toFixed(2).replace(/\.0+$|(\.[0-9]*[1-9])0+$/, "$1") +
    si[index].s;
  // Return
  return result;
} // close fxn

// HANDLE PAGINATE ARR
export const handleArrPaginator = (items, currentPage, perPageItems) => {
  // If !items return
  if (!items || typeof items !== "object") return;
  // Define variables
  let page = currentPage || 1;
  let perPage = perPageItems || 12;
  let offset = (page - 1) * perPage;
  // Define paginated items
  const paginatedItems = items?.slice(offset).slice(0, perPageItems);
  // Define total pages
  const totalPages = Math.ceil(items?.length / perPage);
  // Return
  return {
    page: page,
    perPage: perPage,
    prevPage: page - 1 ? page - 1 : null,
    nextPage: totalPages > page ? page + 1 : null,
    totalItems: items.length,
    totalPages: totalPages,
    data: paginatedItems,
  };
}; // close fxn

// HANDLE GENERATE EMPTY ARRAY
export const handleGenEmptyArr = (x) => {
  let arr = "";
  return [...Array(x).keys()].map(() => arr);
}; // close fxn

// HANDLE GENERATE TRANX REFERENCE
export const handleGenTranxRef = (prefix) => {
  // Define variables
  const prefixFinal = prefix || "BA";
  const randomCode = Math.floor(Math.random() * 999999 + 1);
  const result =
    prefixFinal +
    Math.random().toString(36).toUpperCase().slice(2, 3) +
    randomCode;
  return result;
}; // close fxn

// HANDLE GENERATE RANDOM CHARACTERS
export const handleGenRandomChar = () => {
  // Define variables
  const result = Math.random()?.toString(36)?.slice(2, 8);
  return result;
}; // close fxn

// HANDLE TRANX EMAIL MSG
export const handleTranxEmailMsg = (
  username,
  tranxType,
  tranxAmt,
  tranxFee,
  tranxRef,
  tranxCategory,
  tranxDate
) => {
  // If empty args, return
  if (
    !username ||
    !tranxType ||
    !tranxAmt ||
    !tranxRef ||
    !tranxCategory ||
    !tranxDate
  )
    return null;
  // Define variables
  tranxType = tranxType?.toUpperCase();
  // Return
  return {
    username: username,
    type: tranxType,
    amt: currSymbol?.ngn + intl.format(tranxAmt),
    fee: currSymbol?.ngn + intl.format(tranxFee),
    ref: tranxRef,
    desc: tranxCategory,
    date: tranxDate,
  }; // close return
}; // close fxn

// HANDLE FIND STRING IN ARRAY
export const handleFindStringInArr = (haystack, string) => {
  // If empty args, return null
  if (!haystack || !string) return null;
  // Find string in haystack
  return haystack?.includes(string);
}; // close fxn

// HANDLE FILES TO ACCEPT
export const handleFilesToAccept = () => {
  return fileExtensions?.map((e) => "." + e)?.join(", ");
}; // close fxn

// HANDLE FILE VALIDATION
export const handleFileValidation = (fileInput, username) => {
  // If empty args, return null
  if (!fileInput || !username) return null;
  // Define variables
  let isValid, msg;
  const randomCode = Math.floor(Math.random() * 999999 + 1);
  const fileName = fileInput?.name;
  const fileSize = fileInput?.size;
  const fileType = fileInput?.type?.split("/").pop();
  const fileTypeIsValid = handleFindStringInArr(fileExtensions, fileType);
  const newFileName = username + "-" + randomCode + "." + fileType;
  // Validations
  if (!fileName) {
    isValid = false;
    msg = "No file selected";
  } else if (fileSize > 3200000) {
    isValid = false;
    msg = "File too big"; // Max 3mb
  } else if (fileTypeIsValid === false) {
    isValid = false;
    msg = "Invalid file format";
  } else {
    isValid = true;
    msg = "Valid file";
  } // close if
  // Return
  return { isValid, msg, newFileName };
}; // close fxn

// HANDLE GET USER INFO
export const handleGetUserInfo = (objArr, userID) => {
  // If empty args, return
  if (typeof objArr !== "object" || !userID) return;
  const result = objArr?.filter((item) => item?.id === userID)?.[0];
  return result;
}; // close fxn

// HANDLE FORMAT DATE
export const handleFormatDate = (dateVal, formatType) => {
  // If empty args, return
  if (!dateVal) return;
  // Define variables
  let result;
  // Switch formatType
  switch (formatType) {
    case 1:
      result = moment.utc(dateVal).format();
      break;
    case 2:
      result = moment.utc(dateVal).format("MMM D, YYYY h:mm A");
      break;
    case 3:
      result = moment.utc(dateVal).format("YYYY-MM-DD");
      break;
    default:
      result = moment.utc(dateVal).format("MMM D, YYYY");
      break;
  } // close switch
  // Retuurn
  return result;
}; // close fxn

// HANDLE REMOVE OBJ ARR DUPLICATES BY ID
export const handleObjArrDuplicatesById = (objArr) => {
  // If empty args, return
  if (typeof objArr !== "object") return;
  // Remove duplicates by id
  const result = [...new Map(objArr?.map((v) => [v.id, v])).values()];
  // Return
  return result;
}; // close fxn
