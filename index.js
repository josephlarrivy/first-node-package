// const useLocalStorage = () => {

//   const localStoreToken = (token) => {
//       localStorage.setItem('token', token)
//   }

//   const localRemoveToken = () => {
//       localStorage.removeItem('token')
//   }

//   const localRetrieveToken = () => {
//       const token = localStorage.getItem('token')
//       return token
//   }

//   const localDecodeToken = async () => {
//     const storedToken = localStorage.getItem('token')
//     const decodedToken = await BackendApiRequest.decodeToken(storedToken)
//     if (decodedToken == 'invalid') {
//         return null;
//     } else {
//         return decodedToken;
//     }
//   }

//   return [localStoreToken, localRemoveToken, localRetrieveToken, localDecodeToken];
// };

// export default useLocalStorage;



const addAllNums = (numbers) => {
  let total = 0;

  for (let i=0; i<numbers.length; i++) {
    total += numbers[i]
  }
  return total
}

module.exports = addAllNums;