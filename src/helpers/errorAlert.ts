import {updateAlert} from '@store/action/app-action';
import {AxiosResponse} from 'axios';
import {store} from '../store';

export default (res: AxiosResponse<any, any>) => {
  if (
    res.data?.message === 'session expired' ||
    res.data?.message === 'Invalid token' ||
    (res.data?.message === 'You have entered a wrong OTP' &&
      res.config.url === 'auth/verify-code')
  ) {
  } else if (!res.data?.success) {
    store.dispatch(
      updateAlert({
        success: false,
        title: 'Failed',
        message: res.data.message ?? 'An error occured',
      }) as any,
    );
  }
};
