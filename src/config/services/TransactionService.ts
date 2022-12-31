import trofiGateway from '@config/service';
import {endpoints} from '@config/serviceEndpoints';

export const getTRSymbolsService = (params: any) =>
  trofiGateway.get(endpoints.listTokens, {params});
