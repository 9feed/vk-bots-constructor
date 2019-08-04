import { IHemeraPath } from '../../lib/hemera';
import { handlerDecorator } from '../../lib/decorators/handlerDecorator';
import { db } from '../database/client';
import { EnumTriggers } from '../interfaces';

export const path: IHemeraPath = {
  topic: 'events',
  cmd: 'createEvent',
};

export interface IParams {
  botId: string;
  trigger: EnumTriggers;
  message: string;
}

export interface IResponse {
  eventId: string;
}

export const handler = handlerDecorator(async (params: IParams): Promise<IResponse> => {
  const { eventId } = await db.events.create(params);

  return {
    eventId,
  };
});
