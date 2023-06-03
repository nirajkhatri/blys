import {Toast} from '../utils';

const API_URL = 'http://10.0.2.2:8080/';

const useVerify = (navigation: any) => {
  const handleVerify = async (otp: string) => {
    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({verification_code: otp}),
      });
      const data = await response.json();

      if (response.status === 200) {
        return navigation.navigate('Success');
      }
      return Toast(data.message);
    } catch (err) {
      console.log(err, 'error');
    }
  };

  return {
    mutate: handleVerify,
  };
};

export default useVerify;
