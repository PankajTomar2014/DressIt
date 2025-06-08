// import NetInfo from '@react-native-community/netinfo';
import {Alert, Dimensions, Platform} from 'react-native';
import {moderateScale, verticalScale} from 'react-native-size-matters';
// // import PushNotification from 'react-native-push-notification';

// import {resetUser} from '../Redux/userSlice';
// import {useNavigation} from '@react-navigation/native';
// import DeviceInfo from 'react-native-device-info';
// import ApiRequest from '../Services/ApiRequest';
// import {ApiList} from '../Services/ApiList';
// import store from '../Redux/Store';
// import Clipboard from '@react-native-clipboard/clipboard';
// import {showToast} from '../Components/Rest';
// import {moderateScale, verticalScale} from 'react-native-size-matters';
// export const OS_Version = DeviceInfo.getSystemVersion();
export const HEADER_HEIGHT = verticalScale(40);
export const IS_ANDROID = Platform.OS == 'android';
export const IS_IOS = Platform.OS == 'ios';
export const INPUT_TITLE = moderateScale(12);
export const INPUT_HEIGHT = IS_ANDROID ? verticalScale(40) : verticalScale(35);
export const SCREEN_HEIGHT = Dimensions.get('screen').height;
export const SCREEN_WIDTH = Dimensions.get('screen').width;
export const internetErrorMessage = 'Please check internet connection';
// export const appVersion = DeviceInfo.getReadableVersion(); //(same as getVersion() + '.' + getBuildNumber())
// export const buildNo = DeviceInfo.getBuildNumber();

// console.log('OS_Version---', OS_Version);

// // export const Google_WebClient_Id =
// //   '789220174113-rllt2v02t0npaa292klvv7v6nbfir876.apps.googleusercontent.com';
// // export const senderID = '521635284520';

// export const GOOGLE_API_KEY = 'AIzaSyDuaxuwBIPezzgT1iHEsP7JpEtAO_MpLbg';

// export const Google_WebClient_Id =
//   '228315281327-hqlb91ca26h6qo0pe7gt4h67io611ti8.apps.googleusercontent.com';
// export const senderID = '1025029073306';

// export const googlePayMerchantId = 'BCR2DN4TWW6IL7DK';
// export const merchantIdentifier = 'tpyvpfgn38zh56ym';

// export const appName = 'IMPRO.PAY';

// export const FIXER_API_KEY = 'a2a71cbc49db03a0c67fb2fa5cb4e5a9';

// const siddhant_key = '88a6c4cba68a53a3b25297d64177ee5a'; // fixer key
// const pankaj_key = 'a0f7e999886e3d18137c6acaae02294b'; // fixer key

// export const paymentStatus = {
//   cancel: 'cancel',
//   success: 'success',
//   failed: 'failed',
// };

// export const owozCredentials = {
//   private_Key: '215114531AFF7134A94C88CEEA48E',
//   api_key: 'EB5758F2C3B4DF3FF4F2669D5FF5B',
//   site_code: 'TSTSTE0001',
//   // site_code: generateTransationUniqueId(),
//   bankReference: generateBankUniqueId(),
//   transationReference: generateTransationUniqueId(),
//   isTestMode: true, // True or False
//   cancelUrl:
//     'https://support.google.com/webmasters/thread/147054993/cancel-temporarily-remove-url?hl=en',
//   notifyUrl:
//     'https://learn.trybooking.com/hc/en-au/articles/360002854594-Notify-URL',
//   successUrl:
//     'https://help.usertesting.com/hc/en-us/articles/12435218164381-How-do-Success-URLs-work',
//   errorUrl: 'https://www.atlassian.com/blog/statuspage/error-pages',
//   paymentUrl: 'https://stagingapi.ozow.com/PostPaymentRequest', // staging
//   // paymentUrl: 'https://api.ozow.com/PostPaymentRequest', // Live
// };

// export const cashfreeCredentials = {
//   // SANDBOX

//   x_client_id: 'TEST10519198243d4682810b3bfed9e089191501',
//   x_client_secret: 'cfsk_ma_test_fe290b8369b63297ce2f22449d3da5fe_c7b74c08',
//   api_Version: '2022-01-01',
// };

// export const paysprintDetails = {
//   // UAT
//   // testingType: 'DEVELOPEMENT',
//   // Authorisedkey: 'TVRJek5EVTJOelUwTnpKRFQxSlFNREF3TURFPQ==',
//   // partnerId: 'CORP00001',
//   // jwtKey: 'UTA5U1VEQXdNREF4VFZSSmVrNUVWVEpPZWxVd1RuYzlQUT09',
//   // -------------------------------------------------------------
//   // PRODUCTION
//   testingType: 'PRODUCTION',
//   Authorisedkey: '', // NO NEED IN PRODUCTION
//   partnerId: 'CORP00001922',
//   jwtKey: 'UTA5U1VEQXdNREF4T1RJeVQxUlZNRTFFVVhkTlJGRjVUbmM5UFE9PQ==',
// };

// export const sybrinDetails = {
//   id: '1bda5b6e-746e-4117-ada2-cea76f0cd19d',
//   apiKey:
//     '3UKtMwJ1YxX8cir/zcA2DprkwFl3B+Qra1gVU86244h8PnxhbAfuMCiyXD6iKGqY9fBH5VJmGeqS0i3JKvy0XLGEvNisKNXPmBAoERsA5mzfuvHuw3Q6xJ4Cpvs0Fy+Ssi9Ce+G7EwjKrsCV/YpWqezd5QUveezBBa4FIU4wIEhftlfAuStGYg+EfXmnmk/wmT6SVE+osQ2BGXyxQ1yYLh7yjy4z8PobDeLxaJ08JfyXSDbdYz9KfyWpkDBiTd1OobjQIYwGwBz2agbuvkCOlWR2fHNAs8JdtUKY14SLdg65NDjZJUWUR4ZlTIGDNGeU53TFBUHo2U5fcCgJjQrs+2M3Ha6Qe7gxi0bBCZD0BgYQ2DrwH9hGWGcEqVvWe1WWRzc5bWX6//B/ZHI9DYzJ8/fcL3USl+EqeEa8IBxlXpQ83Evbkm3aHKzDxFIp6xO+SDdiOBOA39aWB7E7ci2lamR5kdHMgA0LvEliFw6FJ3OycuZPNwQi8ZlpMdHf+34l',
//   apiId: 'com.impronics.web',
//   startDate: '2025-04-02T00:00:00',
//   expiryDate: '2025-04-30T00:00:00',
//   organisationID: '28648fe3-5e1b-4345-8eee-6e2f2f5f60c2',
//   LicenseURL:
//     'https://licensing.sybrin.co.za/license/api/License/ValidateLicenses',
// };

// function generateBankUniqueId() {
//   // 20 char
//   const prefix = 'Bank-Id-';
//   const chars =
//     'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
//   let uniquePart = '';

//   for (let i = 0; i < 12; i++) {
//     uniquePart += chars.charAt(Math.floor(Math.random() * chars.length));
//   }

//   return prefix + uniquePart;
// }

// function generateTransationUniqueId() {
//   // 50 char
//   const prefix = 'Transaction-Id-';
//   const chars =
//     'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
//   let uniquePart = '';

//   for (let i = 0; i < 35; i++) {
//     uniquePart += chars.charAt(Math.floor(Math.random() * chars.length));
//   }

//   return prefix + uniquePart;
// }

// export const getEighteenYearsAgoDate = () => {
//   try {
//     const currentDate = new Date();
//     currentDate.setFullYear(currentDate.getFullYear() - 18);

//     // Adjust for 18 years ago by zeroing out time to prevent wrong date selection
//     currentDate.setHours(0, 0, 0, 0); // Ensure the date is at midnight

//     return currentDate;
//   } catch (error) {
//     console.log('get Eighteen yr error-------', error);
//   }
// };

// export const getNextFiveYears = () => {
//   try {
//     const currentDate = new Date();
//     currentDate.setFullYear(currentDate.getFullYear() + 5);

//     // Adjust for 18 years ago by zeroing out time to prevent wrong date selection
//     currentDate.setHours(0, 0, 0, 0); // Ensure the date is at midnight

//     return currentDate;
//   } catch (error) {
//     console.log('get Eighteen yr error-------', error);
//   }
// };
// export const getFiveYearsAgoDate = () => {
//   try {
//     const currentDate = new Date();
//     currentDate.setFullYear(currentDate.getFullYear() - 5);

//     // Adjust for 18 years ago by zeroing out time to prevent wrong date selection
//     currentDate.setHours(0, 0, 0, 0); // Ensure the date is at midnight

//     return currentDate;
//   } catch (error) {
//     console.log('get Eighteen yr error-------', error);
//   }
// };

// export const formatToYMD = dateString => {
//   try {
//     const date = new Date(dateString);
//     const year = date.getFullYear();
//     const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-based
//     const day = String(date.getDate()).padStart(2, '0');
//     return `${year}-${month}-${day}`;
//   } catch (error) {
//     console.log('formatToYMD error-------', error);
//     return '00-00-00';
//   }
// };

// export const copyToClipboard = text => {
//   try {
//     Clipboard.setString(text);
//     showToast('i', 'Copied Successfully.');
//   } catch (error) {
//     Alert.alert('Error : ', 'Copied failed');
//   }
// };

// export const platformCharges = rate => {
//   try {
//     if (rate) {
//       return rate?.calculatedCharge;
//     } else {
//       return 0;
//     }
//   } catch (error) {
//     console.error('platformCharges error -------', error);
//     return 0;
//   }
// };
// export const grandTotal = amount => {
//   try {
//     if (amount) {
//       return Number(amount);
//     } else {
//       return 0;
//     }
//   } catch (error) {
//     console.error('grandTotal error -------', error);
//     return 0;
//   }
// };

// export const sumPrincipalAmount = arr => {
//   try {
//     if (!Array.isArray(arr)) {
//       console.error('Input is not an array:', arr);
//       return 0;
//     }
//     return arr.reduce((total, item, index) => {
//       const transactionStatus = item?.transactionOutward?.transactionStatus;

//       if (transactionStatus === 'RELEASED') {
//         const rawAmount = item?.transactionOutward?.settlementAmount;
//         const amount = parseFloat(rawAmount);
//         return total + (isNaN(amount) ? 0 : amount);
//       }
//       return total;
//     }, 0);
//   } catch (error) {
//     console.error('sum PrincipalAmount error -------', error);
//     return 0;
//   }
// };

// export const checkTimeGreaterThenFiveHour = timestampWithTime => {
//   try {
//     const timestamp = timestampWithTime * 1000; // Convert to milliseconds
//     const currentTime = Date.now(); // Get current timestamp in milliseconds

//     const fiveHoursAgo = currentTime - 5 * 60 * 60 * 1000; // 5 hours in milliseconds

//     if (timestamp < fiveHoursAgo) {
//       return true;
//     } else {
//       return false;
//     }
//   } catch (error) {
//     console.error('get Eighteen yr error-------', error);
//     return false;
//   }
// };

// export const makeNumberRound = value => {
//   try {
//     return Math.round(value * 100) / 100;
//   } catch (error) {
//     console.error('makeNumberRound---error----', error);
//     return value;
//   }
// };

// export const toTwoDecimal = value => {
//   try {
//     const num = parseFloat(value);
//     if (isNaN(num)) return '0.00';
//     return num.toFixed(2);
//   } catch (error) {
//     showToast('e', 'toTwoDecimal error :' + error.message);
//     return value;
//   }
// };

// export const loutUser = async props => {
//   const {user} = store.getState().user;
//   try {
//     const {navigation, dispatch} = props;
//     dispatch(resetUser());
//     setTimeout(() => {
//       navigation.reset({
//         index: 0,
//         routes: [{name: 'Welcome'}],
//       });
//     }, 50);
//   } catch (error) {
//     console.error('logout error-------', error);
//   }
// };

// export const loginUser = async props => {
//   try {
//     const {navigation} = props;
//     navigation.reset({
//       index: 0,
//       routes: [{name: 'SignIn', params: {isGoBack: true}}],
//     });
//   } catch (error) {
//     console.log('loginUser error-------', error);
//   }
// };

// export const checkDocumentType = doc => {
//   try {
//     const navigation = useNavigation();
//     if (doc.includes('image')) {
//       navigation.navigate('');
//     } else if (doc.includes('video')) {
//       navigation.navigate('Milestone');
//     } else if (doc.includes('pdf')) {
//     }
//   } catch (error) {
//     console.log('checkDocumentType error-------', error);
//   }
// };
// export const timeOut = promise => {
//   return new Promise(function (resolve, reject) {
//     const timer = setTimeout(function () {
//       reject(new Error('Server Connection Timeout Error!'));
//     }, 10000);

//     promise
//       .then(response => {
//         clearTimeout(timer);
//         resolve(response);
//       })
//       .catch(error => {
//         clearTimeout(timer);
//         reject(error);
//       });
//   });
// };

// export const checkInternetConnected = async () => {
//   const internetState = await NetInfo.fetch();
//   return internetState.isConnected;
// };

// export const checkInternetConnectionHOC = async callbackFn => {
//   const isConnected = await checkInternetConnected();
//   if (isConnected) {
//     callbackFn();
//   } else {
//     throw Error(internetErrorMessage);
//   }
// };

// export const getInitialsFirstName = name => {
//   try {
//     return name?.toString()?.charAt(0)?.toUpperCase();
//   } catch (error) {
//     return 'E';
//   }
// };
// export const getInitialsFullname = (fname, lName) => {
//   try {
//     const firstName = fname?.charAt(0)?.toUpperCase();
//     const lastName = lName?.charAt(0)?.toUpperCase();

//     return firstName + lastName;
//   } catch (error) {
//     return 'E';
//   }
// };

// export const format = seconds => {
//   try {
//     let mins = parseInt(seconds / 60)
//       .toString()
//       .padStart(2, '0');
//     let secs = (Math.trunc(seconds) % 60).toString().padStart(2, '0');
//     return seconds ? `${mins}:${secs}` : '00:00';
//   } catch (error) {
//     console.log('formar error---', error.message);
//     return '00:00';
//   }
// };

// export const capitalizeEveryFirstLetter = letter => {
//   try {
//     const arr = letter.split(' ');
//     for (var i = 0; i < arr.length; i++) {
//       arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
//     }
//     const str2 = arr.join(' ');
//     return str2;
//   } catch (error) {
//     console.log('capitalizeEveryFirstLetter Error : ', error.message);
//     return '';
//   }
// };
// export const capitalizeOnlyFirstLetter = letter => {
//   try {
//     return letter.charAt(0).toUpperCase() + letter.slice(1);
//   } catch (error) {
//     console.log('capitalizeOnlyFirstLetter Error : ', error.message);
//     return '';
//   }
// };

// export const getGreeting = () => {
//   try {
//     const currentHour = new Date().getHours(); // Get the current hour (0-23)

//     if (currentHour >= 5 && currentHour < 12) {
//       return 'Good Morning'; // Morning: 5 AM - 11:59 AM
//     } else if (currentHour >= 12 && currentHour < 15) {
//       return 'Good Afternoon'; // Afternoon: 12 PM - 2:59 PM
//     } else if (currentHour >= 15 && currentHour < 17) {
//       return 'Good Evening'; // Evening: 3 PM - 4:59 PM
//     } else if (currentHour >= 17 && currentHour < 21) {
//       return 'Good Evening'; // Evening: 5 PM - 8:59 PM
//     } else {
//       return 'Good Night'; // Night: 9 PM - 4:59 AM
//     }
//   } catch (error) {
//     console.log('error getGreeting - ', error.message);
//     return 'Good Morning';
//   }
// };

// export const dateFormat = dateStr => {
//   try {
//     const date = new Date(dateStr);

//     const months = [
//       'Jan',
//       'Feb',
//       'Mar',
//       'Apr',
//       'May',
//       'Jun',
//       'Jul',
//       'Aug',
//       'Sep',
//       'Oct',
//       'Nov',
//       'Dec',
//     ];

//     const day = String(date.getDate()).padStart(2, '0');
//     const month = months[date.getMonth()];
//     const year = date.getFullYear();

//     let hours = date.getHours();
//     const minutes = String(date.getMinutes()).padStart(2, '0');
//     const ampm = hours >= 12 ? 'PM' : 'AM';
//     hours = hours % 12;
//     hours = hours ? hours : 12; // the hour '0' should be '12'
//     const strTime = String(hours).padStart(2, '0') + ':' + minutes + ' ' + ampm;

//     const formattedDate = `${day}-${month}-${year} ${strTime}`;
//     return formattedDate;
//   } catch (error) {
//     console.log('dateFormat error-------:', error.message);
//     return '00:00';
//   }
// };

// export const dateFormatYYYYMMDD = dateStr => {
//   try {
//     const date = new Date(dateStr);

//     const day = String(date.getDate()).padStart(2, '0');
//     const month = String(date.getMonth() + 1).padStart(2, '0'); // Get month as number and pad to 2 digits
//     const year = date.getFullYear();

//     const formattedDate = `${year}-${month}-${day}`;
//     return formattedDate;
//   } catch (error) {
//     console.log('dateFormatYYYYMMDD error-------:', error.message);
//     return '00:00';
//   }
// };

// export const dateFormatWithoutTime = dateStr => {
//   try {
//     const date = new Date(dateStr);

//     const months = [
//       'Jan',
//       'Feb',
//       'Mar',
//       'Apr',
//       'May',
//       'Jun',
//       'Jul',
//       'Aug',
//       'Sep',
//       'Oct',
//       'Nov',
//       'Dec',
//     ];

//     const day = String(date.getDate()).padStart(2, '0');
//     const month = months[date.getMonth()];
//     const year = date.getFullYear();

//     const formattedDate = `${day}-${month}-${year}`;
//     return formattedDate;
//   } catch (error) {
//     console.log('dateFormatWithoutTime error-------:', error.message);
//     return '00:00';
//   }
// };

// export const formatCurrentDate = () => {
//   try {
//     const months = [
//       'Jan',
//       'Feb',
//       'Mar',
//       'Apr',
//       'May',
//       'Jun',
//       'Jul',
//       'Aug',
//       'Sep',
//       'Oct',
//       'Nov',
//       'Dec',
//     ];
//     const now = new Date();

//     const day = String(now.getDate()).padStart(2, '0');
//     const month = months[now.getMonth()];
//     const year = now.getFullYear();
//     let hours = now.getHours();
//     const minutes = String(now.getMinutes()).padStart(2, '0');
//     const ampm = hours >= 12 ? 'PM' : 'AM';

//     hours = hours % 12;
//     hours = hours ? hours : 12; // the hour '0' should be '12'
//     const strTime = `${String(hours).padStart(2, '0')}:${minutes} ${ampm}`;

//     return `${day}-${month}-${year} ${strTime}`;
//   } catch (error) {
//     console.log('formatCurrentDate error-------:', error.message);
//     return '123456';
//   }
// };

// export const datePassAway = date => {
//   try {
//     // Convert the given date string to a Date object
//     const givenDate = new Date(date); // here date format is "// '2123-06-10T12:15:28.482Z';

//     // Get the current date and time
//     const currentDate = new Date();

//     // Check if the given date has passed
//     const hasPassed = currentDate > givenDate;

//     return hasPassed;
//   } catch (error) {
//     console.log('datePassAway error-------:', error.message);
//     return false;
//   }
// };

// export const getCurrentDateISO = () => {
//   try {
//     const now = new Date();
//     return now.toISOString();
//   } catch (error) {
//     console.log('getCurrentDateISO error-------:', error.message);
//   }
// };

// export const generateRandomNumber = () => {
//   try {
//     const randomNumber =
//       Math.floor(Math.random() * 27452635476) + 4752365476253;
//     return randomNumber;
//   } catch (error) {
//     console.log('generateRandomNumber error-------:', error.message);
//     return '123456';
//   }
// };

// export const getCurrentTimestamp = async () => {
//   try {
//     const currentTimestamp = Math.floor(Date.now() / 1000); // Convert from ms to seconds

//     console.log('Current Timestamp:', currentTimestamp);
//     return currentTimestamp;
//   } catch (error) {
//     console.log('getCurrentTimestamp error-------:', error.message);
//     return '123456';
//   }
// };

// export const generateSprintPayToken = async () => {
//   const url = 'http://localhost:8000/generate-token';

//   try {
//     const response = await fetch(url, {
//       method: 'GET',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     });

//     if (!response.ok) {
//       throw new Error(`Error: ${response.status} - ${response.statusText}`);
//     }

//     const result = await response.json();
//     const token = result.token;
//     console.log('Generated Token:', token);
//     return token;
//   } catch (error) {
//     console.error('Error Sprint Pay Token: ----', error.message);
//     throw error;
//   }
// };

// // Call the function

// export const triggerLocalNotification = data => {
//   try {
//     const notification = {
//       channelId: appName,
//       soundName: 'default',
//       number: 1,
//       // userInfo: {
//       //   Name: 'Pankaj Tomar',
//       //   type: 'User',
//       //   time: formatCurrentDate(),
//       // },
//       ...data,
//     };

//     console.log('local---', notification);

//     // PushNotification.localNotification(notification);
//     console.log('local');
//   } catch (error) {
//     console.log('error localNotification----', error.message);
//     // Alert.alert('Oops!', error.message);
//   }
// };

// export const timeAgo = inputDate => {
//   try {
//     const now = new Date();
//     const pastDate = new Date(inputDate);
//     const diffInSeconds = Math.floor((now - pastDate) / 1000);

//     const units = [
//       {name: 'yr', seconds: 31536000},
//       {name: 'mon', seconds: 2592000},
//       {name: 'week', seconds: 604800},
//       {name: 'day', seconds: 86400},
//       {name: 'hr', seconds: 3600},
//       {name: 'min', seconds: 60},
//       {name: 'sec', seconds: 1},
//     ];

//     for (const unit of units) {
//       const interval = Math.floor(diffInSeconds / unit.seconds);
//       if (interval > 0) {
//         return `${interval} ${unit.name}${interval !== 1 ? 's' : ''} ago`;
//       }
//     }

//     return 'just now';
//   } catch (error) {
//     console.log('catch Error---timeAgo----', error.message);
//     return 'E';
//   }
// };

// export const hideAccountNumber = accountNumber => {
//   try {
//     return (
//       accountNumber.slice(0, -4).replace(/./g, '*') + accountNumber.slice(-4)
//     );
//   } catch (error) {
//     console.log('hideAccountNumber error----', error.message);
//     return accountNumber;
//   }
// };

// // export const formatCurrency = (value, IS_USER_INDIAN) => {
// //   let locale = 'en-IN';
// //   let currency = 'INR';

// //   if (IS_USER_INDIAN) {
// //     locale = 'en-IN';
// //     currency = 'INR';
// //   } else {
// //     locale = 'en-ZA';
// //     currency = 'ZAR';
// //   }

// //   if (typeof value !== 'string' && typeof value !== 'number') {
// //     return {error: 'Invalid input type. Must be string or number.'};
// //   }

// //   const raw = value.toString().trim();

// //   // 🔹 Check if input is empty
// //   if (raw === '') {
// //     return {error: 'Please enter an amount.'};
// //   }

// //   // Validate characters
// //   const invalidChars = /[^0-9.]/g;
// //   const multipleDots = (raw.match(/\./g) || []).length > 1;

// //   if (invalidChars.test(raw)) {
// //     return {error: 'Only numbers and a single dot are allowed.'};
// //   }

// //   if (multipleDots) {
// //     return {error: 'Only one decimal point is allowed.'};
// //   }

// //   // Validate decimal digits
// //   const parts = raw.split('.');
// //   if (parts[1] && parts[1].length > 2) {
// //     return {error: 'Only two digits allowed after decimal.'};
// //   }

// //   // 🔹 Parse and check for NaN
// //   const numericValue = parseFloat(raw);
// //   if (isNaN(numericValue)) {
// //     return {error: 'Invalid amount. Please enter a valid number.'};
// //   }

// //   // Format using Intl
// //   const formatted = new Intl.NumberFormat(locale, {
// //     style: 'currency',
// //     currency,
// //     minimumFractionDigits: 2,
// //     maximumFractionDigits: 2,
// //   }).format(numericValue);

// //   return {value: formatted};
// // };

// export const formatCurrency = (value, IS_USER_INDIAN) => {
//   let locale = 'en-IN';
//   let currency = 'INR';

//   if (IS_USER_INDIAN) {
//     locale = 'en-IN';
//     currency = 'INR';
//   } else {
//     locale = 'en-ZA';
//     currency = 'ZAR';
//   }

//   if (typeof value !== 'string' && typeof value !== 'number') {
//     return {error: 'Invalid input type. Must be string or number.'};
//   }

//   const raw = value.toString().trim();

//   // 🔹 Check if input is empty
//   if (raw === '') {
//     return {error: 'Please enter an amount.'};
//   }

//   // Validate characters
//   const invalidChars = /[^0-9.-]/g;
//   const multipleDots = (raw.match(/\./g) || []).length > 1;
//   const multipleNegatives = (raw.match(/-/g) || []).length > 1;
//   const negativeNotAtStart = raw.indexOf('-') > 0;

//   if (invalidChars.test(raw)) {
//     return {
//       error:
//         'Only numbers, a single dot, and an optional leading minus are allowed.',
//     };
//   }

//   if (multipleDots) {
//     return {error: 'Only one decimal point is allowed.'};
//   }

//   if (multipleNegatives || negativeNotAtStart) {
//     return {error: 'Negative sign must be at the start and only once.'};
//   }

//   // Validate decimal digits
//   const parts = raw.replace('-', '').split('.');
//   if (parts[1] && parts[1].length > 2) {
//     return {error: 'Only two digits allowed after decimal.'};
//   }

//   // 🔹 Parse and check for NaN
//   const numericValue = parseFloat(raw);
//   if (isNaN(numericValue)) {
//     return {error: 'Invalid amount. Please enter a valid number.'};
//   }

//   // 🔹 Check for zero or negative values
//   if (numericValue <= 0) {
//     return {error: 'Amount must be greater than zero.'};
//   }

//   // Format using Intl
//   const formatted = new Intl.NumberFormat(locale, {
//     style: 'currency',
//     currency,
//     minimumFractionDigits: 2,
//     maximumFractionDigits: 2,
//   }).format(numericValue);

//   return {value: formatted};
// };

// export const formatPhoneNumber = (phone, countryCode) => {
//   try {
//     // 'IN'and ZA;
//     const cleaned = phone.replace(/\D/g, '');

//     switch (countryCode.toUpperCase()) {
//       case 'IN': // India: XXXXX-XXXXX
//         if (cleaned.length === 10) {
//           return `${cleaned.slice(0, 5)}-${cleaned.slice(5)}`;
//         } else if (cleaned.length === 12 && cleaned.startsWith('91')) {
//           return `${cleaned.slice(2, 7)}-${cleaned.slice(7)}`;
//         } else {
//           return 'Invalid Indian number';
//         }

//       case 'ZA': // South Africa: XX XXX XXXX
//         if (cleaned.length === 9) {
//           return `${cleaned.slice(0, 2)} ${cleaned.slice(2, 5)} ${cleaned.slice(
//             5,
//           )}`;
//         } else if (cleaned.length === 11 && cleaned.startsWith('27')) {
//           return `${cleaned.slice(2, 4)} ${cleaned.slice(4, 7)} ${cleaned.slice(
//             7,
//           )}`;
//         } else {
//           return 'Invalid South African number';
//         }

//       default:
//         return 'Unsupported country code';
//     }
//   } catch (error) {
//     console.error('Error formatting phone number:', error);
//     return 'Error formatting phone number';
//   }
// };
