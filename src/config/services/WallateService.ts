import trofiGateway from '@config/service';
import {endpoints} from '@config/serviceEndpoints';

export const userWalletService = (params: any) =>
  trofiGateway.get(endpoints.wallet, {params});
